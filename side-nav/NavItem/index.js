import React from "react";
import classNames from "classnames";
import "./nav-item.scss";

const NavItem = props => {
  const handleClick = e => {
    e.stopPropagation();
    props.handleNavItemClick && props.handleNavItemClick(e, props.groupIndex, props.index);
  };
  return (
    <li
      className={classNames(
        "lg-side-nav-item",
        { "lg-nav-item-selected": props.selected },
        props.className
      )}
      onClick={handleClick}
    >
      {props.children}
    </li>
  );
};

export default NavItem;
