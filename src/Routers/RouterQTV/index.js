import DefaultLayout from '~/Pages/PagesQTV/DefaultLayout';
import NullLayout from '~/Pages/PagesQTV/DefaultLayout/NullLayout';
import Baogia from '~/Pages/PagesQTV/Layout/Baogia';
import Login from '~/Pages/PagesQTV/Layout/Login';
import LoginError from '~/Pages/PagesQTV/Layout/Login/loginErorr.js';
import MysqlAddData from '~/Pages/PagesQTV/Layout/mysqlAddData';
import NhaHang from '~/Pages/PagesQTV/Layout/nhaHang';
import Hotel from '~/Pages/PagesQTV/Layout/hotel';
import Golf from '~/Pages/PagesQTV/Layout/golf';
import DichVuAnUong from '~/Pages/PagesQTV/Layout/dichvuanuong';
import NhaXe from '~/Pages/PagesQTV/Layout/nhaXe';
import HDV from '~/Pages/PagesQTV/Layout/hdv';
import Test from './test';
import CreateHanhtrinh from '~/Pages/PagesQTV/Layout/createHanhTrinh';
export const RouterQTV = [
  //add mysql
  { component: MysqlAddData, path: 'add', layout: NullLayout },
  //login-account Admin
  { component: Login, path: 'login', layout: NullLayout },
  { component: LoginError, path: 'login/notAccount', layout: NullLayout },
  //Pages
  { component: Baogia, path: 'admin/baogia', layout: DefaultLayout },
  //nha_hang
  { component: NhaHang, path: 'admin/nha-hang', layout: DefaultLayout },
  //hotel
  { component: Hotel, path: 'admin/hotel', layout: DefaultLayout },
  //golf
  { component: Golf, path: 'admin/golf', layout: DefaultLayout },
  //dich vu an uong
  { component: DichVuAnUong, path: 'admin/dichvu-anuong', layout: DefaultLayout },
  //nha-xe
  { component: NhaXe, path: 'admin/nha-xe', layout: DefaultLayout },
  //huong dan vien
  { component: HDV, path: 'admin/hdv', layout: DefaultLayout },
  //testing
  { component: Test, path: 'admin/testing', layout: NullLayout },
  //huong tao hanh trinh
  { component: CreateHanhtrinh, path: 'admin/create-hanhtrinh', layout: DefaultLayout },
];
