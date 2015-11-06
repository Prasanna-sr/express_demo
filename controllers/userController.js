module.exports = userController;

function userController(userModels) {
    var userObj = {};
    userObj.getUserDetails = getUserDetails;
    userObj.getAllUsers = getAllUsers;
    return userObj;

    function getUserDetails(req, res, next) {
        var emailID = req.query.emailid;
        if (!emailID) {
            res.status(400).send({
                "message": "emailid is required !"
            });
            return;
        }
        userModels.getUserDetail(emailID, function(err, result) {
            if (err) {
                res.status(500).send({
                    "error": "server error"
                });
            } else {
                res.status(200).send(result);
            }
        });
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
