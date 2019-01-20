'use strict'
module.exports = (app) => {
    var todoList = require('./controller');
    app.route('/').get(todoList.index);
    app.route('/api/users').get(todoList.users);
    app.route('/api/users/:user_id').get(todoList.findUsers);
    app.route('/api/users/').post(todoList.createUser);
}