const express = require ('express');
const router = express.Router();
const controller = require('../controller/seriesController')

router.get("/", controller.getAll);
router.get("/filmes", controller.getAll);

module.exports = router;

