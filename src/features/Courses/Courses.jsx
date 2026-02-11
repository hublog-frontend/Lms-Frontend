import React, { useState } from "react";
import { Col, Row } from "antd";
import CommonOutlinedInput from "../Common/CommonOutlinedInput";
import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { FaRegNoteSticky } from "react-icons/fa6";
import { LuClock4 } from "react-icons/lu";
import { IoArrowForwardOutline } from "react-icons/io5";
import ProblemSolvingImage from "../../assets/problem_solving_tab academy.png";
import "./styles.css";
import CourseVideos from "./CourseVideos";

export default function Courses() {
  const [searchValue, setSearchValue] = useState("");
  const [isOpenCourseTab, setIsOpenCourseTab] = useState(true);

  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  return (
    <div>
      {isOpenCourseTab ? (
        <>
          <p className="common_heading">Courses</p>

          <Row style={{ marginTop: "20px" }}>
            <Col span={6}>
              <CommonOutlinedInput
                label="Search for Course"
                width="100%"
                height="36px"
                labelFontSize="12px"
                icon={
                  searchValue ? (
                    <div
                      className="courses_filter_closeIconContainer"
                      onClick={() => {
                        setSearchValue("");
                      }}
                    >
                      <IoIosClose size={11} />
                    </div>
                  ) : (
                    <CiSearch size={16} />
                  )
                }
                labelMarginTop="0px"
                style={{
                  padding: searchValue ? "0px 26px 0px 0px" : "0px 8px 0px 0px",
                }}
                onChange={handleSearch}
                value={searchValue}
              />
            </Col>
          </Row>

          <Row gutter={16} style={{ marginTop: "20px" }}>
            <Col span={8}>
              <div
                className="courses_cards"
                onClick={() => {
                  setIsOpenCourseTab(false);
                }}
              >
                <img src={ProblemSolvingImage} className="courses_images" />

                <div className="courses_cards_contentcontainer">
                  <p className="courses_course_title">Problem Solving</p>

                  <Row className="courses_modules_row_container">
                    <Col
                      span={12}
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                    >
                      <FaRegNoteSticky size={16} />
                      <p style={{ fontSize: "16px" }}>8 Modules</p>
                    </Col>

                    <Col
                      span={12}
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                    >
                      <LuClock4 size={16} />
                      <p style={{ fontSize: "16px" }}>28 Hr 13.5 mins</p>
                    </Col>
                  </Row>

                  <div className="courses_getstart_container">
                    <p>Get Started</p>
                    <IoArrowForwardOutline size={19} />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </>
      ) : (
        <CourseVideos setIsOpenCourseTab={setIsOpenCourseTab} />
      )}
    </div>
  );
}
