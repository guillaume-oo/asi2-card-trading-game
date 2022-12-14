const {Router} = require('express');
const PingController = require('../controllers/PingController');

const BASE_PATH = '/ping';

const PingRouter = Router();
module.exports = PingRouter;

PingRouter.route(BASE_PATH)
    .get(PingController.getPong);
