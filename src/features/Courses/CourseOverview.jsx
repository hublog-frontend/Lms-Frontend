import React from "react";

export default function CourseOverview() {
  return (
    <div style={{ marginTop: "16px" }}>
      <p className="courseoverview_headings">Course Description</p>
      <p className="courseoverview_contents">
        The objective of this course is to develop a strong foundation in
        problem-solving techniques using programming concepts such as loops,
        strings, and arrays. Here you will learn to analyze problems, design
        efficient algorithms, and implement solutions using these core
        programming constructs, enhancing their logical thinking and coding
        skills.
      </p>

      <p className="courseoverview_headings">Course Outcomes</p>
      <div className="courseoutcomes_container">
        <p className="courseoutcomes_content">
          By the end of this course, you will be able to understand and solve
          problems using loops, strings, and arrays, and design efficient
          algorithms to approach these tasks. You will enhance your ability to
          read and comprehend optimized code while strengthening your logical
          reasoning and analytical skills in programming.
        </p>
      </div>
    </div>
  );
}
