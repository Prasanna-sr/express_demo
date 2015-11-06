/**
 * Initialize all the components of the application.
 * Also works as a dependency injection.
 */
var routes = require('./routes');
var userController = require('./../controllers/userController');
var mondoDb = require('./../components/mongoConnection')();
var userModels = require('./../models/userModels');

module.exports = Initialize;

function Initialize(app, express) {
    var usersRouter = express.Router();
    var userModelObj;
    var userControllerObj;
    app.use(usersRouter);
    //initialize controller
    mondoDb.connect(function(err, db) {
        if (!err) {
            userModelObj = userModels(db);
            userControllerObj = userController(userModelObj);
            routes(usersRouter, userControllerObj);
        }
    });

};
