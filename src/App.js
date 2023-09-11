import './App.css';
import { useState } from 'react';

function App() {
  const[courseList,setCourseList]=useState([]);
  const[newCourse,setNewCourse]=useState("");
  const handelChange=(event)=>{
    setNewCourse(event.target.value)
  }
  const addCourse=()=>{
    const newCourseList=[...courseList,newCourse]
    setCourseList(newCourseList);
  }
  const deleteCourse=(courseName)=>{
    setCourseList(courseList.filter((course)=>courseName!==course))
  }
  return (
    <div className="App">
      <div className="add-course">
        <input type='text' onChange={handelChange}></input>
        <button onClick={addCourse}>Add Course</button>
      </div>
      {courseList.map((course)=>{
        return (
        <div>
        <h1>{course}</h1>
        <button onClick={()=>deleteCourse(course)}>X</button>
        </div>
        )
      })}
      <div className='list'></div>
    </div>
  );
}

export default App;
