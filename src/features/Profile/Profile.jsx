import React from "react";
import { Row, Col, Progress } from "antd";
import ProfileCoverImage from "../../assets/profile_cover.jpeg";
import "./styles.css";
import { Tag } from "antd";
import { Tabs } from "antd";
import PersonalInfo from "./PersonalInfo";

export default function Profile() {
  return (
    <div>
      <p className="common_heading">Profile</p>

      <Row gutter={28} style={{ marginTop: "30px" }}>
        <Col xs={24} sm={24} md={24} lg={9}>
          <div className="profile_leftcontainer">
            <div className="profile_left_header_container">
              <img src={ProfileCoverImage} className="profile_cover_image" />
            </div>

            <div className="profile_avatar_container">
              <div className="profilepage_avatar">
                <h6 className="profilepage_avatar_name_first_letter">B</h6>
              </div>
              <p className="profilepage_name_text">Balaji</p>
              <div className="profilepage_studenttag">
                <p>Student</p>
              </div>
            </div>

            <div className="profilepage_progress_container">
              <div className="profilepage_progress_sub_container">
                <Progress type="circle" percent={50} size={65} />
                <p className="profilepage_progress_text">Course Progress</p>
              </div>

              <div className="profilepage_progress_sub_container">
                <Progress type="circle" percent={50} size={65} />
                <p className="profilepage_progress_text">Assignment Progress</p>
              </div>
            </div>
          </div>
        </Col>

        <Col xs={24} sm={24} md={24} lg={15}>
          <div className="profilepage_right_container">
            <p className="profilepage_profilesetting_heading">
              Profile Setting
            </p>

            <Tabs
              className="profilepage_tabs"
              defaultActiveKey="1"
              items={[
                {
                  label: "Personal Info",
                  key: "1",
                  children: <PersonalInfo />,
                },
                {
                  label: "Experiences",
                  key: "2",
                  children: <div>Hii</div>,
                },
                {
                  label: "Education",
                  key: "3",
                  children: <div>Hii</div>,
                },
                {
                  label: "Projects",
                  key: "4",
                  children: <div>Hii</div>,
                },
                {
                  label: "Certifications",
                  key: "5",
                  children: <div>Hii</div>,
                },
              ]}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
