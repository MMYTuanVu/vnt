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
  const [dataStart, setDataStart] = useState(data.start);
  const [dataCity, setDataCity] = useState(data.city);
  const [dataRooms, setDataRooms] = useState(data.rooms);
  const [dataWebsite, setDataWebsite] = useState(data.website);
  const [dataAddress, setDataAddress] = useState(data.address);
  const [dataPrice1, setDataPrice1] = useState(data.gia_ngay_thuong);
  const [dataPrice2, setDataPrice2] = useState(data.gia_cuoi_tuan);
  const [dataPrice3, setDataPrice3] = useState(data.gia_ngay_le);
  const [dataTren10, setDataTren10] = useState(data.tren_10khach);
  const [dataVAT, setDataVAT] = useState(data.vat);
  const [dataImg, setDataImg] = useState(data.img);
  const handleOneChange = () => {
    const datax = {
      name: dataName,
      china_name: dataNameChina,
      email: dataEmail,
      start: dataStart,
      city: dataCity,
      rooms: dataRooms,
      website: dataWebsite,
      address: dataAddress,
      gia_ngay_thuong: dataPrice1,
      gia_cuoi_tuan: dataPrice2,
      gia_ngay_le: dataPrice3,
      tren_10khach: dataTren10,
      vat: dataVAT,
      img: dataImg,
    };
    axios
      .post(`${SERVER_PORT}/admin/hotel/edit/children`, {
        ps,
        id_account,
        id: data.id_hotel,
        datax,
        type: 'change',
      })
      .then((res) => {
        if (res.data) {
          axios
            .get(`${SERVER_PORT}/admin/hotel/allpages`, {
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
      .post(`${SERVER_PORT}/admin/hotel/edit/children`, {
        ps,
        id_account,
        id: data.id_hotel,
        type: 'delete',
      })
      .then((res) => {
        if (res.data) {
          axios
            .get(`${SERVER_PORT}/admin/hotel/allpages`, {
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
        <span className={cx('header_span')}>Thông Tin Khách Sạn</span>
      </div>
      <div className={cx('body')}>
        <div className={cx('children')}>
          <span className={cx('span')}>Tên Khách Sạn</span>
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
          <span className={cx('span')}>Địa chỉ</span>
          <div className={cx('childrens')}>
            <Input placeholder="Nhập tên..." value={dataAddress} onChange={(e) => setDataAddress(e.target.value)} />
          </div>
        </div>
        <div className={cx('children')}>
          <span className={cx('span')}>Email</span>
          <div className={cx('childrens')}>
            <Input placeholder="Nhập tên..." value={dataEmail} onChange={(e) => setDataEmail(e.target.value)} />
          </div>
        </div>
        <div className={cx('children')}>
          <span className={cx('span')}>Số Sao</span>
          <div className={cx('childrens')}>
            <Input placeholder="Nhập tên..." value={dataStart} onChange={(e) => setDataStart(e.target.value)} />
          </div>
        </div>
        <div className={cx('children')}>
          <span className={cx('span')}>Thành Phố</span>
          <div className={cx('childrens')}>
            <Input placeholder="Nhập tên..." value={dataCity} onChange={(e) => setDataCity(e.target.value)} />
          </div>
        </div>
        <div className={cx('children')}>
          <span className={cx('span')}>Số Phòng</span>
          <div className={cx('childrens')}>
            <Input placeholder="Nhập tên..." value={dataRooms} onChange={(e) => setDataRooms(e.target.value)} />
          </div>
        </div>
        <div className={cx('children')}>
          <span className={cx('span')}>WebSite</span>
          <div className={cx('childrens')}>
            <Input placeholder="Nhập tên..." value={dataWebsite} onChange={(e) => setDataWebsite(e.target.value)} />
          </div>
        </div>

        <div className={cx('children')}>
          <span className={cx('span')}>Giá Ngày Thường</span>
          <div className={cx('childrens')}>
            <Input placeholder="Nhập tên..." value={dataPrice1} onChange={(e) => setDataPrice1(e.target.value)} />
          </div>
        </div>
        <div className={cx('children')}>
          <span className={cx('span')}>Giá Cuối Tuần</span>
          <div className={cx('childrens')}>
            <Input placeholder="Nhập tên..." value={dataPrice2} onChange={(e) => setDataPrice2(e.target.value)} />
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
          <span className={cx('span')}>VAT</span>
          <div className={cx('childrens')}>
            <Input placeholder="Nhập tên..." value={dataVAT} onChange={(e) => setDataVAT(e.target.value)} />
          </div>
        </div>
        <div className={cx('children')}>
          <span className={cx('span')}>Image</span>
          <div className={cx('childrens')}>
            <Input placeholder="Nhập tên..." value={dataImg} onChange={(e) => setDataImg(e.target.value)} />
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
