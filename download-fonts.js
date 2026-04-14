/**
 * Script para baixar fontes do Google Fonts automaticamente
 * 
 * USO:
 * node download-fonts.js
 * 
 * Requer: Node.js instalado
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Configuração das fontes
const fonts = [
  {
    name: 'Outfit',
    weights: [300, 400, 500, 600, 700, 800, 900],
    folder: 'outfit'
  },
  {
    name: 'Plus Jakarta Sans',
    weights: [300, 400, 500, 600, 700],
    folder: 'plus-jakarta-sans'
  }
];

// Criar diretórios
const fontsDir = path.join(__dirname, 'public', 'fonts');
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

console.log('🚀 Iniciando download das fontes...\n');

// Função para baixar arquivo
function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // Seguir redirect
        return downloadFile(response.headers.location, filepath).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

// Função para obter URL do CSS do Google Fonts
function getGoogleFontsCSSUrl(fontName, weights) {
  const family = fontName.replace(/ /g, '+');
  const weightsStr = weights.join(';');
  return `https://fonts.googleapis.com/css2?family=${family}:wght@${weightsStr}&display=swap`;
}

// Função para extrair URLs dos arquivos woff2 do CSS
async function extractWoff2Urls(cssUrl) {
  return new Promise((resolve, reject) => {
    https.get(cssUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (response) => {
      let data = '';
      response.on('data', (chunk) => data += chunk);
      response.on('end', () => {
        const urls = [];
        const regex = /url\((https:\/\/fonts\.gstatic\.com\/[^)]+\.woff2)\)/g;
        let match;
        while ((match = regex.exec(data)) !== null) {
          urls.push(match[1]);
        }
        resolve(urls);
      });
    }).on('error', reject);
  });
}

// Processar cada fonte
async function processFont(font) {
  console.log(`📥 Baixando ${font.name}...`);
  
  const fontDir = path.join(fontsDir, font.folder);
  if (!fs.existsSync(fontDir)) {
    fs.mkdirSync(fontDir, { recursive: true });
  }

  const cssUrl = getGoogleFontsCSSUrl(font.name, font.weights);
  
  try {
    const woff2Urls = await extractWoff2Urls(cssUrl);
    
    for (let i = 0; i < woff2Urls.length; i++) {
      const url = woff2Urls[i];
      const weight = font.weights[i];
      const filename = `${font.folder}-v11-latin-${weight}.woff2`;
      const filepath = path.join(fontDir, filename);
      
      console.log(`  ⬇️  ${filename}...`);
      await downloadFile(url, filepath);
      console.log(`  ✅ ${filename} baixado!`);
    }
    
    console.log(`✅ ${font.name} completo!\n`);
  } catch (error) {
    console.error(`❌ Erro ao baixar ${font.name}:`, error.message);
  }
}

// Executar
(async () => {
  for (const font of fonts) {
    await processFont(font);
  }
  
  console.log('\n🎉 Download completo!');
  console.log('\n📝 Próximos passos:');
  console.log('1. Verifique a pasta public/fonts/');
  console.log('2. Substitua src/index.css pelo conteúdo de src/index-FONTES-LOCAIS.css');
  console.log('3. Execute: npm run dev');
  console.log('4. Verifique no DevTools se as fontes estão sendo carregadas localmente');
  console.log('\n📖 Consulte GUIA-COMPLETO-OTIMIZACAO.md para mais detalhes');
})();
