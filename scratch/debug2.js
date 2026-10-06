const fs = require('fs');
let content = fs.readFileSync('../index.html', 'utf8');

// Section-07: find the complete section tag opening position
// The string "section-07" appears in the middle of the file 
// because the node.js script in update.js concatenated incorrectly
// The section-07 content is mixed in. Let's find the actual section element boundaries.

const sec07start = content.indexOf('<section class="min-w-screen min-h-screen grid place-items-center" id="section-07"');
const sec08start = content.indexOf('<section class="min-w-screen min-h-screen grid place-items-center relative" id="section-08"');

console.log('sec07 start:', sec07start);
console.log('sec08 start:', sec08start);
console.log('current content between:');
console.log(content.substring(sec07start, sec08start).substring(0, 500));
