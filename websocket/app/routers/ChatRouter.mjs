import Router from 'express';
import ChatController from "../controllers/ChatController.mjs";

const BASE_PATH = '/chat';

const ChatRouter = Router();
export default ChatRouter;

ChatRouter.route(BASE_PATH)
    .get(ChatController.getChats)
    .post(ChatController.createChat);

ChatRouter.route(`${BASE_PATH}/:chatId`)
    .get(ChatController.getChat)
    .get(ChatController.getMessages)
    .post(ChatController.createMessage)
    .delete(ChatController.deleteChat);

ChatRouter.route(`${BASE_PATH}/:chatId/:messageId`)
    .get(ChatController.getMessage);