const express = require("express");
const app = express()

const db = require("./config/connection");
const path = require("path");

// import typeDefs and resolvers
const { typeDefs, resolvers } = require("./schemas");
const PORT = process.env.PORT || 3001;

// production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
  }
  
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

// app.use(routes);

db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      // log where we can go to test our GQL API
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
  db.on("error", (err) => {
    console.error("MongoDB connection error: ", err);
  });