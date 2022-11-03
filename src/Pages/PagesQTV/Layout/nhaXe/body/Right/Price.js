import classNames from 'classnames/bind';
import styles from './index.module.scss';
import Input from '~/components/wrapper/Input';
import { useState } from 'react';
const cx = classNames.bind(styles);
function Price({ data }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <span className={cx('row_children_input')} onClick={() => setShow(true)}>
        <textarea className={cx('row_children_inputs')} value={data.tuyen} onChange={() => {}} />
      </span>
      {show && (
        <div className={cx('row_price')}>
          <div className={cx('row_price_row')}>
            <span className={cx('row_price_span')}>2Car 35 Seat</span>
            <span className={cx('row_price_input')}>
              <Input placeholder="Edit..." value={data.price['2Car_35_Seat']} onChange={() => {}} />
            </span>
          </div>
          <div className={cx('row_price_row')}>
            <span className={cx('row_price_span')}>2Car 45 Seat</span>
            <span className={cx('row_price_input')}>
              <Input placeholder="Edit..." value={data.price['2Car_45_Seat']} onChange={() => {}} />
            </span>
          </div>
          <div className={cx('row_price_row')}>
            <span className={cx('row_price_span')}>3Car 45 Seat</span>
            <span className={cx('row_price_input')}>
              <Input placeholder="Edit..." value={data.price['3Car_45_Seat']} onChange={() => {}} />
            </span>
          </div>
          <div className={cx('row_price_row')}>
            <span className={cx('row_price_span')}>45 SEAT</span>
            <span className={cx('row_price_input')}>
              <Input placeholder="Edit..." value={data.price['45_SEAT']} onChange={() => {}} />
            </span>
          </div>
          <div className={cx('row_price_row')}>
            <span className={cx('row_price_span')}>U45 SEAT</span>
            <span className={cx('row_price_input')}>
              <Input placeholder="Edit..." value={data.price['U45_SEAT']} onChange={() => {}} />
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default Price;
