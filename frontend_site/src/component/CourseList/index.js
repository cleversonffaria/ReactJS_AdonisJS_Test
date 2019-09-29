import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function CourseList() {
  const dispatch = useDispatch();

  const courseDispatch = titulo => ({
    type: "ADD_COURSE",
    title: titulo
  });

  const addCourse = title => {
    dispatch(courseDispatch(title));
  };
  const courses = useSelector(state => state.courses.data);
  return (
    <>
      <ul>
        {courses.map(course => (
          <li key={course}>{course}</li>
        ))}
      </ul>
      <button type="button" onClick={() => addCourse("Title")}>
        Adicionar Course
      </button>
    </>
  );
}
