/**
 * Initialize all the components of the application.
 * Also works as a dependency injection.
 */
 var routes = require('./routes');
 var users = require('./../controllers/userController')
module.exports = function(app, express) {
    var usersRouter = express.Router();
    app.use(usersRouter);
    //initialize controller
    var userObj = users();
    routes(usersRouter, userObj);
};
