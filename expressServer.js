//Import express in this file
const express = require('express');
//create an instance for express
const app = express();

//It will parse into json format whatever the data comes from client, so that we can easily use req.body
app.use(express.json());

//create an empty array to store users data
let users = [];

//for getting the all the users
app.get('/users', (req, res) => {
    //check whether atleast one user is present or not
    if(users.length>0)
    res.status(200).json(users);
    //If not present send a response with this message.
    else
    res.status(404).json({ message : 'No Data is available post some data' });
});

//If the client requesting particular user with the id.
app.get('/users/:id', (req, res) => {
    //It will convert into Integer from String.
    const index = parseInt(req.params.id);
    //find method in arrays returns first record that satisfies the condition, otherwise it returns undefined.
    const item = users.find(record => record.id === index);
    //check whether the item is valid record or not.
    if(item)
    {
        res.status(200).json(item);
    }
    //If item is undefined means not found.
    else
    {
        res.status(404).json({ message : 'User is not found' });
    }
});

//for creating a new records and storing it into users.
app.post('/users', (req, res) => {
    //It will return all the data from client requested url by using req.body.
    const newItem = req.body;
    //Check If the same user name exists or not (It will apply for same name with different case as well).
    const duplicate = users.find(user => user.name.toLowerCase() === newItem.name.toLowerCase());
    if(duplicate)
    {
        //It will stop here only otherwise it will add the duplicate user without return.
        return res.status(400).send('User already exists, please add different user');
    }
    //And adding id to newItem
    newItem.id = users.length + 1;
    //It will add into users array.
    users.push(newItem);
    //Return status code as 200 means OK and one msg for acknowledgement.
    res.status(201).json({ message : 'User created successfully' });
});

//for updating the users data with id.
app.put('/users/:id', (req, res) => {
    const index = parseInt(req.params.id);
    //findIndex() method in arrays, It will return first record index that satisfies this condition, Otherwise it will return -1.
    const itemIndex = users.findIndex(record => record.id === index);
    //checking whether the itemIndex value is valid or not.
    if(itemIndex !== -1)
    {
        //getting all fields of data from request.
        const {name, city, education} = req.body;
        //Check whether request has valid data in all the fields, otherwise send some message.
        if(name !== undefined && city !== undefined && education !== undefined) {
            //This will replace all the data with req.body data in client request.
            users[itemIndex] = {id:index, ...req.body};
            res.status(200).json({ message : 'User updated successfully' });
        }
        else
        {
            res.status(400).send('All the fields are required to update');
        }
    }
    else
    {
        res.status(404).json({ message : 'User is not found' });
    }
});

//patch is similar to put is used to update the record in serve, but only difference is passing only the data field which we want to update.
//whereas in put we have to send the data fields which we want to update including remaining data fields as well.
app.patch('/users/:id', (req, res) => {
    const index = parseInt(req.params.id);
    const itemIndex = users.findIndex(record => record.id === index);
    //get the data which we have to update from req.body in client request.
    const updatedData = req.body;
    if(itemIndex !== -1)
    {
        //These will check what data field needs to update whether it is name or city or education or all data fields. 
        if(updatedData.name !== undefined)
            users[itemIndex].name = updatedData.name;
        if(updatedData.city !== undefined)
            users[itemIndex].city = updatedData.city;
        if(updatedData.education !== undefined)
            users[itemIndex].education = updatedData.education;

        res.status(200).json({ message : 'User updated successfully' });
    }
    else
    {
        res.status(404).json({message : 'User is not found' });
    }
})

//for deleting a record from users in server by using id. we use splice method to delete.
//splice() is used to add or remove elements in array.
//splice(index, count, item1, item2, ..., itemN) accepts these parameters.
//It deletes elements from array starting at index position as index.
//It will delete number of elements based on count i.e., 
//if count is 1 then it will delete 1 element from starting position as index.
//if count is 2 then it will delete 2 elements from array i.e., array[index], array[index+1].
//And also here we have item1, item2, ..., itemN are the elements going to be inserted starting from index position as index. 
app.delete('/users/:id', (req, res) => {
    const index = parseInt(req.params.id);
    const itemIndex = users.findIndex(record => record.id === index);
    if(itemIndex !== -1)
    {
        users.splice(itemIndex, 1);
        res.status(200).json({ message : 'User deleted successfully' });
    }
    else
    {
        res.status(404).json({ message : 'User is not found' });
    }
});

//I am running the server at port number as 3000.
const port = 3000;
app.listen(port, () => {
    //This will prints some message while running the server
    //It just for users purpose to know the server is running or not.
    console.log(`Server is running at http://localhost:${port}`);
});