import firebase from "../firebase";

const database = firebase.database();

const add = async ({ uid, title }) => {
  let tempUid = uid,
    todos = [];

  if (!tempUid) {
    tempUid = Math.random().toString(36).slice(9);
  } else {
    todos = await getAll({ uid });
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

const getAll = async ({ uid }) => {
  const todos = await database.ref(`${uid}/`).once("value");

  return todos.val();
};

export { add, getAll };
