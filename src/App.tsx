import { FC } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import { Footer, Header, SideMenu } from "./components";
import { AboutUs, Contact, Home, Product, Solutions } from "./pages";

export const App: FC = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <Header />
      <main>
        <SideMenu />
        <AnimatePresence>
          <Routes location={location} key={pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/product" element={<Product />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<Navigate replace to="/" />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
};
