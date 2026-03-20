import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Row, Col, Modal, Button } from "antd";
import { IoArrowBackOutline } from "react-icons/io5";
import { HiOutlineClipboard } from "react-icons/hi";
import CommonInputField from "../Common/CommonInputField";
import { CiSearch } from "react-icons/ci";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { createTest, getTests } from "../ApiService/action";
import CommonNodataFound from "../Common/CommonNoDataFound";
import { addressValidator, formatToBackendIST } from "../Common/Validation";
import { CommonMessage } from "../Common/CommonMessage";
import CommonSpinner from "../Common/CommonSpinner";
import { AiOutlineEdit } from "react-icons/ai";

export default function TestTopics() {
  const navigate = useNavigate();
  const { topicId } = useParams();
  const [editTestId, setEditTestId] = useState(null);
  const [isOpenAddTestModal, setIsOpenAddTestModal] = useState(false);
  const [testName, setTestName] = useState("");
  const [testNameError, setTestNameError] = useState("");
  const [validationTrigger, setValidationTrigger] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [testsData, setTestsData] = useState([]);

  const data = [
    { id: 1, name: "Loops" },
    { id: 2, name: "Arrays" },
    { id: 3, name: "Patterns" },
  ];
  const [isHistory, setIsHistory] = useState(false);
  const historyData = [
    { id: 1, name: "Loops Test" },
    { id: 2, name: "Loops Test" },
    { id: 3, name: "Loops Test" },
  ];

  useEffect(() => {
    console.log("paramssss", topicId);
    getTestsData();
  }, []);

  const getTestsData = async () => {
    const payload = {
      topic_id: topicId,
      page: 1,
      pageSize: 1000,
    };
    try {
      const response = await getTests(payload);
      console.log("get tests response", response);
      const tests_data = response?.data?.tests || [];
      setTestsData(tests_data);
    } catch (error) {
      setTestsData([]);
      console.log("get tests error", error);
    }
  };

  const handleCreateTest = async () => {
    setValidationTrigger(true);
    const testNameValidate = addressValidator(testName);

    setTestNameError(testNameValidate);

    if (testNameValidate) return;

    setButtonLoading(true);
    const today = new Date();

    const payload = {
      ...(editTestId ? { test_id: editTestId } : {}),
      topic_id: topicId,
      test_name: testName,
      created_date: formatToBackendIST(today),
    };

    try {
      await createTest(payload);
      setTimeout(() => {
        setButtonLoading(false);
        formReset();
        getTestsData();
        CommonMessage(
          "success",
          `Test ${editTestId ? "Updated" : "Created"} Successfully!`,
        );
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
    setIsOpenAddTestModal(false);
    setTestName("");
    setTestNameError("");
    setValidationTrigger(false);
    setButtonLoading(false);
  };

  return (
    <div>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <IoArrowBackOutline
              size={30}
              style={{ cursor: "pointer" }}
              onClick={() => {
                if (isHistory == false) {
                  navigate("/tests");
                } else {
                  setIsHistory(false);
                }
              }}
            />
            <p className="common_heading">OnDemand Tests</p>
          </div>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          className="tests_createtopic_button_container"
        >
          <button
            className="courses_createcourse_button"
            onClick={() => setIsOpenAddTestModal(true)}
          >
            Create Test
          </button>
        </Col>
      </Row>

      {isHistory == false ? (
        <Row
          gutter={[
            { xs: 16, sm: 16, md: 16, lg: 16 },
            { xs: 16, sm: 16, md: 16, lg: 24 },
          ]}
          className="assignments_count_cards_main_container"
        >
          {testsData.length >= 1 ? (
            <>
              {testsData.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <Col xs={24} sm={24} md={24} lg={12}>
                      <div className="test_topics_cards">
                        <div className="ondemand_tests_icon_container">
                          <AiOutlineEdit
                            size={16}
                            onClick={(e) => {
                              e.stopPropagation();
                              setEditTestId(item.id);
                              setTestName(item.test_name);
                              setIsOpenAddTestModal(true);
                            }}
                          />
                        </div>
                        <div className="test_topicscards_header_container">
                          <div className="tests_topiccards_header_icon_container">
                            <HiOutlineClipboard color="#667085" size={22} />
                          </div>
                          <p className="tests_topiccards_header_heading">
                            {item.test_name}
                          </p>
                        </div>

                        <div className="test_topicscards_footer_container">
                          <button
                            key="cancel"
                            className="coursereviews_rating_modal_btn coursereviews_rating_modal_cancelbutton"
                            onClick={() => {
                              setIsHistory(true);
                            }}
                          >
                            View History
                          </button>

                          <button
                            key="create"
                            type="primary"
                            className="coursereviews_rating_modal_btn coursereviews_rating_modal_submitbutton"
                            // onClick={handleReviewSubmit}
                          >
                            Retake Test
                          </button>
                        </div>
                      </div>
                    </Col>
                  </React.Fragment>
                );
              })}
            </>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <CommonNodataFound message="No tests found" />
            </div>
          )}
        </Row>
      ) : (
        <>
          <Row gutter={16} className="assignments_count_cards_main_container">
            <Col xs={24} sm={24} md={16} lg={8}>
              <CommonInputField
                placeholder="Search for Test"
                prefix={<CiSearch size={18} />}
              />
            </Col>
          </Row>

          <Row
            gutter={[
              { xs: 16, sm: 16, md: 16, lg: 16 },
              { xs: 16, sm: 16, md: 16, lg: 24 },
            ]}
            className="assignments_count_cards_main_container"
          >
            {historyData.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <Col xs={24} sm={24} md={24} lg={12} xl={8} xxl={8}>
                    <div className="testhistory_cards">
                      <div className="test_history_cards_header_container">
                        <p className="tests_topiccards_header_heading">
                          {item.name}
                        </p>
                        <IoIosCheckmarkCircle size={24} color="#039855" />
                      </div>

                      <div className="test_history_card_tag_main_container">
                        <div className="test_history_card_tag_row_div">
                          <div className="test_history_card_typetag_div">
                            On Demand Test
                          </div>
                          <div className="test_history_card_datetag_div">
                            Conducted on Jan 10 2026
                          </div>
                        </div>

                        <div className="test_history_card_timetag_container">
                          03:43 PM
                        </div>

                        <div style={{ marginTop: "12px" }}>
                          <button className="test_history_card_viewresult_button">
                            View Result
                          </button>
                        </div>
                      </div>
                    </div>
                  </Col>
                </React.Fragment>
              );
            })}
          </Row>
        </>
      )}

      {/* add test modal */}
      <Modal
        title={"Add New Test"}
        open={isOpenAddTestModal}
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
              onClick={handleCreateTest}
              className="courses_addmodule_modal_createbutton"
            >
              {editTestId ? "Update" : "Create"}
            </Button>
          ),
        ]}
      >
        <div style={{ marginTop: "20px", marginBottom: "24px" }}>
          <CommonInputField
            label="Test Name"
            required={true}
            onChange={(e) => {
              setTestName(e.target.value);
              if (validationTrigger) {
                setTestNameError(addressValidator(e.target.value));
              }
            }}
            value={testName}
            error={testNameError}
          />
        </div>
      </Modal>
    </div>
  );
}
