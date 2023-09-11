import "./App.css";
import { useState } from "react";

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
    };
    const newCourseList = [...courseList, course];
    setCourseList(newCourseList);
  };
  const deleteCourse = (courseId) => {
    setCourseList(courseList.filter((course) => courseId !== course.id));
  };
  return (
    <div className="App">
      <div className="add-course">
        <input type="text" onChange={handelChange}></input>
        <button onClick={addCourse}>Add Course</button>
      </div>
      {courseList.map((course,index) => {
        return (
          <div key={`div_${index}`}>
            <h1 key={`h1_${index}`}>{course.cousreName}</h1>
            <button key={`btn_${index}`} onClick={() => deleteCourse(course.id)}>X</button>
          </div>
        );
      })}
      <div className="list"></div>
    </div>
  );
}

export default App;
