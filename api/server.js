const express = require("express");
const helmet = require("helmet");

const projectsRouter = require("../controllers/projects-router.js");
const actionsRouter = require("../controllers/actions-router.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/projects", projectsRouter);
server.use("/api/actions", actionsRouter);

module.exports = server;
