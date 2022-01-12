var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', (req, res, next) => {
//   console.log('Phuong thuc get');
//   res.send('Phuong thuc get');
// });

router.use('/words', require ('./words'))

module.exports = router;
