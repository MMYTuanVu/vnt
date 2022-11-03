const loginRouter = require('./login.js');
const baogiaRouter = require('./baogia.js');
const checkPage = require('./checkPages.js');
const addMysql = require('./addDataMysql.js');
const hotel = require('./hotel.js');
const golf = require('./golf.js');
const nhaHang = require('./nha_hang.js');
const dichVuAnUong = require('./dichVuAnUong.js');
const nhaXe = require('./nhaXe.js');
const hdv = require('./hdv.js');
const test = require('./test.js');
const createHanhtrinh = require('./createHanhtrinh.js');

function router(app) {
  app.use('/admin', loginRouter);
  app.use('/admin', baogiaRouter);
  app.use('/admin', checkPage);
  app.use('/admin', addMysql);
  app.use('/admin', hotel);
  app.use('/admin', golf);
  app.use('/admin', nhaHang);
  app.use('/admin', dichVuAnUong);
  app.use('/admin', nhaXe);
  app.use('/admin', hdv);
  app.use('/admin', test);
  app.use('/admin', createHanhtrinh);
}
module.exports = router;
