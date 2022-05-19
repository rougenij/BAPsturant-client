import { useState } from "react";
import Draggable from "react-draggable";
import "antd/dist/antd.css";
import { Modal, Button } from "antd";

interface OrderTableProps {
  ButtonText: String;
}

const OrderTable: React.FC<OrderTableProps> = ({ ButtonText }) => {
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

  return (
    <div>
      <Draggable>
        <div>
          <Button type="primary" onClick={showModal}>
            {ButtonText}
          </Button>
          <Modal
            title="Basic Modal"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>{ButtonText}</p>
          </Modal>
        </div>
      </Draggable>
    </div>
  );
};

export default OrderTable;
