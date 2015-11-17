Accounts.onCreateUser(function(options, user) {
    var email, oldUser, service;

    if (user.profile == null) {
        user.profile = {};
        if (options.profile != null) {
            user.profile.name = options.profile.name;
        }
    }

    if (user.services != null) {
        service = _.keys(user.services)[0];
        email = user.services[service].email;
        if (email != null) {
            oldUser = Meteor.users.findOne({
                "emails.address": email
            });
            if (oldUser != null) {
                if (oldUser.services == null) {
                    oldUser.services = {};
                }
                if (service === "google" || service === "facebook") {
                    oldUser.services[service] = user.services[service];
                    Meteor.users.remove(oldUser._id);
                    user = oldUser;
                }
            } else {
                if (service === "google" || service === "facebook") {
                    if (user.services[service].email != null) {
                        user.emails = [{
                            address: user.services[service].email,
                            verified: true
                        }];
                    } else {
                        throw new Meteor.Error(500, "" + service + " account has no email attached");
                    }
                    user.profile.name = user.services[service].name;
                    if (user.profile && service === "facebook") {
                        user.profile.avatar = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
                        user.profile.gender = user.services.facebook.gender;
                        user.profile.link_facebook = user.services.facebook.link;
                        user.profile.email = user.services.facebook.email;
                        user.profile.birth_day = user.services.facebook.user_birthday;
                        user.profile.friends = user.services.facebook.user_friends;
                    }
                    if (user.profile && service === "google") {
                        user.profile.avatar = user.services.google.picture;
                    }
                }
            }
        }
    }
    return user;
});