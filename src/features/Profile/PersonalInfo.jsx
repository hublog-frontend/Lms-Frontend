import React, { useState } from "react";
import { Row, Col, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { LuCloudUpload } from "react-icons/lu";
import { FaUserLarge } from "react-icons/fa6";
import CommonInputField from "../Common/CommonInputField";
import CommonSelectField from "../Common/CommonSelectField";
import CommonMuiDatePicker from "../Common/CommonMuiDatePicker";
import CommonMultiSelect from "../Common/CommonMultiSelect";
import { AiOutlineEnter } from "react-icons/ai";
import CommonDatePicker from "../Common/CommonDatePicker";
import CommonAntdMultiSelect from "../Common/CommonAntMultiSelect";

const { Dragger } = Upload;

export default function PersonalInfo() {
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const genderOptions = [
    { id: "Male", name: "Male" },
    { id: "Female", name: "Female" },
  ];
  const stateOptions = [{ id: 1, name: "Tamil Nadu" }];
  const yesOrNoOptions = [
    { id: "Yes", name: "Yes" },
    { id: "No", name: "No" },
  ];
  const skillsOptions = [
    { id: "Adv-java", name: "Adv-java" },
    { id: "JDBC", name: "JDBC" },
    { id: "AWS", name: "AWS" },
    { id: "Analytical Skills", name: "Analytical Skills" },
    { id: "core", name: "core" },
    { id: "Critical Thinking", name: "Critical Thinking" },
    { id: "MySQL", name: "MySQL" },
    { id: "OOPs", name: "OOPs" },
    { id: "UNIX", name: "UNIX" },
    { id: "GitHub", name: "GitHub" },
    { id: "Programming", name: "Programming" },
    { id: "SQL", name: "SQL" },
    { id: "Machine Learning", name: "Machine Learning" },
    { id: "iOS development", name: "iOS development" },
    { id: "Manual Testing", name: "Manual Testing" },
    { id: "MongoDB", name: "MongoDB" },
    { id: "Android", name: "Android" },
    { id: "C++", name: "C++" },
    { id: "Azure", name: "Azure" },
    { id: "CSS", name: "CSS" },
    { id: "Redis", name: "Redis" },
    { id: "Logical Reasoning", name: "Logical Reasoning" },
    { id: "Docker", name: "Docker" },
    { id: "DBMS", name: "DBMS" },
    { id: "Angular", name: "Angular" },
    { id: "Node", name: "Node" },
    { id: "Flutter", name: "Flutter" },
    { id: "Data structures", name: "Data structures" },
    { id: "Javascript", name: "Javascript" },
    { id: "JSP", name: "JSP" },
    { id: "Algorithms", name: "Algorithms" },
    { id: "JSTL", name: "JSTL" },
    { id: "Servlets", name: "Servlets" },
    { id: "React", name: "React" },
    { id: "Python", name: "Python" },
    { id: "GCP", name: "GCP" },
    { id: "PHP", name: "PHP" },
    { id: "Springs", name: "Springs" },
    { id: "Automation Testing", name: "Automation Testing" },
    { id: "Tomcat", name: "Tomcat" },
    { id: "Operating System", name: "Operating System" },
    { id: "Networking", name: "Networking" },
    { id: "Hibernate", name: "Hibernate" },
    { id: "C", name: "C" },
    { id: "Core java", name: "Core java" },
    { id: "Artificial Intelligence", name: "Artificial Intelligence" },
    { id: "HTML", name: "HTML" },
    { id: "JEE", name: "JEE" },
    { id: "C#", name: "C#" },
    { id: "Data Science", name: "Data Science" },
    { id: "AI - ML", name: "AI - ML" },
    { id: "Linux", name: "Linux" },
  ];

  const [skills, setSkills] = useState([]);
  const [hobbies, setHobbies] = useState([]);
  const [languages, setLanguages] = useState([]);

  return (
    <div className="profilepage_personalinfo_main_container">
      <div className="profilepage_personalinfo_profileupload_container">
        <div className="profilepage_personalinfo_profileimage_container">
          <FaUserLarge size={23} />
        </div>

        <div style={{ width: "100%" }}>
          <Dragger className="profilepage_personalinfo_dragger">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "12px",
              }}
            >
              <div className="profilepage_personalinfo_dragger_icon_container">
                <LuCloudUpload size={21} />
              </div>
            </div>
            <p className="ant-upload-text">Upload your profile image</p>
            <p className="ant-upload-hint">PNG or JPB (max. 5MB)</p>
          </Dragger>
        </div>
      </div>

      <Row gutter={16} style={{ marginTop: "30px" }}>
        <Col xs={24} sm={24} md={24} lg={12} style={{ marginBottom: "30px" }}>
          <CommonInputField required={true} label="Name" />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} style={{ marginBottom: "30px" }}>
          <CommonSelectField
            required={true}
            options={genderOptions}
            label="Gender"
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} style={{ marginBottom: "30px" }}>
          <CommonInputField required={true} label="Email" />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} style={{ marginBottom: "30px" }}>
          <CommonInputField required={true} label="Mobile" />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} style={{ marginBottom: "30px" }}>
          <CommonInputField required={true} label="Whatsapp" />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} style={{ marginBottom: "30px" }}>
          <CommonDatePicker
            required={true}
            label="DOB"
            onChange={(value) => {
              setDateOfBirth(value);
            }}
            value={dateOfBirth}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} style={{ marginBottom: "30px" }}>
          <CommonInputField required={true} label="Parent/Guardian mobile" />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} style={{ marginBottom: "30px" }}>
          <CommonInputField required={true} label="Linkedin Link" />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} style={{ marginBottom: "30px" }}>
          <CommonInputField required={true} label="Instagram Link" />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} style={{ marginBottom: "30px" }}>
          <CommonSelectField required={true} label="Current State" />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} style={{ marginBottom: "30px" }}>
          <CommonInputField required={true} label="Current City" />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} style={{ marginBottom: "30px" }}>
          <CommonSelectField required={true} label="Native State" />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} style={{ marginBottom: "30px" }}>
          <CommonInputField required={true} label="Native City" />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} style={{ marginBottom: "30px" }}>
          <CommonInputField required={true} label="Permanent Address" />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} style={{ marginBottom: "30px" }}>
          <CommonInputField required={true} label="Pincode" />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} style={{ marginBottom: "30px" }}>
          <CommonSelectField
            required={false}
            label="Gap In Academics"
            options={yesOrNoOptions}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} style={{ marginBottom: "30px" }}>
          <CommonSelectField
            required={false}
            label="Enrolled In"
            options={yesOrNoOptions}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} style={{ marginBottom: "30px" }}>
          <CommonSelectField
            required={false}
            label="Ready For Relocation"
            options={yesOrNoOptions}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} style={{ marginBottom: "30px" }}>
          <CommonInputField required={false} label="Github Link" />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} style={{ marginBottom: "30px" }}>
          <CommonInputField required={false} label="Portfolio Link" />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} style={{ marginBottom: "30px" }}>
          <CommonInputField required={false} label="Portfolio Title" />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} style={{ marginBottom: "30px" }}>
          <CommonInputField required={false} multiline={true} label="Summary" />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} style={{ marginBottom: "30px" }}>
          <CommonAntdMultiSelect
            required={true}
            label="Skills"
            labelMarginTop="-1px"
            options={skillsOptions}
            onChange={(value) => {
              setSkills(value);
            }}
            value={skills}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} style={{ marginBottom: "30px" }}>
          {/* <CommonMultiSelect
            required={false}
            freeSolo={true}
            label={
              <>
                Hobbies — Press <AiOutlineEnter size={14} /> Enter to add
              </>
            }
            labelMarginTop="-1px"
            onChange={(e) => {
              setHobbies(e.target.value);
            }}
            value={hobbies}
          /> */}
          <CommonAntdMultiSelect
            label={
              <>
                Hobbies — Press <AiOutlineEnter size={14} /> Enter to add
              </>
            }
            mode="tags"
            labelMarginTop="-1px"
            onChange={(value) => {
              setHobbies(value);
            }}
            value={hobbies}
          />
        </Col>

        <Col xs={24} sm={24} md={24} lg={24} style={{ marginBottom: "30px" }}>
          <CommonAntdMultiSelect
            label={
              <>
                Languages — Press <AiOutlineEnter size={14} /> Enter to add
              </>
            }
            mode="tags"
            labelMarginTop="-1px"
            onChange={(value) => {
              setLanguages(value);
            }}
            value={languages}
          />
        </Col>

        <Col xs={24} sm={24} md={24} lg={12} style={{ marginBottom: "30px" }}>
          <CommonSelectField
            required={false}
            label="Ready to sign the service aggreement"
            options={yesOrNoOptions}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} style={{ marginBottom: "30px" }}>
          <CommonSelectField
            required={false}
            label="Placed"
            options={yesOrNoOptions}
          />
        </Col>
      </Row>
    </div>
  );
}
