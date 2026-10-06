const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');
const lines = content.split(/\r?\n/);
let s8Start = -1, s8End = -1;
lines.forEach((l, i) => {
  if (l.includes('id="section-08"')) s8Start = i + 1;
  if (s8Start !== -1 && s8End === -1 && l.includes('</section>')) {
    s8End = i + 1;
  }
});
console.log('Section 08 lines:', s8Start, 'to', s8End);
