var express = require('express');
var router = express.Router();
var ctrlClimbTables = require('../controllers/climbtables');
var ctrlLandTables = require('../controllers/landtables');
var ctrlFlapsTables = require('../controllers/flapstables');


router.get('/climbtables/:climbid', ctrlClimbTables.ClimbReadOne);
router.get('/flapstables/:flapsid', ctrlFlapsTables.FlapsReadOne);
router.get('/landtables/:landingid', ctrlLandTables.LandingReadOne);

module.exports = router;