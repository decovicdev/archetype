import Header from "../header";
import Footer from "../footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-noisy-bg min-h-screen bg-dark-100">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
