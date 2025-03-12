import Header from "./Header";
import Footer from "./Footer";

import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="app absolute inset-0 h-full w-full bg-black">
      <Header />
      {/* Content Window */}
      <div className="appContent">
        {/* {props.children} */}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
