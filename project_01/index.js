const express = require("express");

const app = express();

const PORT = 8002;

app.use(express.urlencoded({extended: false})); // middlewares

app.use((req, res, next) => {
    console.log("hello from middleware 1");
    req.myUserName = "parvesh.dev";
    // can perform db queries as well
    next();
});

app.use((req, res, next) => {
    console.log("hello from middleware 2", req.myUserName);
    next();
});

const users = require("./MOCK_DATA.json");
app.listen(PORT, () => console.log("Server Start"));

// routes
app.get('/api/users', (req, res) => {
    console.log("I am in", req.myUserName);
    return res.json(users);
});

app.get('/users', (req, res) => {
  const html = `
     <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>`;

    return res.send(html);
});

app.get('/api/users/:id', (req, res) => {
     const id = req.params.id;
     const user = users.find((user) => user.id == id);
     return res.json(user);
});

app.post('/api/users', (req, res) => {
  // for creation
});

app.patch('/api/user/:id', (req, res) => {
   // for updation
});

app.delete('/api/users/:id', (req, res) => {
   // for deletion
});