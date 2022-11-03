import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
import SpanButton from '~/components/wrapper/button/ButtonSpan';
import Input from '~/components/wrapper/Input';
import Price from './Price';
const cx = classNames.bind(styles);
function Body({ data, setShowRight }) {
  const id = data.id_nhaxe;
  const tuyenDuong = JSON.parse(data.tuyen_duong);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <SpanButton children="Đóng" square width="120px" height="25px" onClick={() => setShowRight(false)} />
        <span className={cx('header_span')}>Thông Tin Nhà Xe</span>
      </div>
      <div className={cx('container')}>
        <div className={cx('row')}>
          <span className={cx('name_span')}>Tên nhà xe</span>
          <span className={cx('input')}>
            <Input placeholder="Thay đổi tên nhà xe..." />
          </span>
        </div>
        <div className={cx('row')}>
          <span className={cx('name_span')}>Vùng Miền</span>
          <span className={cx('input')}>
            <Input placeholder="Thay đổi vùng miền..." />
          </span>
        </div>
        <div className={cx('row')}>
          <span className={cx('name_span')}>IMG</span>
          <span className={cx('input')}>
            <Input placeholder="Thay đổi img..." />
          </span>
        </div>
        <div className={cx('row', 'tuyenduong')}>
          <span className={cx('name_span')}>Các Tuyến Đường</span>
          {tuyenDuong.map((td, index) => {
            return (
              <div className={cx('row_children')} key={index}>
                <span className={cx('row_children_span')}>Tên Hành Trình</span>
                <Price data={td} />
              </div>
            );
          })}
        </div>
      </div>
      <div className={cx('end')}>
        <SpanButton children="Lưu Chỉnh Sửa" square height="25px" width="150px" />
        <SpanButton children="Xóa" square height="25px" width="50px" backgroundColor="var(--primary-color)" />
      </div>
    </div>
  );
}

export default Body;
