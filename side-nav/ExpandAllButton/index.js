import React from "react";
import classNames from "classnames";
import "./expand-all-button.scss";

const ExpandAllButton = props => {
  return (
    <button
      onClick={props.handleToggleExpandAllButtonClick}
      className={classNames("lg-side-nav-expand-all-button", props.className)}
    >
      {props.expandAll ? "收起全部" : "展开全部"}
    </button>
  );
};

export default ExpandAllButton;
