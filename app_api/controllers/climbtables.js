var mongoose = require('mongoose');
var Climb = mongoose.model('Climb');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

/* GET a Climb Setting by the id */
module.exports.ClimbReadOne = function(req, res) {
  console.log('Finding Climbing Table details', req.params.climbid);
  if (req.params && req.params.climbid) {
    Climb
      .findById(req.params.climbid)
      .exec(function(err, climbdata) {
        if (!climbdata) {
          console.log(climbdata);
          sendJSONresponse(res, 404, {
            "message": "climbid not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(climbdata);
        sendJSONresponse(res, 200, climbdata);
      });
  } else {
    console.log('No climbid specified');
    sendJSONresponse(res, 404, {
      "message": "No climbid in request"
    });
  }
};
