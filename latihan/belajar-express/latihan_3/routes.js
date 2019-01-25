'use strict'
module.exports = (app) => {
    var controllerNya = require('./controller');
    app.route('/').get(controllerNya.index);
    app.route('/api/upload').get(controllerNya.uploads);
    // app.route('/api/upload/:id').get(controllerNya.findUploads);
    app.route('/api/upload/').post(controllerNya.createUpload);
    // app.route('/api/upload/:id').put(controllerNya.updateUpload);
    // app.route('/api/upload/:id').delete(controllerNya.deleteUpload);
}