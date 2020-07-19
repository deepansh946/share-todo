import firebase from "../firebase";

const database = firebase.database();

const add = async ({ title, createdAt }) => {
  const uid = Math.random().toString(36).slice(9);

  await database.ref(`${uid}/`).set(
    JSON.stringify({
      title,
      createdAt
    })
  );

  return uid;
};

const getAll = async ({ uid }) => {
  const todos = await database.ref(`${uid}/`).once("value");

  return todos.val();
};

export { add, getAll };
