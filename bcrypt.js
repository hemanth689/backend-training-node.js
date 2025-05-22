/*
-> It is Used for hashing passwords securely.
-> Never store plain-text passwords in the database.
-> bcrypt protects passwords by turning them into a scrambled version (called a hash) that can't be reversed.
-> It also adds random data (called a salt) to make each password hash unique, even if two people use the same password.
-> Later, when someone logs in, bcrypt checks the entered password by comparing it to the saved hash (not by decrypting it).

-> we can install by using npm install bcrypt
-> And we have saltRounds(cost factor) which determines how many times the hashing algorithm runs.
-> if the saltRounds is N, the iterations are 2^N.
-> A salt is random data added to a password before hashing.
-> It ensures two identical passwords have different hashes.
-> bcrypt handles salt generation internally if we use hash(password, saltRounds).
-> More rounds is equivalent to more secure but slower, typically we use 10 to 14 rounds in production.

What will happen in each round?
-> generated salt and password is combined.
-> Key expansion is performed using EksBlowfish key setup runs 2^N times.
-> After all rounds, bcrypt encrypts key using fixed string("OrpheanBeholderScryDoubt") 
-> encrypts it 64 times using Blowfish cipher and produces the final hash.
-> The hash includes algorithm version, cost factor, salt and hashed password.

-> Do not use this for encryption and decryption of data instead use AES etc.
-> If we give same password and same saltRounds also we will not get same hash.
-> we will get same hash if we give same password, same saltRounds and same salt for each iteration.
-> It will happen when we generate the salt manually instead we can generate the salt automatically to avoid this problem.
*/


const bcrypt = require('bcrypt');

(async () => {
    const password = 'mySecretPassword';
    const saltRounds = 10;

    console.log('Password:', password);
    console.log('Salt Rounds:', saltRounds);

    // 1. Manual Salt Generation
    const manualSalt = await bcrypt.genSalt(saltRounds);
    console.log('\nManually Generated Salt:', manualSalt);

    const manualHash1 = await bcrypt.hash(password, manualSalt);
    const manualHash2 = await bcrypt.hash(password, manualSalt);

    console.log('\nHash with manual salt #1:', manualHash1);
    console.log('Hash with manual salt #2:', manualHash2);
    console.log('Hashes equal (manual salt):', manualHash1 === manualHash2);

    // 2. Automatic Salt Generation
    const autoHash1 = await bcrypt.hash(password, saltRounds);
    const autoHash2 = await bcrypt.hash(password, saltRounds);

    console.log('\nHash with automatic salt #1:', autoHash1);
    console.log('Hash with automatic salt #2:', autoHash2);
    console.log('Hashes equal (auto salt):', autoHash1 === autoHash2);

    // Verifying Password
    const isMatch1 = await bcrypt.compare(password, manualHash1);
    console.log('\nPassword matches manualHash1 :', isMatch1);

    const isMatch2 = await bcrypt.compare(password, autoHash1);
    console.log('\nPassword matches autoHash1 :', isMatch2);
})();
