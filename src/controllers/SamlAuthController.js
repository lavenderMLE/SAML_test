

const axios = require('axios') ;
const { errorMonitor } = require('multer-gridfs-storage');

const AppError = require('../utils/appError') ;

const saml = require('samlify');


exports.getMetaDataInfo = async (req, res, next) => {
      
    let idp ;
    const uri_forti_metadata = 'https://app.onelogin.com/saml/metadata/487043' ;

    
    // axios.get(uri_forti_metadata).then(function(data){
    //     res.status(200).json({ data : data});
    // })
    // .catch(function(error){
    //     res.status(500).send(error) ;
    // })    
        
    
    try {
        let response = await axios.get( uri_forti_metadata ) ;
                    
        if (response.data ) { 
            return next(new AppError(200, 'getAllRecipient', response.data ));
        } else {
            return next(new AppError(403, 'getAllRecipient', response.data ));
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