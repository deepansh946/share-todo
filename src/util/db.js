import firebase from "../firebase";

const database = firebase.database();

const databaseRef = uid => firebase.database().ref(`${uid}/`);

const add = async ({ uid, title }) => {
  let tempUid = uid,
    todos = [];

  if (!tempUid) {
    tempUid = Math.random().toString(36).slice(9);
  } else {
    todos = (await getAll({ uid })) || [];
  }

  const newTodos = [
    ...todos,
    JSON.stringify({
      title,
      createdAt: new Date()
    })
  ];

  await database.ref(`${tempUid}/`).set(newTodos);

  return tempUid;
};

const deleteTodo = async ({ uid, index }) => {
  const todos = await getAll({ uid });

  const newTodos = todos.filter((_, idx) => idx !== index);

  await database.ref(`${uid}/`).set(newTodos);
};

const getAll = async ({ uid }) => {
  const todos = await database.ref(`${uid}/`).once("value");

  return todos.val();
};

export { add, getAll, deleteTodo, databaseRef };
