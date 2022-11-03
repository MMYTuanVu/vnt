const Mysql = require('../../../mysql');
const dotenv = require('dotenv');
const Searchs = require('../../../components/hooks/search');
dotenv.config();
class HotelController {
  page(req, res, next) {
    const Page = JSON.parse(req.query.q).page;
    Mysql.query(`SELECT * FROM partner_companies.hotel;`, (error, results) => {
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
          `UPDATE partner_companies.hotel SET name = '${req.body.datax.name}', china_name = '${req.body.datax.china_name}', email = '${req.body.datax.email}', start = '${req.body.datax.start}', city = '${req.body.datax.city}', rooms = '${req.body.datax.rooms}', website = '${req.body.datax.website}', address = '${req.body.datax.address}',gia_cuoi_tuan = '${req.body.datax.gia_cuoi_tuan}',tren_10khach = '${req.body.datax.tren_10khach}',vat = '${req.body.datax.vat}',img = '${req.body.datax.img}',gia_ngay_le = '${req.body.datax.gia_ngay_le}', gia_ngay_thuong = '${req.body.datax.gia_ngay_thuong}' WHERE (id_hotel = '${req.body.id}');`,
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
        Mysql.query(`DELETE FROM partner_companies.hotel WHERE (id_hotel = '${req.body.id}');`, (error, results) => {
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
      `SELECT id_hotel,name,start,city,rooms,address,gia_ngay_thuong,gia_ngay_le,gia_cuoi_tuan,img FROM partner_companies.hotel;`,
      (error, results) => {
        const newArray = results.filter((init, index) => {
          return (
            Searchs.changeDefault(init.name, value, 'khách sạn-hotel-ở-in') > -1 ||
            Searchs.changeDefault(init.address, value, 'khách sạn-địa chỉ khách sạn-ở-ở') > -1 ||
            Searchs.changeDefault(init.address, value, 'địa chỉ-địa chỉ khách sạn-ở-ở') > -1 ||
            Searchs.changeDefault(init.city, value, 'khách sạn-khách sạn-ở- ') > -1 ||
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
module.exports = new HotelController();
