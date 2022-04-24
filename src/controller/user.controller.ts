import { Request, Response } from "express";
import { getUserById, getUsers } from "../service/user.service";

export async function getUsersHandler(req: Request, res: Response) {
  try {
    const result = await getUsers();
    return res.send(result);
  } catch (error: any) {
    return res.status(403).send(error.message);
  }
}

export async function getUserByIdHandler(req: Request, res: Response) {
  try {
    return res.send('tser');
    const result = await getUserById(req.params.id);
    return res.send(result);
  } catch (error: any) {
    return res.status(403).send(error.message);
  }
}

// export async function getUsersHandler(req: Request, res: Response) {
//   try {
//     const result = await getUsers();
//     return res.send(result);
//   } catch (error: any) {
//     return res.status(403).send(error.message);
//   }
// }
