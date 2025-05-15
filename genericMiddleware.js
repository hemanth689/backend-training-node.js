//Generic Middleware
//It will just log the client request details before handling the request.
const logger = (req, res, next) => {
    console.log('--- Incoming Request ---');
    console.log('Method:', req.method);
    console.log('URL:', req.originalUrl);
    console.log('Params:', req.params);
    console.log('Query:', req.query);
    console.log('Body:', req.body);
    console.log('------------------------');

    next(); // Pass control to the next middleware/route handler
};

module.exports = logger;
