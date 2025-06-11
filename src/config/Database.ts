const mongoose = require("mongoose");

const conncetDatabase = () => {
  mongoose
    .connect(process.env.DB, {
      //   useNewUrlParse: true,
      //   useCreateIndex: true,
      // useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Mongodb Connection Successfull");
    }).catch((err:Error)=>{
      console.log(err)
    })
};

module.exports = conncetDatabase;
