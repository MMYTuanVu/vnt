import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
const cx = classNames.bind(styles);
function NullLayout({ children }) {
  return <div className={cx('wrapper_null')}>{children}</div>;
}

export default NullLayout;
