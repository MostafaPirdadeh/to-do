import "./App.css";
import { useState } from "react";
import Course from "./components/Course";

function App() {
  const [courseList, setCourseList] = useState([]);
  const [newCourse, setNewCourse] = useState("");
  const handelChange = (event) => {
    setNewCourse(event.target.value);
  };
  const addCourse = () => {
    const course = {
      id:
        courseList.length === 0 ? 1 : courseList[courseList.length - 1].id + 1,
      cousreName: newCourse,
      isComplated: false,
    };
    const newCourseList = [...courseList, course];
    setCourseList(newCourseList);
  };
  const deleteCourse = (courseId) => {
    setCourseList(courseList.filter((course) => courseId !== course.id));
  };
  const complateCourse = (courseId) => {
    const newCourseList = courseList.map((course) => {
      if (course.id === courseId)
        return { ...course, isComplated: !course.isComplated };
      else return course;
    });
    setCourseList(newCourseList);
  };
  return (
    <div className="App">
      <div className="add-course">
        <input type="text" onChange={handelChange}></input>
        <button onClick={addCourse}>Add Course</button>
      </div>
      {courseList.map((course, index) => {
        return (
          <Course key={index} course={course} deleteCourse={deleteCourse} complateCourse={complateCourse} />
        );
      })}
      <div className="list"></div>
    </div>
  );
}

export default App;
