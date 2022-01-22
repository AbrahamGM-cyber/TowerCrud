var express = require('express');
var router = express.Router();

const FormularioController = require('../Controllers/FormularioController');
/* GET home page. */
router.get('/', FormularioController.list);

router.post('/add', FormularioController.save);

router.get('/delete/:id', FormularioController.delete);

router.get('/update/:id', FormularioController.edit);

router.post('/update/:id', FormularioController.update);

router.post('/update_status/:id', FormularioController.update_status);

module.exports = router;
