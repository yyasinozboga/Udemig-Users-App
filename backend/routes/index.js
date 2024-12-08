import express from "express";
import {
  addUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/index.js";
import { findUserById } from "../middleware/index.js";

const router = express.Router();

router.route("/users").get(getAllUsers).post(addUser);

router
  .route("/users/:id")
  .get(findUserById, getUser)
  .patch(findUserById, updateUser)
  .delete(findUserById, deleteUser);
export default router;
