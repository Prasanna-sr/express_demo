function userModels(db) {
    var userModelObj = {};
    var collection = db.collection('users');
    userModelObj.getUsers = getUsers;
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
};

module.exports = userModels;
