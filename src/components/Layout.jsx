import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import DemoControlBanner from "./DemoControlBanner";

const Layout = ({ children }) => {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="main-area">
        <Topbar />
        <DemoControlBanner />
        <div className="page-content">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
