const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');
const lines = content.split(/\r?\n/);

lines.forEach((l, i) => {
  if (l.includes('href=') || l.includes('wa.me')) {
    console.log(`L${i+1}: ${l.trim()}`);
  }
});
