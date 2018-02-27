import React from "react";
import classNames from "classnames";
import "./expand-all-button.scss";

const ExpandAllButton = props => {
  return (
    <button
      onClick={props.handleToggleExpandAllButtonClick}
      className={classNames("lg-side-nav-expand-all-button", props.className)}
    >
      {props.expandAll ? (
        <React.Fragment>
          收起全部 <span className="lg-side-nav-expand-all-button-icon-minus">-</span>
        </React.Fragment>
      ) : (
        <React.Fragment>
          展开全部 <span className="lg-side-nav-expand-all-button-icon-plus">+</span>
        </React.Fragment>
      )}
    </button>
  );
};

export default ExpandAllButton;
