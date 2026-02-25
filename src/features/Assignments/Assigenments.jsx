import React from "react";
import { Row, Col, Divider } from "antd";
import { FiLayers } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";
import { IoMdCheckmark } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import "./styles.css";
import CommonInputField from "../Common/CommonInputField";
import MNCImage from "../../assets/mncs.png";
import InfosysImage from "../../assets/infosys2.png";
import TcsImage from "../../assets/tcs.png";
import AptitudeImage from "../../assets/apti.png";
import { IoArrowForwardOutline } from "react-icons/io5";

export default function Assignments() {
  const countCardsData = [
    {
      id: 1,
      name: "Total Questions",
      count: "374",
      icon: (
        <FiLayers className="assignments_count_cards_icon" color="#6941c6" />
      ),
      icon_background_color: "#f4f3ff",
    },
    {
      id: 2,
      name: "Solved",
      count: "4",
      icon: (
        <FiCheckCircle
          className="assignments_count_cards_icon"
          color="#175cd3"
        />
      ),
      icon_background_color: "#eff8ff",
    },
    {
      id: 3,
      name: "Attempted",
      count: "9",
      icon: (
        <IoMdCheckmark
          className="assignments_count_cards_icon"
          color="#c11574"
        />
      ),
      icon_background_color: "#fdf2fa",
    },
    {
      id: 4,
      name: "Marks Obtained",
      count: "3.3 / 5.5k",
      icon: (
        <FaRegStar className="assignments_count_cards_icon" color="#039855" />
      ),
      icon_background_color: "#ecfdf3",
    },
  ];

  const assignmentCardsData = [
    {
      id: 1,
      name: "MNC Interview Cracker",
      image: <img src={MNCImage} className="assignment_cards_mnc_image" />,
      modules: "5",
      questions: "86",
      mark_scored: "0/3085",
    },
    {
      id: 2,
      name: "Infosys Interview Cracker",
      image: <img src={InfosysImage} className="assignment_cards_mnc_image" />,
      modules: "1",
      questions: "19",
      mark_scored: "0/190",
    },
    {
      id: 3,
      name: "TCS Interview Cracker",
      image: <img src={TcsImage} className="assignment_cards_mnc_image" />,
      modules: "3",
      questions: "78",
      mark_scored: "0/1934",
    },
    {
      id: 4,
      name: "Aptitude Interview Cracker",
      image: <img src={AptitudeImage} className="assignment_cards_mnc_image" />,
      modules: "3",
      questions: "78",
      mark_scored: "0/1934",
    },
  ];

  return (
    <div>
      <p className="common_heading">Assignments</p>

      <Row
        gutter={[
          {
            xs: 5,
            sm: 12,
            md: 16,
            lg: 16,
          },
          { xs: 8, sm: 8, md: 12, lg: 16 },
        ]}
        className="assignments_count_cards_main_container"
      >
        {countCardsData.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <Col xs={12} sm={12} md={12} lg={6}>
                <div className="assignments_count_cards">
                  <div>
                    <p className="assignments_count_cards_heading">
                      {item.name}
                    </p>
                    <p className="assignments_count_cards_count">
                      {item.count}
                    </p>
                  </div>

                  <div
                    className="assignments_count_cards_icon_container"
                    style={{ backgroundColor: item.icon_background_color }}
                  >
                    {item.icon}
                  </div>
                </div>
              </Col>
            </React.Fragment>
          );
        })}
      </Row>

      <Row>
        <Col xs={24} sm={24} md={12} lg={8}>
          <CommonInputField
            placeholder="Search for assignment"
            prefix={<CiSearch size={16} />}
          />
        </Col>
      </Row>

      <Row
        gutter={[
          {
            xs: 16,
            sm: 16,
            md: 16,
            lg: 16,
          },
          { xs: 16, sm: 16, md: 16, lg: 16 },
        ]}
        style={{ marginTop: "20px" }}
      >
        {assignmentCardsData.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <Col xs={24} sm={24} md={12} lg={8}>
                <div className="assignments_cards">
                  <div className="assignment_cards_header_container">
                    <div className="assignment_cards_header_name_container">
                      {item.image}
                      <p className="assignment_cards_header_name">
                        {item.name}
                      </p>
                    </div>

                    <div className="assignment_cards_batch_container">
                      <p>Intermediate</p>
                    </div>
                  </div>
                  <Divider className="assignment_cards_divider" />

                  <div className="assignment_cards_score_container">
                    <div className="assignment_cards_score_name_container">
                      <p>Modules</p>
                      <p>{item.modules}</p>
                    </div>

                    <div className="assignment_cards_score_name_container">
                      <p>Questions</p>
                      <p>{item.questions}</p>
                    </div>

                    <div className="assignment_cards_score_name_container">
                      <p>Mark Scored</p>
                      <p>{item.mark_scored}</p>
                    </div>
                  </div>

                  <div className="assignment_cards_container">
                    <p>Get Started</p>
                    <IoArrowForwardOutline size={19} />
                  </div>
                </div>
              </Col>
            </React.Fragment>
          );
        })}
      </Row>
    </div>
  );
}
