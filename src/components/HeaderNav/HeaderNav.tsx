import { useLocation } from "react-router-dom";

import { FC } from "react";
import classes from "./HeaderNav.module.css";
import { HeaderNavLink } from "./HeaderNavLink";

export const HeaderNav: FC = () => {
  const activePath = useLocation().pathname;

  return (
    <nav className={classes["header-nav"]}>
      <HeaderNavLink
        to="/about"
        label="About Us"
        className={activePath === "/about" ? "active" : ""}
      />
      <HeaderNavLink
        to="/product"
        label="Product"
        className={activePath === "/product" ? "active" : ""}
      />
      <HeaderNavLink
        to="/solutions"
        label="Solutions"
        className={activePath === "/solutions" ? "active" : ""}
      />
      <HeaderNavLink
        to="/contact"
        label="Contact"
        className={activePath === "/contact" ? "active" : ""}
      />
    </nav>
  );
};
