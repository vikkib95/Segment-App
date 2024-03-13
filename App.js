import React, { useState } from "react";
import { Modal, Input, Select, Button } from "antd";
import "./App.css";

const { Option } = Select;

function App() {
  const [segmentName, setSegmentName] = useState("");
  const [selectedSchema, setSelectedSchema] = useState("");
  const [addedSchemas, setAddedSchemas] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const schemaOptions = [
    { label: "First Name", value: "first_name" },
    { label: "Last Name", value: "last_name" },
    { label: "Gender", value: "gender" },
    { label: "Age", value: "age" },
    { label: "Account Name", value: "account_name" },
    { label: "City", value: "city" },
    { label: "State", value: "state" },
  ];

  const handleSaveSegment = () => {
    setModalVisible(true);
  };

  const handleAddSchema = () => {
    if (selectedSchema) {
      setAddedSchemas([...addedSchemas, selectedSchema]);
      setSelectedSchema("");
    }
  };

  const handleSchemaChange = (value) => {
    setSelectedSchema(value);
  };

  return (
    <div className="App">
      <h1>Save Segment</h1>
      <div className="saveSegmentButtonContainer">
        <Button className="saveSegmentButton" onClick={handleSaveSegment}>
          Save segment
        </Button>
      </div>

      <Modal
        title="Save Segment"
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setModalVisible(false)}>
            Cancel
          </Button>,
          <Button
            key="save"
            type="primary"
            onClick={() => setModalVisible(false)}
          >
            Save
          </Button>,
        ]}
      >
        <Input
          placeholder="Enter segment name"
          value={segmentName}
          onChange={(e) => setSegmentName(e.target.value)}
        />
        <Select
          value={selectedSchema}
          onChange={handleSchemaChange}
          style={{ width: "100%", marginTop: "10px" }}
          placeholder="Select Schema"
        >
          {schemaOptions.map((schema) => (
            <Option key={schema.value} value={schema.value}>
              {schema.label}
            </Option>
          ))}
        </Select>
        <Button style={{ marginTop: "10px" }} onClick={handleAddSchema}>
          + Add new schema
        </Button>
        <div className="blue-box">
          {addedSchemas.map((schema) => (
            <div key={schema} className="schema-dropdown">
              <Select value={schema} style={{ width: "100%" }}>
                <Option>{schema}</Option>
              </Select>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
}

export default App;
