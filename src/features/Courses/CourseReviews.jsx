import React from "react";
import { Progress, Rate } from "antd";
import CommonInputField from "../Common/CommonInputField";
import { FiUser } from "react-icons/fi";

export default function CourseReviews() {
  return (
    <div style={{ marginTop: "16px" }}>
      <div className="coursereviews_rating_container">
        {/* ----------left container-------------- */}
        <div className="coursereviews_rating_sub_container">
          <p className="coursereviews_averagerating_heading">Average Rating</p>
          <div className="coursereviews_averagerating_container">
            <p className="coursereviews_ratingvalue">4.6</p>
            <Rate allowHalf defaultValue={4.5} style={{ color: "#fdb002" }} />
            <p className="coursereviews_rating_text">Rating</p>
          </div>
        </div>

        {/* ----------right container-------------- */}
        <div className="coursereviews_rating_sub_container">
          <p className="coursereviews_averagerating_heading">Detailed Rating</p>
          {/* ----------rating 5------------- */}
          <div className="coursevideos_detailrating_rowconatiner">
            <Rate allowHalf defaultValue={5} style={{ color: "#fdb002" }} />
            <Progress percent={30} strokeColor="#4d80bd" />
          </div>

          {/* ----------rating 4------------- */}
          <div className="coursevideos_detailrating_rowconatiner">
            <Rate allowHalf defaultValue={4} style={{ color: "#fdb002" }} />
            <Progress percent={30} strokeColor="#4d80bd" />
          </div>

          {/* ----------rating 3------------- */}
          <div className="coursevideos_detailrating_rowconatiner">
            <Rate allowHalf defaultValue={3} style={{ color: "#fdb002" }} />
            <Progress percent={30} strokeColor="#4d80bd" />
          </div>

          {/* ----------rating 2------------- */}
          <div className="coursevideos_detailrating_rowconatiner">
            <Rate allowHalf defaultValue={2} style={{ color: "#fdb002" }} />
            <Progress percent={30} strokeColor="#4d80bd" />
          </div>

          {/* ----------rating 1------------- */}
          <div className="coursevideos_detailrating_rowconatiner">
            <Rate allowHalf defaultValue={1} style={{ color: "#fdb002" }} />
            <Progress percent={30} strokeColor="#4d80bd" />
          </div>
        </div>
      </div>

      <div className="coursediscussion_commentfield_container">
        <div style={{ width: "100%" }}>
          <CommonInputField label="Add a review" multiline={true} />
        </div>
        <button className="coursedisscion_addcomment_button">Submit</button>
      </div>

      <div className="coursereviews_reviews_container">
        <div>
          <div className="coursereviews_discussion_header">
            <div className="coursereviews_discussion_avatar_main_container">
              <div className="coursereviews_discussion_avatar_div">
                <FiUser size={20} color="#2160ad" />
              </div>

              <div>
                <p className="coursereviews_username">
                  Yellarubailu Hemavathi{" "}
                </p>
                <p className="coursereviews_review_datetime">03 Sep 2024</p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <Rate allowHalf defaultValue={4.0} style={{ color: "#fdb002" }} />
            </div>
          </div>

          <p className="coursereviews_review_datetime">Excellent teaching</p>
        </div>
      </div>
    </div>
  );
}
