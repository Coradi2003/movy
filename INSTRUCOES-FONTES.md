# 📥 Como Baixar e Instalar as Fontes Localmente

## Passo 1: Baixar as Fontes

### Opção A: Google Webfonts Helper (RECOMENDADO)
1. Acesse: https://gwfh.mranftl.com/fonts
2. Busque por "Outfit"
3. Selecione os pesos: 300, 400, 500, 600, 700, 800, 900
4. Clique em "Download files"
5. Extraia os arquivos para `public/fonts/outfit/`

6. Repita para "Plus Jakarta Sans"
7. Selecione os pesos: 300, 400, 500, 600, 700
8. Extraia os arquivos para `public/fonts/plus-jakarta-sans/`

### Opção B: Google Fonts (Manual)
1. Acesse: https://fonts.google.com/specimen/Outfit
2. Clique em "Download family"
3. Extraia os arquivos .ttf para `public/fonts/outfit/`
4. Repita para Plus Jakarta Sans

---

## Passo 2: Estrutura de Pastas

Sua estrutura deve ficar assim:

```
public/
└── fonts/
    ├── outfit/
    │   ├── outfit-v11-latin-300.woff2
    │   ├── outfit-v11-latin-400.woff2
    │   ├── outfit-v11-latin-500.woff2
    │   ├── outfit-v11-latin-600.woff2
    │   ├── outfit-v11-latin-700.woff2
    │   ├── outfit-v11-latin-800.woff2
    │   └── outfit-v11-latin-900.woff2
    └── plus-jakarta-sans/
        ├── plus-jakarta-sans-v8-latin-300.woff2
        ├── plus-jakarta-sans-v8-latin-400.woff2
        ├── plus-jakarta-sans-v8-latin-500.woff2
        ├── plus-jakarta-sans-v8-latin-600.woff2
        └── plus-jakarta-sans-v8-latin-700.woff2
```

---

## Passo 3: Aplicar o CSS Atualizado

O arquivo `src/index.css` já foi atualizado para usar as fontes locais.

---

## Passo 4: Testar Localmente

```bash
npm run dev
```

Abra o DevTools (F12) → Network → Fonts
Verifique se as fontes estão sendo carregadas de `/fonts/` (local)

---

## Passo 5: Deploy

```bash
npm run build
# Faça o deploy na Vercel
```

---

## ✅ Resultado Esperado

- ❌ Antes: 12+ requests para fonts.googleapis.com e fonts.gstatic.com
- ✅ Depois: 12 requests locais (servidos pelo CDN da Vercel com cache otimizado)

**Redução de requests externos: 100%**
**Melhoria de performance: ~30-50%**

---

## 🔧 Troubleshooting

### Fontes não aparecem?
- Verifique se os arquivos estão em `public/fonts/`
- Limpe o cache do navegador (Ctrl+Shift+R)
- Verifique o console do navegador por erros

### Fontes com aparência diferente?
- Certifique-se de baixar os mesmos pesos (300-900 para Outfit, 300-700 para Plus Jakarta Sans)
- Verifique se os nomes dos arquivos correspondem ao CSS

---

**Dúvidas?** Entre em contato ou consulte a documentação do Google Webfonts Helper.
