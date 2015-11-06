module.exports = userController;

function userController(userModels) {
    var userObj = {};
    userObj.getUserDetails = getUserDetails;
    userObj.getAllUsers = getAllUsers;
    return userObj;

    function getUserDetails(req, res) {
        var userDetails = {
            name: 'prk',
            email: 'prk@gmail.com',
            city: 'sf'
        };
        res.status(200).send(userDetails);
    }

    function getAllUsers(req, res, next) {
        userModels.getUsers(function(err, result) {
            if (err) {
                res.status(500).send({
                    "error": "server error"
                });
            } else {
                res.status(200).send(result);
            }
        });
    }
}
