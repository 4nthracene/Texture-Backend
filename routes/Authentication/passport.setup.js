const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = require("../../config");
const UserModel = require("../../models/user.model");
const passport = require("passport");
const { Strategy } = require("passport-google-oauth20");

async function setup() {
    passport.serializeUser(function(user, done) {
        console.log('passport.setup.js:8', user);
        done(null, user.id);
    });
  
    passport.deserializeUser(async function(id, done) {
        const user = await UserModel.find({ id: id });
        if(user) done(null, user && user[0]);
    });

    passport.use(new Strategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: 'https://texture-blog.herokuapp.com/auth/google/callback'
    }, async (accessToken, refreshToken, profile, done) => {
        if (profile) {
            console.log('PROFILE ID: ', profile.id);
            // save user if doesn't exist
            const foundUsers = await UserModel.find({ id: profile.id });
            if (foundUsers.length == 0) {
                const newUser = new UserModel({ profile: profile, id: profile.id });
                try {
                    await newUser.save()
                    done(null, profile);
                } catch (error) {
                    console.error(error.message)
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
