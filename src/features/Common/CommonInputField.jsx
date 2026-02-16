import React from "react";
import { Input } from "antd";
import "./commonstyles.css";
import { capitalizeWords } from "./Validation";

export default function CommonInputField({
  label,
  value,
  onChange,
  error,
  required,
  height,
  labelFontSize,
  errorFontSize,
  ref,
  maxLength,
  type,
  onFocus,
  disabled,
  onInput,
  borderLeftNone,
}) {
  const handleChange = (e) => {
    let value = e.target.value.replace(/^\s+/, "");

    if (
      label === "Email" ||
      label === "Trainer Email" ||
      label === "User Id" ||
      label === "Role Name" ||
      label === "IFSC Code" ||
      label === "Address" ||
      label === "Description" ||
      label === "Outcomes" ||
      label === "Attendance Sheet Link"
    ) {
      onChange?.({ target: { value } });
    } else {
      const newValue = capitalizeWords(value);
      onChange?.({ target: { value: newValue } });
    }
  };

  return (
    <div className="common_inputfield_wrapper">
      {/* ✅ Label */}
      {label && (
        <label className="common_inputfields_label">
          {label} {required && <span style={{ color: "red" }}>*</span>}
        </label>
      )}

      {/* ✅ Single line Input */}
      <Input
        className={
          error ? "common_antd_error_inputfield" : "common_antd_inputfield"
        }
        ref={ref}
        value={value}
        onChange={handleChange}
        onFocus={onFocus}
        onInput={onInput}
        disabled={disabled}
        maxLength={maxLength}
        type={type}
        status={error ? "error" : ""}
        autoComplete="on"
        style={{
          height: height || 32,
          borderTopLeftRadius: borderLeftNone ? 0 : 6,
          borderBottomLeftRadius: borderLeftNone ? 0 : 6,
        }}
      />

      {/* ✅ Error Text */}
      {error && (
        <div className="common_inputfields_error_text">
          {label === "Paid Now" ? "" : label} {error}
        </div>
      )}
    </div>
  );
}
