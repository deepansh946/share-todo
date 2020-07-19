import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Cards } from "../theme";

import TodoHeader from "../components/TodoHeader";
import AddTodo from "../components/AddTodo";
import List from "../components/List";

import { add, getAll } from "../util/db";

const { PrimaryCard } = Cards;

function App() {
  const history = useHistory();
  const [uid, setUid] = useState();
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  const deleteHandler = idx => {
    const updatedTodos = todos.filter((_, index) => index !== idx);
    setTodos(updatedTodos);
  };

  const getTodos = async ({ uid }) => {
    const res = await getAll({ uid });

    const jsonRes = JSON.parse(res);

    console.log(jsonRes);

    setTodos([jsonRes]);
  };

  useEffect(() => {
    if (uid) {
      history.push(`/${uid}`);
    }
  }, [uid]);

  useEffect(() => {
    getTodos({ uid: "ozma" });
  }, []);

  return (
    <Container>
      <PrimaryCard>
        <TodoHeader />

        <AddTodo text={title} setText={setTitle} setUid={setUid} add={add} />

        <List items={todos} onDelete={deleteHandler} />
      </PrimaryCard>
    </Container>
  );
}

export default App;
