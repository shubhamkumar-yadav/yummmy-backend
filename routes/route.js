import express from "express";
import { postProduct } from "../controller/product_controller/product_admin.js";
import {getProduct,searchProduct} from '../controller/product_controller/product_user.js';
import { fetchOrders, placeOrder } from "../controller/order_controller/order.js";
import { userLogin, userSignUp } from "../controller/auth_controller/user.js";


const route = express.Router();
route.post("/v1/postProduct", postProduct);
route.get("/v1/getProduct", getProduct);
route.post("/v1/placeOrder", placeOrder);
route.get("/v1/searchProduct", searchProduct);
route.post("/v1/user/SignUp", userSignUp);
route.post("/v1/user/Login", userLogin);
route.get("/v1/user/fetchOrders", fetchOrders);

export { route };