function userModels(db) {
    var userModelObj = {};
    var collection = db.collection('users');
    userModelObj.getUsers = getUsers;
    userModelObj.getUserDetail = getUserDetail;
    return userModelObj;

    function getUsers(callback) {
        collection.find({}).toArray(function(err, result) {
            if (!err) {
                callback(null, result);
            } else {
                callback(err);
            }
        });
    }

    function getUserDetail(email, callback) {
        collection.find({
            'emailId': email
        }).toArray(function(err, result) {

            if (!err) {
                callback(null, result[0]);
            } else {
                callback(err);
            }
        });
    }
};

module.exports = userModels;
