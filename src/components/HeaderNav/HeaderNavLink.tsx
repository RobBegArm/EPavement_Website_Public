import { FC } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { closeMenu } from "../../state";

export interface HeaderNavLinkProps {
  to: string;
  label: string;
  className?: string;
}

export const HeaderNavLink: FC<HeaderNavLinkProps> = (
  props: HeaderNavLinkProps
) => {
  const dispatch = useDispatch();

  const hideMenuHandler = () => {
    dispatch(closeMenu());
  };

  const { to, label, className } = props;

  return (
    <li key={`header_nav_to_${to}_label_${label}`} className={className || ""}>
      <NavLink to={to} onClick={hideMenuHandler}>
        <p>{label}</p>
      </NavLink>
    </li>
  );
};
