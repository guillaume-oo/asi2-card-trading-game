const {Router} = require('express');
const GameController = require('../controllers/GameController');
const PingRouter = require('./PingRouter');

const BASE_PATH = '/game';

const GameRouter = Router();
module.exports = GameRouter;

GameRouter.use(BASE_PATH);

GameRouter.route(BASE_PATH)
    .get(GameController.getUsers)
    .post(GameController.createUser);

GameRouter.route(`${BASE_PATH}/:userId`)
    .get(GameController.getUser);
