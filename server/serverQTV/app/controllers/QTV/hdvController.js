const Mysql = require('../../../mysql');
const dotenv = require('dotenv');
const Searchs = require('../../../components/hooks/search');
dotenv.config();
class HdvlController {
  page(req, res) {
    const Page = JSON.parse(req.query.q).page;
    Mysql.query(`SELECT * FROM partner_companies.hdv;`, (error, results) => {
      const NewResults = results.filter((result, index) => {
        return index <= Page * 15 - 1 && index >= Page * 15 - 15;
      });
      res.json({ pages: NewResults, allPages: Math.floor(results.length / 16 + 1) });
    });
  }
  edit(req, res) {
    switch (req.body.type) {
      case 'change':
        Mysql.query(
          `UPDATE partner_companies.hdv SET name = '${req.body.datax.name}', language = '${req.body.datax.language}', city = '${req.body.datax.city}', gia_ngay_thuong = '${req.body.datax.gia_ngay_thuong}',gia_ngay_le = '${req.body.datax.gia_ngay_le}', gia_cuoi_tuan = '${req.body.datax.gia_cuoi_tuan}', img = '${req.body.datax.img}' WHERE (id_hdv = '${req.body.id}');`,
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
          `DELETE FROM partner_companies.restaurant WHERE (id_restaurant = '${req.body.id}');`,
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
    Mysql.query(`SELECT * FROM partner_companies.hdv;`, (error, results) => {
      const newArray = results.filter((init, index) => {
        return (
          Searchs.changeDefault(init.city, value, 'Hướng dẫn viên-người-ở-miền') > -1 ||
          Searchs.changeDefault(init.city, value, 'người ở-người-miền-tỉnh') > -1 ||
          Searchs.changeDefault(init.name, value, 'tên- -là- ') > -1 ||
          Searchs.changeDefault(init.gia_ngay_thuong, value, 'giá ngày thường-ngày thường-là-là') > -1 ||
          Searchs.changeDefault(init.gia_ngay_le, value, 'giá ngày lễ-ngày lễ-là-có giá') > -1 ||
          Searchs.changeDefault(init.gia_cuoi_tuan, value, 'giá ngày cuối tuần-ngày cuối tuần-là-có giá') > -1 ||
          Searchs.changePrice(init.gia_ngay_thuong, value, 'giá ngày thường-là', 'k-m') > -1 ||
          Searchs.changePrice(init.gia_ngay_le, value, 'giá ngày lễ-là', 'k-m') > -1 ||
          Searchs.changePrice(init.gia_cuoi_tuan, value, 'giá cuối tuần-là', 'k-m') > -1 ||
          Searchs.changePrice(init.gia_cuoi_tuan, value, 'giá ngày cuối tuần-là', 'k-m') > -1
        );
      });
      res.json(newArray);
    });
  }
}
module.exports = new HdvlController();
