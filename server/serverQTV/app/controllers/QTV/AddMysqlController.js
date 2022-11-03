const Mysql = require('../../../mysql');
const md5 = require('md5');
const dotenv = require('dotenv');
dotenv.config();
const CleanCookie = (res, process) => {
  RemoveCookie(res, 'rf', 'mt', 'ps', 'presence');
  setCookieClient(res, 'presence', 'notAccount');
  res.redirect(`${process.env.HOSTING_CLIENT}/login/notAccount`);
};
class AddMysqlController {
  hotel(req, res, next) {
    switch (req.body.nameData) {
      case 'hotel':
        const dt = req.body.data.split('swap');
        const newdata = dt.reduce((init, dtt) => {
          const data = dtt.split('	');
          const email = data[16].split('"').length > 1 ? data[16].split('"')[1] : data[16].split('"')[0];
          const phone_number = data[13].split('"').length > 1 ? data[13].split('"')[1] : data[13].split('"')[0];
          const room_rating = data[12].split('"').length > 1 ? data[12].split('"')[1] : data[12].split('"')[0];
          const web_site = data[14].split('"').length > 1 ? data[14].split('"')[1] : data[14].split('"')[0];
          const china_name = data[5].split('"').length > 1 ? data[5].split('"')[1] : data[5].split('"')[0];
          const address = data[15].split('"').length > 1 ? data[15].split('"')[1] : data[15].split('"')[0];
          const renovate = data[3].split('"').length > 1 ? data[3].split('"')[1] : data[3].split('"')[0];
          const id_hotel = md5(`${data[0]}${email}${data[5]}${data[11]}`);
          const newDatas = `INSERT INTO partner_companies.hotel (id_hotel, name, start, city, renovate, rooms, china_name, git_number, cod, extra_bed, triple, vat, twn_fit_vndt, room_rating, phone_number, web_site, address, email, country) VALUES ('${id_hotel}', '${data[0]}', '${data[1]}', '${data[2]}', '${renovate}', '${data[4]}', '${china_name}', '${data[6]}', '${data[7]}', '${data[8]}', '${data[9]}', '${data[10]}', '${data[11]}', '${room_rating}', '${phone_number}', '${web_site}','${address}', '${email}', '${data[17]}');`;
          return init + newDatas;
        }, []);
        res.json(newdata.trim(''));
        break;
      case 'golf':
        const dtx = req.body.data.split('swap');
        const newdatax = dtx.reduce((init, dtt) => {
          const data = dtt.split('	');
          const email = data[2].split('"').length > 1 ? data[2].split('"')[1] : data[2].split('"')[0];
          const mobile = data[12].split('"').length > 1 ? data[12].split('"')[1] : data[12].split('"')[0];
          const web_site = data[3].split('"').length > 1 ? data[3].split('"')[1] : data[3].split('"')[0];
          const staff_golf = data[10].split('"').length > 1 ? data[10].split('"')[1] : data[10].split('"')[0];
          const id_golf = md5(`${data[0]}${email}${data[1]}`);
          const newDatas = `INSERT INTO partner_companies.golf (id_golf, name, email, web_site, city, vat, price1, price2, price3, price4, staff_golf, phone_number, mobile, address, node, country, name_china) VALUES ('${id_golf}', '${data[0]}', '${data[1]}', '${email}', '${web_site}', '${data[4]}', '${data[5]}', '${data[6]}', '${data[7]}', '${data[8]}', '${data[9]}', '${staff_golf}', '${data[11]}', '${mobile}', '${data[13]}', '${data[14]}','${data[15]}');`;
          return init + newDatas;
        }, []);
        res.json(newdatax);
        break;
    }
  }
}
module.exports = new AddMysqlController();
