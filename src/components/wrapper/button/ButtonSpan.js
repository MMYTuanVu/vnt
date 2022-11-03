import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './index.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function SpanButton({
  children,
  title,
  icons,
  circle,
  square,
  width,
  height,
  onClick,
  fontSize = '1.4rem',
  border,
  borderColor,
  color,
  stickyleft,
  z_index,
  backgroundColor,
  fontWeight,
  justifyContent,
  ref,
}) {
  return (
    <>
      {title ? (
        <span
          ref={ref}
          style={{
            fontSize: fontSize,
            fontWeight: fontWeight,
            width: width,
            height: height,
            minWidth: width,
            borderColor: borderColor,
            color: color,
            fontSize: fontSize,
            zIndex: z_index,
            backgroundColor: backgroundColor,
            justifyContent: justifyContent,
          }}
          onClick={onClick}
          className={cx(border ? 'border' : 'title', stickyleft && 'stickyleft')}
        >
          {title}
        </span>
      ) : (
        <span
          ref={ref}
          style={{
            fontWeight: fontWeight,
            width: width,
            height: height,
            fontSize: fontSize,
            fontWeight: fontWeight,
            backgroundColor: backgroundColor,
            color: color,
          }}
          className={cx(
            'span',
            square && 'span_square',
            circle && 'span_ircle',
            title && 'title',
            stickyleft && 'stickyleft',
          )}
          onClick={onClick}
        >
          {icons ? <FontAwesomeIcon className={cx('icont_fontaws')} icon={icons} /> : children}
        </span>
      )}
    </>
  );
}

export default SpanButton;
