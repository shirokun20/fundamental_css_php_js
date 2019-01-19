'use strict'
module.exports = (app) => {
    var todoList = require('./controller');
    app.route('/').get(todoList.index);
    app.route('/api/users').get(todoList.users);
}