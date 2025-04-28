/*
Bearer middleware checks if the request has a valid token before giving you access to protected route.
The token is just like a string of characters. This token should send in request itself.
If the token is valid then only you can get an access other access is denied.
This token is generally gives Authorization server but here we used some token to implement this.
*/
function bearerOAuth(req, res, next) {
    const authHeader = req.headers['authorization'];

    //Check whether it is bearer or not in authorization header.
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).send('Missing or Invalid Authorization Header');
    }

    //get the token from authorization header, here token is not converted to any format like basicAuth.
    const token = authHeader.split(' ')[1];

    const validToken = "secret";

    if (validToken === token) {
        next();
    }
    else {
        res.status(401).send('Invalid Token');
    }
}

module.exports = bearerOAuth;