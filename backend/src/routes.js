 const express = require("express");
const DevController = require("./controller/DevController");
const LikeController = require("./controller/LikeController")
const DislikeController = require("./controller/DislikeController")

const routes = express.Router();

routes.post("/devs", DevController.store);
routes.get("/devs", DevController.index);
routes.post("/devs/:devId/dislike", DislikeController.store);
routes.post("/devs/:devId/like", LikeController.store)

module.exports = routes;
