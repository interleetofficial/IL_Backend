import express, { type Application, type Request, type Response } from "express";
import { UserRouter } from "./modules/user/user.routes.js";
import dotenv from "dotenv";

dotenv.config();
const app : Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req : Request, res:Response) => {
  res.send("Server is running 🚀");
});

app.use("/api/user",UserRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
