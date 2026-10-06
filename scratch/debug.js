const fs = require('fs');
const c = fs.readFileSync('../index.html', 'utf8');

const i = c.indexOf('id="section-07"');
console.log('section-07 HTML at:', i);
const j = c.indexOf('id="section-08"');
console.log('section-08 HTML at:', j);

// Print section-07 area  
console.log('\n--- section-07 area ---');
console.log(JSON.stringify(c.substring(i, i+500)));

// Print context around section 08 start
console.log('\n--- before section-08 ---');
console.log(JSON.stringify(c.substring(j-100, j+100)));
