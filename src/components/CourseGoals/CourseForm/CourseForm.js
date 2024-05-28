import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import "./CourseForm.css";

const CourseForm = (props) => {
  const [courseData, setCourseData] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalChangeHandler = (event) => {
    setCourseData(event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (courseData.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(courseData);
    setCourseData("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label>Course Goal</label>
        <input type="text" value={courseData} onChange={goalChangeHandler} />
      </div>
      <Button>Add Goal</Button>
    </form>
  );
};

export default CourseForm;
