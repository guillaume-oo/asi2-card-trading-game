import Router from 'express';
import ChatController from "../controllers/ChatController.mjs";

const BASE_PATH = '/chat';

const ChatRouter = Router();
export default ChatRouter;

/*
ChatRouter.route(BASE_PATH)
    .get(ChatController.getChats)
    //.post(ChatController.createChat);

ChatRouter.route(`${BASE_PATH}/:chatId`)
    .get(ChatController.getChat)
    .get(ChatController.getMessages)
    .post(ChatController.createMessage)
    .delete(ChatController.deleteChat);

ChatRouter.route(`${BASE_PATH}/:chatId/:messageId`)
    .get(ChatController.getMessage);
*/

// Depuis le chat Id on va informer les users de ce chat du nouveau message
ChatRouter.route(`${BASE_PATH}/message/:chatId/:userId`) 
    .post(ChatController.newMessage);
    

