const dotenv = require('dotenv');
dotenv.config();
class Test {
  test(req, res) {
    const x = req.headers;
    res.json(x);
  }
}
module.exports = new Test();
