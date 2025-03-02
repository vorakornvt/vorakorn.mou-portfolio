import Header from "./Header"
import Footer from "./Footer"

import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <div className="app">
      <Header />
      {/* Content Window */}
      <div className="appContent">
        {/* {props.children} */}
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout