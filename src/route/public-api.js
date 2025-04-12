import express from "express";
import accountController from "../controller/account-controller.js";

const publicRouter = new express.Router();
publicRouter.get("/", (req, res) => {
  res.send("OK");
});

publicRouter.post("/register", accountController.register);
publicRouter.post("/login", accountController.login);

export { publicRouter };
