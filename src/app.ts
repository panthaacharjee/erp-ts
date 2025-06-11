import express, { Application, Request, Response } from 'express';

const cors = require("cors")
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

const errorMiddleware = require("./middleware/error")

const app: Application = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(
  fileUpload({ limits: { fieldSize: 100 * 1024 * 1024  }, useTempFiles: true })
);
app.use(express.json({ limit: "50mb" }));

// Configure CORS
const corsOptions = {
  origin: 'http://localhost:3000', // Your Next.js frontend
  credentials: true, // REQUIRED for cookies
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(cookieParser());

app.get("/", (req:Request, res:Response)=>{
  res.status(200).json({
    success:true,
    message:"API SUCCESSFULL"
  })
})

app.use(errorMiddleware)

module.exports = app;