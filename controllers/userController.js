module.exports = userController;

function userController(userModels) {
    var userObj = {};
    userObj.getUserDetails = getUserDetails;
    userObj.getAllUsers = getAllUsers;
    userObj.signup = signup;
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

    function signup(req, res, next) {
        var userObj = req.body;
        if (!userObj || !userObj.emailid || !userObj.password) {
            res.status(400).send({
                "error": "userid, password is required !"
            });
            return;
        }
        userObj.name = userObj.name || null;
        userObj.city = userObj.city || null;
        userModels.signup(userObj.emailid, userObj.password,
            userObj.name, userObj.city,
            function(err, result) {
                if (!err) {
                        res.status(201).send({
                            "message": "success"
                        });
                } else {
                    res.status(500).send({
                        "error": "server error"
                    });
                }
            });
    };
}
