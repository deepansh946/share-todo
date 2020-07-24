import React from "react";
import { Row } from "react-bootstrap";

import { Typography } from "../theme";

const { Text } = Typography;

function TodoHeader(props) {
  return (
    <Row className="justify-content-between">
      <Text>Add New Note</Text>
    </Row>
  );
}

export default TodoHeader;
