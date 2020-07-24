import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Cards } from "../theme";

import TodoHeader from "../components/TodoHeader";
import AddTodo from "../components/AddTodo";

import { add } from "../util/db";

const { PrimaryCard } = Cards;

function App() {
  const history = useHistory();
  const [title, setTitle] = useState("");

  const onAdd = async ({ uid, title }) => {
    const tempUid = await add({
      uid,
      title
    });
    const routePath = tempUid || uid;
    setTitle("");
    history.push(`${routePath}`);
  };

  return (
    <PrimaryCard>
      <TodoHeader />

      <AddTodo
        text={title}
        setText={setTitle}
        add={async ({ uid, title }) => {
          await onAdd({ uid, title });
        }}
      />
    </PrimaryCard>
  );
}

export default App;
