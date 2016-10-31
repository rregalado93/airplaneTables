var mongoose = require('mongoose');
var Land = mongoose.model('Landing');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.LandingReadOne = function(req, res) {
  console.log('Finding Landing Table details', req.params.landingid);
  if (req.params && req.params.landingid) {
    Land
      .findById(req.params.landingid)
      .exec(function(err, landingdata) {
        if (!landingdata) {
          sendJSONresponse(res, 404, {
            "message": "ladingid not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(landingdata);
        sendJSONresponse(res, 200, landingdata);
      });
  } else {
    console.log('No landingid specified');
    sendJSONresponse(res, 404, {
      "message": "No landingid in request"
    });
  }
};