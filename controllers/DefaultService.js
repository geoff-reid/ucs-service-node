'use strict';

var request = require('request');
var parseString = require('xml2js').parseString;

exports.loginGET = function(args, res, next) {
    /**
    * parameters expected in the args:
    * host (String)
    * user (String)
    * password (String)
    **/
    // no response value expected for this operation
    var body_data = "<aaaLogin inName='" + args.user.value + "' inPassword='"+ args.password.value + "'></aaaLogin>";
    var url = 'http://' + args.host.value + '/nuova'

    request.post(url, {body: body_data}, function (error, response, body) {
        res.statusCode = response.statusCode;
        parseString(body, function (err, result) {
            //res.end(JSON.stringify(result));
            res.end(result.aaaLogin.$.outCookie);
        })
    });
}


