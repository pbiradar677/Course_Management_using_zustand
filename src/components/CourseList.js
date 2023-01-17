import useCourseStore from "../store/useCoursesStore";

const CourseList = () => {
  const { courses, removeCourse, toggleCourseStatus } = useCourseStore(
    (state) => ({
      courses: state.courses,
      removeCourse: state.removeCourse,
      toggleCourseStatus: state.toggleCourseStatus
    })
  );

  return (
    <div>
      {courses?.map((course) => {
        return (
          <div
            key={course.id}
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: "3rem",
              marginTop: "1rem",
              background: "#F7F7F7 ",
              borderRadius: "10px",
              padding: "0.5rem",
              boxShadow: "0px 0px 5px 2px #BCBCBC"
            }}
          >
            <input
              type={"checkbox"}
              checked={course.completed}
              onChange={(e) => {
                toggleCourseStatus(course.id);
              }}
            />
            <span style={{ flex: 1, alignItems: "flex-start" }}>
              {course.title}{" "}
            </span>
            <button
              onClick={() => {
                removeCourse(course.id);
              }}
              style={{
                backgroundColor: "red",
                borderRadius: "5px",
                border: 0,
                color: "white",
                cursor: "pointer",
                padding: "0.3rem"
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CourseList;
