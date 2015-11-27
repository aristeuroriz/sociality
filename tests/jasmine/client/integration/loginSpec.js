describe("account actions", function() {

    // ========== should login and logout ==========
    it("should login and logout", function(done) {

        if (Meteor.users.find({
            email: 'test@test.com'
        })) {
             console.log('==========>>> User already exists!')
        } else {
            Accounts.createUser({
                username: 'teste',
                email: 'test@test.com',
                password: 'testing',
                profile: {
                    //publicly visible fields like firstname goes here
                }
            });
            console.log('==========>>> User created!')
        }

        Meteor.loginWithPassword("test@test.com", "testing", function(err) {
            expect(err).toBeUndefined();
            expect(Meteor.userId()).not.toBeNull();

            Meteor.logout(function() {
                done();
            });
        });

    });
    // ========== should login and logout ==========
});
