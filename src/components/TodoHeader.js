import React from "react";
import { Row } from "react-bootstrap";
import { MdEdit } from "react-icons/md";

import { Typography } from "../theme";

const { Text } = Typography;

function TodoHeader(props) {
  return (
    <Row className="justify-content-between">
      <Text>Add New Note</Text>
      <MdEdit
        style={{
          cursor: "pointer",
          fontSize: "1.4rem"
        }}
      />
    </Row>
  );
}

export default TodoHeader;
