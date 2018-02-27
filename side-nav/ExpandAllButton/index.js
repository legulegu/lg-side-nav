import React from "react";
import classNames from "classnames";
import "./expand-all-button.scss";

const ExpandAllButton = props => {
  return (
    <button
      onClick={props.handleExpandAllButtonClick}
      className={classNames("lg-side-nav-expand-all-button", props.className)}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default ExpandAllButton;
