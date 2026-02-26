import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "antd";
import { IoArrowBackOutline } from "react-icons/io5";
import { HiOutlineClipboard } from "react-icons/hi";
import CommonInputField from "../Common/CommonInputField";
import { CiSearch } from "react-icons/ci";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function TestTopics() {
  const navigate = useNavigate();
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

  return (
    <div>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12}>
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
          xs={24}
          sm={24}
          md={12}
          lg={12}
          className="courses_createmodule_button_container"
        ></Col>
      </Row>

      {isHistory == false ? (
        <Row
          gutter={[
            { xs: 16, sm: 16, md: 16, lg: 16 },
            { xs: 16, sm: 16, md: 16, lg: 24 },
          ]}
          className="assignments_count_cards_main_container"
        >
          {data.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <Col xs={24} sm={24} md={24} lg={12}>
                  <div className="test_topics_cards">
                    <div className="test_topicscards_header_container">
                      <div className="tests_topiccards_header_icon_container">
                        <HiOutlineClipboard color="#667085" size={22} />
                      </div>
                      <p className="tests_topiccards_header_heading">
                        {item.name}
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
    </div>
  );
}
