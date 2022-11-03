import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
import SpanButton from '~/components/wrapper/button/ButtonSpan';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import SearchInput from './SearchInput';
import Input from '~/components/wrapper/Input';
const cx = classNames.bind(styles);
function RightButtonHeader({ id_account, ps }) {
  const [showRight, setShowRight] = useState(false);
  return (
    <Tippy
      onClickOutside={() => setShowRight(false)}
      placement="bottom-end"
      interactive
      visible={showRight}
      render={(attrs) => (
        <div className={cx('right_nab')} tabIndex="-1" {...attrs}>
          <SearchInput id_account={id_account} ps={ps} />
          <div className={cx('hotel_country')}>
            <span className={cx('hotel_country_span')}>HDV Theo khu vực</span>
            <div className={cx('hotel_country_body')}>
              <SpanButton children="Miền Bắc" square width="70px" height="22px" fontSize="1.3rem" />
              <SpanButton children="Miền Trung" square width="75px" height="22px" fontSize="1.3rem" />
              <SpanButton children="Miền Nam" square width="75px" height="22px" fontSize="1.3rem" />
              <SpanButton children="Khác" square width="40px" height="22px" fontSize="1.3rem" />
            </div>
          </div>
          <div className={cx('hotel_pressent')}>
            <span className={cx('hotel_pressent_span')}>HDV đang làm</span>
            <SpanButton children="Xem HDV" square width="100px" height="22px" fontSize="1.3rem" />
          </div>
          <div className={cx('hotel_pressent')}>
            <span className={cx('hotel_pressent_span')}>HDV đã làm</span>
            <SpanButton children="Xem HDV" square width="100px" height="22px" fontSize="1.3rem" />
          </div>
          <div className={cx('hotel_pressent')}>
            <span className={cx('hotel_pressent_span')}>Thùng rác</span>
            <SpanButton children="Xem Thùng rác" square width="100px" height="22px" fontSize="1.3rem" />
          </div>
          <div className={cx('hotel_pages')}>
            <span className={cx('hotel_pages_span')}>Chọn trang</span>
            <div className={cx('hotel_pages_body')}>
              <div className={cx('hotel_pages_input')}>
                <Input placeholder="nhập trang..." />
              </div>
              <SpanButton square children="Chọn" width="50px" height="25px" />
            </div>
          </div>
        </div>
      )}
    >
      <div className={cx('wrapper')}>
        <SpanButton icons={faBars} width="80px" height="22px" square onClick={() => setShowRight(!showRight)} />
      </div>
    </Tippy>
  );
}

export default RightButtonHeader;
