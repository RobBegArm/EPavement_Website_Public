import { FC, useEffect, useState } from "react";
import { SmoothScrollTo } from "../../../hooks";
import classes from "./BackToTopButton.module.css";

export const BackToTopBtn: FC = () => {
  const [btnVisible, setBtnVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setBtnVisible(window.scrollY > 76);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return btnVisible ? (
    <button
      className={classes.backToTopBtn}
      onClick={(e) => SmoothScrollTo(e, "#")}
    >
      Back To Top
    </button>
  ) : null;
};
