import React from "react";
import NavGroup from "../NavGroup";
import NavItem from "../NavItem";
import ExpandAllButton from "../ExpandAllButton";
import classNames from "classnames";
import Cookies from 'js-cookie';
import concat from 'unique-concat';

import "./nav.scss";

class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openedGroup: props.openedGroup,
      selectedGroup: props.selectedGroup,
      selectedNavItem: props.selectedNavItem,
      expandAll: props.expandAll
    };
    this.handleOnNavGroupClick = this.handleOnNavGroupClick.bind(this);
    this.handleNavItemClick = this.handleNavItemClick.bind(this);
    this.handleToggleExpandAllButtonClick = this.handleToggleExpandAllButtonClick.bind(this);
  }

  componentDidMount() {
    React.Children.forEach(this.clonedChildren, (child) => {
      if(child.type === NavGroup) {
        let navItemIndex = 0;
        React.Children.forEach(child.props.children, (childNavItem) => {
          navItemIndex ++;
          if(location.pathname === childNavItem.props.path) {
            this.setState({
              openedGroup: concat(this.state.openedGroup, [child.props.index]),
              selectedGroup: child.props.index,
              selectedNavItem: navItemIndex
            })
          }
        })
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    Cookies.set('state', this.state);
  }

  handleOnNavGroupClick(e, index) {
    const openedGroup = Object.assign([], this.state.openedGroup);
    if (openedGroup.indexOf(index) > -1) {
      openedGroup.splice(openedGroup.indexOf(index), 1);
    } else {
      openedGroup.push(index);
    }
    this.setState({ openedGroup });
  }

  handleNavItemClick(e, groupIndex, index) {
    this.setState({ selectedGroup: groupIndex, selectedNavItem: index });
  }

  handleToggleExpandAllButtonClick(e) {
    if (this.state.expandAll) {
      this.setState({ openedGroup: [] });
    } else {
      this.setState({ openedGroup: this.props.allGroups });
    }
    this.setState({ expandAll: !this.state.expandAll });
  }

  render() {
    let navGroupIndex = 0;
    let navItemIndex = 0;
    this.clonedChildren = React.Children.map(this.props.children, child => {
      if (child.type === NavGroup) {
        navGroupIndex++;
        return React.cloneElement(child, {
          index: navGroupIndex,
          show: this.state.openedGroup.indexOf(navGroupIndex) > -1,
          expandAll: this.state.expandAll,
          selectedGroup: this.state.selectedGroup,
          selectedNavItem: this.state.selectedNavItem,
          handleOnNavGroupClick: this.handleOnNavGroupClick,
          handleNavItemClick: this.handleNavItemClick
        });
      }
      if (child.type === NavItem) {
        navItemIndex++;
        return React.cloneElement(child, {
          groupIndex: -1,
          index: navItemIndex,
          selected: this.state.selectedGroup === 0 && this.state.selectedNavItem === navItemIndex,
          handleNavItemClick: this.handleNavItemClick
        });
      }
      if (child.type === ExpandAllButton) {
        return React.cloneElement(child, {
          handleToggleExpandAllButtonClick: this.handleToggleExpandAllButtonClick,
          expandAll: this.state.expandAll
        });
      }
    });
    return (
      <ul className={classNames("lg-side-nav", this.props.className)}>
        {this.clonedChildren}
      </ul>
    );
  }
}

Nav.defaultProps = {
  expandAll: false,
  openedGroup: []
};

export default Nav;
