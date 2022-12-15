import { Router } from 'express';
import RoomController from '../controllers/RoomController.mjs';

const BASE_PATH = '/room';

const RoomRouter = Router();
export default RoomRouter;

RoomRouter.route(`${BASE_PATH}/join/:userId`)
    .post(RoomController.joinQueue)
RoomRouter.route(`${BASE_PATH}/leave/:userId/:roomId`)
    .post(RoomController.joinQueue)
RoomRouter.route(`${BASE_PATH}/:roomId`)
    .get(RoomController.joinQueue)