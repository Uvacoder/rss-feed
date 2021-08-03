import React, { useState, useEffect } from "react";
import { Spin, Modal, Button } from "antd";
import "./style.scss";
import { PlusOutlined } from "@ant-design/icons";
export default function Sidebar({
  checkAvailableURL,
  checkInputURL,
  addUrlRss,
  urlRssList,
  getFeeds,
}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modelStatus, setModelStatus] = useState({
    addText: "Not ready!",
  });

  useEffect(() => {
    setIsLoading(false);
    if (checkInputURL.available) {
      setModelStatus({
        addText: "Add to list",
      });
    } else {
      setModelStatus({
        addText: "Not ready!",
      });
    }
  }, [checkInputURL]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if (checkInputURL.available) {
      addUrlRss();
      handleCancel();
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="_mySidebar">
      <h4>RSS URL List</h4>
      <div className="_addRss">
        <Button id="_addRssBtn" type="primary" onClick={showModal}>
          Add new RSS <PlusOutlined />
        </Button>
        <Modal
          title="Add new URL"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          okText={modelStatus.addText}
        >
          <input
            id="_input"
            className="_inputUrl"
            type="text"
            placeholder="Input your URL"
          />
          {checkInputURL.available ? (
            <p
              id="_inputMessage"
              className="_inputMessage"
              style={{ color: "green" }}
            >
              {checkInputURL.message}
            </p>
          ) : (
            <p
              id="_inputMessage"
              className="_inputMessage"
              style={{ color: "red" }}
            >
              {checkInputURL.message}
            </p>
          )}
          <button
            disabled={isLoading}
            onClick={() => {
              checkAvailableURL(document.getElementById("_input").value);
              setIsLoading(true);
            }}
            className="_checkUrlBtn"
          >
            {isLoading ? <Spin /> : "Check"}
          </button>
        </Modal>
      </div>
      <div className="_sidebarItems">
        {urlRssList.map((e, index) => (
          <span
            key={index}
            className="_sidebarItem"
            onClick={() => getFeeds(e)}
          >
            {e}
          </span>
        ))}
      </div>
    </div>
  );
}
