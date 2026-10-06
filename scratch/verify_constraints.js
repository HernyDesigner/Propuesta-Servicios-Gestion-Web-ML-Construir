const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');

const checks = [
  { name: 'capacitación', regex: /capacita/i, expected: false },
  { name: 'Rocío', regex: /roc[ií]o/i, expected: false },
  { name: '40 SKU', regex: /40\s*sku/i, expected: false },
  { name: 'SKU', regex: /\bsku\b/i, expected: false },
  { name: 'máximo 2 reuniones', regex: /m[aá]ximo.*reuni/i, expected: false },
  { name: 'cantidad fija de banners', regex: /\b\d+\s*banners?\b/i, expected: false },
  { name: 'descuento 10%', regex: /10%|descuento|ahorro/i, expected: false },
  { name: 'esquema 30/20/50', regex: /30%|20%/i, expected: false },
  { name: 'Cafecito / Buy Me a Coffee', regex: /cafecito|coffee/i, expected: false },
  { name: 'YPP', regex: /\bypp\b/i, expected: false },
  { name: 'Hincha Premium', regex: /hincha/i, expected: false },
  { name: 'incremento proporcional en pack 1', regex: /presupuesto se incrementar[aá] de forma proporcional/i, expected: true },
  { name: 'WhatsApp nuevo', regex: /5491162574737/, expected: true },
  { name: 'LocalStorage pack', regex: /ml_construir_pack/, expected: true }
];

console.log('--- RESTRICTIONS VERIFICATION ---');
let allPassed = true;
checks.forEach(c => {
  const matches = c.regex.test(content);
  const passed = matches === c.expected;
  if (!passed) allPassed = false;
  console.log(`${passed ? '✅ PASS' : '❌ FAIL'}: ${c.name} (found: ${matches}, expected: ${c.expected})`);
});
console.log('All passed:', allPassed);
