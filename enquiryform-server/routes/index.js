var express = require('express');
var router = express.Router();
var enquiryService = require('../services/enquiryservices')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/enquiry', function (req, res, next) {

  const result = enquiryService.sumbit(req.body.name, req.body.phonenumber, req.body.email, req.body.message)

  if (result == 1) {

    res.send({ message: "message sent" })
  }

});

router.post('/history', function (req, res, next) {

  const result = enquiryService.getEnquiries(req.body.name, req.body.phonenumber, req.body.email, req.body.message)

  res.send(result);

  // if (result == 1) {

  //   res.send({ message: "message sent" })
  // }

});






module.exports = router;
