'use strict';

let moment = require('moment');

module.exports.submit = (event, context, callback) => {

  let ageCalcRequest = event.queryStringParameters;
  let dob = ageCalcRequest.dob;
  

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      age: moment().diff(moment(dob, 'YYYYMMDD'), 'years')
    }),
  };

  callback(null, response);

};
