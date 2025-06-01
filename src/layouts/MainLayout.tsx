import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type MainLayoutProps = {
  children?: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
