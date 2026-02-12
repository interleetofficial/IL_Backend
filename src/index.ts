import express, { type Application, type Request, type Response } from "express";

const app : Application = express();

app.use(express.json());

app.get("/", (req : Request, res:Response) => {
  res.send("Server is running 🚀");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
