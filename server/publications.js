Meteor.publish("posts", function(_id) {
  var timelineIds = Friendships.timelineIds(_id);
  return Posts.list(timelineIds);
});

Meteor.publish("friendship", function(_id) {
  return Friendships.followersAndFollowings(_id);
});

Meteor.publish("user", function(_id) {
  return Meteor.users.findFaster({_id: _id});
});