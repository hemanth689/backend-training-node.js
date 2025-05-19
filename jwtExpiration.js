/*
    -> JWT's include expiration time (exp) After that time the token is invalid even if we give valid token.
    -> We can set the expiration time as well.
    -> we can set expiresIn using time strings like '10m', '1h', '2d', etc.
    -> By default JWT's do not expire unless we explicitly sets otherwise it remains valid forever.
    -> In sessions also we can set the expiration time using maxAge option.
    -> We always recommended to set expiration time for both sessions and jwt's to improve security.
*/
const jwt = require('jsonwebtoken');

const id = 123;
const payload = { userId: id };
const secret = 'your_jwt_secret';

// Expires in 1 hour
const time = '2sec';
const token = jwt.sign(payload, secret, { expiresIn: time });

console.log(token);


const decoded = jwt.decode(token);
//prints in UTC Timestamp
console.log(new Date(decoded.exp * 1000)); // Expiry time (in readable format)
