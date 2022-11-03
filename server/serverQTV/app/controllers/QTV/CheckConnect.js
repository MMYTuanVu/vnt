const Mysql = require('../../../mysql');
const md5 = require('md5');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config();
class CheckConnect {
  checkLink(req, res, next) {
    const data = JSON.parse(req.query.q);
    Mysql.query(
      `SELECT key_present FROM tuanvu.account_admin where id_admin = '${data.id_account}'`,
      (error, results, fields) => {
        if (results.length != 0) {
          const key_present = results[0].key_present;
          if (md5(key_present) === data.ps) {
            next();
          } else {
            res.json(false);
          }
        } else {
          res.json(false);
        }
      },
    );
  }
  LinkConnect(req, res, next) {
    const data = JSON.parse(req.query.q);
    Mysql.query(
      `SELECT key_present,key_refresh,email,password FROM tuanvu.account_admin where id_admin = '${data.id_account}'`,
      (error, results, fields) => {
        const key_present = results[0].key_present;
        jwt.verify(key_present, process.env.ACCCESS_TOKEN, (err, decoded) => {
          if (err) {
            res.json(false);
          } else {
            const email = decoded.email;
            const password = decoded.password;
            if (email === results[0].email && password === results[0].password) {
              next();
            } else {
              res.json(false);
            }
          }
        });
      },
    );
  }
  PostCheckLink(req, res, next) {
    const data = req.body;
    Mysql.query(
      `SELECT key_present FROM tuanvu.account_admin where id_admin = '${data.id_account}'`,
      (error, results, fields) => {
        if (results.length != 0) {
          const key_present = results[0].key_present;
          if (md5(key_present) === data.ps) {
            next();
          } else {
            res.json(false);
          }
        } else {
          res.json(false);
        }
      },
    );
  }
  PostLinkConnect(req, res, next) {
    const data = req.body;
    Mysql.query(
      `SELECT key_present,key_refresh,email,password FROM tuanvu.account_admin where id_admin = '${data.id_account}'`,
      (error, results, fields) => {
        const key_present = results[0].key_present;
        jwt.verify(key_present, process.env.ACCCESS_TOKEN, (err, decoded) => {
          if (err) {
            res.json(false);
          } else {
            const email = decoded.email;
            const password = decoded.password;
            if (email === results[0].email && password === results[0].password) {
              next();
            } else {
              res.json(false);
            }
          }
        });
      },
    );
  }
  connectPages(req, res) {
    res.json(true);
  }
}
module.exports = new CheckConnect();
