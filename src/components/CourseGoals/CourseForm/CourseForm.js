import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import "./CourseForm.css";

const CourseForm = (props) => {
  const [courseData, setCourseData] = useState("");

  const goalChangeHandler = (event) => {
    setCourseData(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const courseGoalData = courseData;

    props.onAddGoal(courseGoalData);
    setCourseData("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" value={courseData} onChange={goalChangeHandler} />
      </div>
      <Button>Add Goal</Button>
    </form>
  );
};

export default CourseForm;
