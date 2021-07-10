const connection = require('./index')

const queryExampleFn = (cb) => {
  connection.query(
    ``,
    [],
    (err, results) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, results);
      }
    })
};

module.exports = {
  queryExampleFn
};
