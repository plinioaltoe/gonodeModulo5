const routes = require("express").Router();

const { User } = require("./app/models");

routes.get("/", async (req, res) => {
  const user = await User.create({
    name: "Plinio1",
    email: "plinio1@yahoo.com.br",
    password_hash: "123123"
  });

  return res.json({ user });
});

module.exports = routes;
