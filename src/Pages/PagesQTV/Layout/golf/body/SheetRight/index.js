import styles from './index.module.scss';
import classNames from 'classnames/bind';
import SpanButton from '~/components/wrapper/button/ButtonSpan';
import Input from '~/components/wrapper/Input';
import { useState } from 'react';
import axios from 'axios';
import { SERVER_PORT } from '~/dotEnvClient';
import Tippy from '@tippyjs/react/headless';
import DivProps from '~/components/wrapper/divProp';
const cx = classNames.bind(styles);

function SheetRight({ curentPages, data, setShowTippyName, id_account, ps, setData }) {
  //onChane data
  const [dataName, setDataName] = useState(data.name);
  const [dataNameChina, setDataNameChina] = useState(data.china_name);
  const [dataEmail, setDataEmail] = useState(data.email);
  const [dataPhone, setDataPhone] = useState(data.phone);
  const [dataAddress, setDataAddress] = useState(data.address);
  const [dataPrice1, setDataPrice1] = useState(data.gia_ngay_thuong);
  const [dataPrice3, setDataPrice3] = useState(data.gia_ngay_le);
  const [dataVAT, setDataVAT] = useState(data.vat);
  const [dataCity, setDataCity] = useState(data.city);
  const [dataWeb, setDataWeb] = useState(data.website);
  const [datanote, setDatanote] = useState(data.note);
  const [dataTren10, setDataTren10] = useState(data.tren_10khach);
  const [dataThueXe, setDataThueXe] = useState(data.thue_xe);
  const handleOneChange = () => {
    const datax = {
      thue_xe: dataThueXe,
      tren_10khach: dataTren10,
      note: datanote,
      website: dataWeb,
      city: dataCity,
      name: dataName,
      china_name: dataNameChina,
      email: dataEmail,
      phone: dataPhone,
      address: dataAddress,
      gia_ngay_thuong: dataPrice1,
      gia_ngay_le: dataPrice3,
      vat: dataVAT,
    };
    axios
      .post(`${SERVER_PORT}/admin/golf/edit/children`, {
        ps,
        id_account,
        id: data.id_golf,
        datax,
        type: 'change',
      })
      .then((res) => {
        if (res.data) {
          axios
            .get(`${SERVER_PORT}/admin/golf/allpages`, {
              params: {
                q: { id_account, ps, page: curentPages },
                type: 'less',
              },
            })
            .then((result) => {
              setData(result.data.pages);
            });
        }
      });
  };
  const handleOneDelete = () => {
    axios
      .post(`${SERVER_PORT}/admin/golf/edit/children`, {
        ps,
        id_account,
        id: data.id_golf,
        type: 'delete',
      })
      .then((res) => {
        if (res.data) {
          axios
            .get(`${SERVER_PORT}/admin/golf/allpages`, {
              params: {
                q: { id_account, ps, page: curentPages },
                type: 'less',
              },
            })
            .then((result) => {
              setData(result.data.pages);
              setShowTippyName(false);
            });
        }
      });
  };
  //delete row
  const [showDeleteRow, setShowDeleteRow] = useState(false);
  return (
    <>
      <div className={cx('header')}>
        <div className={cx('header_button')}>
          <SpanButton square width="180px" height="28px" children="Đóng TAB" onClick={() => setShowTippyName(false)} />
        </div>
        <span className={cx('header_span')}>Thông Tin Sân Golf</span>
      </div>
      <div className={cx('body')}>
        <div className={cx('children')}>
          <span className={cx('span')}>Tên Sân Golf</span>
          <div className={cx('childrens')}>
            <Input placeholder="Nhập tên..." value={dataName} onChange={(e) => setDataName(e.target.value)} />
          </div>
        </div>
        <div className={cx('children')}>
          <span className={cx('span')}>Tên Trung Quốc</span>
          <div className={cx('childrens')}>
            <Input placeholder="Nhập tên..." value={dataNameChina} onChange={(e) => setDataNameChina(e.target.value)} />
          </div>
        </div>
        <div className={cx('children')}>
          <span className={cx('span')}>Thành Phố</span>
          <div className={cx('childrens')}>
            <Input placeholder="Nhập tên..." value={dataCity} onChange={(e) => setDataCity(e.target.value)} />
          </div>
        </div>
        <div className={cx('children')}>
          <span className={cx('span')}>Địa chỉ</span>
          <div className={cx('childrens')}>
            <Input placeholder="Nhập tên..." value={dataAddress} onChange={(e) => setDataAddress(e.target.value)} />
          </div>
        </div>
        <div className={cx('children')}>
          <span className={cx('span')}>Số Điện Thoại</span>
          <div className={cx('childrens')}>
            <Input placeholder="Nhập tên..." value={dataPhone} onChange={(e) => setDataPhone(e.target.value)} />
          </div>
        </div>
        <div className={cx('children')}>
          <span className={cx('span')}>Email</span>
          <div className={cx('childrens')}>
            <Input placeholder="Nhập tên..." value={dataEmail} onChange={(e) => setDataEmail(e.target.value)} />
          </div>
        </div>
        <div className={cx('children')}>
          <span className={cx('span')}>WebSite</span>
          <div className={cx('childrens')}>
            <Input placeholder="Nhập tên..." value={dataWeb} onChange={(e) => setDataWeb(e.target.value)} />
          </div>
        </div>
        <div className={cx('children')}>
          <span className={cx('span')}>Ghi Chú</span>
          <div className={cx('childrens')}>
            <Input placeholder="Nhập tên..." value={datanote} onChange={(e) => setDatanote(e.target.value)} />
          </div>
        </div>
        <div className={cx('children')}>
          <span className={cx('span')}>Giá Ngày Thường</span>
          <div className={cx('childrens')}>
            <Input placeholder="Nhập tên..." value={dataPrice1} onChange={(e) => setDataPrice1(e.target.value)} />
          </div>
        </div>
        <div className={cx('children')}>
          <span className={cx('span')}>Giá Ngày Lễ</span>
          <div className={cx('childrens')}>
            <Input placeholder="Nhập tên..." value={dataPrice3} onChange={(e) => setDataPrice3(e.target.value)} />
          </div>
        </div>
        <div className={cx('children')}>
          <span className={cx('span')}>Giá Trên 10 Khách</span>
          <div className={cx('childrens')}>
            <Input placeholder="Nhập tên..." value={dataTren10} onChange={(e) => setDataTren10(e.target.value)} />
          </div>
        </div>
        <div className={cx('children')}>
          <span className={cx('span')}>Giá Thuê Xe</span>
          <div className={cx('childrens')}>
            <Input placeholder="Nhập tên..." value={dataThueXe} onChange={(e) => setDataThueXe(e.target.value)} />
          </div>
        </div>
      </div>
      <div className={cx('end')}>
        <SpanButton children="Lưu Chỉnh Sửa" width="180px" height="30px" square onClick={handleOneChange} />
        <Tippy
          onClickOutside={() => setShowDeleteRow(false)}
          placement="top-start"
          interactive
          visible={showDeleteRow === true}
          render={(attrs) => (
            <div className={cx('show_tab')} tabIndex="-1" {...attrs}>
              <DivProps alignItems="center" justifyContent="center" backgroundColor="var(--backGround-color-light)">
                <SpanButton
                  square
                  children="Tôi Chắc !"
                  width="100px"
                  height="30px"
                  backgroundColor="var(--primary-color)"
                  onClick={handleOneDelete}
                  fontSize="1.5rem"
                  fontWeight="600"
                  color="var( --colo-fff)"
                />
                <SpanButton
                  square
                  children="Xem Lại Đã ..."
                  width="100px"
                  height="30px"
                  onClick={() => setShowDeleteRow(false)}
                />
              </DivProps>
            </div>
          )}
        >
          <div>
            <SpanButton
              onClick={() => setShowDeleteRow(true)}
              square
              children="Xóa Nhà Hàng"
              width="110px"
              height="30px"
              backgroundColor="var(--primary-color)"
              color="var( --colo-fff)"
            />
          </div>
        </Tippy>
      </div>
    </>
  );
}

export default SheetRight;
