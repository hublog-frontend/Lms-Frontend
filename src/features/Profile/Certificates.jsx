import React from "react";
import { Row, Col } from "antd";
import CommonInputField from "../Common/CommonInputField";
import CommonTextArea from "../Common/CommonTextArea";

export default function Certificates() {
  return (
    <div className="profilepage_personalinfo_main_container">
      <Row gutter={16} style={{ marginBottom: "30px" }}>
        <Col xs={24} sm={24} md={24} lg={24} style={{ marginBottom: "20px" }}>
          <CommonInputField required={true} label="Certificate Name" />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} style={{ marginBottom: "20px" }}>
          <CommonInputField required={true} label="Issuing Organization" />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} style={{ marginBottom: "20px" }}>
          <CommonInputField required={true} label="Year" type="number" />
        </Col>
        <Col span={24}>
          <CommonTextArea label="Description" required={true} />
        </Col>
      </Row>

      <div className="profilepages_personalinfo_button_container">
        <button
          className="coursereviews_rating_modal_btn coursereviews_rating_modal_cancelbutton"
          style={{ width: "max-content" }}
        >
          Cancel
        </button>
        <button
          className="coursereviews_rating_modal_btn coursereviews_rating_modal_submitbutton"
          style={{ width: "max-content" }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
