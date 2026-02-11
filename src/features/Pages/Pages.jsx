import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { Layout, Drawer, Button, Grid } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import ActeLogo from "../../assets/acte-logo.png";
import Login from "../Login/Login";
import Courses from "../Courses/Courses";
import SideMenu from "./SideMenu";
import CourseVideos from "../Courses/CourseVideos";
import Tests from "../Tests/Tests";
import "./styles.css";

const { Sider, Content, Header } = Layout;
const { useBreakpoint } = Grid;

export default function Pages() {
  const navigate = useNavigate();
  const location = useLocation();

  const [collapsed, setCollapsed] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const screens = useBreakpoint();
  const isMobile = !screens.md; // < 768px

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

    if (isPublicRoute(path)) {
      setShowSidebar(false);
      return;
    }

    // Uncomment if you want login protection
    // if (!token) {
    //   navigate("/login", { replace: true });
    //   return;
    // }

    setShowSidebar(true);
  }, [location.pathname, navigate]);

  if (isPublicRoute(location.pathname)) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    );
  }

  if (!showSidebar && !isPublicRoute(location.pathname)) return null;

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* ================= Desktop Sidebar ================= */}
      {!isMobile && (
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          width={280}
          onMouseEnter={() => setCollapsed(false)}
          onMouseLeave={() => setCollapsed(true)}
          style={{
            position: "fixed",
            height: "100vh",
            left: 0,
            top: 0,
            bottom: 0,
            zIndex: 1000,
            background: "#ffffff",
            borderRight: "1px solid #eaecf0",
            transition: "all 0.3s ease-in-out",
            overflowX: "hidden",
          }}
          theme="light"
        >
          <div
            style={{
              padding: "20px 12px 12px 12px",
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
      )}

      {/* ================= Mobile Header ================= */}
      {isMobile && (
        <Header
          style={{
            background: "#ffffff",
            padding: "0 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #eaecf0",
            position: "sticky",
            top: 0,
            zIndex: 1000,
          }}
        >
          <Button
            type="text"
            icon={<MenuOutlined style={{ fontSize: 20 }} />}
            onClick={() => setMobileOpen(true)}
          />

          <img src={ActeLogo} alt="Logo" height={32} />
        </Header>
      )}

      {/* ================= Mobile Drawer ================= */}
      {isMobile && (
        <Drawer
          placement="left"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          bodyStyle={{ padding: 0 }}
          width={260}
        >
          <SideMenu onMenuClick={() => setMobileOpen(false)} />
        </Drawer>
      )}

      {/* ================= Main Content ================= */}
      <Layout
        style={{
          marginLeft: isMobile ? 0 : 72,
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Content
          style={{
            padding: "24px",
            minHeight: "100vh",
            background: "#f9fafb",
          }}
        >
          <Routes>
            <Route element={<Courses />} path="/courses" />
            <Route element={<CourseVideos />} path="/course-videos" />
            <Route element={<Tests />} path="/tests" />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}
