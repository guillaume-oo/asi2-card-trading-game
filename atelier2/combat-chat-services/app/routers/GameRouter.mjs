import Router from 'express';
import GameController from "../controllers/GameController.mjs";

const BASE_PATH = '/game';

const GameRouter = Router();
export default GameRouter;

GameRouter.route(`${BASE_PATH}/attack`)
    .post(GameController.attack);