const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = require("../../config");
const UserModel = require("../../models/user.model");
const passport = require("passport");
const { Strategy } = require("passport-google-oauth20");

async function setup() {
    passport.serializeUser(function(user, done) {
        done(null, user);
    });
  
    passport.deserializeUser(function(user, done) {
        done(null, user);
    });

    passport.use(new Strategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: 'http://localhost:8000/auth/google/callback'
    }, async (accessToken, refreshToken, profile, done) => {
        if (profile) {
            // save user if doesn't exist
            const foundUsers = await UserModel.find({ id: profile.id });
            if (foundUsers.length == 0) {
                const newUser = new UserModel({ profile, id: profile.id });
                try {
                    await newUser.save()
                    done(null, profile);
                } catch (error) {
                    done(error, null)
                }
            } else {
                done(null, profile);
            }
        } else {
            // throw error
            done("No profile found", null);
        }
    }));
}

module.exports = setup;