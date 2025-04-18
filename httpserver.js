// Import the 'http' module to create an HTTP server
const http = require('http');

// Import the 'url' module to work with URLs in incoming requests
const url = require('url');

// Store data (simulating a simple database with an array of items)
let dataStore = [
    { id: 1, name: "hemanth" },
    { id: 2, name: "Ramana" },
];

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Parse the URL and extract query parameters
    const parsedUrl = url.parse(req.url, true);
    const method = req.method;  // Get the HTTP method (GET, POST, etc.)

    // Set response headers to indicate JSON content
    res.setHeader('Content-Type', 'application/json');

    // Handle GET requests
    if (method === 'GET') {
        // If the request is for '/items', return all items
        if (parsedUrl.pathname === '/items') {
            res.statusCode = 200;
            res.end(JSON.stringify(dataStore));  // Send all items as JSON
        } 
        // If the request is for a specific item by ID
        else if (parsedUrl.pathname.startsWith('/items/')) {
            const id = parseInt(parsedUrl.pathname.split('/')[2]);  // Get the ID from the URL
            const item = dataStore.find(item => item.id === id);  // Find the item by ID
            if (item) {
                res.statusCode = 200;
                res.end(JSON.stringify(item));  // Send the item as JSON
            } else {
                res.statusCode = 404;
                res.end(JSON.stringify({ message: 'Item not found' }));  // If not found, send 404
            }
        }
    }

    // Handle POST requests (to create a new item)
    else if (method === 'POST' && parsedUrl.pathname === '/items') {
        let body = '';
        req.on('data', chunk => {
            body += chunk;  // Collect the body data
        });

        req.on('end', () => {
            const newItem = JSON.parse(body);  // Parse the JSON data from the body
            newItem.id = dataStore.length + 1;  // Assign a new ID
            dataStore.push(newItem);  // Add the new item to the data store
            res.statusCode = 201;
            res.end(JSON.stringify(newItem));  // Return the new item with a 201 status
        });
    }

    // Handle PUT requests (to update an existing item)
    else if (method === 'PUT' && parsedUrl.pathname.startsWith('/items/')) {
        const id = parseInt(parsedUrl.pathname.split('/')[2]);  // Extract ID from the URL
        let body = '';
        req.on('data', chunk => {
            body += chunk;  // Collect the body data
        });

        req.on('end', () => {
            const updatedItem = JSON.parse(body);  // Parse the updated item data
            let item = dataStore.find(item => item.id === id);  // Find the item by ID

            if (item) {
                item.name = updatedItem.name || item.name;  // Update the name if provided
                res.statusCode = 200;
                res.end(JSON.stringify(item));  // Return the updated item with a 200 status
            } else {
                res.statusCode = 404;
                res.end(JSON.stringify({ message: 'Item not found' }));  // If not found, send 404
            }
        });
    }

    // Handle DELETE requests (to delete an item)
    else if (method === 'DELETE' && parsedUrl.pathname.startsWith('/items/')) {
        const id = parseInt(parsedUrl.pathname.split('/')[2]);  // Extract ID from the URL
        const index = dataStore.findIndex(item => item.id === id);  // Find the index of the item

        if (index !== -1) {
            dataStore.splice(index, 1);  // Remove the item from the array
            res.statusCode = 200;
            res.end(JSON.stringify({ message: 'Item deleted' }));  // Return a success message
        } else {
            res.statusCode = 404;
            res.end(JSON.stringify({ message: 'Item not found' }));  // If not found, send 404
        }
    }

    // Handle unknown routes (for any other requests)
    else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: 'Route not found' }));  // Send a 404 error for unknown routes
    }
});

// Start the server on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log("Server running");  // the server is running
});
/*
node file_name.js

open cmd 
curl http://localhost:3000/items
curl -X POST -H "Content-Type: application/json" -d '{"name": "Arjun"}' http://localhost:3000/items
curl -X PUT -H "Content-Type: application/json" -d '{"name": "venkat"}' http://localhost:3000/items/1
curl -X DELETE http://localhost:3000/items/1
*/
/*
curl stands for Client URL. It's a command-line tool used to transfer data to or from a server, using various protocols like:
HTTP / HTTPS
FTP
SMTP
SCP
and more
But it’s most commonly used for making HTTP requests, especially when testing APIs.
-X POST: specifies the request method.
-d: sends data in the request body
-H: adds headers
-d: JSON payload.
*/
/* 
const id = parseInt(parsedUrl.pathname.split('/')[2]);
What it is doing:
parsedUrl.pathname:
This gets the path part of the URL (e.g., /user/123).
.split('/'):
This splits the path string by / and returns an array.
For example:
'/user/123'.split('/') // gives ["", "user", "123"]
[2]
Index 2 gives you the "123" part (the ID).
parseInt(...)
Converts the string "123" into a number: 123.
*/