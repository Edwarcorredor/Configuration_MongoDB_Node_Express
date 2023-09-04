import { Router } from 'express';
import ControllerUser from '../controllers/ControllerUser';
const loginRouter = Router();

loginRouter.post('/user', ControllerUser.loginUser);

export default loginRouter;