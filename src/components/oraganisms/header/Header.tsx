import { Link } from "react-router-dom";
import useHeader from "../../../hooks/useHeader";

export const Header = () => {
  const { openMenu, openHandler, menuRef } = useHeader();
  return (
    <header id="header" className="l-header">
      <div className="container">
        <div className="l-header__inner">
          <div className="c-logo">
            <Link to="/" className="c-logo__link">
              <img
                src="assets/images/logo.svg"
                alt="logo"
                className="c-logo__img"
              />
            </Link>
          </div>
          <nav className="c-nav">
            <ul className="c-nav__list">
              <li className="c-nav__item">
                <Link to="/my-record" className="c-nav__link">
                  <img src="assets/images/icons/icon_memo.svg" alt="" />
                  自分の記録
                </Link>
              </li>
              <li className="c-nav__item">
                <Link to="/" className="c-nav__link">
                  <img src="assets/images/icons/icon_challenge.svg" alt="" />
                  チャレンジ
                </Link>
              </li>
              <li className="c-nav__item">
                <Link to="/" className="c-nav__link">
                  <img src="assets/images/icons/icon_info.svg" alt="" />
                  お知らせ
                </Link>
              </li>
            </ul>
            <div className="c-nav-drawer" ref={menuRef}>
              <button
                className="c-nav-drawer__btn"
                onClick={() => openHandler()}
              >
                <img
                  src={`assets/images/icons/icon_${
                    openMenu ? "close" : "menu"
                  }.svg`}
                  alt=""
                />
              </button>
              {openMenu && (
                <div className="c-nav-drawer__menu">
                  <ul className="c-nav-drawer__list">
                    <li className="c-nav-drawer__item">
                      <Link to="#/">自分の記録</Link>
                    </li>
                    <li className="c-nav-drawer__item">
                      <Link to="#/">体重グラフ</Link>
                    </li>
                    <li className="c-nav-drawer__item">
                      <Link to="#/">目標</Link>
                    </li>
                    <li className="c-nav-drawer__item">
                      <Link to="#/">選択中のコース</Link>
                    </li>
                    <li className="c-nav-drawer__item">
                      <Link to="/column">コラム一覧</Link>
                    </li>
                    <li className="c-nav-drawer__item">
                      <Link to="#/">設定</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
