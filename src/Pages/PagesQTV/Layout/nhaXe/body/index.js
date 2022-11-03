import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import styles from './index.module.scss';
import SpanButton from '~/components/wrapper/button/ButtonSpan';
import Left from './Left';
import Right from './Right';
import NextButton from '~/components/option/nextButton';
import axios from 'axios';
import { SERVER_PORT } from '~/dotEnvClient';
const cx = classNames.bind(styles);
function Body({ id_account, ps, showName }) {
  //data from Mysql
  const [data, setData] = useState([]);
  const [totalPage, setTotaPages] = useState(0);
  const [curentPages, setCurentPages] = useState(1);
  useEffect(() => {
    axios
      .get(`${SERVER_PORT}/admin/nha-xe/allpages`, {
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
  //show Right
  const [showRight, setShowRight] = useState(false);
  const [dataRight, setDataRight] = useState({});
  return (
    <div className={cx('wrapper')}>
      <div className={cx(showRight ? 'left_showRight' : 'left_hideRight', showRight && 'left_mobile')}>
        <Left
          setShowRight={setShowRight}
          data={data}
          showName={showName}
          setDataRight={setDataRight}
          dataRight={dataRight}
        />
      </div>
      {showRight && (
        <div className={cx('right', 'right_mobile')}>
          <Right data={dataRight} setShowRight={setShowRight} />
        </div>
      )}
    </div>
  );
}

export default Body;
