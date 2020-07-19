import React, { useState } from "react";
import { Cards } from "../theme";

import TodoHeader from "../components/TodoHeader";
import AddTodo from "../components/AddTodo";

import { add } from "../util/db";

const { PrimaryCard } = Cards;

function App() {
  const [title, setTitle] = useState("");

  return (
    <PrimaryCard>
      <TodoHeader />

      <AddTodo text={title} setText={setTitle} add={add} />
    </PrimaryCard>
  );
}

export default App;
