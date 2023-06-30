import express from "express";
import dotenv from "dotenv";
import db from "./config/Database.js";
import router from "./routes/index.js";

dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log("Your db is Connected... 👌");
} catch (error) {
  console.error(error);
}

app.use(express.json());
app.use(router);

app.listen(7000, () => console.log("Server running at port 5000"));
