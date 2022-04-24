import { Router, Request, Response } from "express";
import userRoutes from "./users.routes";

const apiRouter = Router();
apiRouter.get("/", (req: Request, res: Response) =>
  res.json({
    message: "API Running",
  })
);

apiRouter.use("/users", userRoutes);

export default apiRouter;
