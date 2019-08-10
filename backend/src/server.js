const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors  = require("cors");

const server = express();


mongoose.connect("mongodb+srv://omnistack:oministack@omni-week-otoniel-kptbo.mongodb.net/omnistack8?retryWrites=true&w=majority", 
{useNewUrlParser: true})

server.use(express.json());
server.use(routes);
server.use(cors())




server.listen(3333);