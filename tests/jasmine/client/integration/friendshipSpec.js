describe("friendship actions", function() {
    beforeEach(function(done) {
        Meteor.loginWithPassword("test@test.com", "testing", function(err) {
            Router.go('/');
            Tracker.afterFlush(done);
            console.clear();
            console.log('==========>>> User logged!')
        });
    });

    beforeEach(waitForRouter);

    it("shows a initial page", function() {
        expect(Meteor.userId()).not.toBeNull();
        console.log('User Id: '+ Meteor.userId() );
       
         Meteor.logout(function() {
            console.log('==========>>> User out!')
        });
    });
});