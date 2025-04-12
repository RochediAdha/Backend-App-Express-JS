import express from "express";
import accountController from "../controller/account-controller.js";
import peranController from "../controller/peran-controller.js";
import menuController from "../controller/menu-controller.js";
import { authMiddleware } from "../middleware/auth-middleware.js";
import akunPeranController from "../controller/akun_peran-controller.js";
import peranMenuController from "../controller/peran_menu-controller.js";

const privateRouter = new express.Router();

privateRouter.use(authMiddleware);

//Akun
privateRouter.get("/akun/current", accountController.get);
privateRouter.patch("/akun/current", accountController.update);
privateRouter.delete("/akun/logout", accountController.logout);

//Peran
privateRouter.post("/peran", peranController.create);
privateRouter.get("/peran", peranController.getall);
privateRouter.get("/peran/:id", peranController.get);
privateRouter.patch("/peran/:id", peranController.update);
privateRouter.delete("/peran/:id", peranController.del);

//menu
privateRouter.post("/menu", menuController.create);
privateRouter.get("/menu", menuController.getall);
privateRouter.get("/menu/:id", menuController.get);
privateRouter.patch("/menu/:id", menuController.update);
privateRouter.delete("/menu/:id", menuController.del);

// akun peran
privateRouter.get("/akun-peran", akunPeranController.getall);
privateRouter.post("/akun-peran", akunPeranController.create);
privateRouter.delete("/akun-peran", akunPeranController.del);
privateRouter.get("/akun-peran/:id", akunPeranController.get);
privateRouter.patch("/akun-peran/:id", akunPeranController.update);

// Peran Menu
privateRouter.get("/peran-menu", peranMenuController.getall);
privateRouter.post("/peran-menu", peranMenuController.create);
privateRouter.delete("/peran-menu", peranMenuController.del);

export { privateRouter };
