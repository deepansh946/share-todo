import React, { useState } from "react";
import { Row, Container } from "react-bootstrap";
import { Cards, Inputs, Typography } from "./theme";
import { MdAddBox, MdEdit } from "react-icons/md";
import List from "./components/List";

const { PrimaryCard } = Cards;
const { Text } = Typography;
const { Input } = Inputs;

const TODOLIST = [
  {
    title: "New Task",
    createdAt: new Date(),
    asset: "https://google.com"
  },
  {
    title: "New Task",
    createdAt: new Date(),
    asset: "https://google.com"
  },
  {
    title: "New Task",
    createdAt: new Date(),
    asset: "https://google.com"
  },
  {
    title: "New Task",
    createdAt: new Date(),
    asset: "https://google.com"
  },
  {
    title: "New Task",
    createdAt: new Date(),
    asset: "https://google.com"
  }
];

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(TODOLIST);

  const onAdd = () => {
    setTodos([
      {
        title: task,
        createdAt: new Date()
      },
      ...todos
    ]);
    setTask("");
  };

  const deleteHandler = idx => {
    const updatedTodos = todos.filter((_, index) => index !== idx);
    setTodos(updatedTodos);
  };

  return (
    <Container>
      <PrimaryCard>
        <Row className="justify-content-between">
          <Text>Add New Note</Text>
          <MdEdit
            style={{
              cursor: "pointer",
              fontSize: "1.4rem"
            }}
          />
        </Row>

        <Row className="justify-content-between mb-4">
          <Input
            placeholder={"What needs to be done?"}
            value={task}
            onChange={e => {
              setTask(e.target.value);
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
            onClick={() => {
              onAdd();
            }}
          />
        </Row>

        <List items={todos} onDelete={deleteHandler} />
      </PrimaryCard>
    </Container>
  );
}

export default App;
