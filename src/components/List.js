import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import { Typography } from "../theme";
import { MdDelete } from "react-icons/md";

const { Text } = Typography;

function List(props) {
  const { items, onDelete, uid, loading } = props;

  if (loading || typeof items !== "object")
    return <Spinner className="mx-auto" animation="grow" variant="dark" />;

  return (
    <Row
      className="overflow-auto"
      style={{
        height: "15rem"
      }}
    >
      <Col>
        {items.length ? (
          items.map((item, index) => {
            const { title, createdAt } = JSON.parse(item);
            return (
              <div className="mb-4" key={createdAt}>
                <Row className="align-items-center">
                  <MdDelete
                    className="mr-2 delete-icon"
                    onClick={() => {
                      onDelete({ uid, index });
                    }}
                  />
                  <Text>{title}</Text>
                </Row>
                <Row>Date Added: {new Date(createdAt).toLocaleString()}</Row>
              </div>
            );
          })
        ) : (
          <div>No Tasks here</div>
        )}
      </Col>
    </Row>
  );
}

export default List;
