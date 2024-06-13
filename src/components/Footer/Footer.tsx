import { FC } from "react";
import classes from "./Footer.module.css";

export const Footer: FC = () => {
  let year = new Date().getFullYear().toString();

  return (
    <footer className={classes["footer"]}>
      <p>&copy; e-Pavement {year}</p>
    </footer>
  );
};
