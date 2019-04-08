
const api = require("./controller.js")

const bp = require("body-parser");

module.exports = function(app){

    app.use(bp.json());

    app.get('/tasks', api.allTasks);
    app.post('/tasks', api.makeTask);
    app.get("/tasks/:id", api.getTask);
    app.patch('/tasks/:id', api.updateTask);
    app.delete('/tasks/:id', api.deleteTask);
    return app;

}
