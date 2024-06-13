import { FC } from "react";
import classes from "./MenuButton.module.css";

import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RootState, toggleMenu } from "../../../state";

export const MenuButton: FC = () => {
  const dispatch = useDispatch();

  const menuIsOpen: boolean = useSelector(
    (state: RootState) => state.menu.isOpen
  );

  const toggleMenuHandler = () => dispatch(toggleMenu());

  return (
    <button
      className={`flex--centered btn ${classes["menu-btn"]} `}
      onClick={toggleMenuHandler}
      title={"Menu"}
      id={"menu_btn"}
    >
      <div className={classes["menu-btn-icon-box"]}>
        {menuIsOpen ? (
          <IoCloseSharp className={classes["icon"]} />
        ) : (
          <IoMenuSharp className={classes["icon"]} />
        )}
      </div>
    </button>
  );
};
