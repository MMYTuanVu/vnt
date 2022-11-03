import Input from '~/components/wrapper/Input';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
import SpanButton from '~/components/wrapper/button/ButtonSpan';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useRef, useState } from 'react';
import useDeboun from '~/components/hooks/useDeboun';
import axios from 'axios';
import { SERVER_PORT } from '~/dotEnvClient';
import DivProps from '~/components/wrapper/divProp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function SearchInput({ id_account, ps }) {
  const [showTab, setShowTab] = useState(false);
  const [valueInput, setValueInput] = useState('');
  const valueData = useDeboun(valueInput, 500);
  //const loadding
  const [showLoad, setShowLoad] = useState(false);
  const [showDel, setShowDel] = useState(false);
  const refInput = useRef();
  //data Array
  const [data, setData] = useState([]);
  useEffect(() => {
    if (valueData != '') {
      setShowLoad(true);
      axios
        .get(`${SERVER_PORT}/admin/search/nha-hang`, {
          params: {
            q: { id_account, ps, value: valueData },
            type: 'less',
          },
        })
        .then((result) => {
          setData(result.data);
          setTimeout(() => {
            setShowLoad(false);
          }, 400);
        });
    }
  }, [valueData]);
  const handleChange = (e) => {
    if (e.target.value.trim(' ') === '') {
      setValueInput('');
      setData([]);
      setShowTab(false);
      setShowDel(false);
    } else {
      setValueInput(e.target.value);
      setShowTab(true);
      setShowDel(true);
    }
  };
  return (
    <div className={cx('wrapper')}>
      <Tippy
        onClickOutside={() => setShowTab(false)}
        placement="bottom-end"
        interactive
        visible={showTab === true && data.length > 0}
        render={(attrs) => (
          <div className={cx('search_resolt')} tabIndex="-1" {...attrs}>
            <DivProps
              justifyContent="left"
              alignItems="flexStart"
              flexDirection="column"
              backgroundColor="var(--backGround-color-light)"
            >
              <span className={cx('header')}>kết Quả Tìm Kiếm</span>
              <div className={cx('body')}>
                {data.map((datax, index) => (
                  <div className={cx('row')} key={index}>
                    <div className={cx('image')}>
                      <img src={datax.img} alt="img" className={cx('image_img')} />
                    </div>
                    <div className={cx('name')}>
                      <div className={cx('name_prent')}>
                        <span className={cx('name_nm_title')}>Tên nhà hàng:</span>
                        <span className={cx('name_nm')}>{datax.name}</span>
                      </div>
                      <div className={cx('name_prent')}>
                        <span className={cx('name_nm_title')}>Địa chỉ:</span>
                        <span className={cx('name_nm')}>{datax.address}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className={cx('end')}>
                <button className={cx('end_btn')}>Xem Tất cả Kết Quả ({data.length})</button>
              </div>
            </DivProps>
          </div>
        )}
      >
        <div className={cx('input')}>
          <Input
            refInput={refInput}
            onClick={() => setShowTab(true)}
            placeholder="Tìm kiếm..."
            value={valueInput}
            onChange={handleChange}
          />
          <span className={cx('input_load')}>
            {showLoad && <FontAwesomeIcon className={cx('input_loading')} icon={faCircleNotch} />}
            {showDel && !showLoad && (
              <FontAwesomeIcon
                className={cx('input_delete')}
                onClick={() => {
                  setValueInput('');
                  setData([]);
                  setShowDel(false);
                  refInput.current.focus();
                }}
                icon={faXmark}
              />
            )}
          </span>
        </div>
      </Tippy>
      <SpanButton square width="50px" height="30px" icons={faMagnifyingGlass} />
    </div>
  );
}

export default SearchInput;
