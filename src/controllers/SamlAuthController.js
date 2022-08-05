

const axios = require('axios') ;
const { errorMonitor } = require('multer-gridfs-storage');

const AppError = require('../utils/appError') ;

const saml = require('samlify');


exports.getMetaDataInfo = async (req, res, next) => {
      
    let idp ;
    const uri_forti_metadata = 'http://fac.eavsrl.it/saml-idp/v7e5xv5te453dv0x/metadata/' ;
    // const uri_forti_metadata = 'https://esaml2.onelogin.com/trust/saml2/http-post/sso/487043' ;
           
    try {
        let response = await axios.get( uri_forti_metadata ) ;
        console.log( response ) ;
                    
        if (response.data ) { 
            return next(new AppError(200, 'ok', response.data ));
        } else {
            return next(new AppError(403, 'false', response.data ));
        }
        
        
        // idp = saml.IdentityProvider({
        //     metadata: response.data,
        //     isAssertionEncrypted: true,
        //     messageSigningOrder: 'encrypt-then-sign',
        //     wantLogoutRequestSigned: true
        //     }) ;            
            
            // console.log( idp ) ;
            // const sp = saml.ServiceProvider({
            //   entityID: 'http://localhost:3000/sso/metadata',
            // })
    } catch(err) {
        return res.status(500).json({
            status: 'failed',
        })
    }           
    
    // return res.status(200).json({
    //     status : "success",
    //     // idp: idp,
    // })
}