import React, { useState } from "react";
import CourseList from "./components/CourseGoals/CourseList/CourseList";
import CourseForm from "./components/CourseGoals/CourseForm/CourseForm";

import "./App.css";
const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);

  //adding entered goals and displaying them
  const addCourseGoal = (enteredData) => {
    setCourseGoals((prevData) => {
      const courseGoalData = [...prevData];
      courseGoalData.push({ text: enteredData, id: Math.random().toString() });
      return courseGoalData;
    });
  };

  //deleting selected goals
  const deleteGoalHandler = (goalID) => {
    setCourseGoals((prevData) => {
      const updateGoals = prevData.filter((goal) => goal.id !== goalID);
      return updateGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center", fontWeight: "bold" }}>
      No Goals Available, Maybe Add Some?
    </p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseList goals={courseGoals} onDeleteItem={deleteGoalHandler} />
    );
  }
  return (
    <div className="goals">
      <div className="goal-form">
        <CourseForm onAddGoal={addCourseGoal} />
      </div>
      {content}
    </div>
  );
};

export default App;
