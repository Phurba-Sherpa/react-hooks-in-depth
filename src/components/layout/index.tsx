import { Header, Footer } from "../ui/partials";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto w-[90%] py-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
