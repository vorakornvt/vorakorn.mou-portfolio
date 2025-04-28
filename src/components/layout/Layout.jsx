import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import DotBG from "../features/DotBG";

function Layout() {
  return (
    <div className="app absolute inset-0 h-full w-full bg-black">
      <DotBG />

      <Header />
      {/* Content Window */}
      <div className="appContent ">
        {/* {props.children} */}
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
