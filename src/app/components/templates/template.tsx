import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

function Layout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col min-h-screen ml-32">
        <div className="flex-1 overflow-y-scroll">{children}</div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
