import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './Header.module.scss';
import {} from '@fortawesome/free-regular-svg-icons';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Inbox, MessengerIcon } from '~/assets/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import { SERVER_PORT } from '~/dotEnvClient.js';
const cx = classNames.bind(styles);
const SERVER_PORT_IMG = `${SERVER_PORT}/static/Images/soi.jpg`;
function Header() {
  const [Theme, setTheme] = useState('light');
  return (
    <div className={cx('wrapper', Theme)}>
      <div className={cx('search', 'search_reset', Theme)}>
        <div className={cx('input', Theme)}>
          <input className={cx('inputs', Theme)} placeholder="Tìm kiếm ..." />
        </div>
        <button className={cx('button', Theme)}>
          <FontAwesomeIcon icon={faSearch} className={cx('button_icon', Theme)} />
        </button>
      </div>
      <div className={cx('profile', 'profile_mobile', Theme)}>
        <Tippy content="Inbox" placement="bottom">
          <div className={cx('profile_notification', Theme)}>
            <Inbox width="3.1rem" height="3.1rem" styles={{ color: '#000' }} />
          </div>
        </Tippy>
        <Tippy content="Messages" placement="bottom">
          <div className={cx('profile_notification', Theme)}>
            <MessengerIcon width="2.3rem" height="2.3rem" styles={{ color: '#000' }} />
          </div>
        </Tippy>
        <div className={cx('profile_avatar', Theme)}>
          <img src={SERVER_PORT_IMG} className={cx('profile_avatar_img', Theme)} />
        </div>
      </div>
    </div>
  );
}

export default Header;
