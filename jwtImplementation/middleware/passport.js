const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const { User } = require('../models');
require('dotenv').config();

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
};

module.exports = (passport) => {
    passport.use(
        new JwtStrategy(opts, async (jwt_payload, done) => {
            try {
                const user = await User.findByPk(jwt_payload.id);
                return user ? done(null, user) : done(null, false);
            } catch (err) {
                return done(err, false);
            }
        })
    );
};



/*
How JwtStrategy Works (Step-by-Step)

Client sends a request with a JWT
The token is typically sent in the Authorization header:

Authorization: Bearer <jwt_token>

Passport uses JwtStrategy to extract the token
Using options like jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), the strategy grabs the token from the header.

Token is verified using a secret key or public key
The strategy verifies the token using the same secret (or public key) used to sign it.

Decoded payload is passed to the callback
If valid, the payload (like { id: 123 }) is extracted and passed to your callback.

User is found using payload info
In the strategy's callback, you usually look up the user in the database using the payload data.

User is attached to req.user
If found and valid, Passport calls done(null, user), and the user is attached to the req.user object for use in routes.
*/