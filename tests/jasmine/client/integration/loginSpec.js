describe("Account Actions", function() {

    // ====================
    it("should be able to login normal user", function(done) {
        Meteor.loginWithPassword('test@test.com', 'testing', function(err) {
            expect(err).toBeUndefined();
            done();
        });
    });
    // ====================
    it("should be able to logout", function(done) {
        Meteor.logout(function(err) {
            expect(err).toBeUndefined();
            done();
        });
    });
    // ====================

});