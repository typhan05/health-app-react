import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="l-footer">
      <div className="container">
        <div className="l-footer__inner">
          <nav className="l-footer__nav">
            <ul className="l-footer__nav-list">
              <li className="l-footer__nav-item">
                <Link to="#/" className="l-footer__nav-link">
                  会員登録
                </Link>
              </li>
              <li className="l-footer__nav-item">
                <Link to="#/" className="l-footer__nav-link">
                  運営会社
                </Link>
              </li>
              <li className="l-footer__nav-item">
                <Link to="#/" className="l-footer__nav-link">
                  利用規約
                </Link>
              </li>
              <li className="l-footer__nav-item">
                <Link to="#/" className="l-footer__nav-link">
                  個人情報の取扱について
                </Link>
              </li>
              <li className="l-footer__nav-item">
                <Link to="#/" className="l-footer__nav-link">
                  特定商取引法に基づく表記
                </Link>
              </li>
              <li className="l-footer__nav-item">
                <Link to="#/" className="l-footer__nav-link">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
