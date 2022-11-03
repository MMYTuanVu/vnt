import Tippy from '@tippyjs/react/headless';
import SpanButton from '~/components/wrapper/button/ButtonSpan';
import styles from './index.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import PropOne from './PropOne';

const cx = classNames.bind(styles);
function TuyenDuong({ data }) {
  const tuyen_duong = JSON.parse(data.tuyen_duong);
  const [showTab, setShowTab] = useState(false);
  const [showActive, setShowActive] = useState('');
  return (
    <Tippy
      placement="bottom-end"
      interactive
      visible={showTab === true}
      onClickOutside={() => {
        setShowTab(false);
        setShowActive();
      }}
      render={(attrs) => (
        <div
          tabIndex="-1"
          {...attrs}
          className={cx('wrapper-tab')}
          style={{ border: '1px solid var(--border-color1)' }}
        >
          {tuyen_duong.map((dat, index) => (
            <PropOne data={dat} key={index} />
          ))}
        </div>
      )}
    >
      <div className={cx('wrapper')}>
        <SpanButton
          stickyleft
          backgroundColor="var(--backGround-color-light)"
          border
          title="Xem các tuyến đường"
          width="145px"
          height="23px"
          borderColor={showActive === data.id_nhaxe ? 'var(--default-color)' : 'var(--border-color1)'}
          fontSize={showActive === data.id_nhaxe ? '1.4rem' : '1.3rem'}
          color={showActive === data.id_nhaxe ? 'var(--default-color)' : 'var(--text-color-light)'}
          z_index="9"
          onClick={() => {
            setShowTab(true);
            setShowActive(data.id_nhaxe);
          }}
        />
      </div>
    </Tippy>
  );
}

export default TuyenDuong;
