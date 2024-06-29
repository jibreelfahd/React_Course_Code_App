import React from "react";
import CouseItem from "../CourseItem/CouseItem";

import "./CourseList.css";

const CourseList = (props) => {
  return (
    <ul className="goal-list">
      {props.goals.map((goal) => (
        <CouseItem key={goal.id} id={goal.id} onDelete={props.onDeleteItem}>
          {goal.text}
        </CouseItem>
      ))}
    </ul>
  );
};

export default CourseList;
