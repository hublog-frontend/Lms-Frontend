import React, { useState } from "react";
import { Row, Col, Tabs } from "antd";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaRegNoteSticky } from "react-icons/fa6";
import { LuClock4 } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { FiVideo } from "react-icons/fi";
import { FiBookmark } from "react-icons/fi";
import { AiTwotoneCheckCircle } from "react-icons/ai";
import { RiCheckboxCircleFill } from "react-icons/ri";
import "./styles.css";
import CourseOverview from "./CourseOverview";
import CourseDiscussion from "./CourseDiscussion";
import CourseReviews from "./CourseReviews";

export default function CourseVideos({ setIsOpenCourseTab }) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [accordionIndex, setAccordionIndex] = useState(null);

  const modules = [
    {
      id: 1,
      name: "Loops",
      lessons: [
        { id: 1, name: "Count number of digits in a number" },
        { id: 2, name: "Factorial of a number" },
        {
          id: 3,
          name: "Greatest Common Divisor : Highest Common Factor. (GCD:HCF)",
        },
        { id: 4, name: "Lowest Common Factor" },
        { id: 5, name: "AES Numbers" },
        { id: 6, name: "Prime Numbers | Find if the number is prime or not" },
        { id: 7, name: "Trailing zeros" },
      ],
    },
    {
      id: 2,
      name: "Arrays",
      lessons: [
        { id: 8, name: "Second Largest Element of an Array" },
        { id: 9, name: "Ceil and Floor of an Sorted Array" },
        {
          id: 10,
          name: "Devus Friendship",
        },
        { id: 11, name: "Span of an Array" },
        {
          id: 12,
          name: "Array Program(Walk in row,Circular array rotation,Merge array)",
        },
        { id: 13, name: "Binary Search(Java)" },
        { id: 14, name: "Linear Search" },
        { id: 14, name: "Insertion Sort" },
        { id: 15, name: "Selection sort" },
        { id: 16, name: "Bubble Sort" },
      ],
    },
  ];

  return (
    <div>
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <IoArrowBackOutline
          size={30}
          style={{ cursor: "pointer" }}
          onClick={() => {
            setIsOpenCourseTab(true);
          }}
        />
        <p className="common_heading">Problem Solving</p>
      </div>

      <Row gutter={24} style={{ marginTop: "40px" }}>
        <Col span={15}>
          <iframe
            src={`https://www.youtube.com/embed/${`hiqoCvPs_Jc`}`}
            allowFullScreen
            className="courses_iframevideos"
          ></iframe>
          <p className="coursevideos_active_video_title">
            Factorial of a number
          </p>
          <div>
            <Tabs
              className="report_tabs"
              defaultActiveKey="1"
              items={[
                {
                  label: "Overview",
                  key: "1",
                  children: <CourseOverview />,
                },
                {
                  label: "Discussion",
                  key: "2",
                  children: <CourseDiscussion />,
                },
                {
                  label: "Reviews",
                  key: "3",
                  children: <CourseReviews />,
                },
              ]}
            />
          </div>
        </Col>
        <Col span={9}>
          <p className="coursevideos_content_heading">Course Content</p>

          <div className="coursevideos_modules_container">
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <FaRegNoteSticky size={19} />
              <p style={{ fontSize: "16px" }}>8 Modules</p>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <LuClock4 size={19} />
              <p style={{ fontSize: "16px" }}>28 Hr 13.5 mins</p>
            </div>
          </div>

          {/* ----------------modules accordion---------------- */}
          {modules.map((item, index) => {
            return (
              <div className="coursevideos_accordion_maincontainer">
                <div
                  className={
                    accordionIndex == index && isAccordionOpen
                      ? "coursevideos_active_accordion_sub_container"
                      : "coursevideos_accordion_sub_container"
                  }
                >
                  <header
                    className={
                      accordionIndex == index && isAccordionOpen
                        ? "coursevideos_accordion_active_header"
                        : "coursevideos_accordion_header"
                    }
                    onClick={() => {
                      if (index == accordionIndex) {
                        setIsAccordionOpen(!isAccordionOpen);
                      } else {
                        setAccordionIndex(index);
                        setIsAccordionOpen(true);
                      }
                    }}
                  >
                    {/* --------------header left--------------- */}
                    <div>
                      <p className="coursevideos_modulename_text">
                        Module {index + 1}{" "}
                        <span
                          style={{
                            color:
                              accordionIndex == index && isAccordionOpen
                                ? "#fff"
                                : "#667085",
                          }}
                        >
                          {item.name}
                        </span>
                      </p>

                      {accordionIndex == index && isAccordionOpen ? (
                        <div className="coursevideos_active_accordion_modules_container">
                          <div className="coursevideos_lessons_container">
                            <FaRegNoteSticky size={13} />
                            <p>{item.lessons.length} Lessons</p>
                          </div>

                          <div className="coursevideos_hours_conatiner">
                            <LuClock4 size={12} />
                            <p>28 Hr 13.5 mins</p>
                          </div>
                        </div>
                      ) : (
                        <div className="coursevideos_modules_container">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 8,
                            }}
                          >
                            <FaRegNoteSticky size={19} />
                            <p style={{ fontSize: "16px" }}>8 Modules</p>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 8,
                            }}
                          >
                            <LuClock4 size={19} />
                            <p style={{ fontSize: "16px" }}>28 Hr 13.5 mins</p>
                          </div>
                        </div>
                      )}
                    </div>{" "}
                    {/* --------------header right--------------- */}
                    <div className="coursevideos_accordion_arrowcontainer">
                      <IoIosArrowDown size={19} />
                    </div>
                  </header>

                  {accordionIndex == index && isAccordionOpen && (
                    <>
                      {item.lessons.map((lesson, index) => {
                        return (
                          <React.Fragment key={index}>
                            <div className="coursevideos_accordion_content_container">
                              <div className="coursevideos_videoicon_conatiner">
                                <FiVideo color="#fff" width={16} />
                              </div>

                              <div>
                                <p className="coursevideos_videoname">
                                  {lesson.name}
                                  <FiBookmark
                                    size={18}
                                    color="#2160ad"
                                    style={{ flexShrink: 0 }}
                                  />
                                </p>
                                <p className="coursevideos_videotiming">
                                  12 mins
                                </p>
                              </div>

                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <RiCheckboxCircleFill
                                  size={20}
                                  color="#667085"
                                />
                              </div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </Col>
      </Row>
    </div>
  );
}
