import { useState } from "react";
import useCourseStore from "../store/useCoursesStore";

const CourseForm = () => {
  const addCourse = useCourseStore((state) => state.addCourse);
  const [courseTitle, setCourseTitle] = useState("");
  const handleCourseTitle = () => {
    if (courseTitle) {
      addCourse({
        id: new Date().getTime(),
        title: courseTitle,
        completed: false
      });
      setCourseTitle("");
    }
  };
  return (
    <div>
      <input
        type={"text"}
        value={courseTitle}
        style={{ height: "1.6rem" }}
        onChange={(e) => setCourseTitle(e.target.value)}
      />
      <button
        style={{
          padding: "0.5rem",
          color: "white",
          backgroundColor: "#313131",
          cursor: "pointer",
          border: 0
        }}
        onClick={handleCourseTitle}
      >
        Add Course
      </button>
    </div>
  );
};
export default CourseForm;
