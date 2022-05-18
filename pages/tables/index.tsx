import { SetStateAction, useState } from "react";
import Draggable from "react-draggable";
import "antd/dist/antd.css";
import { Modal, Button } from "antd";

const TablesPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const tablesArray = new Array(10);

  return (
    <div>
      <Draggable>
        <div>
          <Button type="primary" onClick={showModal}>
            Table 1
          </Button>
          <Modal
            title="Basic Modal"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>This is Table 1 Modal</p>
          </Modal>
        </div>
      </Draggable>
    </div>
  );
};

export default TablesPage;
