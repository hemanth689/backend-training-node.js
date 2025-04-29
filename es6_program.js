/*
    Converting this Basic Auth program into ES6. So I have included some changes in this program. 
    Generally I have used normal functions, require() method to import, and var variables in previous code.
    In this code I have used arrow functions instead of normal functions, import instead of require and let or const variables instead var. 
*/

//since we are using import so, we have to make sure that the package.json file includes "type" = "method".
//Otherwise Node.js will throw an error like "Cannot use import statement outside a module".
import express from 'express';

//I have used arrow function because these are shorter, cleaner and automatically binds this.
//No need to use .bind(this) anymore, and also it's safer for callbacks (setTimeout, map(), filter(), etc.), promises and event handlers.
const basicAuth = (req, res, next) => {
    
    const authHeader = req.headers['authorization'];

    //This is called as optional chaining, first it checks whether authHeader exists or not.
    //If not it stops at undefined safely without going further.
    //If exists it will check that it starts with Basic or not.
    //Wherever ? present, it will check that value exists or not, if not stops at undefined.
    /*
        const city = user && user.address && user.address.city;     -   old way.
        const city = user?.address?.city;                           -   using optional chaining.
    */
    if (!authHeader?.startsWith('Basic ')) {
        return res.status(401).send('Missing or Invalid Authorization Header');
    }

    //I have used const for variables which we can't change the values further.
    const base64Credentials = authHeader.split(' ')[1];
    //I have used 'utf-8' because it's a good practice to explicitly specify encoding.
    //And also 'utf-8' is standard and avoids weird decoding issues. 
    const decodedCredentials = Buffer.from(base64Credentials, 'base64').toString('utf-8');
    
    const [username, password] = decodedCredentials.split(':');

    const validUsername = "Hemanth";
    const validPassword = "hk@1234";

    
    if (username === validUsername && password === validPassword) {
        
        req.user = { username };
        
        //I have added return makes sure no accidental code runs after next().
        //And it is Safer for bigger applications.
        return next();
    }
    
    //It's a good practice to add return for responses.
    return res.status(401).send('Invalid Username or Password');
}


const app = express();

app.use(express.json());

app.use(basicAuth);

app.get('/login', (req, res) => {
    res.status(200).send(`Authorization is Successfull\nWelcome, ${req.user.username}`);
});

app.get('/dashboard', (req, res) => {
    res.status(200).send(`Hii, ${req.user.username}\nThis is your Dashboard`);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


/*
    How the Node.js do the process internally :
    -> Node.js does NOT immediately execute the file.
    -> First, it parses the file:
    -> Reads the file line by line.
    -> Figures out:
            Are you using require()? (CommonJS)
            Are you using import? (ESM)
            Are there syntax mistakes?
    -> Creates an internal structure (like a tree) to represent your code.
    -> Only after parsing, it runs (executes) your code.


    Without "type": "module"
    Read file --> Parse as CommonJS (fail) --> Parse as ESM (success) --> Execute

    With "type": "module"
    Read file --> Parse as ESM (success) --> Execute
*/