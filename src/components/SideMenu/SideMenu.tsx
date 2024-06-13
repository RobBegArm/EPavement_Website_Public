import { FC, useState } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../state";
import classes from "./SideMenu.module.css";
import { SideMenuNavLink } from "./SideMenuNavLink";

export const SideMenu: FC = () => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);

  const menuIsOpen: boolean = useSelector(
    (state: RootState) => state.menu.isOpen
  );

  //Sets the active link (which was hovered on last)
  const onHoverInHandler = (newIndex: number) => {
    setActiveLinkIndex(newIndex);
  };

  // Returns Pattern position value depending on which menu link is active
  const getPatternPosition = () => {
    switch (activeLinkIndex) {
      case 1:
        return "0% 100%";
      case 2:
        return "0% 75%";
      case 3:
        return "0% 50%";
      case 4:
        return "0% 25%";
      default:
        return "0% 100%";
    }
  };

  return (
    <nav
      className={`${classes["main-navbar"]} ${classes["animate--menu-open"]} ${
        menuIsOpen ? "block" : "none"
      }`}
    >
      <ul className={classes["main-nav-list"]}>
        <SideMenuNavLink
          to="/about"
          label="About Us"
          linkIndex={1}
          onHoverIn={onHoverInHandler}
        />
        <SideMenuNavLink
          to="/product"
          label="Product"
          linkIndex={2}
          onHoverIn={onHoverInHandler}
        />
        <SideMenuNavLink
          to="/solutions"
          label="Solutions"
          linkIndex={3}
          onHoverIn={onHoverInHandler}
        />
        <SideMenuNavLink
          to="/contact"
          label="Contact"
          linkIndex={4}
          onHoverIn={onHoverInHandler}
        />
      </ul>
      <div className={classes["background"]} />
      <div
        className={classes["background--pattern"]}
        style={{ backgroundPosition: getPatternPosition() }}
      />
    </nav>
  );
};
