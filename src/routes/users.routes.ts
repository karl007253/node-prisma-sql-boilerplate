import { Router } from "express";
import {
  getUserByIdHandler,
  getUsersHandler,
} from "../controller/user.controller";

const useRouter = Router();

useRouter.get("/", getUsersHandler);
useRouter.get("/:id", getUserByIdHandler);

export default useRouter;
