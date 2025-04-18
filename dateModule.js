/*
    we can create our own module like below, 
    here exports keyword is used to makes the properties and methods available outside the module file.
    In this case myDateTime is variable it stores function and it returns current date.
    we should access by this name to get the current date. Before that we have to import this module with this file name.
*/
exports.myDateTime = function(){
    return Date();
};