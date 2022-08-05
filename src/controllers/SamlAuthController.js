

const axios = require('axios') ;

// const AppError = require('../utils/appError') ;

const saml = require('samlify');

exports.getMetaDataInfo = async (req, res, next) => {
      
    let idp ;
    const uri_forti_metadata = 'http://fac.eavsrl.it/saml-idp/v7e5xv5te453dv0x/metadata/' ;

    try {
        let response = await axios.get( uri_forti_metadata ) ;
        
        return res.status().json({
            ...response
        })
    }catch(err){
        return res.status().json({
            ...err
        }) ;
    }   
    //     if (response.data ) {                    
    //         return next(new AppError(200, 'getAllRecipient', 'recipients does not exist'));
    //     } else {
    //         return next(new AppError(403, 'getAllRecipient', 'recipients does not exist'));
    //     }
        
        
    //     idp = saml.IdentityProvider({
    //         metadata: response.data,
    //         isAssertionEncrypted: true,
    //         messageSigningOrder: 'encrypt-then-sign',
    //         wantLogoutRequestSigned: true
    //         }) ;            
            
    //         // console.log( idp ) ;
    //         // const sp = saml.ServiceProvider({
    //         //   entityID: 'http://localhost:3000/sso/metadata',
    //         // })
    // } catch(err) {
    //     console.log(err) ;
    // }           
    
    // return res.status(200).json({
    //     status : "success",
    //     idp: idp,
    // })
}