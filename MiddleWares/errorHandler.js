//It is also custom middleware. This is used to catch the errors occurs during login errors, system crashes, and so on.
//If any error happens it will respond with some json message.
function errorHandler(err, req, res, next) {
    // Log the error message to the console for acknowledgment.
    console.error('Error:', err.message);

    // Send a JSON response with status code and error message
    res.status(err.status || 500).json({
        status: 'error',
        message: err.message || 'Something went wrong' 
    });
}

//exports this file so that it can be used in other files.
module.exports = errorHandler;