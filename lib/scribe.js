var thrift = require('thrift')
  , scribe = require('./gen-nodejs/scribe');

exports.ttypes = require('./gen-nodejs/scribe_types');

exports.createClient = function(host, port) {
  var connection = exports.connection = 
      thrift.createConnection('localhost', 1463);
  return thrift.createClient(scribe, connection);
}

exports.closeConnection = function() {
    return exports.connection.end();
}
