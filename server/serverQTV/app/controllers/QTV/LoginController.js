//mysql db connected
const Mysql = require('../../../mysql');
const md5 = require('md5');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const setCookieClient = require('../../cookies/setCookieClient.js');
const setCookieServer = require('../../cookies/setCookieServer.js');
const RemoveCookie = require('../../cookies/removeCookie.js');
dotenv.config();
const CleanCookie = (res, process) => {
  RemoveCookie(res, 'rf', 'mt', 'ps', 'presence');
  setCookieClient(res, 'presence', 'notAccount');
  res.redirect(`${process.env.HOSTING_CLIENT}/login/notAccount`);
};
class LoginController {
  checkClientCookie(req, res, next) {
    const presence = req.cookies.presence;
    const ps = req.cookies.ps;
    const rf = req.cookies.rf;
    Mysql.query(
      `SELECT key_present,key_refresh,id_admin FROM tuanvu.account_admin where id_admin = '${presence}'`,
      (error, results) => {
        if (results.length === 1) {
          if (md5(results[0].key_present) === ps && md5(results[0].key_refresh) === rf) {
            next();
          } else {
            CleanCookie(res, process);
          }
        } else if (results.length === 0) {
          CleanCookie(res, process);
        }
      },
    );
  }
  checkTokenKey(req, res, next) {
    const presence = req.cookies.presence;
    Mysql.query(
      `SELECT key_present,key_refresh,email,password FROM tuanvu.account_admin where id_admin = '${presence}'`,
      (error, results, fields) => {
        const key_present = results[0].key_present;
        const key_refresh = results[0].key_refresh;
        jwt.verify(key_present, process.env.ACCCESS_TOKEN, (err, decoded) => {
          if (err) {
            jwt.verify(key_refresh, process.env.REFRESH_TOKEN, (err, decoded) => {
              if (err) {
                CleanCookie(res, process);
              } else {
                const email = decoded.email;
                const password = decoded.password;
                if (email === results[0].email && password === results[0].password) {
                  const ResetData = {
                    email: results[0].email,
                    password: results[0].password,
                  };
                  const presentToken = jwt.sign(ResetData, process.env.ACCCESS_TOKEN, { expiresIn: '12h' });
                  Mysql.query(
                    `UPDATE tuanvu.account_admin SET key_present = '${presentToken}' WHERE (id_admin = '${presence}');`,
                    (err) => {},
                  );
                  setCookieClient(res, 'ps', md5(`${presentToken}`));
                  res.redirect(`${process.env.HOSTING_CLIENT}/admin/baogia`);
                } else {
                  CleanCookie(res, process);
                }
              }
            });
          } else {
            const email = decoded.email;
            const password = decoded.password;
            if (email === results[0].email && password === results[0].password) {
              res.redirect(`${process.env.HOSTING_CLIENT}/admin/baogia`);
            } else {
              CleanCookie(res, process);
            }
          }
        });
      },
    );
  }
  checkAcount(req, res, next) {
    const id_admin = md5(`@@${req.body.email.split('@')[0]}`);
    const password = md5(`@${req.body.password.split('@')[0]}`);
    Mysql.query(
      `SELECT key_present,id_admin,key_password FROM tuanvu.account_admin where id_admin = '${id_admin}'`,
      (error, results) => {
        if (password === results[0].key_password) {
          const present_key = jwt.sign(req.body, process.env.ACCCESS_TOKEN, { expiresIn: '12h' });
          const refresh_key = jwt.sign(req.body, process.env.REFRESH_TOKEN, { expiresIn: '72h' });
          setCookieClient(res, 'presence', `${id_admin}`);
          setCookieServer(res, 'rf', `${md5(`${refresh_key}`)}`);
          setCookieClient(res, 'ps', `${md5(`${present_key}`)}`);
          Mysql.query(
            `UPDATE tuanvu.account_admin SET key_present = '${present_key}', key_refresh = '${refresh_key}' WHERE (id_admin = '${id_admin}')`,
            (error, results) => {
              if (error) {
                res.status(399);
              }
            },
          );
          res.redirect(`${process.env.HOSTING_CLIENT}/admin/baogia`);
        } else {
          CleanCookie(res, process);
        }
      },
    );
  }
  checkAccountSV(req, res, next) {
    const id_admin = md5(`@@${req.body.email.split('@')[0]}`);
    Mysql.query(`SELECT id_admin FROM tuanvu.account_admin where id_admin = '${id_admin}'`, (error, results) => {
      if (error) {
        res.status(399);
      }
      if (results.length === 1) {
        next();
      } else {
        CleanCookie(res, process);
      }
    });
  }
}
module.exports = new LoginController();
