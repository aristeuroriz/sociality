describe("account actions", function() {

    beforeEach(function() {

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
        });

    // ========== should login and logout manually ==========
    it("login and logout manually", function(done) {

        Meteor.loginWithPassword("test@test.com", "testing", function(err) {
            expect(err).toBeUndefined();
            expect(Meteor.userId()).not.toBeNull();

            Meteor.logout(function() {
                done();
            });
        });

    });
    // ========== should login and logout manually ==========
});