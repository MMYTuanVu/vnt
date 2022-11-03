import classNames from 'classnames/bind';
import styles from './index.module.scss';
import Input from '~/components/wrapper/Input';
import { useState } from 'react';
const cx = classNames.bind(styles);
function Props({ data }) {
  const [value, setValue] = useState('');
  return (
    <div className={cx('container_input')}>
      {data.placeholder && (
        <Input
          placeholder={data.placeholder}
          name={data.name}
          styles={{ borderColor: value === '' && 'red' }}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
      {data.date && <input type="date" name={data.name} className={cx('container_input_date')} />}
    </div>
  );
}

export default Props;
