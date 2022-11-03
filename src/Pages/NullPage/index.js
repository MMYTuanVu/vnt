import axios from 'axios';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
import qs from 'qs';
const cx = classNames.bind(styles);
function NullPage() {
  return <div className={cx('wrapper')}></div>;
}

export default NullPage;
