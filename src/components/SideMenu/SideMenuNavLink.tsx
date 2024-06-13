import { FC } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { closeMenu } from "../../state";

export interface SideMenuNavLinkProps {
  to: string;
  label: string;
  linkIndex: number;
  onHoverIn: (newIndex: any) => void;
}

export const SideMenuNavLink: FC<SideMenuNavLinkProps> = (
  props: SideMenuNavLinkProps
) => {
  const { to, label, linkIndex, onHoverIn } = props;

  const dispatch = useDispatch();

  const hideMenuHandler = () => {
    dispatch(closeMenu());
  };

  return (
    <li key={`to_${to}_label_${label}_index_${linkIndex}`}>
      <NavLink to={to}>
        <p onMouseEnter={() => onHoverIn(linkIndex)} onClick={hideMenuHandler}>
          {label}
        </p>
      </NavLink>
    </li>
  );
};
