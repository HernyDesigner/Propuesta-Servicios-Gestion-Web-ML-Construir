const fs = require('fs');
const vm = require('vm');

const html = fs.readFileSync('index.html', 'utf8');

// Extraer todos los <script> que no tengan src
const scriptRegex = /<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi;
let match;
let scriptIdx = 0;

while ((match = scriptRegex.exec(html)) !== null) {
  scriptIdx++;
  const scriptContent = match[1];
  console.log(`Checking script #${scriptIdx} (${scriptContent.length} bytes)...`);
  try {
    new vm.Script(scriptContent);
    console.log(`✅ Script #${scriptIdx} has valid syntax!`);
  } catch (err) {
    console.error(`❌ Script #${scriptIdx} syntax error:`, err.message);
  }
}
