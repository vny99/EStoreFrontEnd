import React from "react";
import Navbar from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (<div>
    <Navbar/>
       {children}
    <Footer/>
     </div>);
}