import React from "react";
import NodataImage from "../../assets/nodata.png";
import "./commonstyles.css";

export default function CommonNodataFound() {
  return (
    <div className="nodata_main_container">
      <div className="nodata_container">
        <img src={NodataImage} className="nodata_image" />
        <p className="nodata_message">No courses found</p>
      </div>
    </div>
  );
}
