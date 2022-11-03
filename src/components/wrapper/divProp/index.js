import classNames from 'classnames/bind';
import styles from './index.module.scss';
const cx = classNames.bind(styles);
function DivProps({ children, backgroundColor, flexDirection, alignItems, justifyContent }) {
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        flexDirection: flexDirection,
        alignItems: alignItems,
        justifyContent: justifyContent,
      }}
      className={cx('wrapper')}
    >
      {children}
    </div>
  );
}

export default DivProps;
