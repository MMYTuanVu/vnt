import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SERVER_PORT } from '~/dotEnvClient.js';
import {
  faPlane,
  faCarRear,
  faBroomBall,
  faHotel,
  faCoins,
  faRing,
  faCheck,
  faChevronDown,
  faChevronUp,
  faEarthAmerica,
  faMoon as faMoonDark,
  faBars,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faMoon as faMoonlight } from '@fortawesome/free-regular-svg-icons';
import styles from './Sidebar.module.scss';
import { useRef, useState } from 'react';
import { Setting, Profile, Coin } from '~/assets/Icons';
import axios from 'axios';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
const cx = classNames.bind(styles);
let ThemeMoon = faMoonlight;
const SERVER_PORT_LOGO = `${SERVER_PORT}/static/Images/logo.png`;
function Sidebar() {
  //checkSever

  //setTheme Dark or Light
  const [Theme, setTheme] = useState('light');
  if (Theme === 'dark') {
    ThemeMoon = faMoonDark;
  } else {
    ThemeMoon = faMoonlight;
  }
  //show hident li row
  const ThemeRef = useRef();
  const LanguegeRef = useRef();
  const ThemeRef_hident = useRef();
  const LanguegeRef_hident = useRef();
  const [showTheme, setShowTheme] = useState(true);
  const [showLang, setShowLang] = useState(true);
  const [showThemeHident, setShowThemeHident] = useState(true);
  const [showLangHident, setShowLangHident] = useState(true);
  const handleClickTheme = (e) => {
    setShowTheme(!showTheme);
    if (showTheme) {
      ThemeRef.current.style.display = 'block';
    } else {
      ThemeRef.current.style.display = 'none';
    }
  };
  const handleClickLanguge = (e) => {
    setShowLang(!showLang);
    if (showLang) {
      LanguegeRef.current.style.display = 'block';
    } else {
      LanguegeRef.current.style.display = 'none';
    }
  };
  const handleClickTheme_hident = (e) => {
    setShowThemeHident(!showThemeHident);
    if (showThemeHident) {
      ThemeRef_hident.current.style.display = 'block';
    } else {
      ThemeRef_hident.current.style.display = 'none';
    }
  };
  const handleClickLanguge_hident = (e) => {
    setShowLangHident(!showLangHident);
    if (showLangHident) {
      LanguegeRef_hident.current.style.display = 'block';
    } else {
      LanguegeRef_hident.current.style.display = 'none';
    }
  };

  const Folders = [
    {
      title: 'Thông tin Tài Khoản',
      childrens: [
        {
          title: 'Cài đặt',
          to: '/setting',
          iconI: Setting,
        },
        {
          title: 'Trang cá nhân',
          to: '/profile',
          iconI: Profile,
        },
        {
          title: 'Giao diện',
          iconF: [ThemeMoon, 'a'],
          iconFup: [faChevronUp, 'a'],
          iconFdown: [faChevronDown, 'b'],
          onClick: handleClickTheme,
          ref: ThemeRef,
          childrens: [
            {
              title: 'Dark',
              to: '/',
              icon: [faCheck, 'b'],
            },
            {
              title: 'Light',
              to: '/',
              icon: [faCheck, 'b'],
            },
          ],
        },
        {
          title: 'Ngôn Ngữ',
          iconF: [faEarthAmerica, 'b'],
          iconFup: [faChevronUp, 'a'],
          iconFdown: [faChevronDown, 'b'],
          onClick: handleClickLanguge,
          ref: LanguegeRef,
          childrens: [
            {
              title: 'Tiếng Việt',
              to: '/vie',
              icon: [faCheck, ''],
            },
            {
              title: 'English',
              to: '/en',
              icon: [faCheck, ''],
            },
            {
              title: 'China',
              to: '/cn',
              icon: [faCheck, ''],
            },
          ],
        },
      ],
    },
    {
      title: 'Ngân sách',
      childrens: [
        {
          title: 'Báo Giá',
          to: '/pike',
          iconF: [faCoins, ''],
        },
        {
          title: 'Thuế',
          to: '/thue',
          iconF: [faRing, ''],
        },
      ],
    },
    {
      title: 'DS Cty đối tác',
      childrens: [
        {
          title: 'Sân bay',
          to: '/plane',
          iconF: [faPlane, ''],
        },
        {
          title: 'Nhà xe',
          to: '/bike',
          iconF: [faCarRear, ''],
        },
        {
          title: 'Gold',
          to: '/gold',
          iconF: [faBroomBall, ''],
        },
        {
          title: 'Khách Sạn',
          to: '/hotel',
          iconF: [faHotel, ''],
        },
      ],
    },
  ];
  const Folders_hident = [
    {
      title: 'Thông tin Tài Khoản',
      childrens: [
        {
          title: 'Cài đặt',
          to: '/setting',
          iconI: Setting,
        },
        {
          title: 'Trang cá nhân',
          to: '/profile',
          iconI: Profile,
        },
        {
          title: 'Giao diện',
          iconF: [ThemeMoon, 'a'],
          iconFup: [faChevronUp, 'a'],
          iconFdown: [faChevronDown, 'b'],
          onClick: handleClickTheme_hident,
          ref: ThemeRef_hident,
          childrens: [
            {
              title: 'Dark',
              to: '/',
              icon: [faCheck, 'b'],
            },
            {
              title: 'Light',
              to: '/',
              icon: [faCheck, 'b'],
            },
          ],
        },
        {
          title: 'Ngôn Ngữ',
          iconF: [faEarthAmerica, 'b'],
          iconFup: [faChevronUp, 'a'],
          iconFdown: [faChevronDown, 'b'],
          onClick: handleClickLanguge_hident,
          ref: LanguegeRef_hident,
          childrens: [
            {
              title: 'Tiếng Việt',
              to: '/vie',
              icon: [faCheck, ''],
            },
            {
              title: 'English',
              to: '/en',
              icon: [faCheck, ''],
            },
            {
              title: 'China',
              to: '/cn',
              icon: [faCheck, ''],
            },
          ],
        },
      ],
    },
    {
      title: 'Ngân sách',
      childrens: [
        {
          title: 'Báo Giá',
          to: '/pike',
          iconF: [faCoins, ''],
        },
        {
          title: 'Thuế',
          to: '/thue',
          iconF: [faRing, ''],
        },
      ],
    },
    {
      title: 'DS Cty đối tác',
      childrens: [
        {
          title: 'Sân bay',
          to: '/plane',
          iconF: [faPlane, ''],
        },
        {
          title: 'Nhà xe',
          to: '/bike',
          iconF: [faCarRear, ''],
        },
        {
          title: 'Gold',
          to: '/gold',
          iconF: [faBroomBall, ''],
        },
        {
          title: 'Khách Sạn',
          to: '/hotel',
          iconF: [faHotel, ''],
        },
      ],
    },
  ];
  const Folder_Hident = [
    {
      title: 'Báo giá',
      iconI: Coin,
      to: '/admin/baogia',
    },
    {
      title: 'Cá nhân',
      iconI: Profile,
      to: '/admin/profile',
    },
    {
      title: 'Cài đặt',
      iconI: Setting,
      to: '/admin/seting',
    },
    {
      title: 'Logout',
      iconF: faArrowRightFromBracket,
      to: '/admin/logout',
    },
  ];
  const [showSidebar, setShowSidebar] = useState(false);
  const folderRef = useRef();
  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className={cx(Theme, 'wrapper', 'rip')}>
      <div className={cx('logo', Theme)}>
        <div className={cx('logo_icon', Theme)} onClick={handleShowSidebar}>
          <FontAwesomeIcon icon={faBars} className={cx('logo_icons', Theme)} />
        </div>
        <Link to="/admin/baogia" className={cx('logo_image', Theme)}>
          <img className={cx('logo_images', Theme)} src={SERVER_PORT_LOGO} />
          <span className={cx('logo_image-span', Theme)}>Times</span>
        </Link>
      </div>
      {Folders.map((folder, index) => (
        <div key={index} className={cx(Theme, 'folder', 'reset')}>
          <span className={cx(Theme, 'folder_title')}>{folder.title}</span>
          {folder.childrens.map((children, index) => (
            <ul key={index} className={cx(Theme, 'folder_ul')}>
              {children.to ? (
                <Link to={children.to} className={cx(Theme, 'folder_li')}>
                  {children.iconF ? (
                    <div className={cx(Theme, 'folder_li_iconF')}>
                      <FontAwesomeIcon
                        icon={children.iconF[0]}
                        className={cx(Theme, children.iconF[0], 'folder_li_icons')}
                      />
                    </div>
                  ) : (
                    <div className={cx(Theme, 'folder_li_iconI')}>
                      <children.iconI width="2.6rem" height="2.6rem" color={'#000'} />
                    </div>
                  )}
                  <div className={cx(Theme, 'folder_li_span')}>
                    <span className={cx(Theme, 'folder_li_spans')}>{children.title}</span>
                  </div>
                </Link>
              ) : (
                <li className={cx(Theme, 'folder_lis')} onClick={children.onClick}>
                  <div className={cx(Theme, 'folder_li')}>
                    <div className={cx(Theme, 'folder_li_iconF')}>
                      <FontAwesomeIcon
                        icon={children.iconF[0]}
                        className={cx(Theme, children.iconF[0], 'folder_li_icons')}
                      />
                    </div>
                    <div className={cx(Theme, 'folder_li_right')}>
                      <div className={cx(Theme, 'folder_li_span')}>
                        <span className={cx(Theme, 'folder_li_spans')}>{children.title}</span>
                      </div>
                      <div className={cx(Theme, 'folder_li_right_down')}>
                        <FontAwesomeIcon
                          icon={children.iconFdown[0]}
                          className={cx(Theme, children.iconF[0], 'folder_li_right_down')}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={cx(Theme, 'folder_li_bottom')} ref={children.ref}>
                    {children.childrens.map((child, index) => (
                      <Link to={child.to} key={index} className={cx(Theme, 'folder_li_bottom_link')}>
                        <span className={cx('folder_li_bottom_link_span')}>{child.title}</span>
                        <div className={cx('folder_li_bottom_link_check')}>
                          <FontAwesomeIcon icon={child.icon[0]} />
                        </div>
                      </Link>
                    ))}
                  </div>
                </li>
              )}
            </ul>
          ))}
        </div>
      ))}
      <div className={cx('folder_hident', 'folder_hident-reset')}>
        {Folder_Hident.map((folder, index) => (
          <Tippy content={folder.title} placement="right" key={index}>
            <Link to={folder.to} className={cx('folder_hident_link', 'hident')}>
              <div className={cx('folder_hident_link-icon', 'height_scroll')}>
                {folder.iconF ? (
                  <FontAwesomeIcon icon={folder.iconF} className={cx('folder_hident_link-icons')} />
                ) : (
                  <folder.iconI width="2.4rem" height="2.4rem" color={'#000'} />
                )}
              </div>
              <div className={cx('folder_hident_link-span', 'height_scroll')}>
                <span>{folder.title}</span>
              </div>
            </Link>
          </Tippy>
        ))}
      </div>
      <div className={cx(Theme, 'folder_Click')}>
        {Folders_hident.map((folder, index) => (
          <div
            key={index}
            className={cx(Theme, 'folder', 'reset')}
            style={showSidebar ? { display: 'block' } : { display: 'none' }}
          >
            <span className={cx(Theme, 'folder_title')}>{folder.title}</span>
            {folder.childrens.map((children, index) => (
              <ul key={index} className={cx(Theme, 'folder_ul')}>
                {children.to ? (
                  <Link to={children.to} className={cx(Theme, 'folder_li')}>
                    {children.iconF ? (
                      <div className={cx(Theme, 'folder_li_iconF')}>
                        <FontAwesomeIcon
                          icon={children.iconF[0]}
                          className={cx(Theme, children.iconF[0], 'folder_li_icons')}
                        />
                      </div>
                    ) : (
                      <div className={cx(Theme, 'folder_li_iconI')}>
                        <children.iconI width="2.6rem" height="2.6rem" color={'#000'} />
                      </div>
                    )}
                    <div className={cx(Theme, 'folder_li_span')}>
                      <span className={cx(Theme, 'folder_li_spans')}>{children.title}</span>
                    </div>
                  </Link>
                ) : (
                  <li className={cx(Theme, 'folder_lis')} onClick={children.onClick}>
                    <div className={cx(Theme, 'folder_li')}>
                      <div className={cx(Theme, 'folder_li_iconF')}>
                        <FontAwesomeIcon
                          icon={children.iconF[0]}
                          className={cx(Theme, children.iconF[0], 'folder_li_icons')}
                        />
                      </div>
                      <div className={cx(Theme, 'folder_li_right')}>
                        <div className={cx(Theme, 'folder_li_span')}>
                          <span className={cx(Theme, 'folder_li_spans')}>{children.title}</span>
                        </div>
                        <div className={cx(Theme, 'folder_li_right_down')}>
                          <FontAwesomeIcon
                            icon={children.iconFdown[0]}
                            className={cx(Theme, children.iconF[0], 'folder_li_right_down')}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={cx(Theme, 'folder_li_bottom')} ref={children.ref}>
                      {children.childrens.map((child, index) => (
                        <Link to={child.to} key={index} className={cx(Theme, 'folder_li_bottom_link')}>
                          <span className={cx('folder_li_bottom_link_span')}>{child.title}</span>
                          <div className={cx('folder_li_bottom_link_check')}>
                            <FontAwesomeIcon icon={child.icon[0]} />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </li>
                )}
              </ul>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
