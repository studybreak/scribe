var thrift = require('thrift')
  , scribe = require('./scribe/gen-nodejs/scribe')
  , ttypes = require('./scribe/gen-nodejs/scribe_types')

exports.createClient = function(host, port) {
  var connction = exports.connection = 
      thrift.createConnection('localhost', 1463);
  return createClient(scribe, connection);
}

exports.closeConnection = function() {
    return exports.connection.end();
}
