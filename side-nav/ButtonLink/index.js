import React from "react";
import classNames from "classnames";
import "./button-link.scss";

const Link = props => {
  return (
    <a
      href={props.href}
      className={classNames("link", props.className)}
      {...props}
    >
      {props.children}
    </a>
  );
};

export default Link;
