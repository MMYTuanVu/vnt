import classNames from 'classnames/bind';
import styles from './index.module.scss';
import SpanButton from '~/components/wrapper/button/ButtonSpan';
import { sheetData } from './data';
import TuyenDuong from './tuyenDuong';
const cx = classNames.bind(styles);
function Left({ data, showName, dataRight, setDataRight, setShowRight }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        {showName && <SpanButton title="Tên nhà xe" height="22px" width="220px" stickyleft />}
        {sheetData.map((datt) => (
          <SpanButton key={datt.className} title={datt.title} height="22px" width={datt.width} />
        ))}
      </div>
      <div className={cx('body')}>
        {data.map((dat, index) => (
          <div className={cx('row')} key={index}>
            {showName && (
              <SpanButton
                stickyleft
                backgroundColor="var(--backGround-color-light)"
                border
                title={dat.name}
                width="220px"
                height="23px"
                borderColor={dat.id_nhaxe === dataRight.id_nhaxe ? 'var(--default-color)' : 'var(--border-color1)'}
                fontSize={dat.id_nhaxe === dataRight.id_nhaxe ? '1.5rem' : '1.3rem'}
                fontWeight={dat.id_nhaxe === dataRight.id_nhaxe ? '600' : '400'}
                color={dat.id_nhaxe === dataRight.id_nhaxe ? 'var(--default-color)' : 'var(--text-color-light)'}
                z_index="10"
                onClick={() => {
                  setDataRight(dat);
                  setShowRight(true);
                }}
              />
            )}
            <SpanButton
              stickyleft
              backgroundColor="var(--backGround-color-light)"
              border
              title={dat.city}
              width="120px"
              height="23px"
              borderColor="var(--border-color1)"
              fontSize="1.3rem"
              color="var(--text-color-light)"
              z_index="9"
            />
            <TuyenDuong data={dat} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Left;
