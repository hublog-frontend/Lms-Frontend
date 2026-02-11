import React from "react";
import CommonInputField from "../Common/CommonInputField";
import { LuSend } from "react-icons/lu";

export default function CourseDiscussion() {
  return (
    <div style={{ marginTop: "16px" }}>
      <div className="coursediscussion_commentfield_container">
        <div style={{ width: "100%" }}>
          <CommonInputField label="Comment" multiline={true} />
        </div>
        <button className="coursedisscion_addcomment_button">
          <LuSend size={19} />
        </button>
      </div>
    </div>
  );
}
