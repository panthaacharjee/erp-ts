//Import File
const server = require("./app")
import dotenv from "dotenv"
import path from "path";

//Require File
const conncetDatabase = require("./config/Database")

/* ========DOT ENV CONFIG FILE========= */
dotenv.config({ path: path.resolve(__dirname, './config/config.env') });



conncetDatabase()
// console.log(process.env.DB)

// SERVER RUNNING
server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
