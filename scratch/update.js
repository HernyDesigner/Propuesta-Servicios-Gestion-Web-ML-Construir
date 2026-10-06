const fs = require('fs');

const filePath = '../index.html';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Metadata
content = content.replace(
    "<title>Propuesta Ecosistema Digital · Boca en La Bombonera · Hinchas de Boca en el Mundo</title>",
    "<title>Propuesta y presupuesto · ML Construir · hernysgodoy.com</title>"
);

// 2. Navigation
content = content.replace(/>HOME<span/g, ">Inicio<span")
    .replace(/>SERVICIOS<span/g, ">Propuesta<span")
    .replace(/>RECOMENDACIONES<span/g, ">Plan de trabajo<span")
    .replace(/>PRESUPUESTO<\/a>/g, ">Presupuestos</a>")
    .replace(/>HOME<\/a>/g, ">Inicio</a>")
    .replace(/>SERVICIOS<\/a>/g, ">Propuesta</a>")
    .replace(/>RECOMENDACIONES<\/a>/g, ">Plan de trabajo</a>")
    .replace(/>CALCULADORA<\/a>/g, ">Presupuestos</a>");

// 3. Portada
const portadaOld = `      <div class="space-y-4">
        <p class="text-zinc-500 text-xs uppercase tracking-[0.3em] mb-4">Propuesta Estratégica · 2026</p>
        <h1 class="text-white text-2xl sm:text-4xl md:text-7xl font-light leading-tight tracking-tight">
          Ecosistema Digital &amp;<br>Comunidad Global Xeneize
        </h1>
        <p class="text-xl md:text-2xl text-royal-violet font-bold uppercase">Para Boca en La Bombonera</p>
        <p class="text-zinc-500 text-sm font-light mt-2">Contenido · Comunidad · Monetización Internacional</p>
      </div>`;

const portadaNew = `      <div class="space-y-4">
        <p class="text-zinc-500 text-xs uppercase tracking-[0.3em] mb-4">Propuesta comercial · ML Construir</p>
        <h1 class="text-white text-2xl sm:text-4xl md:text-7xl font-light leading-tight tracking-tight">
          Una tienda clara, actualizada y<br>alineada con tu marca
        </h1>
        <p class="text-xl md:text-2xl text-royal-violet font-bold uppercase">Diseño comercial, organización del catálogo y gestión de la tienda online.</p>
        <p class="text-zinc-500 text-sm font-light mt-2">Dos alternativas: puesta a punto inicial o implementación con acompañamiento mensual durante tres meses.</p>
      </div>`;
content = content.replace(portadaOld, portadaNew);

// 4. Contexto y Propuesta (SECTION-03)
const ctxOld = `        <h2 class="text-gray-400 text-md uppercase tracking-wide mb-8 border-l-royal-violet border-l-4 pl-4">
          1. Contexto &amp; Estrategia
        </h2>
        <!-- Bloque de cita estratégica -->
        <div class="relative border border-zinc-800 rounded-2xl p-8 md:p-12 bg-zinc-900/30 mb-16">
          <div class="absolute top-0 left-8 -translate-y-3">
            <span class="text-purple-600 text-5xl font-serif leading-none select-none">&ldquo;</span>
          </div>
          <p class="text-gray-200 text-lg md:text-xl font-light leading-relaxed">
            En base a lo que conversamos, Pablo, tenés algo muy valioso: más de 20 años de pasión xeneize, un canal activo con cara y micrófono en la Bombonera, y una idea que nunca nadie ejecutó de forma organizada. <strong class="text-white">Boca en La Bombonera</strong> es el contenido. <strong class="text-white">Hinchas de Boca en el Mundo</strong> es la comunidad. Mi rol es transformar esa idea en un
            <strong class="text-white">ecosistema digital escalable</strong> que unifique ambas marcas, crezca la base de hinchas registrados y genere
            <span class="text-zinc-400">(ingresos reales en USD y ARS)</span> a través de múltiples canales desde el primer mes.
          </p>
          <div class="mt-6 flex items-center gap-3">
            <div class="w-8 h-px bg-purple-600"></div>
            <span class="text-zinc-500 text-xs uppercase tracking-widest">Herny Godoy · Diseño &amp; Tecnología</span>
          </div>
        </div>

        <!-- Nota importante sobre precios tentativos -->
        <div
          class="flex items-start gap-3 bg-zinc-900/40 border border-zinc-700/50 rounded-xl px-6 py-4 mb-16 relative overflow-hidden">
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
              <strong class="text-purple-300 font-semibold">Nota importante:</strong>
              Los valores expresados son <strong class="text-white">tentativos</strong>. El presupuesto final se
              ajustará una vez que seleccionemos el pack y conversemos sobre la profundidad específica de cada
              entregable, asegurando que se adapte perfectamente a los objetivos del proyecto <strong
                class="text-white">Hinchas de Boca en el Mundo</strong>.
            </p>
          </div>
        </div>
        <!-- Pilares estratégicos -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            class="border border-zinc-800 rounded-xl p-6 bg-zinc-900/20 hover:border-purple-600/40 transition-colors">
            <div class="text-purple-600 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15l-1.8 1.8M5 14.5l-1.8 1.8M5 14.5l1.8 1.8M19.8 15l1.8 1.8" />
              </svg>
            </div>
            <h3 class="text-white font-semibold mb-2">Ecosistema de Contenido</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">YouTube + TikTok + Shorts con plan editorial, optimización SEO de videos, playlists por país y miniaturas de alto impacto.</p>
          </div>
          <div
            class="border border-zinc-800 rounded-xl p-6 bg-zinc-900/20 hover:border-purple-600/40 transition-colors">
            <div class="text-purple-600 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <h3 class="text-white font-semibold mb-2">Comunidad Global</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">Web multi-idioma (ES/EN/PT) con mapa interactivo de hinchas, formulario de registro de miembros y sección "Mandá tu video".</p>
          </div>
          <div
            class="border border-zinc-800 rounded-xl p-6 bg-zinc-900/20 hover:border-purple-600/40 transition-colors">
            <div class="text-purple-600 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5" />
              </svg>
            </div>
            <h3 class="text-white font-semibold mb-2">Monetización Activa</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">YPP + membresías "Hincha Premium" + sponsors + Bombonera Experience para extranjeros + merchandising con identidad de marca.</p>
          </div>
        </div>`;

const ctxNew = `        <h2 class="text-gray-400 text-md uppercase tracking-wide mb-8 border-l-royal-violet border-l-4 pl-4">
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

        <!-- Nota importante sobre precios tentativos -->
        <div
          class="flex items-start gap-3 bg-zinc-900/40 border border-zinc-700/50 rounded-xl px-6 py-4 mb-16 relative overflow-hidden">
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
          <div
            class="border border-zinc-800 rounded-xl p-6 bg-zinc-900/20 hover:border-purple-600/40 transition-colors">
            <div class="text-purple-600 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15l-1.8 1.8M5 14.5l-1.8 1.8M5 14.5l1.8 1.8M19.8 15l1.8 1.8" />
              </svg>
            </div>
            <h3 class="text-white font-semibold mb-2">Presentación comercial</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">Portada, banners y secciones que ayuden a descubrir los productos y comprender la propuesta del negocio.</p>
          </div>
          <div
            class="border border-zinc-800 rounded-xl p-6 bg-zinc-900/20 hover:border-purple-600/40 transition-colors">
            <div class="text-purple-600 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <h3 class="text-white font-semibold mb-2">Catálogo e información</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">Productos mejor presentados, imágenes optimizadas y contenido institucional validado por ML Construir.</p>
          </div>
          <div
            class="border border-zinc-800 rounded-xl p-6 bg-zinc-900/20 hover:border-purple-600/40 transition-colors">
            <div class="text-purple-600 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5" />
              </svg>
            </div>
            <h3 class="text-white font-semibold mb-2">Continuidad y coordinación</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">Una alternativa mensual para sostener la actualización de la tienda y acompañar las acciones de comunicación del equipo.</p>
          </div>
        </div>`;
content = content.replace(ctxOld, ctxNew);

// 5. Plan de trabajo (SECTION-07)
const planOld = `        <h2 class="text-gray-400 text-md uppercase tracking-wide mb-8 border-l-royal-violet border-l-4 pl-4">
          5. Recomendaciones estratégicas para <strong>Boca en La Bombonera</strong>
        </h2>
        <ul class="text-gray-300 text-lg md:text-xl list-disc pl-10">
          <li class="mb-4"><strong>Posicionamiento SEO internacional en tres idiomas:</strong> Optimizar en español, inglés y portugués para captar hinchas globales y turistas futboleros que busquen experiencias en la Bombonera.</li>
          <li class="mb-4"><strong>Cadencia de publicación constante:</strong> 1 video largo semanal + 3 Shorts + 4 TikToks como mínimo sostenible. La constancia es el único algoritmo que nunca falla.</li>
          <li class="mb-4"><strong>Monetización diversificada desde el inicio:</strong> No depender solo de AdSense. Activar donaciones, membresías y afiliados en paralelo desde el mes 1 para no quedar rehén de las reglas de YouTube.</li>
          <li class="mb-4"><strong>Bombonera Experience como fuente de ingreso inmediata:</strong> Acompañar extranjeros al estadio es la propuesta de valor más diferencial y rentable. Implementarla desde el mes 2, antes de que alguien más lo haga.
          </li>
          <li class="mb-4"><strong>Branding unificado en todos los touchpoints:</strong> Micrófono, thumbnails, web, redes y merch con la misma identidad visual. Un hincha de Australia tiene que reconocer la marca al instante.</li>
          <li class="mb-4"><strong>Acuerdo de socios por escrito desde el día 1:</strong> Para proteger la sociedad y definir roles, porcentajes y decisiones. Una relación de negocios entre familiares necesita reglas claras para durar.</li>
        </ul>`;
const planNew = `        <h2 class="text-gray-400 text-md uppercase tracking-wide mb-8 border-l-royal-violet border-l-4 pl-4">
          2. Cómo vamos a trabajar
        </h2>
        <ul class="text-gray-300 text-lg md:text-xl list-decimal pl-10 mb-8">
          <li class="mb-4">Revisar la tienda, reunir accesos y materiales y seleccionar el catálogo inicial.</li>
          <li class="mb-4">Organizar la navegación y definir los componentes comerciales adecuados.</li>
          <li class="mb-4">Mejorar portada, banners, productos y contenido institucional.</li>
          <li class="mb-4">Revisar el recorrido de compra y la visualización en computadora y celular.</li>
          <li class="mb-4">Consolidar los ajustes y entregar la puesta a punto.</li>
          <li class="mb-4">Si se elige la gestión mensual, continuar con actualizaciones, diseño comercial, coordinación y seguimiento.</li>
        </ul>
        <div class="bg-zinc-900/50 border border-zinc-700/50 rounded-xl p-6">
          <p class="text-zinc-300 text-sm leading-relaxed">
            <strong>Aclaración:</strong> Se evaluará la incorporación de testimonios, productos destacados, los más buscados y los demás componentes que Empretienda permita y resulten adecuados para el negocio. La selección se realizará durante la gestión e implementación de la web, considerando las funciones disponibles y el material aportado.
          </p>
        </div>`;
content = content.replace(planOld, planNew);

// 6. HTML SECTION-08: Packs / Configurador
const htmlPacksOld = `        <!-- Título -->
        <h2 class="text-gray-400 text-md uppercase tracking-wide mb-4 border-l-purple-600 border-l-4 pl-4">
          4. Configurador de Inversión
        </h2>
        <p class="text-gray-400 text-sm mb-12 pl-5">Seleccioná el pack que mejor se adapte a los objetivos de <strong
            class="text-white">Hinchas de Boca en el Mundo</strong>. El valor se actualiza en tiempo real.</p>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <!-- COLUMNA IZQUIERDA: PACKS -->
          <div class="space-y-5">

            <form id="budget-form" class="space-y-5">

              <!-- PACK 1: Essential -->
              <label id="label-pack1"
                class="olm-pack-label group flex flex-col p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 cursor-pointer hover:border-purple-500/50 transition-all duration-300 relative">
                <div class="flex items-start justify-between mb-3">
                  <div class="flex items-center gap-4">
                    <input type="radio" name="olm-pack" id="pack1" value="285000" data-pack="1"
                      class="w-5 h-5 accent-purple-600 mt-0.5 flex-shrink-0">
                    <div>
                      <span class="text-white font-semibold text-base block">Pack Starter</span>
                      <span class="text-zinc-500 text-xs uppercase tracking-widest">Marca + Web MVP</span>
                    </div>
                  </div>
                  <span class="text-purple-400 font-bold text-lg whitespace-nowrap">$285.000</span>
                </div>
                <p class="text-zinc-400 text-sm leading-relaxed pl-9">
                  Naming y logo unificado <span
                    class="text-zinc-300">(Boca en La Bombonera + Hinchas de Boca en el Mundo)</span> + web básica multi-idioma con registro de hinchas + setup de canales y analítica básica.
                </p>
              </label>

              <!-- PACK 2: Recomendado -->
              <label id="label-pack2"
                class="olm-pack-label group flex flex-col p-6 rounded-2xl bg-zinc-900/50 border border-purple-600/60 cursor-pointer hover:border-purple-500 transition-all duration-300 relative">
                <div class="absolute -top-3 left-6">
                  <span
                    class="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">✦
                    Recomendado</span>
                </div>
                <div class="flex items-start justify-between mb-3 mt-1">
                  <div class="flex items-center gap-4">
                    <input type="radio" name="olm-pack" id="pack2" value="520000" data-pack="2"
                      class="w-5 h-5 accent-purple-600 mt-0.5 flex-shrink-0">
                    <div>
                      <span class="text-white font-semibold text-base block">Pack Crecimiento</span>
                      <span class="text-zinc-500 text-xs uppercase tracking-widest">Recomendado</span>
                    </div>
                  </div>
                  <span class="text-purple-400 font-bold text-lg whitespace-nowrap">$520.000</span>
                </div>
                <p class="text-zinc-400 text-sm leading-relaxed pl-9">
                  Incluye <span class="text-zinc-200">Pack Starter</span> + estrategia editorial 8 semanas + optimización YT/TikTok + sistema de membresías "Hincha Premium" + captura de emails + <span
                    class="text-zinc-300">(Cafecito + Buy Me a Coffee + Mercado Pago)</span> configurados.
                </p>
                <p class="text-zinc-500 text-xs leading-relaxed pl-9 mt-2 italic border-l border-zinc-700 ml-9 pl-3">
                  La combinación ideal para empezar a generar ingresos reales mientras la comunidad crece de forma sostenida.
                </p>
              </label>

              <!-- PACK 3: Full Tech -->
              <label id="label-pack3"
                class="olm-pack-label group flex flex-col p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 cursor-pointer hover:border-purple-500/50 transition-all duration-300 relative">
                <div class="flex items-start justify-between mb-3">
                  <div class="flex items-center gap-4">
                    <input type="radio" name="olm-pack" id="pack3" value="950000" data-pack="3"
                      class="w-5 h-5 accent-purple-600 mt-0.5 flex-shrink-0">
                    <div>
                      <span class="text-white font-semibold text-base block">Pack Ecosistema Full</span>
                      <span class="text-zinc-500 text-xs uppercase tracking-widest">Monetización Completa</span>
                    </div>
                  </div>
                  <span class="text-purple-400 font-bold text-lg whitespace-nowrap">$950.000</span>
                </div>
                <p class="text-zinc-400 text-sm leading-relaxed pl-9">
                  Incluye <span class="text-zinc-200">Pack Starter + Pack Crecimiento</span> + activación YPP + estrategia de sponsors + Bombonera Experience web + merchandising digital + SEO multi-idioma completo + soporte 3 meses.
                </p>
                <!-- Badge "Todo incluido" -->
                <div id="badge-included" class="hidden mt-3 ml-9 flex items-center gap-2 text-xs text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Incluye todo lo de los packs anteriores
                </div>
              </label>

            </form>

            <!-- Nota IPC -->
            <p class="text-zinc-600 text-xs pl-1 pt-2">* Valores en ARS. Sujetos a ajuste trimestral por IPC (inflación
              Argentina).</p>`;
const htmlPacksNew = `        <!-- Título -->
        <h2 class="text-gray-400 text-md uppercase tracking-wide mb-4 border-l-purple-600 border-l-4 pl-4">
          3. Elegí la modalidad de trabajo
        </h2>
        <p class="text-gray-400 text-sm mb-12 pl-5">Las dos alternativas contemplan la mejora inicial de la tienda. La diferencia está en cómo se sostiene su actualización después de la implementación.</p>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <!-- COLUMNA IZQUIERDA: PACKS -->
          <div class="space-y-5">

            <form id="budget-form" class="space-y-5">

              <!-- PACK 1 -->
              <label id="label-pack1"
                class="olm-pack-label group flex flex-col p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 cursor-pointer hover:border-purple-500/50 transition-all duration-300 relative">
                <div class="flex items-start justify-between mb-3">
                  <div class="flex items-center gap-4">
                    <input type="radio" name="olm-pack" id="pack1" value="580000" data-pack="1"
                      class="w-5 h-5 accent-purple-600 mt-0.5 flex-shrink-0" checked>
                    <div>
                      <span class="text-white font-semibold text-base block">Puesta a punto de la tienda online</span>
                      <span class="text-zinc-500 text-xs uppercase tracking-widest">Pago único</span>
                    </div>
                  </div>
                  <span class="text-purple-400 font-bold text-lg whitespace-nowrap">$580.000</span>
                </div>
                <p class="text-zinc-400 text-sm leading-relaxed pl-9">
                  Mejorar la presentación de ML Construir, organizar su catálogo y trasladar a la tienda la coherencia visual de la marca.
                </p>
                <div id="pack1-clausula" class="mt-4 ml-9 bg-zinc-800/40 border border-zinc-700/50 rounded-lg p-3">
                  <p class="text-zinc-400 text-xs leading-relaxed italic">
                    El presupuesto contempla aproximadamente veinte productos. Un aumento significativo de esa cantidad generará un incremento proporcional en el valor presupuestado, según los productos adicionales y el trabajo requerido. El ajuste se informará y acordará antes de realizar la ampliación.
                  </p>
                </div>
              </label>

              <!-- PACK 2 -->
              <label id="label-pack2"
                class="olm-pack-label group flex flex-col p-6 rounded-2xl bg-zinc-900/50 border border-purple-600/60 cursor-pointer hover:border-purple-500 transition-all duration-300 relative">
                <div class="absolute -top-3 left-6">
                  <span
                    class="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">✦
                    Recomendada para delegar la actualización</span>
                </div>
                <div class="flex items-start justify-between mb-3 mt-1">
                  <div class="flex items-center gap-4">
                    <input type="radio" name="olm-pack" id="pack2" value="1350000" data-pack="2"
                      class="w-5 h-5 accent-purple-600 mt-0.5 flex-shrink-0">
                    <div>
                      <span class="text-white font-semibold text-base block">Puesta a punto + gestión y optimización mensual</span>
                      <span class="text-zinc-500 text-xs uppercase tracking-widest">Por 3 meses</span>
                    </div>
                  </div>
                  <span class="text-purple-400 font-bold text-lg whitespace-nowrap">$450.000 / mes</span>
                </div>
                <p class="text-zinc-400 text-sm leading-relaxed pl-9 mb-2">
                  Mejorar la tienda y sostener su actualización, coordinando el trabajo web con la comunicación y las prioridades comerciales del equipo.
                </p>
                <div class="ml-9 flex items-center gap-2 text-xs text-green-400 font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Incluye la puesta a punto inicial. No se suman los ARS 580.000 del presupuesto 1.
                </div>
              </label>

            </form>

            <div class="text-zinc-400 text-sm space-y-3 mt-6 border-t border-zinc-800 pt-6 px-1">
              <h4 class="text-zinc-300 font-semibold mb-2">Condiciones Comunes</h4>
              <ul class="list-disc pl-5 space-y-2 text-xs text-zinc-400">
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
            </div>`;
content = content.replace(htmlPacksOld, htmlPacksNew);

// Right Sidebar Title
const rsOld = `            <div class="flex items-center gap-3 mb-6 pb-6 border-b border-zinc-800">
              <div
                class="w-8 h-8 rounded-lg bg-purple-600/20 border border-purple-600/40 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <p class="text-white font-semibold text-sm">Boca en La Bombonera</p>
                <p class="text-zinc-500 text-xs">Resumen de propuesta · 2026</p>
              </div>
            </div>`;
const rsNew = `            <div class="flex items-center gap-3 mb-6 pb-6 border-b border-zinc-800">
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
            </div>`;
content = content.replace(rsOld, rsNew);

// Right Sidebar Breakdowns
const pbOld = `            <!-- Modalidades de Pago Dinámicas -->
            <div id="payment-breakdown" class="hidden mb-8">
              <div class="flex items-center gap-2 mb-3">
                <div class="w-4 h-px bg-purple-500"></div>
                <span class="text-zinc-400 text-xs uppercase tracking-widest">Modalidad de Pago</span>
              </div>
              <div class="rounded-xl overflow-hidden border border-zinc-800">
                <!-- Cuota 1: 30% -->
                <div class="flex items-center justify-between px-4 py-3 bg-zinc-900/80 border-b border-zinc-800">
                  <div class="flex items-center gap-3">
                    <div
                      class="w-6 h-6 rounded-full bg-purple-600/20 border border-purple-600/50 flex items-center justify-center flex-shrink-0">
                      <span class="text-purple-400 text-xs font-bold">1</span>
                    </div>
                    <div>
                      <span class="text-zinc-300 text-xs font-medium block">Inicio del proyecto</span>
                      <span class="text-zinc-600 text-xs">30% · Al confirmar</span>
                    </div>
                  </div>
                  <span id="pay-30" class="text-purple-300 font-semibold text-sm whitespace-nowrap">—</span>
                </div>
                <!-- Cuota 2: 20% -->
                <div class="flex items-center justify-between px-4 py-3 bg-zinc-900/60 border-b border-zinc-800">
                  <div class="flex items-center gap-3">
                    <div
                      class="w-6 h-6 rounded-full bg-purple-600/10 border border-purple-600/30 flex items-center justify-center flex-shrink-0">
                      <span class="text-purple-400 text-xs font-bold">2</span>
                    </div>
                    <div>
                      <span class="text-zinc-300 text-xs font-medium block">Durante el desarrollo</span>
                      <span class="text-zinc-600 text-xs">20% · A mitad de proceso</span>
                    </div>
                  </div>
                  <span id="pay-20" class="text-purple-300 font-semibold text-sm whitespace-nowrap">—</span>
                </div>
                <!-- Cuota 3: 50% -->
                <div class="flex items-center justify-between px-4 py-3 bg-zinc-900/40">
                  <div class="flex items-center gap-3">
                    <div
                      class="w-6 h-6 rounded-full bg-green-600/10 border border-green-600/30 flex items-center justify-center flex-shrink-0">
                      <span class="text-green-400 text-xs font-bold">3</span>
                    </div>
                    <div>
                      <span class="text-zinc-300 text-xs font-medium block">Entrega final</span>
                      <span class="text-zinc-600 text-xs">50% · Al recibir el proyecto</span>
                    </div>
                  </div>
                  <span id="pay-50" class="text-green-300 font-semibold text-sm whitespace-nowrap">—</span>
                </div>
              </div>
            </div>`;
const pbNew = `            <!-- Modalidades de Pago Dinámicas -->
            <div id="payment-breakdown" class="hidden mb-8">
              <div class="flex items-center gap-2 mb-3">
                <div class="w-4 h-px bg-purple-500"></div>
                <span class="text-zinc-400 text-xs uppercase tracking-widest">Modalidad de Pago</span>
              </div>
              <div class="rounded-xl overflow-hidden border border-zinc-800" id="payment-breakdown-content">
              </div>
            </div>`;
content = content.replace(pbOld, pbNew);

// Section 09 (Cierre)
const cierreOld = `        <h2 class="text-white text-4xl md:text-6xl font-light leading-tight tracking-tight mb-10">
          Una propuesta para transformar <span class="text-purple-600 font-normal">20 años de pasión</span> en un negocio digital global
        </h2>

        <!-- Bloque de Texto -->
        <div class="space-y-6 max-w-2xl mx-auto mb-16">
          <p class="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
            El pack que elegiste es el punto de partida, pero lo que estamos construyendo es mucho más que un sitio web. Es <span
              class="text-purple-600 font-normal">Hinchas de Boca en el Mundo</span>: una comunidad global con identidad propia, ingresos reales y una historia que vale la pena contar.
          </p>
          <p class="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
            ¿Querés ajustar algún componente, sumar algo que no está o simplemente arrancar a hablar? Yo ya tengo la hoja de ruta. Solo falta que demos el primer paso juntos.
          </p>
        </div>

        <!-- Botón CTA -->
        <div class="flex-auto">
          <div class="relative group">
            <div class="relative w-64 ms:w-96 h-14 opacity-90 overflow-hidden rounded-xl bg-black z-10">
              <div
                class="absolute z-10 -translate-x-96 group-hover:translate-x-[30rem] ease-in transistion-all duration-700 h-full w-64 ms:w-96 bg-gradient-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12">
              </div>
              <div
                class="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-2xl inset-0.5 bg-black">
                <a href="https://wa.me/+541135884615?text=Hola%20Herny%2C%20soy%20Pablo.%20Quer%C3%ADa%20hablar%20sobre%20la%20propuesta%20que%20armaste%20para%20el%20proyecto%20Boca%20en%20La%20Bombonera%20%2F%20Hinchas%20de%20Boca%20en%20el%20Mundo."
                  target="_blank"
                  class="input text-ms ms:text-lg h-full opacity-90 w-full px-4 ms:px-16 py-3 rounded-xl bg-black">
                  Consultar por WhatsApp</a>
              </div>
              <div
                class="absolute duration-1000 group-hover:animate-spin w-full h-[100px] bg-gradient-to-r from-[#871DEE] to-indigo-500 blur-[30px]">
              </div>
            </div>
          </div>
        </div>

        <!-- Footer simple -->
        <p class="absolute bottom-8 text-zinc-600 text-xs uppercase tracking-widest hidden">
          Propuesta válida por 15 días · 2026
        </p>`;
const cierreNew = `        <h2 class="text-white text-4xl md:text-5xl font-light leading-tight tracking-tight mb-10">
          El próximo paso: una tienda mejor presentada y un trabajo organizado
        </h2>

        <!-- Bloque de Texto -->
        <div class="space-y-6 max-w-2xl mx-auto mb-16">
          <p class="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
            Elegimos la modalidad de trabajo, confirmamos el catálogo inicial y reunimos los accesos y materiales. A partir de ahí, avanzamos con una implementación clara y responsabilidades acordadas con el equipo.
          </p>
        </div>

        <!-- Botón CTA -->
        <div class="flex-auto">
          <div class="relative group">
            <div class="relative w-64 ms:w-96 h-14 opacity-90 overflow-hidden rounded-xl bg-black z-10">
              <div
                class="absolute z-10 -translate-x-96 group-hover:translate-x-[30rem] ease-in transistion-all duration-700 h-full w-64 ms:w-96 bg-gradient-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12">
              </div>
              <div
                class="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-2xl inset-0.5 bg-black">
                <a href="#"
                  target="_blank" id="btn-wsp"
                  class="input text-ms ms:text-lg h-full opacity-90 w-full px-4 ms:px-16 py-3 rounded-xl bg-black flex justify-center items-center">
                  Conversar sobre esta propuesta</a>
              </div>
              <div
                class="absolute duration-1000 group-hover:animate-spin w-full h-[100px] bg-gradient-to-r from-[#871DEE] to-indigo-500 blur-[30px]">
              </div>
            </div>
          </div>
        </div>

        <!-- Footer simple -->
        <p class="absolute bottom-8 text-zinc-600 text-xs uppercase tracking-widest">
          Propuesta válida por quince días corridos desde su envío.
        </p>`;
content = content.replace(cierreOld, cierreNew);

// Replace JS logic
const jsReplacement = `      // ── ML CONSTRUIR: DATOS DE PACKS ──────────────────────────────────
      const ML_PACKS = {
        1: {
          name: 'Puesta a punto de la tienda online',
          value: 580000,
          modalidad: 'pago único',
          note: 'Tres semanas estimadas desde la recepción del anticipo, accesos y materiales completos. Soporte por 10 días hábiles posteriores a la entrega.',
          items: [
            'Evaluación de la tienda, navegación, categorías e información.',
            'Diseño de portada y banners adaptados a computadora y celular.',
            'Catálogo de aproximadamente 20 productos: títulos, descripciones, categorías, precios, stock y hasta 40 imágenes optimizadas.',
            'Desarrollo de página "Quiénes somos" y contenido institucional.',
            'Revisión de WhatsApp, enlaces, medios de pago, retiro y envío.',
            'Comprobación del recorrido de compra con dos rondas de ajustes.',
            'Secciones comerciales (Testimonios, Destacados, etc.) sujetas a evaluación.'
          ]
        },
        2: {
          name: 'Puesta a punto + gestión y optimización mensual',
          value: 1350000, // Total por 3 meses (450k x 3)
          mensualidad: 450000,
          modalidad: 'ARS 450.000 por mes (3 meses)',
          note: 'La continuidad después del tercer mes se acuerda expresamente.',
          items: [
            'Incluye todo el alcance de implementación de la opción 1.',
            'Primer mes: Puesta a punto, 20 productos, diseño de portada/banners, componentes comerciales, contenido institucional.',
            'Organización de fuente validada de precios/stock y circuito de cambios.',
            'Segundo y tercer mes: Actualización del catálogo, hasta 2 nuevos diseños comerciales/mes, mejoras en hasta 5 fichas y 10 imágenes/mes.',
            'Una mejora prioritaria mensual de presentación/navegación.',
            'Actualización manual de precios/stock (lote semanal).',
            'Reuniones frecuentes (30 min) y un informe mensual breve.'
          ]
        }
      };

      // Formateador de moneda ARS
      const formatARS = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        maximumFractionDigits: 0
      });

      // Elementos del DOM
      const tableBody = document.getElementById('comparison-table-body');
      const elSubtotal = document.getElementById('val-subtotal');
      const elTotal = document.getElementById('final-total');
      const elValueNote = document.getElementById('value-note');
      const rowSubtotal = document.getElementById('row-subtotal');
      const packRadios = document.querySelectorAll('input[name="olm-pack"]');
      const packLabels = document.querySelectorAll('.olm-pack-label');
      // Modalidades de pago
      const paymentBreakdown = document.getElementById('payment-breakdown');
      const paymentContent = document.getElementById('payment-breakdown-content');
      const btnWsp = document.getElementById('btn-wsp');

      // Notas de valor por pack
      const VALUE_NOTES = {
        0: 'Seleccioná un presupuesto para ver el análisis.',
        1: '<strong>Mejora inicial:</strong> Organización del catálogo y traslado de la coherencia visual de la marca a la tienda online.',
        2: '<strong>Mejora y sostenimiento:</strong> La tienda se mantiene actualizada y coordinada con las acciones de comunicación del equipo mensualmente.'
      };

      // LÓGICA PRINCIPAL
      function calculateBudget() {
        const selected = document.querySelector('input[name="olm-pack"]:checked');
        const packNum = selected ? parseInt(selected.getAttribute('data-pack')) : 1;
        const pack = ML_PACKS[packNum];

        // 1. Resaltar label activo
        packLabels.forEach(lbl => {
          lbl.classList.remove('border-purple-500', 'bg-zinc-900/80');
          lbl.classList.add('border-zinc-800');
        });

        if (selected) {
          const activeLbl = selected.closest('.olm-pack-label');
          activeLbl.classList.add('border-purple-500', 'bg-zinc-900/80');
          activeLbl.classList.remove('border-zinc-800');
        }

        // 3. Tabla de detalle
        tableBody.innerHTML = '';
        if (!pack) {
          tableBody.innerHTML = '<tr><td class="px-4 py-4 italic text-zinc-500" colspan="2">Seleccioná un presupuesto para ver el detalle...</td></tr>';
        } else {
          pack.items.forEach((item, i) => {
            tableBody.innerHTML += \`
              <tr>
                <td class="px-4 py-3 text-gray-300">\${item}</td>
                <td class="px-4 py-3 text-right">
                  <span class="text-purple-400 text-xs">✓ Incluido</span>
                </td>
              </tr>\`;
          });
          if (pack.note) {
            tableBody.innerHTML += \`
              <tr>
                <td colspan="2" class="px-4 py-3 text-zinc-500 text-xs italic border-t border-zinc-800/60">
                  <span class="text-purple-400 mr-1">ℹ</span>\${pack.note}
                </td>
              </tr>\`;
          }
        }

        // 4. Desglose económico
        if (pack && rowSubtotal) {
          rowSubtotal.style.display = 'none'; // not needed
        }

        // 5. Total final
        elTotal.textContent = pack ? formatARS.format(packNum === 1 ? pack.value : pack.mensualidad) : '$0';
        if(packNum === 2) {
          elTotal.innerHTML = formatARS.format(pack.mensualidad) + ' <span class="text-xl text-zinc-400 font-normal">/ mes</span>';
        }

        // 6. Modalidades de pago dinámicas
        if (pack && paymentBreakdown && paymentContent) {
          paymentBreakdown.classList.remove('hidden');
          if (packNum === 1) {
            let half = Math.round(pack.value / 2);
            paymentContent.innerHTML = \`
                <div class="flex items-center justify-between px-4 py-3 bg-zinc-900/80 border-b border-zinc-800">
                  <div class="flex items-center gap-3">
                    <div class="w-6 h-6 rounded-full bg-purple-600/20 border border-purple-600/50 flex items-center justify-center flex-shrink-0">
                      <span class="text-purple-400 text-xs font-bold">1</span>
                    </div>
                    <div>
                      <span class="text-zinc-300 text-xs font-medium block">Anticipo</span>
                      <span class="text-zinc-600 text-xs">50% · Al confirmar el inicio</span>
                    </div>
                  </div>
                  <span class="text-purple-300 font-semibold text-sm whitespace-nowrap">\${formatARS.format(half)}</span>
                </div>
                <div class="flex items-center justify-between px-4 py-3 bg-zinc-900/60">
                  <div class="flex items-center gap-3">
                    <div class="w-6 h-6 rounded-full bg-green-600/10 border border-green-600/30 flex items-center justify-center flex-shrink-0">
                      <span class="text-green-400 text-xs font-bold">2</span>
                    </div>
                    <div>
                      <span class="text-zinc-300 text-xs font-medium block">Saldo contra entrega</span>
                      <span class="text-zinc-600 text-xs">50% · Al recibir la tienda optimizada</span>
                    </div>
                  </div>
                  <span class="text-green-300 font-semibold text-sm whitespace-nowrap">\${formatARS.format(half)}</span>
                </div>
            \`;
            document.querySelector('#final-total').previousElementSibling.textContent = "Inversión Total";
          } else {
            paymentContent.innerHTML = \`
                <div class="flex items-center justify-between px-4 py-3 bg-zinc-900/80 border-b border-zinc-800">
                  <div class="flex items-center gap-3">
                    <div class="w-6 h-6 rounded-full bg-purple-600/20 border border-purple-600/50 flex items-center justify-center flex-shrink-0">
                      <span class="text-purple-400 text-xs font-bold">1</span>
                    </div>
                    <div>
                      <span class="text-zinc-300 text-xs font-medium block">Mes 1</span>
                      <span class="text-zinc-600 text-xs">Puesta a punto e implementación</span>
                    </div>
                  </div>
                  <span class="text-purple-300 font-semibold text-sm whitespace-nowrap">\${formatARS.format(pack.mensualidad)}</span>
                </div>
                <div class="flex items-center justify-between px-4 py-3 bg-zinc-900/60 border-b border-zinc-800">
                  <div class="flex items-center gap-3">
                    <div class="w-6 h-6 rounded-full bg-purple-600/10 border border-purple-600/30 flex items-center justify-center flex-shrink-0">
                      <span class="text-purple-400 text-xs font-bold">2</span>
                    </div>
                    <div>
                      <span class="text-zinc-300 text-xs font-medium block">Mes 2</span>
                      <span class="text-zinc-600 text-xs">Gestión y optimización</span>
                    </div>
                  </div>
                  <span class="text-purple-300 font-semibold text-sm whitespace-nowrap">\${formatARS.format(pack.mensualidad)}</span>
                </div>
                <div class="flex items-center justify-between px-4 py-3 bg-zinc-900/40">
                  <div class="flex items-center gap-3">
                    <div class="w-6 h-6 rounded-full bg-green-600/10 border border-green-600/30 flex items-center justify-center flex-shrink-0">
                      <span class="text-green-400 text-xs font-bold">3</span>
                    </div>
                    <div>
                      <span class="text-zinc-300 text-xs font-medium block">Mes 3</span>
                      <span class="text-zinc-600 text-xs">Gestión y optimización</span>
                    </div>
                  </div>
                  <span class="text-green-300 font-semibold text-sm whitespace-nowrap">\${formatARS.format(pack.mensualidad)}</span>
                </div>
            \`;
            document.querySelector('#final-total').previousElementSibling.textContent = "Inversión por Mes";
          }
        }

        // 7. Nota de valor
        elValueNote.innerHTML = VALUE_NOTES[packNum] || VALUE_NOTES[0];
        
        // 8. Update Whatsapp link
        if(btnWsp) {
           let msg = \`Hola Herny, estuve revisando la propuesta para ML Construir. Me interesa conversar sobre \${pack.name}, con una inversión de \${pack.modalidad === 'pago único' ? formatARS.format(pack.value) + ' ('+pack.modalidad+')' : pack.modalidad}.\`;
           btnWsp.href = "https://wa.me/5491162574737?text=" + encodeURIComponent(msg);
        }
        
        // Update Local Storage
        localStorage.setItem('ml_construir_pack', packNum);
      }

      // LISTENERS
      packRadios.forEach(radio => radio.addEventListener('change', calculateBudget));

      // Init
      const savedPack = localStorage.getItem('ml_construir_pack');
      if(savedPack && document.querySelector(\`input[name="olm-pack"][data-pack="\${savedPack}"]\`)) {
         document.querySelector(\`input[name="olm-pack"][data-pack="\${savedPack}"]\`).checked = true;
      }
      calculateBudget();`;

const startIdx = content.indexOf('const OLM_PACKS = {');
const endStr = "calculateBudget();";
const endIdx = content.indexOf(endStr, startIdx) + endStr.length;

if (startIdx !== -1 && endIdx !== -1) {
    content = content.substring(0, startIdx) + jsReplacement + content.substring(endIdx);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Update completed successfully.');
