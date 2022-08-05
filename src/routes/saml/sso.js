
const SamlAuthController = require('../../controllers/SamlAuthController') ;


const express = require('express');

const router = express.Router() ;

router.get('/metadata', SamlAuthController.getMetaDataInfo );

module.exports = router ;


