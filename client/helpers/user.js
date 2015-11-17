Template.user.helpers({
  firstName: function() {
    return Meteor.user().profile.first_name;
  },
  lastName: function() {
    return Meteor.user().profile.last_name;
  }
});