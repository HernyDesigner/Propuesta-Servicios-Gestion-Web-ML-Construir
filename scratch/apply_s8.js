const fs = require('fs');

const indexPath = 'index.html';
let content = fs.readFileSync(indexPath, 'utf8');

// 1. Encontrar el inicio y fin de section-08
const s8StartMarker = '<section class="min-w-screen min-h-screen grid place-items-center relative" id="section-08"';
const s9StartMarker = '<section class="min-w-screen min-h-screen grid place-items-center text-center relative pb-20" id="section-09"';

const startIndex = content.indexOf(s8StartMarker);
const nextSectionIndex = content.indexOf(s9StartMarker);

if (startIndex === -1 || nextSectionIndex === -1) {
  console.error('Error: markers not found', { startIndex, nextSectionIndex });
  process.exit(1);
}

// Encontrar el </section> justo antes de s9StartMarker
const endTagMarker = '</section>';
const endIndex = content.lastIndexOf(endTagMarker, nextSectionIndex);

if (endIndex === -1 || endIndex <= startIndex) {
  console.error('Error: </section> not found before section-09');
  process.exit(1);
}

const s8Old = content.substring(startIndex, endIndex + endTagMarker.length);
console.log('Found section-08 length:', s8Old.length);

const s8New = `    <section class="min-w-screen min-h-screen grid place-items-center relative" id="section-08" data-wave-opacity="0.2">
      <div class="max-w-6xl mx-auto w-full px-6 py-20">

        <!-- Título -->
        <h2 class="text-gray-400 text-md uppercase tracking-wide mb-4 border-l-royal-violet border-l-4 pl-4">
          3. Elegí la modalidad de trabajo
        </h2>
        <p class="text-gray-400 text-sm mb-12 pl-5">Seleccioná la alternativa que mejor se adapte a las necesidades de <strong
            class="text-white">ML Construir</strong>. El valor y las condiciones se actualizan en tiempo real.</p>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <!-- COLUMNA IZQUIERDA: PACKS -->
          <div class="space-y-5">

            <form id="budget-form" class="space-y-5">

              <!-- PACK 1: Puesta a punto de la tienda online -->
              <label id="label-pack1"
                class="olm-pack-label group flex flex-col p-6 rounded-2xl bg-zinc-900/50 border border-purple-500 cursor-pointer hover:border-purple-500/80 transition-all duration-300 relative">
                <div class="flex items-start justify-between mb-3">
                  <div class="flex items-center gap-4">
                    <input type="radio" name="olm-pack" id="pack1" value="580000" data-pack="1" checked
                      class="w-5 h-5 accent-purple-600 mt-0.5 flex-shrink-0">
                    <div>
                      <span class="text-white font-semibold text-base block">Puesta a punto de la tienda online</span>
                      <span class="text-zinc-500 text-xs uppercase tracking-widest">Modalidad de pago único</span>
                    </div>
                  </div>
                  <span class="text-purple-400 font-bold text-lg whitespace-nowrap">$580.000</span>
                </div>
                <p class="text-zinc-400 text-sm leading-relaxed pl-9 mb-3">
                  Organización del catálogo y traslado de la coherencia visual de la marca a la tienda online. Tres semanas estimadas de trabajo.
                </p>
                <div class="ml-9 p-3 rounded-lg bg-zinc-950/60 border border-zinc-800/80 text-xs text-zinc-400">
                  <span class="text-purple-400 font-medium">Nota:</span> Si durante el relevamiento o la carga se supera la complejidad o el volumen previsto, el presupuesto se incrementará de forma proporcional.
                </div>
              </label>

              <!-- PACK 2: Puesta a punto + gestión y optimización mensual -->
              <label id="label-pack2"
                class="olm-pack-label group flex flex-col p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 cursor-pointer hover:border-purple-500 transition-all duration-300 relative">
                <div class="absolute -top-3 left-6">
                  <span
                    class="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">✦
                    Recomendada para delegar</span>
                </div>
                <div class="flex items-start justify-between mb-3 mt-1">
                  <div class="flex items-center gap-4">
                    <input type="radio" name="olm-pack" id="pack2" value="1350000" data-pack="2"
                      class="w-5 h-5 accent-purple-600 mt-0.5 flex-shrink-0">
                    <div>
                      <span class="text-white font-semibold text-base block">Puesta a punto + gestión y optimización mensual</span>
                      <span class="text-zinc-500 text-xs uppercase tracking-widest">ARS 450.000 / mes (3 meses)</span>
                    </div>
                  </div>
                  <span class="text-purple-400 font-bold text-lg whitespace-nowrap">$450.000 <span class="text-xs text-zinc-400 font-normal">/ mes</span></span>
                </div>
                <p class="text-zinc-400 text-sm leading-relaxed pl-9 mb-3">
                  Mejorar la tienda y sostener su actualización, coordinando el trabajo web con la comunicación y las prioridades comerciales del equipo.
                </p>
                <div class="ml-9 flex items-center gap-2 text-xs text-green-400 font-medium mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Incluye la puesta a punto inicial. No se suman los ARS 580.000 del presupuesto 1.
                </div>
                <p class="text-zinc-500 text-xs leading-relaxed pl-9 italic">
                  La continuidad después del tercer mes se acuerda expresamente.
                </p>
              </label>

            </form>

            <!-- Condiciones Comunes -->
            <div class="text-zinc-400 text-sm space-y-3 mt-8 border-t border-zinc-800 pt-6 px-1">
              <h4 class="text-zinc-300 font-semibold mb-3 text-sm uppercase tracking-wider">Condiciones Comunes</h4>
              <ul class="list-disc pl-5 space-y-2 text-xs text-zinc-400 leading-relaxed">
                <li>Ambas alternativas se desarrollan sobre Empretienda y dentro de las posibilidades de su plantilla y plan.</li>
                <li>La selección inicial de productos, variantes y componentes se acuerda al iniciar.</li>
                <li>La migración a Tiendanube, las integraciones y la sincronización automática de stock requieren evaluación y presupuesto adicionales.</li>
                <li>ML Construir proporciona y valida precios, stock, fotografías, especificaciones, información institucional y testimonios.</li>
                <li>La actualización de stock es manual, basada en la información recibida; no implica sincronización en tiempo real entre canales.</li>
                <li>El servicio se concentra en la tienda y su diseño comercial. Los equipos actuales conservan sus funciones de redes sociales, anuncios y Mercado Libre.</li>
                <li>No incluye atención al comprador, cobros, preparación de pedidos, envíos ni control del inventario físico.</li>
                <li>Abonos de plataforma, dominio, aplicaciones y otros servicios externos se pagan por separado.</li>
                <li>Las demoras en accesos, materiales o aprobaciones desplazan el cronograma.</li>
                <li>No se garantizan ventas ni resultados comerciales específicos.</li>
                <li>Propuesta válida durante quince días corridos desde su envío.</li>
              </ul>
            </div>

          </div>

          <!-- COLUMNA DERECHA: RESUMEN -->
          <div class="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-2xl sticky top-10">

            <!-- Logo cliente + título -->
            <div class="flex items-center gap-3 mb-6 pb-6 border-b border-zinc-800">
              <div
                class="w-8 h-8 rounded-lg bg-purple-600/20 border border-purple-600/40 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <p class="text-white font-semibold text-sm">ML Construir</p>
                <p class="text-zinc-500 text-xs">Resumen de propuesta · 2026</p>
              </div>
            </div>

            <h3 class="text-white text-xl font-light mb-6">Detalle del Presupuesto Seleccionado</h3>

            <!-- Cuadro de incluidos -->
            <div id="pack-detail-box" class="overflow-hidden rounded-lg border border-zinc-800 mb-8">
              <table class="w-full text-left text-sm">
                <thead class="bg-black text-gray-400 uppercase tracking-widest text-xs">
                  <tr>
                    <th class="px-4 py-3 font-light">Componente</th>
                    <th class="px-4 py-3 font-light text-right text-purple-400">Estado</th>
                  </tr>
                </thead>
                <tbody id="comparison-table-body" class="divide-y divide-zinc-800 text-gray-300">
                  <tr>
                    <td class="px-4 py-4 italic text-zinc-500" colspan="2">Seleccioná un presupuesto para ver el detalle...
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Desglose Económico -->
            <div class="space-y-3 mb-6 border-t border-zinc-800 pt-6">
              <div class="flex justify-between text-zinc-400 text-sm" id="row-subtotal" style="display:none;">
                <span>Presupuesto seleccionado</span>
                <span id="val-subtotal">$0</span>
              </div>
            </div>

            <!-- Total Final -->
            <div class="flex justify-between items-end mb-2">
              <span class="text-gray-400 text-sm uppercase tracking-widest">Inversión Total</span>
              <span id="final-total" class="text-4xl md:text-5xl text-white font-bold tracking-tighter">$0</span>
            </div>

            <p class="text-right text-xs text-zinc-600 mb-6 uppercase">Valores expresados en ARS (Pesos Argentinos)</p>

            <!-- Modalidades de Pago Dinámicas -->
            <div id="payment-breakdown" class="hidden mb-8">
              <div class="flex items-center gap-2 mb-3">
                <div class="w-4 h-px bg-purple-500"></div>
                <span class="text-zinc-400 text-xs uppercase tracking-widest">Modalidad de Pago</span>
              </div>
              <div id="payment-breakdown-content" class="rounded-xl overflow-hidden border border-zinc-800">
                <!-- Se inyecta dinámicamente con JavaScript -->
              </div>
            </div>

            <!-- Nota de Valor Dinámica -->
            <div class="bg-zinc-800/50 border-l-2 border-purple-500 p-4 rounded-r-md">
              <p id="value-note" class="text-zinc-300 text-sm italic leading-relaxed">
                Seleccioná una alternativa para ver el análisis estratégico.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>`;

content = content.substring(0, startIndex) + s8New + content.substring(endIndex + endTagMarker.length);

// 2. Limpiar comentario residual de Boca en JS
content = content.replace('// ── BOCA EN LA BOMBONERA: DATOS DE PACKS ──────────────────────────────────\r\n', '');
content = content.replace('// ── BOCA EN LA BOMBONERA: DATOS DE PACKS ──────────────────────────────────\n', '');

fs.writeFileSync(indexPath, content, 'utf8');
console.log('Successfully updated section-08 and cleaned JS comment!');
