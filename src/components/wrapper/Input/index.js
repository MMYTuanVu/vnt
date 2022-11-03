import classNames from 'classnames/bind';
import styles from './index.module.scss';
const cx = classNames.bind(styles);
function DivProps({ placeholder, value, onChange, textarea, styles, onClick, refInput, name }) {
  return (
    <input
      ref={refInput}
      onClick={onClick}
      style={styles}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={cx('input')}
      name={name}
    />
  );
}

export default DivProps;
