import styles from './index.module.scss';
import { useState } from 'react';
import classNames from 'classnames/bind';
import SpanButton from '~/components/wrapper/button/ButtonSpan';
const cx = classNames.bind(styles);

function PropOne({ data }) {
  //show button
  const [showButton, setShowButton] = useState(false);
  return (
    <>
      <textarea onClick={() => setShowButton(true)} className={cx('row')} value={data.tuyen} onChange={() => {}} />
      {showButton && (
        <div className={cx('parent_price')}>
          <div className={cx('sheet')}>
            <span className={cx('header_spans')}>2Car 35 Seat</span>
            <span className={cx('header_spans')}>2Car 45 Seat</span>
            <span className={cx('header_spans')}>3Car 45 Seat</span>
            <span className={cx('header_spans')}>45 SEAT</span>
            <span className={cx('header_spans')}>U45 SEAT</span>
          </div>
          <div className={cx('sheet')}>
            <span className={cx('header_span')}>{data.price['2Car_35_Seat']}</span>
            <span className={cx('header_span')}>{data.price['2Car_45_Seat']}</span>
            <span className={cx('header_span')}>{data.price['3Car_45_Seat']}</span>
            <span className={cx('header_span')}>{data.price['45_SEAT']}</span>
            <span className={cx('header_span')}>{data.price['U45_SEAT']}</span>
          </div>
          <div className={cx('sheet')}>
            <SpanButton
              children="Đóng Chi Tiết Giá"
              square
              width="200px"
              height="22px"
              backgroundColor="var(--border-color1)"
              onClick={() => setShowButton(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default PropOne;
