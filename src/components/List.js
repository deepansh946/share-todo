import React from "react";
import { Row, Col } from "react-bootstrap";
import { Typography } from "../theme";
import { MdDelete } from "react-icons/md";

const { Text } = Typography;

function List(props) {
  const { items, onDelete } = props;

  return (
    <Row
      className="overflow-auto"
      style={{
        height: "15rem"
      }}
    >
      <Col>
        {items.map(({ title, createdAt }, index) => (
          <div className="mb-4">
            <Row className="align-items-center">
              <MdDelete
                className="mr-2"
                style={{
                  cursor: "pointer",
                  fontSize: "1.4rem"
                }}
                onClick={() => {
                  onDelete(index);
                }}
              />
              <Text>
                {title} {index + 1}
              </Text>
            </Row>
            <Row>Date Added: {createdAt.toLocaleString()}</Row>
          </div>
        ))}
      </Col>
    </Row>
  );
}

export default List;