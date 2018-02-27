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
      selected: props.selectedGroup === props.index && props.selectedNavItem === navItemIndex,
      handleNavItemClick: props.handleNavItemClick
    });
  });
  return (
    <li
      className={classNames("lg-side-nav-group", props.className)}
      onClick={handleClick}
    >
      <i
        className={classNames({
          "lg-side-nav-triangle-expanded": props.show,
          "lg-side-nav-triangle-collapsed": !props.show
        })}
      />
      <div className="lg-side-nav-group-title">{props.title}</div>
      <ul className={classNames("lg-side-nav-group-item", { show: props.show})}>
        {clonedChildren}
      </ul>
    </li>
  );
};

export default NavGroup;
