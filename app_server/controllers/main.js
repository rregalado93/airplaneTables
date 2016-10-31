
var request = require('request');
var apiOptions = {
  server : "https://airplanetables-rregalado.c9users.io/"
};
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = "https://getting-mean-loc8r.herokuapp.com";
}



/* GET 'home' page */
/*
module.exports.climblist = function(req, res){
  var requestOptions, path;
  path = '/api/climbtables';
  requestOptions = {
    url : apiOptions.server + path,
    method : "GET",
    json : {}
    

  };
  request(
    requestOptions,
    function(err, response, body) {
      var i, data;
      renderHomepage(req, res, body);
    }
  );
};

//
/* GET home page */
module.exports.climbtable = function(req, res, responseBody){
  var message;
  if (!(responseBody instanceof Array)) {
    message = "API lookup error";
    responseBody = [];
  } else {
    if (!responseBody.length) {
      message = "No Climbing info found";
    }
  }
  res.render('climbtable-list', {
    title: 'climbTable',
    airplaneTables: responseBody,
    message: message
  });
};