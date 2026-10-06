const fs = require('fs');

const filePath = '../index.html';
let content = fs.readFileSync(filePath, 'utf8');

// Helper: normalize CR/LF for matching, then restore original
// Instead, we use indexOf with regex-like approach

// SECTION-03: replace the old Boca content with ML Construir content
// We'll find the section by unique strings and replace the inner div
{
  // Find section-03's main content div
  const startMarker = '      <div class="max-w-4xl mx-auto w-full px-6 py-20">';
  const endMarker = '    </section>\r\n\r\n    <section class="min-w-screen min-h-screen grid place-items-center" id="section-07"';
  const s = content.indexOf(startMarker);
  const e = content.indexOf(endMarker);
  if (s !== -1 && e !== -1) {
    const inner = content.substring(s + startMarker.length, e);
    if (inner.includes('Contexto') || inner.includes('Pablo')) {
      const newInner = `
        <h2 class="text-gray-400 text-md uppercase tracking-wide mb-8 border-l-royal-violet border-l-4 pl-4">
          1. Una tienda que acompañe el trabajo del equipo
        </h2>
        <!-- Bloque de cita estratégica -->
        <div class="relative border border-zinc-800 rounded-2xl p-8 md:p-12 bg-zinc-900/30 mb-16">
          <div class="absolute top-0 left-8 -translate-y-3">
            <span class="text-purple-600 text-5xl font-serif leading-none select-none">&ldquo;</span>
          </div>
          <p class="text-gray-200 text-lg md:text-xl font-light leading-relaxed">
            Cristian, ML Construir ya cuenta con un equipo trabajando en comunicación, anuncios y Mercado Libre. Esta propuesta se concentra en fortalecer la tienda online: mejorar la presentación de los productos, ordenar la información y trasladar a la web la coherencia visual de la marca.<br><br>Podemos realizar una puesta a punto inicial o acompañarla con una gestión mensual para mantener la tienda actualizada y coordinada con las acciones comerciales del negocio.
          </p>
          <div class="mt-6 flex items-center gap-3">
            <div class="w-8 h-px bg-purple-600"></div>
            <span class="text-zinc-500 text-xs uppercase tracking-widest">Herny Godoy · Diseño &amp; Tecnología</span>
          </div>
        </div>

        <!-- Nota destacada -->
        <div class="flex items-start gap-3 bg-zinc-900/40 border border-zinc-700/50 rounded-xl px-6 py-4 mb-16 relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-transparent pointer-events-none"></div>
          <div class="flex-shrink-0 mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
          </div>
          <div>
            <p class="text-zinc-300 text-sm leading-relaxed">
              La propuesta contempla un catálogo inicial de aproximadamente 20 productos y el trabajo sobre la tienda actual en Empretienda. Las secciones y componentes se evaluarán durante la implementación, según las posibilidades de la plataforma y las necesidades de ML Construir.
            </p>
          </div>
        </div>

        <!-- Pilares estratégicos -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="border border-zinc-800 rounded-xl p-6 bg-zinc-900/20 hover:border-purple-600/40 transition-colors">
            <div class="text-purple-600 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15l-1.8 1.8M5 14.5l-1.8 1.8M5 14.5l1.8 1.8M19.8 15l1.8 1.8" />
              </svg>
            </div>
            <h3 class="text-white font-semibold mb-2">Presentación comercial</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">Portada, banners y secciones que ayuden a descubrir los productos y comprender la propuesta del negocio.</p>
          </div>
          <div class="border border-zinc-800 rounded-xl p-6 bg-zinc-900/20 hover:border-purple-600/40 transition-colors">
            <div class="text-purple-600 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <h3 class="text-white font-semibold mb-2">Catálogo e información</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">Productos mejor presentados, imágenes optimizadas y contenido institucional validado por ML Construir.</p>
          </div>
          <div class="border border-zinc-800 rounded-xl p-6 bg-zinc-900/20 hover:border-purple-600/40 transition-colors">
            <div class="text-purple-600 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5" />
              </svg>
            </div>
            <h3 class="text-white font-semibold mb-2">Continuidad y coordinación</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">Una alternativa mensual para sostener la actualización de la tienda y acompañar las acciones de comunicación del equipo.</p>
          </div>
        </div>
      </div>`;
      
      content = content.substring(0, s + startMarker.length) + newInner + '\r\n    </section>\r\n' + content.substring(e + endMarker.length - endMarker.length + endMarker.length - 2 /* strip \r\n */ + 2);
      // Actually, rebuild more carefully:
      const beforeSection03Content = content.substring(0, s + startMarker.length);
      const afterSection03 = content.substring(e);
      content = beforeSection03Content + newInner + '\r\n    </section>\r\n\r\n    <section class="min-w-screen min-h-screen grid place-items-center" id="section-07"';
      content += afterSection03.substring(endMarker.length);
      console.log('Section-03 replaced OK');
    } else {
      console.log('Section-03: already replaced or marker not matching inner content');
    }
  } else {
    console.log('ERROR section-03 markers not found. s=',s,'e=',e);
  }
}

// SECTION-07: replace the Recomendaciones with Plan de trabajo
{
  const startMarker = '      <div class="max-w-6xl mx-auto w-full px-6 py-20">';
  const endMarker07 = '    </section>\r\n\r\n    <section class="min-w-screen min-h-screen grid place-items-center relative" id="section-08"';
  const s = content.indexOf(startMarker);
  const e = content.indexOf(endMarker07, s);
  if (s !== -1 && e !== -1) {
    const inner = content.substring(s + startMarker.length, e);
    if (inner.includes('Recomendaciones') || inner.includes('Boca en La Bombonera')) {
      const newInner = `
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
      </div>`;

      const before = content.substring(0, s + startMarker.length);
      const after = content.substring(e);
      content = before + newInner + '\r\n    </section>\r\n\r\n    <section class="min-w-screen min-h-screen grid place-items-center relative" id="section-08"';
      content += after.substring(endMarker07.length);
      console.log('Section-07 replaced OK');
    } else {
      console.log('Section-07: already replaced or content changed');
    }
  } else {
    console.log('ERROR section-07 markers not found. s=',s,'e=',e);
  }
}

// Also fix portada if still not updated
{
  if (content.includes('Ecosistema Digital')) {
    content = content.replace(
      /Propuesta Estratégica · 2026/,
      'Propuesta comercial · ML Construir'
    ).replace(
      'Ecosistema Digital &amp;<br>Comunidad Global Xeneize',
      'Una tienda clara, actualizada y<br>alineada con tu marca'
    ).replace(
      'Para Boca en La Bombonera',
      'Diseño comercial, organización del catálogo y gestión de la tienda online.'
    ).replace(
      'Contenido · Comunidad · Monetización Internacional',
      'Dos alternativas: puesta a punto inicial o implementación con acompañamiento mensual durante tres meses.'
    );
    console.log('Portada fixed');
  } else {
    console.log('Portada already fixed');
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('All done. File size:', content.length);
