import express from "express";
import dotenv from "dotenv";
import connectToDB from "./db/connectDB.js";
import mongoose from "mongoose";
import { data } from "./dummy-data.js";
import Product from "./models/Product.js";

import productRoutes from "./routes/product.js";

import cors from "cors";

dotenv.config();
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

//routes

app.use("/api/v1/products", productRoutes);

app.get("/", function (req, res) {
  res.send("jell");
});

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectToDB(process.env.MONGO_URL);
    app.listen(port, () => console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log("error connecting to db.");
  }
};

start();
