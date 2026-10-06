const fs = require('fs');

const filePath = '../index.html';
let content = fs.readFileSync(filePath, 'utf8');

// Fix section-09 (cierre) - update closing section
const idx1 = content.indexOf('class="text-white text-4xl md:text-6xl font-light leading-tight tracking-tight mb-10">');
const idx2 = content.indexOf('</section>', content.indexOf('Propuesta válida por 15'));
if (idx1 !== -1 && idx2 !== -1) {
    const beforeH2 = content.lastIndexOf('        <!-- Título -->', idx1);
    const afterSection = idx2 + '</section>'.length;
    const oldBlock = content.substring(beforeH2, afterSection);
    
    const newBlock = `        <!-- Título -->
        <h2 class="text-white text-4xl md:text-5xl font-light leading-tight tracking-tight mb-10">
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
            <div class="relative w-80 h-14 opacity-90 overflow-hidden rounded-xl bg-black z-10">
              <div
                class="absolute z-10 -translate-x-96 group-hover:translate-x-[30rem] ease-in transistion-all duration-700 h-full w-80 bg-gradient-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12">
              </div>
              <div
                class="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-2xl inset-0.5 bg-black">
                <a href="#"
                  target="_blank" id="btn-wsp"
                  class="input text-sm h-full opacity-90 w-full px-6 py-3 rounded-xl bg-black flex justify-center items-center">
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
        </p>

      </div>
    </section>`;

    content = content.replace(oldBlock, newBlock);
    console.log('Section-09 replaced, block length:', oldBlock.length);
} else {
    console.log('ERROR: could not find section-09 boundaries. idx1:', idx1, 'idx2:', idx2);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done.');
