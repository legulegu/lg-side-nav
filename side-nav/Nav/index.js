import React from "react";
import NavGroup from "../NavGroup";
import NavItem from "../NavItem";
import classNames from "classnames";

import "./nav.scss";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openedGroup: props.openedGroup,
      selectedGroup: props.selectedGroup,
      selectedNavItem: props.selectedNavItem
    };
    this.handleOnNavGroupClick = this.handleOnNavGroupClick.bind(this);
    this.handleNavItemClick = this.handleNavItemClick.bind(this);
  }

  handleOnNavGroupClick(e, index) {
    if (index === this.state.openedGroup) {
      this.setState({ openedGroup: 0 });
    } else {
      this.setState({ openedGroup: index});
    }
  }

  handleNavItemClick(e, groupIndex, index) {
    this.setState({ selectedGroup: groupIndex, selectedNavItem: index });
  }

  render() {
    let navGroupIndex = 0;
    let navItemIndex = 0;
    const clonedChildren = React.Children.map(this.props.children, child => {
      if (child.type === NavGroup) {
        navGroupIndex++;
        return React.cloneElement(child, {
          index: navGroupIndex,
          show: this.state.openedGroup === navGroupIndex,
          handleOnNavGroupClick: this.handleOnNavGroupClick,
          handleNavItemClick: this.handleNavItemClick
        });
      }
      if (child.type === NavItem) {
        navItemIndex++;
        return React.cloneElement(child, {
          groupIndex: 0,
          index: navItemIndex,
          handleNavItemClick: this.handleNavItemClick
        });
      }
    });
    return (
      <ul className={classNames("nav", this.props.className)}>
        {clonedChildren}
      </ul>
    );
  }
}

export default Nav;
