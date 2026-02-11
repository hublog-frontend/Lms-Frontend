import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import ActeLogo from "../../assets/acte-logo.png";
import Login from "../Login/Login";
import { Col, Layout, Row, theme } from "antd";
import Courses from "../Courses/Courses";
import SideMenu from "./SideMenu";
import "./styles.css";
import CourseVideos from "../Courses/CourseVideos";

const { Sider, Content, Header } = Layout;

export default function Pages() {
  const navigate = useNavigate();
  const location = useLocation();

  const [collapsed, setCollapsed] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const isPublicRoute = (path) => {
    return (
      path === "/login" ||
      path.startsWith("/trainer-registration") ||
      path.startsWith("/customer-registration") ||
      path === "/success" ||
      path === "/helpdesk"
    );
  };

  useEffect(() => {
    const token = localStorage.getItem("AccessToken");
    const path = location.pathname;

    // Public routes → no sidebar, no redirect
    if (isPublicRoute(path)) {
      setShowSidebar(false);
      return;
    }

    // Private routes → no token
    // if (!token) {
    //   setShowSidebar(false);
    //   navigate("/login", { replace: true });
    //   return;
    // }

    // Private routes → token exists
    setShowSidebar(true);
  }, [location.pathname, navigate]);

  // Render
  if (isPublicRoute(location.pathname)) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    );
  }

  // Private layout
  if (!showSidebar && !isPublicRoute(location.pathname)) return null;

  return (
    // <div>
    //   <Routes>
    //     <Route element={<Login />} path="/login" />
    //   </Routes>
    // </div>
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={280}
        onMouseEnter={() => setCollapsed(false)}
        onMouseLeave={() => setCollapsed(true)}
        className="pages_sidebar_collapsed"
        style={{
          position: "fixed",
          height: "100vh",
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 10000,
          background: "#ffffff",
          borderRight: "1px solid #eaecf0",
          transition: "all 0.3s ease-in-out",
          overflowX: "hidden",
        }}
        theme="light"
      >
        <div
          style={{
            padding: "20px 12px 12px 24px",
            position: "relative",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <img
            src={ActeLogo}
            alt="Logo"
            className={
              collapsed ? "sidebar_logo_collapsed" : "sidebar_logo_expanded"
            }
          />

          <SideMenu />
        </div>
      </Sider>

      <Layout
        style={{
          marginLeft: 72,
          transition: "all 0.3s ease-in-out",
        }}
      >
        {/* <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            position: "fixed",
            left: collapsed ? 80 : 200,
            width: `calc(100% - ${collapsed ? 80 : 200}px)`,
            zIndex: 100,
            transition: "all 0.3s ease-in-out",
          }}
        >
        </Header> */}

        <Content
          style={{
            borderTopLeftRadius: "24px",
            padding: "32px",
            minHeight: "100vh",
            // background: colorBgContainer,
            // borderRadius: borderRadiusLG,
          }}
        >
          <Routes>
            <Route element={<Courses />} path="/courses" />
            <Route element={<CourseVideos />} path="/course-videos" />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}
