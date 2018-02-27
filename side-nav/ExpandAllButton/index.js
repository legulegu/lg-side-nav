import React from "react";
import classNames from "classnames";
import "./expand-all-button.scss";

const ExpandAllButton = props => {
  return (
    <button
      className={classNames("expand-all-button", props.className)}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default ExpandAllButton;
