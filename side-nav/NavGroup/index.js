import React from "react";
import classNames from "classnames";
import "./nav-group.scss";

const NavGroup = props => {
  const handleClick = e => {
    props.handleOnNavGroupClick(e, props.index);
  };
  let navItemIndex = 0;
  const clonedChildren = React.Children.map(props.children, child => {
    navItemIndex++;
    return React.cloneElement(child, {
      groupIndex: props.index,
      index: navItemIndex,
      handleNavItemClick: props.handleNavItemClick
    });
  });
  return (
    <li
      className={classNames("nav-group", props.className)}
      onClick={handleClick}
    >
      <div className="nav-group-title">{props.title}</div>
      <ul className={classNames("nav-group-item", { show: props.show })}>
        {clonedChildren}
      </ul>
    </li>
  );
};

export default NavGroup;
