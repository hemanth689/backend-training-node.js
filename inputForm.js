//This function is used to store the record
function storeRecord() {
    const userName = document.getElementById('uname').value;
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const address = document.getElementById('address').value;
    
    //for checking the fields have values or not
    if (userName && firstName && lastName && address) {
        localStorage.setItem('uname', userName);
        localStorage.setItem('fname', firstName);
        localStorage.setItem('lname', lastName);
        localStorage.setItem('address', address);
        alert('Record Stored Successfully!');
    } else {
        alert('Please fill all the fields');
    }
}

//This function is used to display the record from localStorage.
function retrieveRecord() {
    const uname = localStorage.getItem('uname');
    const fname = localStorage.getItem('fname');
    const lname = localStorage.getItem('lname');
    const address = localStorage.getItem('address');

    //for checking the data values are present in localstorage or not.
    if (uname && fname && lname && address) {
        document.getElementById('output').innerHTML = `<p>User Name : ${uname}</p>
        <p>First Name : ${fname}</p>
        <p>Last Name : ${lname}</p>
        <p>Address : ${address}</p>`;
    } else {
        document.getElementById('output').innerHTML = 'No data found. Please store data first.';
    }
}