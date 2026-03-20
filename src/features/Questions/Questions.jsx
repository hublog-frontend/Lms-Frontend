import React, { useEffect, useState } from "react";
import { Row, Col, Space, Tooltip, Popconfirm } from "antd";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import CommonTable from "../Common/CommonTable";
import "./styles.css";

export default function Questions() {
  const [questionsData, setQuestionsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchQuestions();
  }, [page, limit]);

  const fetchQuestions = async () => {
    setLoading(true);
    // Simulate API call for questions
    setTimeout(() => {
      const mockData = Array.from({ length: limit }).map((_, i) => ({
        id: (page - 1) * limit + i + 1,
        question_text: `Sample Question ${(page - 1) * limit + i + 1}`,
        question_type: i % 2 === 0 ? "Multiple Choice" : "Descriptive",
        topic: i % 2 === 0 ? "React Basics" : "JavaScript",
        difficulty: i % 3 === 0 ? "Hard" : i % 2 === 0 ? "Medium" : "Easy",
        marks: i % 2 === 0 ? 5 : 10,
        created_at: "2026-03-19",
      }));

      setQuestionsData(mockData);
      setTotal(50); // Total number of mock records
      setLoading(false);
    }, 500);
  };

  const handlePaginationChange = (pagination) => {
    setPage(pagination.page);
    setLimit(pagination.limit);
  };

  const handleDelete = (id) => {
    // Simulate deleting a question
    setLoading(true);
    setTimeout(() => {
      const newData = questionsData.filter((item) => item.id !== id);
      setQuestionsData(newData);
      setTotal((prev) => prev - 1);
      setLoading(false);
    }, 400);
  };

  const columns = [
    {
      title: "S.No",
      dataIndex: "id",
      key: "id",
      width: 70,
      render: (text, record, index) => (page - 1) * limit + index + 1,
    },
    {
      title: "Question Name",
      dataIndex: "question_text",
      key: "question_text",
    },
    {
      title: "Type",
      dataIndex: "question_type",
      key: "question_type",
      width: 150,
    },
    {
      title: "Topic",
      dataIndex: "topic",
      key: "topic",
      width: 150,
    },
    {
      title: "Difficulty",
      dataIndex: "difficulty",
      key: "difficulty",
      width: 120,
      render: (text) => {
        let color =
          text === "Hard" ? "red" : text === "Medium" ? "orange" : "green";
        return <span style={{ color, fontWeight: 500 }}>{text}</span>;
      },
    },
    {
      title: "Action",
      key: "action",
      width: 100,
      render: (text, record) => (
        <Space size="middle">
          <Tooltip title="Edit Question">
            <span style={{ cursor: "pointer", color: "#1890ff" }}>
              <AiOutlineEdit size={18} />
            </span>
          </Tooltip>
          <Popconfirm
            title="Are you sure to delete?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Tooltip title="Delete Question">
              <span style={{ cursor: "pointer", color: "#ff4d4f" }}>
                <AiOutlineDelete size={18} />
              </span>
            </Tooltip>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className="questions_main_container">
      <Row className="questions_header_row">
        <Col xs={12} sm={12} md={12} lg={12}>
          <p className="common_heading" style={{ margin: 0 }}>
            Questions
          </p>
        </Col>

        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          className="questions_create_button_col"
        >
          <button className="questions_create_button" onClick={() => {}}>
            Create Question
          </button>
        </Col>
      </Row>

      <div className="questions_table_container">
        <CommonTable
          columns={columns}
          dataSource={questionsData}
          loading={loading}
          page_number={page}
          limit={limit}
          totalPageNumber={total}
          onPaginationChange={handlePaginationChange}
          checkBox="false"
        />
      </div>
    </div>
  );
}
