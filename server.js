const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

const { connection } = require("./config/connection");
connection();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// routes
app.use(require("./routes/workoutRoutes.js"));
app.use(require("./routes/viewRoutes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
