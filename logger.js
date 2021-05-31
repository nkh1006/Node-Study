console.log(__filename);
console.log(__dirname);

var url = 'http://mylogger.io/log';

function log(message) {
    // Send an HTTP request
    console.log(message);
}

// single function
module.exports = log;

// multiful function
// module.exports.log = log;    