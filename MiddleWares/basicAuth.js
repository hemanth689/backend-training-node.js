/*
Middleware is like a gatekeeper. It runs before your route handler.
Middleware is a function that runs between the request and the final response.
It can modify, stop, or pass along the request.

-> It can check user logins which means Authenticate users using basicAuth strategy.
-> It can modify the request or response.
-> It can stop the request if needed (like when credentials are wrong).
-> This is a custom middleware function named basicAuth that checks if the user is sending the correct username and password.
*/
function basicAuth(req, res, next) {
    //It reads the Authorization header from the request.
    const authHeader = req.headers['authorization'];

    //check whether authorization header is present or is it basic authorization or not.
    if (!authHeader || !authHeader.startsWith('Basic ')) {
        return res.status(401).send('Missing or Invalid Authorization Header');
    }

    //get the user credentials from header.
    const base64Credentials = authHeader.split(' ')[1];
    //convert it into original format because credentials are changed to base64 format while requesting.
    const decodedCredentials = Buffer.from(base64Credentials, 'base64').toString();
    //get the credentials separately
    const [username, password] = decodedCredentials.split(':');

    const validUsername = "Hemanth";
    const validPassword = "hk@1234";

    //check the valid credentials or not
    if (username === validUsername && password === validPassword) {
        //saves the username in request to use for later.
        req.user = { username };
        //next() is used to continue to next step i.e. server
        //if it is not used the browser is in loading, cannot move to next step.
        next();
    }
    //if it is invalid credentials send this response.
    else {
        res.status(401).send('Invalid Username or Password');
    }
}

module.exports = basicAuth;

// statusCodes:
// 400 - Bad Request: Client sent invalid syntax or missing fields
// 401 - Unauthorized: Invalid or missing credentials
// 404 - Not Found: Requested resource doesn't exist