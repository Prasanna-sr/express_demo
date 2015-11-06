module.exports = Routes;

function Routes(router, userObj) {
	router.get('/api/user', userObj.getUserDetails)
}
