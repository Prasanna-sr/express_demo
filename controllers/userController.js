module.exports = userController;

function userController() {
	var userObj = {};
	userObj.getUserDetails = getUserDetails;
	return userObj;

	function getUserDetails(req, res) {
		var userDetails = {name: 'prk', email: 'prk@gmail.com', city: 'sf'};
		res.status(200).send(userDetails);
	}
}
