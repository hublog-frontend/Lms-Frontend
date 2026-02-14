import React, { useState, useEffect } from "react";
import { Row, Col, Tabs, Button } from "antd";
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
import { Modal } from "antd";
import CommonSpinner from "../Common/CommonSpinner";
import CommonInputField from "../Common/CommonInputField";
import { addressValidator } from "../Common/Validation";
import { createModule, getModules, getReviews } from "../ApiService/action";
import { CommonMessage } from "../Common/CommonMessage";
import NodataImage from "../../assets/nodata.png";

export default function CourseVideos({
  setIsOpenCourseTab,
  clickedCourseDetails,
  setClickedCourseDetails,
}) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [accordionIndex, setAccordionIndex] = useState(null);
  const [modulesData, setModulesData] = useState([]);
  const [reviewsData, setReviewsData] = useState([]);
  const [isOpenAddModuleModal, setIsOpenAddModuleModal] = useState(false);
  const [moduleName, setModuleName] = useState("");
  const [moduleNameError, setModuleNameError] = useState("");
  const [moduleTitle, setModuleTitle] = useState("");
  const [moduleTitleError, setModuleTitleError] = useState("");
  const [validationTrigger, setValidationTrigger] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  useEffect(() => {
    getModulesData();
  }, []);

  const getModulesData = async () => {
    try {
      const response = await getModules(clickedCourseDetails?.id);
      console.log("get modules response", response);
      const data = response?.data?.data || [];

      if (data.length >= 1) {
        const alterData = data.map((item) => {
          if (item.title == "Loops") {
            return {
              ...item,
              lessons: [
                { id: 1, name: "Count number of digits in a number" },
                { id: 2, name: "Factorial of a number" },
                {
                  id: 3,
                  name: "Greatest Common Divisor : Highest Common Factor. (GCD:HCF)",
                },
                { id: 4, name: "Lowest Common Factor" },
                { id: 5, name: "AES Numbers" },
                {
                  id: 6,
                  name: "Prime Numbers | Find if the number is prime or not",
                },
                { id: 7, name: "Trailing zeros" },
              ],
            };
          } else if (item.title == "Arrays") {
            return {
              ...item,
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
            };
          } else {
            return { ...item, lessons: [] };
          }
        });
        console.log("alterData", alterData);
        setModulesData(alterData);
      } else {
        setModulesData([]);
      }
      // setModulesData(response?.data?.data || []);
    } catch (error) {
      setModulesData([]);
      console.log("get modules error", error);
    } finally {
      setTimeout(() => {
        getReviewsData();
      }, 300);
    }
  };

  const getReviewsData = async () => {
    try {
      const response = await getReviews(clickedCourseDetails?.id);
      console.log("get reviews response", response);
      setReviewsData(response?.data?.data || []);
    } catch (error) {
      setReviewsData([]);
      CommonMessage(
        "error",
        error?.response?.data?.details ||
          "Something went wrong. Try again later",
      );
    }
  };

  const handleCreateModule = async () => {
    setValidationTrigger(true);
    const moduleNameValidate = addressValidator(moduleName);
    const moduleTitleValidate = addressValidator(moduleTitle);

    setModuleNameError(moduleNameValidate);
    setModuleTitleError(moduleTitleValidate);

    if (moduleNameValidate || moduleTitleValidate) return;

    setButtonLoading(true);
    const payload = {
      course_id: clickedCourseDetails?.id,
      module_name: moduleName,
      title: moduleTitle,
    };
    try {
      await createModule(payload);
      setTimeout(() => {
        setButtonLoading(false);
        formReset();
        getModulesData();
        CommonMessage("success", "Module Created Successfully!");
      }, 300);
    } catch (error) {
      setButtonLoading(false);
      CommonMessage(
        "error",
        error?.response?.data?.details ||
          "Something went wrong. Try again later",
      );
    }
  };

  const formReset = () => {
    setValidationTrigger(false);
    setIsOpenAddModuleModal(false);
    setModuleName("");
    setModuleNameError("");
    setModuleTitle("");
    setModuleTitleError("");
  };

  return (
    <div>
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <IoArrowBackOutline
              size={30}
              style={{ cursor: "pointer" }}
              onClick={() => {
                setIsOpenCourseTab(true);
                setClickedCourseDetails(null);
              }}
            />
            <p className="common_heading">Problem Solving</p>
          </div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={12}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <button
            className="courses_createcourse_button"
            onClick={() => setIsOpenAddModuleModal(true)}
          >
            Create Module
          </button>
        </Col>
      </Row>

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
                  children: (
                    <CourseOverview courseDetails={clickedCourseDetails} />
                  ),
                },
                {
                  label: "Discussion",
                  key: "2",
                  children: (
                    <CourseDiscussion
                      courseDetails={clickedCourseDetails}
                      reviewsData={reviewsData}
                    />
                  ),
                },
                {
                  label: "Reviews",
                  key: "3",
                  children: (
                    <CourseReviews
                      courseDetails={clickedCourseDetails}
                      reviewsData={reviewsData}
                    />
                  ),
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
          {modulesData.map((item, index) => {
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
                        {item.module_name}
                        <span
                          style={{
                            color:
                              accordionIndex == index && isAccordionOpen
                                ? "#fff"
                                : "#667085",
                          }}
                        >
                          {item.title}
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
                            <p style={{ fontSize: "16px" }}>
                              {item.lessons.length} Lessons
                            </p>
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
                      {item.lessons.length >= 1 ? (
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
                      ) : (
                        <div className="coursevideos_nolessons_container">
                          <img src={NodataImage} />
                          <p>No lessons found</p>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </Col>
      </Row>

      {/* create module modal */}
      <Modal
        title={"Add Module"}
        open={isOpenAddModuleModal}
        onCancel={formReset}
        width="35%"
        footer={[
          <Button
            key="cancel"
            onClick={formReset}
            className="courses_addmodule_modal_cancelbutton"
          >
            Cancel
          </Button>,

          buttonLoading ? (
            <Button
              key="create"
              type="primary"
              className="courses_addmodule_modal_loading_createbutton"
            >
              <CommonSpinner />
            </Button>
          ) : (
            <Button
              key="create"
              type="primary"
              onClick={handleCreateModule}
              className="courses_addmodule_modal_createbutton"
            >
              {"Create"}
            </Button>
          ),
        ]}
      >
        <div style={{ marginTop: "20px" }}>
          <CommonInputField
            label="Module Name"
            required={true}
            onChange={(e) => {
              setModuleName(e.target.value);
              if (validationTrigger) {
                setModuleNameError(addressValidator(e.target.value));
              }
            }}
            value={moduleName}
            error={moduleNameError}
          />
        </div>

        <div style={{ marginTop: "30px", marginBottom: "25px" }}>
          <CommonInputField
            label="Title"
            required={true}
            onChange={(e) => {
              setModuleTitle(e.target.value);
              if (validationTrigger) {
                setModuleTitleError(addressValidator(e.target.value));
              }
            }}
            value={moduleTitle}
            error={moduleTitleError}
          />
        </div>
      </Modal>
    </div>
  );
}
