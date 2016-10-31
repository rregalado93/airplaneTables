var mongoose = require('mongoose');
var Flap = mongoose.model('Flaps');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.FlapsReadOne = function(req, res) {
  console.log('Finding Flaps Table details', req.params.flapsid);
  if (req.params && req.params.flapsid) {
    Flap
      .findById(req.params.flapsid)
      .exec(function(err, flapsdata) {
        if (!flapsdata) {
          sendJSONresponse(res, 404, {
            "message": "flapsid not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(flapsdata);
        sendJSONresponse(res, 200, flapsdata);
      });
  } else {
    console.log('No flapsid specified');
    sendJSONresponse(res, 404, {
      "message": "No flapsid in request"
    });
  }
};
