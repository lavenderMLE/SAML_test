
const SamlAuthController = require('../../controllers/SamlAuthController') ;


const express = require('express');

const router = express.Router() ;

router.get('/spinitsso-redirect', SamlAuthController.spinitRedirect );

router.post('/sp/acs', SamlAuthController.processAcs );
router.post('/sp/metadata', SamlAuthController.getMetaData );


module.exports = router ;


