import React, { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { Tabs } from "antd";
import "./styles.css";
import CompanyQuestions from "./CompanyQuestions";
import FavoriteCompanyQuestions from "./FavoriteCompanyQuestions";
import CommonSpinner from "../Common/CommonSpinner";
import CommonInputField from "../Common/CommonInputField";
import { addressValidator, selectValidator } from "../Common/Validation";
import ImageUploadCrop from "../Common/ImageUploadCrop";
import CommonAntdMultiSelect from "../Common/CommonAntMultiSelect";
import CommonPdfUpload from "../Common/CommonPdfUpload";

export default function CompanyQuestionsTab() {
  const [isOpenAddCompanyDrawer, setIsOpenAddCompanyDrawer] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [companyNameError, setCompanyNameError] = useState("");
  const [companyLogoBase64, setCompanyLogoBase64] = useState("");
  const [companyLogoBase64Error, setCompanyLogoBase64Error] = useState("");
  const [pdfArray, setPdfArray] = useState([]);
  const [pdfFile, setPdfFile] = useState([]);
  const [pdfFileError, setPdfFileError] = useState("");
  const [validationTrigger, setValidationTrigger] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const tabItems = [
    { label: "Company Questions", key: "1", children: <CompanyQuestions /> },
    {
      label: "Favorite Company Questions",
      key: "2",
      children: <FavoriteCompanyQuestions />,
    },
  ];

  const handleFileChange = (file) => {
    setPdfFile(file);
    setPdfFileError(selectValidator(file));
  };

  const handleSubmit = async () => {
    const companyNameValidate = addressValidator(companyName);
    const companyLogoValidate = selectValidator(companyLogoBase64);
  };

  const formReset = () => {
    setIsOpenAddCompanyDrawer(false);
    setCompanyName("");
    setCompanyNameError("");
    setCompanyLogoBase64("");
    setCompanyLogoBase64Error("");
    setPdfArray([]);
    setPdfFile(null);
    setPdfFileError("");
    setValidationTrigger(false);
    setButtonLoading(false);
  };

  return (
    <div>
      {/* <p className="common_heading" style={{ margin: 0 }}>
        Company Questions
      </p> */}
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <p className="common_heading" style={{ margin: 0 }}>
            Company Questions
          </p>
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
            onClick={() => setIsOpenAddCompanyDrawer(true)}
          >
            Create Company
          </button>
        </Col>
      </Row>

      <div style={{ marginTop: "20px" }}>
        <Tabs
          className="companyquestions_tabs"
          defaultActiveKey={tabItems[0]?.key} // ✅ auto select first visible tab
          items={tabItems}
        />
      </div>

      {/* create question drawer */}
      <Drawer
        title="Add a new company"
        onClose={formReset}
        open={isOpenAddCompanyDrawer}
        size={"40%"}
        className="courses_createcourses_drawer questions-drawer"
      >
        <div className="questions-drawer-body">
          <div className="questions-drawer-field">
            <CommonInputField
              label="Company Name"
              required={true}
              onChange={(e) => {
                setCompanyName(e.target.value);
                setCompanyNameError(addressValidator(e.target.value));
              }}
              value={companyName}
              error={companyNameError}
            />
          </div>

          <div className="questions-drawer-field-mt">
            <ImageUploadCrop
              label="Company Logo"
              aspect={1}
              maxSizeMB={1}
              required={true}
              value={companyLogoBase64}
              onChange={(base64) => setCompanyLogoBase64(base64)}
              onErrorChange={setCompanyLogoBase64Error} // ✅ pass setter directly
            />
            {companyLogoBase64Error && (
              <p
                style={{
                  fontSize: "12px",
                  color: "#d32f2f",
                  marginTop: 4,
                }}
              >
                {`Company Logo ${companyLogoBase64Error}`}
              </p>
            )}
          </div>

          <div className="questions-drawer-field-mt">
            <CommonAntdMultiSelect required={true} label="Skills" />
          </div>

          <div>
            <CommonPdfUpload
              label="Company Questions"
              required={true}
              pdfArray={pdfArray}
              setPdfArray={setPdfArray}
              onFileChange={handleFileChange}
              error={pdfFileError}
            />
          </div>
        </div>

        {/* footer */}
        <div className="courses_createcourses_drawer_footer">
          <div className="courses_createcourses_drawer_submit_buttoncontainer">
            {buttonLoading ? (
              <button className="courses_createcourses_drawer_loadingsubmitbutton">
                <CommonSpinner />
              </button>
            ) : (
              <button
                className="courses_createcourses_drawer_submitbutton"
                onClick={handleSubmit}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </Drawer>
    </div>
  );
}
