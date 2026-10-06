const fs = require('fs');
let content = fs.readFileSync('../index.html', 'utf8');

// section-07 is currently corrupted: the opening tag is there but the content is mixed.
// We need to replace everything from the section-07 opening tag to before section-08 opening tag.

const sec07tagStart = content.indexOf('<section class="min-w-screen min-h-screen grid place-items-center" id="section-07"');
const sec08tagStart = content.indexOf('<section class="min-w-screen min-h-screen grid place-items-center relative" id="section-08"');

if (sec07tagStart === -1 || sec08tagStart === -1) {
  console.log('ERROR: markers not found', sec07tagStart, sec08tagStart);
  process.exit(1);
}

const newSection07 = `<section class="min-w-screen min-h-screen grid place-items-center" id="section-07" data-wave-opacity="0.3">
      <div class="max-w-6xl mx-auto w-full px-6 py-20">
        <h2 class="text-gray-400 text-md uppercase tracking-wide mb-8 border-l-royal-violet border-l-4 pl-4">
          2. Cómo vamos a trabajar
        </h2>
        <ol class="text-gray-300 text-lg md:text-xl list-decimal pl-10 mb-8">
          <li class="mb-4">Revisar la tienda, reunir accesos y materiales y seleccionar el catálogo inicial.</li>
          <li class="mb-4">Organizar la navegación y definir los componentes comerciales adecuados.</li>
          <li class="mb-4">Mejorar portada, banners, productos y contenido institucional.</li>
          <li class="mb-4">Revisar el recorrido de compra y la visualización en computadora y celular.</li>
          <li class="mb-4">Consolidar los ajustes y entregar la puesta a punto.</li>
          <li class="mb-4">Si se elige la gestión mensual, continuar con actualizaciones, diseño comercial, coordinación y seguimiento.</li>
        </ol>
        <div class="bg-zinc-900/50 border border-zinc-700/50 rounded-xl p-6">
          <p class="text-zinc-300 text-sm leading-relaxed">
            <strong>Aclaración:</strong> Se evaluará la incorporación de testimonios, productos destacados, los más buscados y los demás componentes que Empretienda permita y resulten adecuados para el negocio. La selección se realizará durante la gestión e implementación de la web, considerando las funciones disponibles y el material aportado.
          </p>
        </div>
      </div>
    </section>\r\n\r\n    `;

const before = content.substring(0, sec07tagStart);
const after = content.substring(sec08tagStart);

content = before + newSection07 + after;

fs.writeFileSync('../index.html', content, 'utf8');
console.log('Section-07 fixed. New file size:', content.length);

// Verify
const v = fs.readFileSync('../index.html', 'utf8');
console.log('Verify - "vamos a trabajar":', v.includes('vamos a trabajar'));
console.log('Verify - "Recomendaciones":', v.includes('Recomendaciones'));
console.log('Verify - "Cristian":', v.includes('Cristian'));
console.log('Verify - "Ecosistema Digital":', v.includes('Ecosistema Digital'));
console.log('Verify - pack1:', v.includes('Puesta a punto de la tienda online'));
console.log('Verify - ML_PACKS:', v.includes('ML_PACKS'));
console.log('Verify - cierre:', v.includes('Conversar sobre esta propuesta'));
console.log('Verify - whatsapp:', v.includes('5491162574737'));
console.log('Verify - old phone:', v.includes('541135884615'));
console.log('Verify - old title:', v.includes('Boca en La Bombonera'));
