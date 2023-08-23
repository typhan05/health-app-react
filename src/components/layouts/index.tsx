import { Outlet } from "react-router-dom";
import { Footer } from "../oraganisms/footer/Footer";
import { Header } from "../oraganisms/header/Header";
import { BackToTop } from "../atoms/back-to-top/BackToTop";

const Layout = () => {
  return (
    <div className="l-layout">
      <Header />
      <main className="l-main">
        <Outlet />
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Layout;
