import classNames from 'classnames/bind';
import SpanButton from '~/components/wrapper/button/ButtonSpan';
import styles from './index.module.scss';
import { SERVER_PORT } from '~/dotEnvClient';
import { useRef } from 'react';
import Props from './prop';
const datas = [
  {
    title: 'Tên Hành Trình :',
    name: 'name',
    placeholder: 'Tên Hành Trình...',
  },
  {
    title: 'Số ngày :',
    name: 'daytime',
    placeholder: 'Nhập số ngày...',
  },
  {
    title: 'Số đêm :',
    name: 'night',
    placeholder: 'Nhập Số đêm...',
  },
  {
    title: 'Số người :',
    name: 'people',
    placeholder: 'Nhập Số người...',
  },
  {
    title: 'bắt đầu từ ngày :',
    name: 'firstDay',
    date: true,
  },
  {
    title: 'ngày cuối cùng :',
    name: 'lastDay',
    date: true,
  },
];

const cx = classNames.bind(styles);
function CreateHanhtrinh() {
  const linkAction = `${SERVER_PORT}/admin/create-hanh-trinh/one-page`;
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <SpanButton children="Về Quản Lý Hành Trình" square width="200px" height="22px" />
        <span className={cx('header_span')}>Tạo Hành trình</span>
      </div>
      <form className={cx('container')} method="POST" action={linkAction}>
        <div className={cx('container_body')}>
          {datas.map((data, index) => (
            <div className={cx('container_row')} key={index}>
              <span className={cx('container_span')}>{data.title}</span>
              <Props data={data} />
            </div>
          ))}
        </div>
        <button className={cx('container_end')}>Tạo Hành Trình</button>
      </form>
    </div>
  );
}

export default CreateHanhtrinh;
