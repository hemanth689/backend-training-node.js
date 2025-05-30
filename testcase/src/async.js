// Simulate async using a callback
function fetchDataWithCallback(callback) {
    setTimeout(() => {
        callback(null, "Hello, Callback!");
    }, 100);
}

// Simulate async using a Promise
function fetchDataWithPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello, Promise!");
        }, 100);
    });
}

// Simulate async/await
async function fetchDataAsync() {
    return "Hello, Async!";
}

module.exports = { fetchDataWithCallback, fetchDataWithPromise, fetchDataAsync };
