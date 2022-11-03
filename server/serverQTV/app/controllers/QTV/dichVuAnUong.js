const Mysql = require('../../../mysql');
const dotenv = require('dotenv');
const Searchs = require('../../../components/hooks/search');
dotenv.config();
class DichVuAnUong {
  page(req, res, next) {
    const Page = JSON.parse(req.query.q).page;
    Mysql.query(`SELECT * FROM partner_companies.dichvu_an_uong;`, (error, results) => {
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
          `UPDATE partner_companies.dichvu_an_uong SET name = '${req.body.datax.name}',city = '${req.body.datax.city}', china_name = '${req.body.datax.china_name}',note = '${req.body.datax.note}',gia_ngay_thuong = '${req.body.datax.gia_ngay_thuong}',gia_ngay_le = '${req.body.datax.gia_ngay_le}', img = '${req.body.datax.img}' WHERE (id_dichvu_au = '${req.body.id}');`,
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
        Mysql.query(
          `DELETE FROM partner_companies.dichvu_an_uong WHERE (id_dichvu_au = '${req.body.id}');`,
          (error, results) => {
            if (error) {
              res.json(false);
            } else {
              res.json(true);
            }
          },
        );
        break;
    }
  }
  search(req, res) {
    const value = JSON.parse(req.query.q).value;
    Mysql.query(
      `SELECT id_dichvu_au,name,city,gia_ngay_thuong,gia_ngay_le,img FROM partner_companies.dichvu_an_uong;`,
      (error, results) => {
        const newArray = results.filter((init, index) => {
          return (
            Searchs.changeDefault(init.name, value, 'quán ăn-quán-ở-ở') > -1 ||
            Searchs.changeDefault(init.name, value, 'địa chỉ quán-địa chỉ quán-ở-ở') > -1 ||
            Searchs.changeDefault(init.city, value, 'quán-quán ăn-ở-ở') > -1 ||
            Searchs.changeDefault(init.city, value, 'địa chỉ quán ăn-địa chỉ quán-ở-ở') > -1 ||
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
module.exports = new DichVuAnUong();
