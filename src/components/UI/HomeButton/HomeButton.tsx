import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { closeMenu } from "../../../state";
import classes from "./HomeButton.module.css";

export const HomeButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(closeMenu());
    navigate("./");
  };

  return (
    <button
      className={`${classes["home-btn-box"]} btn`}
      onClick={onClickHandler}
    >
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/logo/e-pavement_logo_white.png`}
        alt="E-Pavement Company Logo"
        className={classes["logo"]}
      />
    </button>
  );
};
