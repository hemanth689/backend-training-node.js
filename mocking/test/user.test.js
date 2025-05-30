// Mocked dependency
/*
-> jest.mock() replaces the actual getUser() function from user.js.
-> Instead of returning real data, it now returns a fake (mocked) user.
-> We're using jest.fn() to create a spy function that tracks how many times it's called, etc.
*/
jest.mock('../user', () => ({
    getUser: jest.fn(() => ({
        id: 1,
        name: 'Hemanth',
        email: 'hemanth@gmail.com',
    })),
}));

//importing the mocked version of getUser().
//whenever someone imports getUser from user.js(if same name exists) then it gives mocked version only.
//because we are importing getUser after calling jest.mock(), so we'll get fake one.
//If we import the module before calling jest.mock(), we’ll get the real one, and Jest won’t replace it.
//because Jest mocks are hoisted to the top (moved above all code) only if they come first.
const { getUser } = require('../user');

// Function we want to test
const formatUser = () => {
    const user = getUser();
    return {
        userId: user.id,
        fullName: user.name.toUpperCase(),
        contact: user.email,
    };
};

// Test: Mocking + Snapshot
test('formats user data correctly', () => {
    const result = formatUser();

    // Assert structure and content using snapshot
    expect(result).toMatchSnapshot();

    // Assert specific value from mock
    expect(getUser).toHaveBeenCalledTimes(1);
});


/*

toMatchSnapshot():
-> This saves the result to a snapshot file the first time the test runs.
-> In future test runs, it compares the current output to the saved snapshot.
-> If the output changes, Jest will warn you. This helps detect unintended changes.
-> we can update the changes by using   npm test -- -u      or      jest -u.

toHaveBeenCalledTimes(1):
-> Verifies that getUser() was called exactly once.
-> This is mocking verification which confirms the code did call the right function.

*/