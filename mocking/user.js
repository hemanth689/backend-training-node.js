// This would normally call a DB or API.
function getUser() {
    return {
        id: 12,
        name: 'Actual User',
        email: 'actual@gmail.com',
    };
}

module.exports = { getUser };

/*
-> This is a real module that normally fetches a user (could be from a database or API).
-> We want to mock this in our test so we don’t call the real function.
*/