import React from "react";

import "./CourseItem.css";

const CourseItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  }
  return <li className="items" onClick={deleteHandler}>{props.children}</li>;
};

export default CourseItem;
