import React from "react";
import axios from "axios";
import { Modal, Button } from "antd";
import "../Common/commonstyles.css";

let isModalVisible = false;
let modalInstance = null; // Track modal instance for manual control

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const AccessToken = localStorage.getItem("AccessToken");
    if (AccessToken) {
      const expired = isTokenExpired(AccessToken);
      if (expired === true) {
        ShowModal();
        return Promise.reject(new Error("Token is expired"));
      }
      config.headers.Authorization = `Bearer ${AccessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

const isTokenExpired = (token) => {
  if (!token) return true; // No token means it's "expired"

  try {
    // split the token into parts
    const payloadBase64 = token.split(".")[1];

    // decode the base64 payload
    const decodedPayload = JSON.parse(atob(payloadBase64));

    // get the current time in seconds
    const currentTime = Date.now() / 1000;

    // check if the token has expired
    return decodedPayload.exp < currentTime;
  } catch (error) {
    console.error("Error decoding token:", error);
    return true;
  }
};

const handleSessionModal = () => {
  const event = new Event("tokenExpireUpdated");
  window.dispatchEvent(event);
  if (modalInstance) {
    modalInstance.destroy(); // Manually close the modal
    modalInstance = null;
  }
  isModalVisible = false;
};

const ShowModal = () => {
  if (isModalVisible) {
    return; // Don't open a new modal if one is already visible
  }

  isModalVisible = true;

  modalInstance = Modal.warning({
    title: "Session Expired",
    centered: true,
    content: "Your session has expired. Please log in again.",
    onOk() {
      handleSessionModal();
    },
    onCancel() {
      handleSessionModal();
    },
    onClose() {
      handleSessionModal();
    },
    footer: [
      <div className="sessionmodal_okbuttonContainer">
        <Button className="sessionmodal_okbutton" onClick={handleSessionModal}>
          OK
        </Button>
      </div>,
    ],
  });

  return;
};

//login api
export const LoginApi = async (payload) => {
  try {
    const response = await api.post("/api/login", payload);
    return response;
  } catch (error) {
    throw error;
  }
};

//course api's
export const getCourses = async (payload) => {
  try {
    const response = await api.get("/api/getCourses", { params: payload });
    return response;
  } catch (error) {
    throw error;
  }
};

export const createCourse = async (payload) => {
  try {
    const response = await api.post("/api/createCourse", payload);
    return response;
  } catch (error) {
    throw error;
  }
};

//module api's
export const createModule = async (payload) => {
  try {
    const response = await api.post("/api/createModule", payload);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getModules = async (course_id) => {
  try {
    const response = await api.get(`/api/getModules?course_id=${course_id}`);
    return response;
  } catch (error) {
    throw error;
  }
};

//discussion and reviews api's
export const insertDiscussion = async (payload) => {
  try {
    const response = await api.post(`/api/insertDiscussion`, payload);
    return response;
  } catch (error) {
    throw error;
  }
};

export const insertReview = async (payload) => {
  try {
    const response = await api.post(`/api/insertReview`, payload);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getReviews = async (course_id) => {
  try {
    const response = await api.get(`/api/getReviews?course_id=${course_id}`);
    return response;
  } catch (error) {
    throw error;
  }
};

// profile api's
export const updateProfile = async (payload) => {
  try {
    const response = await api.post(`/api/updateUser`, payload);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getUserById = async (user_id) => {
  try {
    const response = await api.get(`/api/getUserById?user_id=${user_id}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateExperience = async (payload) => {
  try {
    const response = await api.post(`/api/updateExperience`, payload);
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateEducation = async (payload) => {
  try {
    const response = await api.post(`/api/updateEducation`, payload);
    return response;
  } catch (error) {
    throw error;
  }
};
