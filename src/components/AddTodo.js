import React from "react";
import { useHistory } from "react-router-dom";
import { Row } from "react-bootstrap";
import { MdAddBox } from "react-icons/md";

import { Inputs } from "../theme";
const { Input } = Inputs;

function AddTodo(props) {
  const { add, text, setText, uid } = props;
  const history = useHistory();

  return (
    <Row className="justify-content-between mb-4">
      <Input
        placeholder={"What needs to be done?"}
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
      />
      <MdAddBox
        style={{
          cursor: "pointer",
          fontSize: "1.4rem",
          position: "absolute",
          right: "1.1rem",
          top: "4.6rem"
        }}
        onClick={async () => {
          const tempUid = await add({
            uid,
            title: text
          });

          const routePath = tempUid || uid;
          setText("");
          history.push(`${routePath}`);
        }}
      />
    </Row>
  );
}

export default AddTodo;
