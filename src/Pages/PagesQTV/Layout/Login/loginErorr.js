import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import GetCookie from '~/components/hooks/Cookie/getCookie';
import SetCookie from '~/components/hooks/Cookie/setCookie';
import RemoveCookie from '~/components/hooks/Cookie/RemoveCookie';
import useDeboun from '~/components/hooks/useDeboun';
import styles from './Login.module.scss';
import { SERVER_PORT } from '~/dotEnvClient.js';
const cx = classNames.bind(styles);
let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
function Login() {
  //checkClient Cookie
  const check_cookie = useRef();
  const CookieClient = GetCookie('presence');
  if (CookieClient === undefined || CookieClient === 'notAccount') {
    SetCookie('presence', 'notAccount');
    RemoveCookie('rf');
    RemoveCookie('ps');
  } else {
    if (check_cookie.current != undefined) {
      check_cookie.current.submit();
    }
  }
  //PORT----
  const ActionCheckClient = `${SERVER_PORT}/admin/check_cookie/enable`;
  const AccountLoginCheck = `${SERVER_PORT}/admin/login`;
  //button Submit
  const formRef = useRef();
  const [classButton, setClassButton] = useState(cx('button-btn'));
  const [enableSubmit, setEnableSubmit] = useState(false);
  const handleClickSubmit = () => {
    if (!enableSubmit) {
      formRef.current.addEventListener('submit', (e) => {
        e.preventDefault();
      });
    } else {
      formRef.current.submit();
    }
  };
  //email-----
  const [classEmail, setClassEmail] = useState(cx('input'));
  const emailRef = useRef();
  const [emails, setEmail] = useState('');
  const email = useDeboun(emails, 500);
  const [ErrorEmail, setErrorEmail] = useState('error_email');
  //password----
  const [classPassword, setClassPassword] = useState(cx('input'));
  const passwordRed = useRef();
  const [passwords, setPassword] = useState('');
  const password = useDeboun(passwords, 500);
  const [ErrorPassword, setErrorPassword] = useState('');
  useEffect(() => {
    if (regex.test(email)) {
      setClassEmail(cx('input', 'enable'));
      setErrorEmail('');
    } else {
      setClassEmail(cx('input', 'disabled'));
      setErrorEmail('error_email');
    }
    if (regex.test(email) && password.length >= 7) {
      setClassButton(cx('button-btn', 'active'));
      setEnableSubmit(true);
    } else if (!regex.test(email) || password.length < 7) {
      setClassButton(cx('button-btn', 'disabled'));
      setEnableSubmit(false);
    }
  }, [email]);
  useEffect(() => {
    if (password.length >= 7) {
      setClassPassword(cx('input', 'enable'));
      setErrorPassword('');
    } else {
      setClassPassword(cx('input', 'disabled'));
      setErrorPassword('error_password');
    }
    if (regex.test(email) && password.length >= 7) {
      setClassButton(cx('button-btn', 'active'));
      setEnableSubmit(true);
    } else if (!regex.test(email) || password.length < 7) {
      setClassButton(cx('button-btn', 'disabled'));
      setEnableSubmit(false);
    }
  }, [password]);
  //error Message
  const [errorMessage, setErrorMessage] = useState('');
  return (
    <>
      <form ref={check_cookie} action={ActionCheckClient} method="GET"></form>
      <form className={cx('wrapper', 'tablet', 'mobile')} ref={formRef} action={AccountLoginCheck} method="POST">
        <div className={cx('title')}>
          <span className={cx('title-span')}>Login Admin</span>
          <span className={cx('title-span_error', errorMessage)}>Bạn nhập sai Email hoặc Mật khẩu</span>
        </div>
        <div className={cx('inputs')}>
          <div className={cx('input_div')}>
            <span>Email</span>
            <input
              onClick={() => {
                setErrorMessage('block');
              }}
              name="email"
              value={emails}
              className={classEmail}
              onChange={(event) => {
                const checkEmail = event.target.value;
                if (!checkEmail.startsWith(' ') || checkEmail.trim()) {
                  setEmail(checkEmail);
                }
              }}
              ref={emailRef}
            />
            <span className={cx('error', ErrorEmail)}>Email không hợp lệ</span>
          </div>
          <div className={cx('input_div')}>
            <span>Password</span>
            <input
              name="password"
              value={passwords}
              type="password"
              className={classPassword}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              onClick={() => {
                setErrorMessage('block');
              }}
              ref={passwordRed}
            />
            <span className={cx('error', ErrorPassword)}>Password không hợp lệ</span>
          </div>
        </div>
        <div className={cx('button')}>
          <button onClick={handleClickSubmit} className={classButton}>
            Login
          </button>
        </div>
        <div className={cx('bottom')}>
          <Link to="/" className={cx('bottom-link', 'fogot_infomation')}>
            Quên mật khẩu
          </Link>
          <Link to="/" className={cx('bottom-link', 'fogot_infomation')}>
            Đăng nhập với SMS
          </Link>
        </div>
      </form>
    </>
  );
}
export default Login;
