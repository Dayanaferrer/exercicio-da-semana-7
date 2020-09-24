const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.send ({
       titulo: "Os melhores filmes que já assistir",
       data: "23 de setembro de 2020"
    })

});

module.exports = router;