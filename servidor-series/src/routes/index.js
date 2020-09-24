const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.send({
        titulo: "Algumas Series Massa :D ",
        data: "23/09/2020"

    })
});

module.exports = router;
