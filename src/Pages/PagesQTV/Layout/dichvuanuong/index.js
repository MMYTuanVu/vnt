import classNames from 'classnames/bind';
import styles from './index.module.scss';
import GetCookie from '~/components/hooks/Cookie/getCookie';
import HeadlessTippy from '@tippyjs/react/headless';
import { useRef, useState } from 'react';
import Body from './body';
import { faChevronRight, faChevronLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import SpanButton from '~/components/wrapper/button/ButtonSpan';
import RightButtonHeader from './RightButtonHeader';
const id_account = GetCookie('presence');
const ps = GetCookie('ps');
const cx = classNames.bind(styles);
function DichVuAnUong() {
  const [showLeft, setShowLeft] = useState(false);
  const [showName, setShowName] = useState(true);
  //body ref
  const bodyRefScroll = useRef();
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <div className={cx('left')}>
          <HeadlessTippy
            placement="bottom-start"
            interactive
            visible={showName === true}
            render={(attrs) => (
              <div style={{ display: 'flex', marginTop: '-6px', marginLeft: '-4px' }} tabIndex="-1" {...attrs}>
                <SpanButton title="Tên quán ăn" width="280px" height="22px" />
              </div>
            )}
          >
            <div style={{ display: 'flex', width: '60px', height: '24px' }}>
              <SpanButton onClick={() => setShowName(!showName)} square icons={faBars} width="60px" height="100%" />
            </div>
          </HeadlessTippy>
          {showLeft ? (
            <>
              <SpanButton
                onClick={() => {
                  bodyRefScroll.current.scrollTo({
                    left: 0,
                    behavior: 'smooth',
                  });
                }}
                square
                children="Giá cả"
                height="100%"
              />
              <SpanButton
                onClick={() => {
                  bodyRefScroll.current.scrollTo({
                    left: 1100,
                    behavior: 'smooth',
                  });
                }}
                square
                children="Địa Chỉ"
                height="100%"
              />
              <SpanButton
                onClick={() => {
                  bodyRefScroll.current.scrollTo({
                    left: 1100,
                    behavior: 'smooth',
                  });
                }}
                square
                children="Điện Thoại"
                height="100%"
              />
            </>
          ) : (
            <>
              <SpanButton
                onClick={() => {
                  bodyRefScroll.current.scrollTo({
                    left: 0,
                    behavior: 'smooth',
                  });
                }}
                square
                children="Về trang đầu"
                height="100%"
              />
              <SpanButton
                onClick={() => {
                  bodyRefScroll.current.scrollTo({
                    left: 1100,
                    behavior: 'smooth',
                  });
                }}
                square
                children="Về cuối"
                height="100%"
              />
            </>
          )}
          <SpanButton
            circle
            icons={!showLeft ? faChevronRight : faChevronLeft}
            width="27px"
            height="100%"
            onClick={() => setShowLeft(!showLeft)}
          />
        </div>
        <RightButtonHeader id_account={id_account} ps={ps} />
      </div>
      <Body id_account={id_account} ps={ps} showName={showName} bodyRefScroll={bodyRefScroll} />
    </div>
  );
}

export default DichVuAnUong;
