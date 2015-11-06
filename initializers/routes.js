module.exports = Routes;

function Routes(router, userObj) {
	router.get('/api/user', userObj.getUserDetails);
	router.get('/api/users', userObj.getAllUsers);
	router.get('/api/user', userObj.getUserDetails);
}
