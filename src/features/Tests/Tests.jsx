import React from "react";
import { Row, Col } from "antd";
import TestImage from "../../assets/test-B9eTwMz3.png";
import MNCImage from "../../assets/mncs.png";
import InfosysImage from "../../assets/infosys2.png";
import "./styles.css";
import { Divider } from "antd";

export default function Tests() {
  return (
    <div>
      <p className="common_heading">Tests</p>

      <div className="tests_banner_main_container">
        <Row gutter={16}>
          <Col xs={24} sm={24} md={12} lg={12} style={{ marginBottom: "20px" }}>
            <div className="tests_banner_left_container">
              <div>
                <p className="tests_banner_heading">Employability Test</p>
                <p className="tests_banner_sub_heading">
                  We are here to help you get your dream job through this test.
                </p>

                <div style={{ marginTop: "30px" }}>
                  <button className="tests_banner_viewhistory_button">
                    View History
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={12}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: "20px",
            }}
          >
            <div className="tests_banner_left_container">
              <img src={TestImage} />
            </div>
          </Col>
        </Row>
      </div>

      <Row gutter={16} style={{ marginTop: "40px" }}>
        <Col xs={24} sm={24} md={24} lg={12} style={{ marginBottom: "20px" }}>
          <div className="tests_completetest_container">
            <div className="tests_completedtest_header">
              <p className="tests_completedtest_heading">Upcoming Test</p>
              <p className="tests_completedtest_viewall_text">View All</p>
            </div>

            <Divider className="tests_completedtests_divider" />

            <div className="tests_completedtests_empty_container">
              <p className="tests_completedtests_empty_container_text">
                No Upcoming Test currently!
              </p>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} style={{ marginBottom: "20px" }}>
          <div className="tests_completetest_container">
            <div className="tests_completedtest_header">
              <p className="tests_completedtest_heading">Completed Test</p>
              <p className="tests_completedtest_viewall_text">View All</p>
            </div>

            <Divider className="tests_completedtests_divider" />

            <div>
              <div className="tests_completedtests_card_title_container">
                <p className="tests_completedtests_card_title">Arrays Test</p>
              </div>

              <div className="tests_completedtests_duration_container">
                <p className="tests_completedtests_duration_text">
                  <span style={{ color: "#667085" }}>Duration:</span> 1h:0
                </p>

                <p className="tests_completedtests_duration_text">
                  <span style={{ color: "#667085" }}>Type:</span> Arrays
                </p>
              </div>

              <div className="tests_completedtests_conducted_container">
                <div className="tests_completedtests_conducted_date_tag">
                  Conducted on Jan 17 2026
                </div>
                <div className="tests_completedtests_conducted_time_tag">
                  10:42 AM
                </div>
              </div>

              <div className="tests_completedtests_viewresult_container">
                <button className="tests_completedtests_viewresult_button">
                  View Result
                </button>
              </div>
            </div>

            {/* <div className="tests_completedtests_empty_container">
              <p className="tests_completedtests_empty_container_text">
                No Completed Test currently!
              </p>
            </div> */}
          </div>
        </Col>
      </Row>

      <p className="tests_ondemand_heading">On Demand - Topic Tests</p>

      <div className="tests_ondemand_cards_main_container">
        <div className="tests_ondemand_cards">
          <img src={MNCImage} className="tests_ondemand_cards_image" />
          <p className="tests_ondemand_cards_names">MNC Interview Cracker</p>
        </div>

        <div className="tests_ondemand_cards">
          <img src={InfosysImage} className="tests_ondemand_cards_image" />
          <p className="tests_ondemand_cards_names">
            Infosys Interview Cracker
          </p>
        </div>
      </div>
    </div>
  );
}
