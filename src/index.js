import express from "express";
import indexRoutes from "./routes/index.routes";

const app = express();

const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(indexRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
