import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "antd";
import Logo from "../../assets/logo.png";
import { FaCode } from "react-icons/fa6";
import { GrNotes } from "react-icons/gr";
import { FiEyeOff, FiEye } from "react-icons/fi";
import "./styles.css";
import CommonInputField from "../Common/CommonInputField";
import CommonOutlinedInput from "../Common/CommonOutlinedInput";
import { MdOutlineEmail } from "react-icons/md";
import { emailValidator, passwordValidator } from "../Common/Validation";
import { LoginApi } from "../ApiService/action";
import { CommonMessage } from "../Common/CommonMessage";
import CommonSpinner from "../Common/CommonSpinner";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [validationTrigger, setValidationTrigger] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidationTrigger(true);

    const emailValidate = emailValidator(email);
    const passwordValidate = passwordValidator(password);

    setEmailError(emailValidate);
    setPasswordError(passwordValidate);

    if (emailValidate || passwordValidate) return;

    setLoading(true);

    const payload = {
      email: email,
      password: password,
    };
    try {
      const response = await LoginApi(payload);
      console.log("login response", response);
      const loginUserDetails = response?.data?.data;
      localStorage.setItem("AccessToken", response?.data?.token);
      localStorage.setItem(
        "loginUserDetails",
        JSON.stringify(loginUserDetails),
      );
      setTimeout(() => {
        setLoading(false);
        navigate("/dashboard");
      }, 300);
    } catch (error) {
      console.log("login error");
      setLoading(false);
      CommonMessage(
        "error",
        error?.response?.data?.details ||
          "Something went wrong. Try again later",
      );
    }
  };

  return (
    <div>
      <Row>
        <Col span={12} className="loginpage_left_maincontainer">
          <div>
            <div className="loginpage_logo_container">
              <img src={Logo} className="loginpage_logo" />
            </div>
            <h1 className="loginpage_title">
              <span style={{ color: "#ffde59" }}>Gamify</span> Learning,
            </h1>
            <h1 className="loginpage_title" style={{ marginTop: "12px" }}>
              <span style={{ color: "#ffde59" }}>Simplify </span> Employment
            </h1>

            <div className="loginpage_cards_container">
              {/* ----------------left card------------------ */}
              <div className="loginpage_cards">
                <div className="loginpage_cards_icon_container">
                  <FaCode size={24} />
                </div>
                <h1 className="loginpage_cards_heading">Learn Through Play</h1>
                <p className="loginpage_cards_description">
                  Master coding with interactive challenges and rewards
                </p>
              </div>

              {/* ----------------right card------------------ */}
              <div className="loginpage_cards">
                <div className="loginpage_cards_icon_container">
                  <GrNotes size={24} />
                </div>
                <h1 className="loginpage_cards_heading">Direct Placement</h1>
                <p className="loginpage_cards_description">
                  Get placed in top tech companies
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col span={12} className="loginpage_right_maincontainer">
          <div>
            <p className="loginpage_login_heading">Login</p>
            <p className="loginpage_description">
              Enter your email and password to continue your journey with Acte
              Technologies
            </p>

            <form>
              <div style={{ marginTop: "30px" }}>
                <CommonOutlinedInput
                  label="Email"
                  icon={<MdOutlineEmail size={18} />}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (validationTrigger) {
                      setEmailError(emailValidator(e.target.value));
                    }
                  }}
                  value={email}
                  error={emailError}
                />
              </div>

              <div style={{ marginTop: "30px" }}>
                <CommonOutlinedInput
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  icon={
                    <>
                      {showPassword ? (
                        <FiEye
                          size={18}
                          color="gray"
                          style={{ cursor: "pointer" }}
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      ) : (
                        <FiEyeOff
                          size={18}
                          color="gray"
                          style={{ cursor: "pointer" }}
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      )}
                    </>
                  }
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (validationTrigger) {
                      setPasswordError(passwordValidator(e.target.value));
                    }
                  }}
                  value={password}
                  error={passwordError}
                  helperTextContainerStyle={{
                    position: "absolute",
                    bottom: passwordError.includes("special character")
                      ? "-21px"
                      : "0px",
                    width: "100%",
                  }}
                />
              </div>

              <div className="loginpage_forgotpassword_container">
                <p className="loginpage_forgotpassword">Forgot Password?</p>
              </div>

              {loading ? (
                <button className="loginpage_loading_submitbutton">
                  <CommonSpinner />
                </button>
              ) : (
                <button
                  className="loginpage_submitbutton"
                  onClick={handleSubmit}
                >
                  Continue
                </button>
              )}
            </form>
          </div>
        </Col>
      </Row>
    </div>
  );
}
