import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Cards } from "../theme";
import List from "../components/List";
import TodoHeader from "../components/TodoHeader";
import AddTodo from "../components/AddTodo";

import { add, getAll } from "../util/db";

const { PrimaryCard } = Cards;

function TodoList(props) {
  const location = useLocation();
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const getTodos = async () => {
    const res = await getAll({ uid: location.pathname });
    setTodos(res);
  };

  useEffect(() => {
    getTodos();
  }, [location.pathname]);

  return (
    <PrimaryCard>
      <TodoHeader />

      <AddTodo
        text={title}
        setText={setTitle}
        add={add}
        uid={location.pathname}
      />

      <List items={todos} />
    </PrimaryCard>
  );
}

export default TodoList;
