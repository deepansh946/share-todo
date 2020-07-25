import React from "react";
import { Row } from "react-bootstrap";
import { MdAddBox } from "react-icons/md";

import { Inputs } from "../theme";
const { Input } = Inputs;

function AddTodo(props) {
  const { add, text, setText, uid } = props;

  return (
    <Row className="justify-content-between mb-4 position-sticky">
      <Input
        placeholder={"What needs to be done?"}
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
      />
      <MdAddBox
        className="add-icon"
        onClick={() => {
          add({
            uid,
            title: text
          });
        }}
      />
    </Row>
  );
}

export default AddTodo;
