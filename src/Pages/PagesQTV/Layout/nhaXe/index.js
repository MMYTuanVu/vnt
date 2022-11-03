import { faBars, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { useState } from 'react';
import SpanButton from '~/components/wrapper/button/ButtonSpan';
import styles from './index.module.scss';
import Body from './body';
import GetCookie from '~/components/hooks/Cookie/getCookie';
const id_account = GetCookie('presence');
const ps = GetCookie('ps');
const cx = classNames.bind(styles);
function NhaXe() {
  //show name
  const [showName, setShowName] = useState(true);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <div className={cx('left')}>
          <SpanButton
            square
            width="60px"
            height="25px"
            icons={showName ? faChevronLeft : faChevronRight}
            onClick={() => setShowName(!showName)}
          />
          <SpanButton square width="60px" height="25px" children="về đầu" fontSize="1.4rem" />
          <span className={cx('left_span')}>Thông tin nhà xe</span>
        </div>
        <div className={cx('right')}>
          <SpanButton square width="60px" height="25px" icons={faBars} />
        </div>
      </div>
      <Body id_account={id_account} ps={ps} showName={showName} />
    </div>
  );
}

export default NhaXe;
