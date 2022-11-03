import axios from 'axios';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
import { SERVER_PORT, CLIENT_PORT } from '~/dotEnvClient.js';
import { useEffect, useRef, useState } from 'react';
const cx = classNames.bind(styles);

function Hotel() {
  const [data, setData] = useState('');
  const handleClickSubmit = () => {
    axios
      .post(`${SERVER_PORT}/admin/add`, {
        nameData: 'golf',
        data: data,
      })
      .then((results) => {
        console.log(results.data);
      });
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('select')}>
        <div className={cx('select_spans')}>
          <span className={cx('select_spans')}>Hotel</span>
        </div>
        <div className={cx('select_ul')}>
          <span className={cx('select_li')}>hotel</span>
          <span className={cx('select_li')}>golf</span>
          <span className={cx('select_li')}>nhahang</span>
        </div>
      </div>
      <div className={cx('inputs')}>
        <textarea className={cx('input')} value={data} onChange={(e) => setData(e.target.value)} />
      </div>
      <button className={cx('button')} onClick={handleClickSubmit}>
        Add Mysql
      </button>
    </div>
  );
}
export default Hotel;
