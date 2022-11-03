import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import styles from './DefaultLayout.module.scss';
import Header from './Header';
import Sidebar from './Sidebar';
import GetCookie from '~/components/hooks/Cookie/getCookie.js';
import { SERVER_PORT } from '~/dotEnvClient.js';
const cx = classNames.bind(styles);
const id_account = GetCookie('presence');
const ps = GetCookie('ps');
const ActionCheckClient = `${SERVER_PORT}/admin/check_cookie/enable`;
function DefaultLayout({ children }) {
  const [ShowAllRequest, setShowAllRequest] = useState(false);
  const check_cookie = useRef();
  useEffect(() => {
    axios
      .get(`${SERVER_PORT}/admin/check/connect`, {
        params: {
          q: { id_account: id_account, ps: ps },
          type: 'less',
        },
      })
      .then((result) => {
        if (result.data === true) {
          setTimeout(() => {
            setShowAllRequest(true);
          }, 500);
        } else {
          check_cookie.current.submit();
        }
      });
  }, []);
  return (
    <div className={cx('wrapper')}>
      {!ShowAllRequest ? (
        <div className={cx('loading')}>
          <FontAwesomeIcon icon={faCircleNotch} className={cx('loading_icon')} />
        </div>
      ) : (
        <>
          <Header />
          <div className={cx('container')}>
            <Sidebar />
            <div className={cx('content', 'reset_content')}>{children}</div>
          </div>
        </>
      )}
      <form ref={check_cookie} action={ActionCheckClient} method="GET"></form>
    </div>
  );
}
export default DefaultLayout;
