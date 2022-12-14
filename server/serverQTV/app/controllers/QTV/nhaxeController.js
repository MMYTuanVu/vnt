const Mysql = require('../../../mysql');
const dotenv = require('dotenv');
const Searchs = require('../../../components/hooks/search');
dotenv.config();
class NhaxeController {
  page(req, res, next) {
    const Page = JSON.parse(req.query.q).page;
    Mysql.query(`SELECT * FROM partner_companies.nha_xe;`, (error, results) => {
      const NewResults = results.filter((result, index) => {
        return index <= Page * 32 - 1 && index >= Page * 32 - 32;
      });
      res.json({ pages: NewResults, allPages: Math.floor(results.length / 33 + 2) });
    });
  }
  edit(req, res) {
    switch (req.body.type) {
      case 'change':
        Mysql.query(
          `UPDATE partner_companies.golf SET name = '${req.body.datax.name}',city = '${req.body.datax.city}', china_name = '${req.body.datax.china_name}',phone = '${req.body.datax.phone}',address = '${req.body.datax.address}',note = '${req.body.datax.note}', email = '${req.body.datax.email}',website = '${req.body.datax.website}', gia_ngay_thuong = '${req.body.datax.gia_ngay_thuong}',gia_ngay_le = '${req.body.datax.gia_ngay_le}',img = '${req.body.datax.img}', thue_xe = '${req.body.datax.thue_xe}',tren_10khach = '${req.body.datax.tren_10khach}' WHERE (id_golf = '${req.body.id}');`,
          (error, results) => {
            if (error) {
              res.json(false);
            } else {
              res.json(true);
            }
          },
        );
        break;
      case 'delete':
        Mysql.query(`DELETE FROM partner_companies.golf WHERE (id_golf = '${req.body.id}');`, (error, results) => {
          if (error) {
            res.json(false);
          } else {
            res.json(true);
          }
        });
        break;
    }
  }
  search(req, res) {
    const value = JSON.parse(req.query.q).value;
    Mysql.query(
      `SELECT id_golf,name,city,phone,address,gia_ngay_thuong,gia_ngay_le,img FROM partner_companies.golf;`,
      (error, results) => {
        const newArray = results.filter((init, index) => {
          return (
            Searchs.changeDefault(init.name, value, 'S??n Golf-golf-???-in') > -1 ||
            Searchs.changeDefault(init.address, value, 's??n golf-?????a ch??? s??n golf-???-???') > -1 ||
            Searchs.changeDefault(init.address, value, '?????a ch???-?????a ch??? s??n golf-???-???') > -1 ||
            Searchs.changeDefault(init.city, value, 'S??n Golf-golf-???-in') > -1 ||
            Searchs.changeDefault(init.city, value, 's??n golf-?????a ch??? s??n golf-???-???') > -1 ||
            Searchs.changeDefault(init.gia_ngay_thuong, value, 'gi?? ng??y th?????ng-ng??y th?????ng-l??-l??') > -1 ||
            Searchs.changeDefault(init.gia_ngay_le, value, 'gi?? ng??y l???-ng??y l???-l??-c?? gi??') > -1 ||
            Searchs.changePrice(init.gia_ngay_thuong, value, 'gi?? ng??y th?????ng-l??', 'k-m') > -1 ||
            Searchs.changePrice(init.gia_ngay_le, value, 'gi?? ng??y l???-l??', 'k-m') > -1 ||
            Searchs.changePrice(init.gia_ngay_thuong, value, 'gi?? s??n golf', 'k-m') > -1 ||
            Searchs.changePrice(init.gia_ngay_le, value, 'gi?? s??n golf ng??y l???', 'k-m') > -1 ||
            Searchs.changePrice(init.gia_ngay_thuong, value, 'gi?? s??n golf ng??y th?????ng', 'k-m') > -1 ||
            Searchs.changePrice(init.gia_ngay_le, value, 'gi?? s??n golf ng??y l??? l??', 'k-m') > -1 ||
            Searchs.changePrice(init.gia_ngay_thuong, value, 'gi?? s??n golf ng??y th?????ng l??', 'k-m') > -1 ||
            Searchs.changePrice(init.gia_ngay_le, value, 'ng??y l???', 'k-m') > -1 ||
            Searchs.changePrice(init.gia_ngay_thuong, value, 'ng??y th?????ng', 'k-m') > -1
          );
        });
        res.json(newArray);
      },
    );
  }
  test(req, res) {
    Mysql.query(`SELECT * FROM partner_companies.nha_xe;`, (error, results) => {
      const data = results[0].tuyen_duong;
      res.json(JSON.stringify(data));
    });
  }
}
module.exports = new NhaxeController();
