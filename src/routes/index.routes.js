import { Router } from "express";
import {
  getProductById,
  getProductByName,
  getProducts,
} from "../controllers/index.controllers";

const routes = Router();

routes.get("/products", getProducts);
routes.get("/products/:id", getProductById);
routes.get("/products/search/:name", getProductByName);

export default routes;
