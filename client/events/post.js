Template.post.events({
 "submit form": function(e, template) {
  e.preventDefault();
  var textarea = template.find("textarea");
  var name = Meteor.user().profile.name;
  var avatar = Meteor.user().profile.avatar;
  Meteor.call("publishPost", textarea.value, name, avatar);
  textarea.value = "";
 }
});