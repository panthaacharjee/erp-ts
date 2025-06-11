//Import File
const server = require("./app")
import * as dotenv from 'dotenv';
import path from "path";


/* ========DOT ENV CONFIG FILE========= */
dotenv.config();

//Require File
const conncetDB = require("./config/Database")


conncetDB()

// SERVER RUNNING
server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
