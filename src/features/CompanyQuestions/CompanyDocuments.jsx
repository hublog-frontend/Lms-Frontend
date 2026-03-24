import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Row, Col } from "antd";
import { IoArrowBackOutline } from "react-icons/io5";
import { LuFile } from "react-icons/lu";
import { FiBookmark } from "react-icons/fi";
import PdfIcon from "../../assets/pdf_icon.png";

export default function CompanyDocuments() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("locationn", location);
  }, []);

  return (
    <div>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <IoArrowBackOutline
              size={30}
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/company-questions");
              }}
            />
            <p className="common_heading">
              {location?.state?.company_name || ""}
            </p>
          </div>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          className="tests_createtopic_button_container"
        ></Col>
      </Row>

      <div className="company_documents_main_container">
        <div className="company_documents_container">
          <div className="company_documents_preparation_container">
            <div className="company_documents_name_container">
              <div style={{ display: "flex", gap: "10px" }}>
                <div className="company_documents_icon_container">
                  <LuFile size={16} color="#2091d0" />
                </div>
                <div>
                  <p className="company_documents_name">
                    Thoughtmakes Technologies
                    <FiBookmark size={16} color="#2160ad" />
                  </p>
                  <p className="company_documents_page_number">
                    Pages: <span style={{ color: "#344054" }}>5</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="company_documents_pdf_icon_container">
              <img src={PdfIcon} className="company_documents_pdf_icon" />
            </div>

            <div className="company_documents_viewpdf_button_container">
              <button className="company_documents_viewpdf_button">
                View PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
