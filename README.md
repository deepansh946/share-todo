# Share Todo
A todo list that you can share with anyone!

## Setting up the Project

- Fork the repo and clone it to your local machine.
- For the project to work you have to setup a firebase project.
  Create a Project from the [firebase console](https://console.firebase.google.com/).

- Enable firestore in your project and firebase auth (google and sign-in password) in your firebase console.
- Once that is done, duplicate the .env.example file and rename it to just .env. Grab the keys from firebase console and paste it in the .env file.
- Run `npm install` to install the dependencies and `npm run dev` to start the project. More details are available in the guide section.

## 👉 Get Started

Install dependencies

```
npm install
```

Create a file `.env`, copy the contents from `.env.example`.

```
cp .env.example .env
```
Create a firebase project, check [this](https://www.notion.so/Divjoy-Firebase-Guide-3c64683bcf7b4b0693b80e06d67c9ee0) for more info. 
You would have to enable firestore, firebase google auth and create a service account and copy the values to the `.env` file.

Run the development server

```
npm start
```

When the above command completes you'll be able to view your website at `http://localhost:3000`

## 🥞 Stack

This project uses the following libraries and services:

- Framework - [React](https://reactjs.org)
- UI Kit - [Bootstrap](https://getbootstrap.com/)
- Styling - [Styled Components](https://styled-components.com/)
- Icons - [Font Awesome](https://fontawesome.com/)
- Hosting - [Vercel](https://vercel.com)


