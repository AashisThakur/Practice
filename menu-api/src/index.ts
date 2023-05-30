/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { itemsRouter } from "./items/items.router";
// import { BaseItems } from "./items/item.interface";

dotenv.config();

if(!process.env.PORT){
    console.log("ssss");
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();
const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

const mongoDB = "mongodb+srv://aashishthakur3069:aldebaran@cluster0.uqkb81a.mongodb.net/menudb";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/", itemsRouter);


app.listen(PORT , () => {
    console.log(`"listening at : ",${PORT}`);
});

const testSchema = new mongoose.Schema({
  name : String,
  price: Number,
  description: String,
  image: String,
});

const testModel = new mongoose.model('testModel', testSchema, 'menuItems');

 export const createFun = async () => {
  await testModel.replaceOne({ name: "Check" }, {
    name: "Kingfisher",
    price: 200,
    description: "check",
    image: "image addr",
  }, {
    upsert: true,
  });

  // await newData.save();
}