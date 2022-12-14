const axios = require('axios') ;

const AppError = require('../utils/appError') ;

const saml = require('samlify');

 
let idp ;
let sp ;

const getMetaDataInfo = async ( req, res, next ) => {
      
    const uri_forti_metadata = 'http://fac.eavsrl.it/saml-idp/v7e5xv5te453dv0x/metadata/' ;
           
    try {
        let response = await axios.get( uri_forti_metadata ) ;
                    
        if (response.data ) { 
            idp = saml.IdentityProvider({
                metadata: response.data,
                wantLogoutRequestSigned: false,
                singleSignOnService: 'https://fac.eavsrl.it/saml-idp/portal/'
                }) ;            
            sp = saml.ServiceProvider({
                entityID: 'https://samltestforti.herokuapp.com/sso/sp/metadata',                
                assertionConsumerService: [{
                    Binding: saml.Constants.namespace.binding.post,
                    Location: 'https://samltestforti.herokuapp.com/sso/sp/acs',
                }]
            })            
            
        } else {
            return next(new AppError(403, 'false', response.data ));
        }                        
    } catch(err) {
        return res.status(500).json({
            status: 'failed',
        }) ;
    }               
}

exports.spinitRedirect = async ( req, res, next ) => {
    await getMetaDataInfo( req, res, next ) ;
    const { id, context } = await sp.createLoginRequest( idp, 'redirect' ) ;
    
    return res.redirect( context ) ;
}

exports.processAcs = async ( req, res ) => {
    try {
        
        const [ extract ] = await sp.parseLoginResponse( idp, 'post', req ) ;
        
    } catch(e) {        
        return res.redirect('/') ;        
    }
}

exports.getMetaData = ( req, res ) => {
    res.header( 'content-Type', 'text/xml' ).send( idp.getMetadata() ) ;
}


// https://fac.eavsrl.it/saml-idp/portal/




