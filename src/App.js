import React from "react";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";
const App = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      <h1 style={{ fontSize: "1.5rem" }}>My Course List</h1>
      <CourseForm />
      <CourseList />
    </div>
  );
};

export default App;
