import Footer from "./footer";
import LeftSide from "./leftSide";
import Navbar from "./navbar";

function Template({children}: {children: React.ReactNode}) {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col min-h-screen ml-32 mr-96">
        <div className="flex-1 overflow-y-scroll">{children}</div>
        <Footer />
      </div>
      <LeftSide />
    </div>
  );
}
export default Template;
