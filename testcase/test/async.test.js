// test/async.test.js

const { expect } = require('chai');
const { fetchDataWithCallback, fetchDataWithPromise, fetchDataAsync, } = require('../src/async');

describe('Asynchronous Tests', () => {

    // Callback-based async test
    it('should get data using callback', (done) => {
        fetchDataWithCallback((err, data) => {
            expect(data).to.equal("Hello, Callback!");
            done(); // Important to signal test completion
        });
    });

    // Promise-based async test (return the promise)
    it('should get data using Promise', () => {
        return fetchDataWithPromise().then(data => {
            expect(data).to.equal("Hello, Promise!");
        });
    });

    // Async/Await test
    it('should get data using async/await', async () => {
        const data = await fetchDataAsync();
        expect(data).to.equal("Hello, Async!");
    });

});

/*
    For Callbacks :
    -> Mocha sees a done parameter, so it waits for you to call.
    -> when you call done(), mocha knows the test passed.
    -> If you call done(err), then mocha knows the test is failed.
    -> If you forget to call done(), then mocha thinks the test is still running.

    For Promises :
    -> Mocha sees you're returning a Promise.
    -> It waits for the Promise to resolve or reject.
    -> If it resolves, then the test passes otherwise the test fails.
    -> If you don’t return the Promise, Mocha finishes before your code runs.

    For async/await :
    -> If we specify async function in test, it returns a promise automatically.
    -> Mocha waits for the await to finish.
    -> If an error is thrown, then test fails otherwise the test passes.
*/