import classNames from 'classnames/bind';
import styles from './index.module.scss';
import SpanButton from '~/components/wrapper/button/ButtonSpan';
const cx = classNames.bind(styles);
function Name({ data, setShowTippyName, setDataName, dataName }) {
  return (
    <div
      className={cx('span_button_wrapper')}
      onClick={() => {
        setShowTippyName(false);
        setDataName(data);
        setTimeout(() => {
          setShowTippyName(true);
        }, 20);
      }}
    >
      <SpanButton
        title={data.name}
        border
        width="280px"
        height="23px"
        fontWeight={dataName.id_dichvu_au === data.id_dichvu_au && '600'}
        borderColor={dataName.id_dichvu_au === data.id_dichvu_au ? 'var(--default-color)' : 'var(--border-color1)'}
        fontSize={dataName.id_dichvu_au === data.id_dichvu_au ? '1.4rem' : '1.3rem'}
        color={dataName.id_dichvu_au === data.id_dichvu_au ? 'var(--default-color)' : 'var(--text-color-light)'}
        z_index="10"
        backgroundColor="var(--backGround-color-light)"
      />
    </div>
  );
}

export default Name;
