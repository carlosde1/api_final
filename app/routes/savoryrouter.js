const express = require('express');
const router = express.Router();
const savoryController = require('../controller/savoryController');

router.get('/', (req, res) => {
    res.send('Ruta de savory funcionando');
});

module.exports=router;