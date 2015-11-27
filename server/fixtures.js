//file: server/fixtures.js
Meteor.startup(function() {
    if (Meteor.users.find().count() == 0) {
        var users = [{
            name: "Normal User",
            email: "test@test.com",
            password: "testing"
        }];

        _.each(users, function(user) {
            var id = Accounts.createUser({
                email: user.email,
                password: user.password,
                profile: {
                    name: user.name
                }
            });
        });
    };
});