import app from './app';

const dotenv = require("dotenv")


dotenv.config({path:"./config/config.env"})

const server = app.listen(process.env.PORT, () => {
  console.log(`Server running on port 4000`);
});

export default server;