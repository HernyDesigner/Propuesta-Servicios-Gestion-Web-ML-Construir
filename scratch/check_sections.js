const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');
const lines = content.split(/\r?\n/);

lines.forEach((l, i) => {
  if (l.includes('<section') || l.includes('id="section-')) {
    console.log(`L${i+1}: ${l.trim()}`);
  }
  if (l.includes('<h1') || l.includes('<h2') || l.includes('<h3')) {
    console.log(`  L${i+1} heading: ${l.trim()}`);
  }
});
