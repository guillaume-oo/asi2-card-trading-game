import { Router } from 'express';
import RoomController from '../controllers/RoomController';

const BASE_PATH = '/room';

const RoomRouter = Router();
export default RoomRouter;

RoomRouter.route('${BASE_PATH}/join/:userId')
    .post(RoomController.joinQueue(userId))