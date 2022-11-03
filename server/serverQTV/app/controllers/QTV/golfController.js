const Mysql = require('../../../mysql');
const dotenv = require('dotenv');
const Searchs = require('../../../components/hooks/search');
dotenv.config();
class GolfController {
  page(req, res, next) {
    const Page = JSON.parse(req.query.q).page;
    Mysql.query(`SELECT * FROM partner_companies.golf;`, (error, results) => {
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
            Searchs.changeDefault(init.name, value, 'Sân Golf-golf-ở-in') > -1 ||
            Searchs.changeDefault(init.address, value, 'sân golf-địa chỉ sân golf-ở-ở') > -1 ||
            Searchs.changeDefault(init.address, value, 'địa chỉ-địa chỉ sân golf-ở-ở') > -1 ||
            Searchs.changeDefault(init.city, value, 'Sân Golf-golf-ở-in') > -1 ||
            Searchs.changeDefault(init.city, value, 'sân golf-địa chỉ sân golf-ở-ở') > -1 ||
            Searchs.changeDefault(init.gia_ngay_thuong, value, 'giá ngày thường-ngày thường-là-là') > -1 ||
            Searchs.changeDefault(init.gia_ngay_le, value, 'giá ngày lễ-ngày lễ-là-có giá') > -1 ||
            Searchs.changePrice(init.gia_ngay_thuong, value, 'giá ngày thường-là', 'k-m') > -1 ||
            Searchs.changePrice(init.gia_ngay_le, value, 'giá ngày lễ-là', 'k-m') > -1 ||
            Searchs.changePrice(init.gia_ngay_thuong, value, 'giá sân golf', 'k-m') > -1 ||
            Searchs.changePrice(init.gia_ngay_le, value, 'giá sân golf ngày lễ', 'k-m') > -1 ||
            Searchs.changePrice(init.gia_ngay_thuong, value, 'giá sân golf ngày thường', 'k-m') > -1 ||
            Searchs.changePrice(init.gia_ngay_le, value, 'giá sân golf ngày lễ là', 'k-m') > -1 ||
            Searchs.changePrice(init.gia_ngay_thuong, value, 'giá sân golf ngày thường là', 'k-m') > -1 ||
            Searchs.changePrice(init.gia_ngay_le, value, 'ngày lễ', 'k-m') > -1 ||
            Searchs.changePrice(init.gia_ngay_thuong, value, 'ngày thường', 'k-m') > -1
          );
        });
        res.json(newArray);
      },
    );
  }
}
module.exports = new GolfController();
