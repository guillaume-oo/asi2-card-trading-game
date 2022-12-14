const UserService = require('../services/');
const User = require('');

class UserController {
    constructor({}) {
        console.log(`new UserController`);
    }

    getUsers(request, response) {
        response.json(UserService.listUser());
    }

    getUser(request, response) {
        response.json(UserService.getUser(request.params.userId));
    }

    createUser(request, response) {
        let user = new User(request.body);
        user = UserService.addUser(user);
        response.json(user);
    }

    updateUser(request, response) {}

    deleteUser(request, response) {}
}

module.exports = new UserController({});