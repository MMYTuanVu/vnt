import classNames from 'classnames/bind';
import styles from './index.module.scss';
import { headerData } from './data';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { SERVER_PORT } from '~/dotEnvClient';
import SpanButton from '~/components/wrapper/button/ButtonSpan';
import Name from './rowData/Name';
import NextButton from '~/components/option/nextButton';
import DivProps from '~/components/wrapper/divProp';
import SheetRight from './SheetRight';
import BodyInBody from './bodInBody';
const cx = classNames.bind(styles);
function Body({ id_account, ps, showName, bodyRefScroll }) {
  //data from Mysql
  const [datas, setData] = useState([]);
  const [totalPage, setTotaPages] = useState(0);
  const [curentPages, setCurentPages] = useState(1);
  //data from Name Tippy
  const [dataName, setDataName] = useState({});
  const [showTippyName, setShowTippyName] = useState(false);
  useEffect(() => {
    axios
      .get(`${SERVER_PORT}/admin/golf/allpages`, {
        params: {
          q: { id_account, ps, page: curentPages },
          type: 'less',
        },
      })
      .then((result) => {
        setData(result.data.pages);
        setTotaPages(result.data.allPages);
      });
  }, [curentPages]);
  return (
    <div className={cx('wrapper')} ref={bodyRefScroll}>
      <div className={cx('header', !showName && 'hideName')}>
        {showName && <SpanButton title=" " height="22px" width="280px" />}
        {headerData.map((data, index) => (
          <SpanButton key={index} title={data.title} height="22px" width={data.width} />
        ))}
      </div>
      <div className={cx('body', !showName && 'hideName')}>
        {datas.map((data, index) => (
          <div key={index} className={cx('row')}>
            {showName && (
              <Name dataName={dataName} setShowTippyName={setShowTippyName} setDataName={setDataName} data={data} />
            )}
            <BodyInBody data={data} />
          </div>
        ))}
        {showTippyName && (
          <div className={cx('show_tab', 'mobile')}>
            <DivProps flexDirection="column" backgroundColor="var(--backGround-color-light)">
              <SheetRight
                data={dataName}
                setShowTippyName={setShowTippyName}
                id_account={id_account}
                ps={ps}
                curentPages={curentPages}
                setData={setData}
              />
            </DivProps>
          </div>
        )}
      </div>
      <div className={cx('end', 'reset')}>
        <NextButton totalPage={totalPage} curentPages={curentPages} setCurentPages={setCurentPages} />
      </div>
    </div>
  );
}

export default Body;
