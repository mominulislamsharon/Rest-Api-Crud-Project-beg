import { Router } from "express";
import { createUser, deleteUser,  getUser,  getUsers, updateUser } from "../controllers/userController";


const router: Router = Router();

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:Id', deleteUser);

export default router;