import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { Cards } from "../theme";
import List from "../components/List";
import TodoHeader from "../components/TodoHeader";
import AddTodo from "../components/AddTodo";

import { databaseRef, add, deleteTodo, getAll } from "../util/db";

const { PrimaryCard } = Cards;

function TodoList(props) {
  const location = useLocation();
  const history = useHistory();
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const getTodos = async () => {
    const res = await getAll({ uid: location.pathname });
    setTodos(res);
  };

  const onDelete = async ({ uid, index }) => {
    await deleteTodo({ uid, index });
    getTodos();
  };

  const onAdd = async ({ uid, title }) => {
    if (!title) {
      return;
    }
    const tempUid = await add({
      uid,
      title
    });
    const routePath = tempUid || uid;
    setTitle("");
    history.push(`${routePath}`);
    getTodos();
  };

  useEffect(() => {
    setLoading(true);
    const dbRef = databaseRef(location.pathname);
    dbRef.on("value", snapshot => {
      setTodos(snapshot.val());
      setLoading(false);
    });
  }, [location.pathname]);

  return (
    <PrimaryCard>
      <TodoHeader />

      <AddTodo
        text={title}
        setText={setTitle}
        add={async ({ uid, title }) => {
          await onAdd({ uid, title });
        }}
        uid={location.pathname}
      />

      <List
        items={todos || []}
        onDelete={onDelete}
        uid={location.pathname}
        loading={loading}
      />
    </PrimaryCard>
  );
}

export default TodoList;
