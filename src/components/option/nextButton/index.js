import classNames from 'classnames/bind';
import styles from './index.module.scss';
import { dataMax7 } from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function NextButton({ totalPage, curentPages, setCurentPages }) {
  return (
    <>
      {totalPage > 0 && (
        <>
          {totalPage <= 7 ? (
            <div className={cx('wraper')}>
              {dataMax7[totalPage - 1].map((data, index) => (
                <span
                  key={index}
                  className={cx('span', curentPages === data ? 'active' : '')}
                  onClick={() => setCurentPages(data)}
                >
                  {data}
                </span>
              ))}
            </div>
          ) : (
            <>
              <div className={cx('wraper')}>
                {curentPages < 4 && (
                  <>
                    {[1, 2, 3, 4].map((data, index) => (
                      <span
                        key={index}
                        className={cx('span', curentPages === data ? 'active' : '')}
                        onClick={() => setCurentPages(data)}
                      >
                        {data}
                      </span>
                    ))}
                    <span className={cx('span_take')}>...</span>
                    <span
                      className={cx('span', curentPages === totalPage ? 'active' : '')}
                      onClick={() => setCurentPages(totalPage)}
                    >
                      {totalPage}
                    </span>
                    <span className={cx('span_next')} onClick={() => setCurentPages(curentPages + 1)}>
                      <FontAwesomeIcon className={cx('span_nexts')} icon={faArrowRight} />
                    </span>
                  </>
                )}
                {4 <= curentPages && curentPages < Number(totalPage - 2) && (
                  <>
                    <span className={cx('span_next')} onClick={() => setCurentPages(curentPages - 1)}>
                      <FontAwesomeIcon className={cx('span_nexts')} icon={faArrowLeft} />
                    </span>
                    <span className={cx('span')} onClick={() => setCurentPages(1)}>
                      1
                    </span>
                    <span className={cx('span_take')}>...</span>
                    <span className={cx('span', 'active')}>{curentPages}</span>
                    <span className={cx('span_take')}>...</span>
                    <span className={cx('span')} onClick={() => setCurentPages(totalPage)}>
                      {totalPage}
                    </span>
                    <span className={cx('span_next')} onClick={() => setCurentPages(curentPages + 1)}>
                      <FontAwesomeIcon className={cx('span_nexts')} icon={faArrowRight} />
                    </span>
                  </>
                )}
                {curentPages >= Number(totalPage - 2) && (
                  <>
                    <span className={cx('span_next')} onClick={() => setCurentPages(curentPages - 1)}>
                      <FontAwesomeIcon className={cx('span_nexts')} icon={faArrowLeft} />
                    </span>
                    <span className={cx('span')} onClick={() => setCurentPages(1)}>
                      1
                    </span>
                    <span className={cx('span_take')}>...</span>
                    <span
                      className={cx('span', curentPages === totalPage - 3 ? 'active' : '')}
                      onClick={() => setCurentPages(totalPage - 3)}
                    >
                      {totalPage - 3}
                    </span>
                    <span
                      className={cx('span', curentPages === totalPage - 2 ? 'active' : '')}
                      onClick={() => setCurentPages(totalPage - 2)}
                    >
                      {totalPage - 2}
                    </span>
                    <span
                      className={cx('span', curentPages === totalPage - 1 ? 'active' : '')}
                      onClick={() => setCurentPages(totalPage - 1)}
                    >
                      {totalPage - 1}
                    </span>
                    <span
                      className={cx('span', curentPages === totalPage ? 'active' : '')}
                      onClick={() => setCurentPages(totalPage)}
                    >
                      {totalPage}
                    </span>
                  </>
                )}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

export default NextButton;
