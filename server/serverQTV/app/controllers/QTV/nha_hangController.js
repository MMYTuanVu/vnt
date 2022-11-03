const Mysql = require('../../../mysql');
const dotenv = require('dotenv');
const Searchs = require('../../../components/hooks/search');
dotenv.config();
class Nha_HanglController {
  page(req, res) {
    const Page = JSON.parse(req.query.q).page;
    Mysql.query(`SELECT * FROM partner_companies.restaurant;`, (error, results) => {
      const NewResults = results.filter((result, index) => {
        return index <= Page * 32 - 1 && index >= Page * 32 - 32;
      });
      res.json({ pages: NewResults, allPages: Math.floor(results.length / 33 + 1) });
    });
  }
  edit(req, res) {
    switch (req.body.type) {
      case 'change':
        Mysql.query(
          `UPDATE partner_companies.restaurant SET name = '${req.body.datax.name}', china_name = '${req.body.datax.china_name}', email = '${req.body.datax.email}', address = '${req.body.datax.address}', phone = '${req.body.datax.phone}', gia_ngay_thuong = '${req.body.datax.gia_ngay_thuong}', gia_cuoi_tuan = '${req.body.datax.gia_cuoi_tuan}', gia_ngay_le = '${req.body.datax.gia_ngay_le}', vat = '${req.body.datax.vat}' WHERE (id_restaurant = '${req.body.id}');`,
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
    Mysql.query(
      `SELECT id_restaurant,name,email,address,img,gia_ngay_thuong,gia_cuoi_tuan,gia_ngay_le FROM partner_companies.restaurant;`,
      (error, results) => {
        const newArray = results.filter((init, index) => {
          return (
            Searchs.changeDefault(init.name, value, 'Nhà Hàng-Restaurant-ở-in') > -1 ||
            Searchs.changeDefault(init.address, value, 'Tại-Nhà Hàng- -ở') > -1 ||
            Searchs.changeDefault(init.address, value, 'địa chỉ-vcb-ở-chi nhánh') > -1 ||
            Searchs.changeDefault(init.email, value, 'Email-Gmail-là- ') > -1 ||
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
      },
    );
  }
}
module.exports = new Nha_HanglController();
