const express = require('express');
const router = express.Router();

const {
  setData,
  getCounts,
  getData,
  plusCounts,
} = require('../controllers/dataController');

router.get('/getdata', getData);
router.get('/getcounts', getCounts);
router.post('/pluscounts', plusCounts);
router.post('/setdata', setData);

module.exports = router;
