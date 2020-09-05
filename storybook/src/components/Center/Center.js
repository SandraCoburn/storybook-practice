import React from "react";
import "./Center.css";
//This is a utility component - a decotaror
//Decorators are components that wrap a story
function Center(props) {
  return <div className="center">{props.children}</div>;
}
export default Center;
