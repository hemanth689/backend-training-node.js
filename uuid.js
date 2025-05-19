const { v1: uuidv1, v3: uuidv3, v4: uuidv4, v5: uuidv5 } = require('uuid');

// Standard namespace constants from RFC 4122
const DNS_NAMESPACE = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
const URL_NAMESPACE = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
const name = 'example.com'

console.log('UUID v1 (Time-based):');
console.log(uuidv1());

console.log('\nUUID v3 (Name-based, MD5):');
console.log(uuidv3(name, DNS_NAMESPACE)); // Always same for same input
console.log(uuidv3(name, URL_NAMESPACE))

console.log('\nUUID v4 (Random):');
console.log(uuidv4());

console.log('\nUUID v5 (Name-based, SHA-1):');
console.log(uuidv5(name, DNS_NAMESPACE)); // Deterministic like v3
console.log(uuidv5(name, URL_NAMESPACE))
