import React from 'react'

function Course(props) {
  return (
    <div style={{backgroundColor:props.course.isComplated ?"green":"white"}}>
    <h1 >{props.course.cousreName}</h1>
    <button  onClick={() => props.deleteCourse(props.course.id)}>X</button>
    <button onClick={()=>props.complateCourse(props.course.id)}>complated</button>
  </div>
  )
}

export default Course