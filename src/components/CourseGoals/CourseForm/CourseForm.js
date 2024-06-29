import React, { useState } from "react";
import Button from "../../UI/Button/Button";

import styles from "./CourseForm.module.css";

// import styles from "styled-components";
const CourseForm = (props) => {
  // const FormControl = styles.div`
  //   display: flex;
  //   flex-direction: column;
  //   align-items: flex-start;
  //   justify-content: flex-start;

  //   & label {
  //   font: inherit;
  //   font-weight: bold;
  //   margin-bottom: 0.5rem;
  // }

  // & input {
  //   width: 100%;
  //   margin-bottom: 1rem;
  //   padding: 0 0.25;
  //   border: 1px solid #ccc;
  //   line-height: 1.5rem;
  // }

  // & input:focus {
  //   outline: none;
  //   background: #fad0ec;
  //   border-color: #8b005d;
  // }

  // &.invalid input {
  //   background: #ffd7d7;
  //   color: red;
  // }

  // &.invalid label {
  //   color: red;
  // }
  // `;

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
      <div className={`${styles["form-control"]} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" value={courseData} onChange={goalChangeHandler} />
      </div>
      <Button>Add Goal</Button>
    </form>
  );
};

export default CourseForm;
