import classes from "./Header.module.css";

import { FC } from "react";
import { HeaderNav } from "../HeaderNav";
import { HomeButton, MenuButton } from "../UI";

export const Header: FC = () => {
  return (
    <header className={`${classes["header"]} flex--centered-vertically`}>
      <HomeButton />
      <HeaderNav />
      <MenuButton />
    </header>
  );
};
