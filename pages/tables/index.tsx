import Draggable from "react-draggable";

const TablesPage = () => {
  const tablesArray = new Array(10);

  return (
    <div>
      <Draggable>
        <div>Table 1</div>
      </Draggable>
    </div>
  );
};

export default TablesPage;
        