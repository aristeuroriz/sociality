Posts = new Mongo.Collection('posts');

Posts.publish = function(message, name, avatar) {
    var params = {
        message: message,
        time: new Date(),
        userId: Meteor.userId(),
        name: name,
        avatar: avatar
    };
    this.insert(params);
    //winston.info("Posts.publish: ", params);
};
Posts.list = function(userIds) {
    return this.find({
        userId: {
            $in: userIds
        }
    }, {
        sort: {
            time: -1,
            name: 1
        }
    });
};