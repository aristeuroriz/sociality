//file: server/fixtures.js
Meteor.startup(function() {
    if (Meteor.users.find().count() == 0) {
        var users = [{
            name: "Normal User",
            email: "test@test.com",
            roles: [],
            password: "testing"
        }, {
            name: "Admin User",
            email: "admin@test.com",
            roles: ['admin'],
            password: "admin3210"
        }];

        _.each(users, function(user) {
            var id = Accounts.createUser({
                email: user.email,
                password: user.password,
                profile: {
                    name: user.name
                }
            });

            if (user.roles.length > 0) {
                Roles.addUsersToRoles(id, user.roles);
            }
        });
    };
});