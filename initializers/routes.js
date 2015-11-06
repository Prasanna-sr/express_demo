var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

function Routes(router, userObj) {
	router.use(cookieParser());
	router.get('/api/user', userObj.getUserDetails);
	router.get('/api/users', userObj.getAllUsers);
	router.get('/api/user', userObj.getUserDetails);
	router.use(bodyParser.json());
	router.post('/api/user', userObj.signup);
}

module.exports = Routes;