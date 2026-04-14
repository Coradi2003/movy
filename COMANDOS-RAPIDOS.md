# ⚡ COMANDOS RÁPIDOS - Otimização Vercel

## 🚀 SOLUÇÃO RÁPIDA (5 minutos)

### Passo 1: Baixar Fontes Automaticamente
```bash
node download-fonts.js
```

### Passo 2: Aplicar CSS Otimizado
```bash
# Windows PowerShell
Copy-Item src/index-FONTES-LOCAIS.css src/index.css -Force

# Linux/Mac
cp src/index-FONTES-LOCAIS.css src/index.css
```

### Passo 3: Testar Localmente
```bash
npm run dev
```
Abra http://localhost:8080 e verifique no DevTools (F12 → Network → Font)

### Passo 4: Build e Deploy
```bash
npm run build

# Deploy via Vercel CLI
vercel --prod

# OU via Git
git add .
git commit -m "feat: otimizar fontes para reduzir requests na Vercel"
git push origin main
```

---

## 🔧 COMANDOS ÚTEIS

### Verificar Tamanho do Build
```bash
npm run build
# Veja o tamanho dos arquivos gerados em dist/
```

### Limpar Cache
```bash
# Limpar node_modules e reinstalar
rm -rf node_modules package-lock.json
npm install

# Limpar cache do Vite
rm -rf node_modules/.vite
```

### Testar Build de Produção Localmente
```bash
npm run build
npm run preview
```

---

## 📊 VERIFICAÇÃO PÓS-DEPLOY

### Verificar Fontes no Navegador
1. Abra seu site em produção
2. Pressione F12
3. Vá em "Network" → "Font"
4. Recarregue (Ctrl+R)
5. ✅ Fontes devem vir do seu domínio

### Verificar Performance
```bash
# Lighthouse CLI (se instalado)
lighthouse https://seu-site.vercel.app --view

# Ou use: https://pagespeed.web.dev/
```

---

## 🐛 TROUBLESHOOTING RÁPIDO

### Fontes não aparecem?
```bash
# Verificar se os arquivos existem
ls public/fonts/outfit/
ls public/fonts/plus-jakarta-sans/

# Limpar cache do navegador
# Ctrl+Shift+R (Windows/Linux)
# Cmd+Shift+R (Mac)
```

### Build falha?
```bash
# Limpar tudo e reconstruir
rm -rf node_modules dist .vite
npm install
npm run build
```

### Erro no deploy da Vercel?
```bash
# Verificar logs
vercel logs

# Redeployar
vercel --prod --force
```

---

## 🎯 CHECKLIST RÁPIDO

```bash
# 1. Baixar fontes
node download-fonts.js

# 2. Aplicar CSS
cp src/index-FONTES-LOCAIS.css src/index.css

# 3. Testar
npm run dev
# Verificar no navegador: http://localhost:8080

# 4. Build
npm run build

# 5. Deploy
git add .
git commit -m "feat: otimizar fontes"
git push

# 6. Verificar em produção
# Abrir site → F12 → Network → Font
```

---

## 📈 MONITORAMENTO

### Vercel Dashboard
```
https://vercel.com/seu-usuario/seu-projeto/analytics
```

### Google PageSpeed
```
https://pagespeed.web.dev/
```

### WebPageTest
```
https://www.webpagetest.org/
```

---

## 🔄 ROLLBACK (Se necessário)

Se algo der errado, volte ao estado anterior:

```bash
# Restaurar index.css original
git checkout HEAD -- src/index.css

# Remover fontes locais
rm -rf public/fonts

# Rebuild e redeploy
npm run build
git add .
git commit -m "rollback: reverter otimização de fontes"
git push
```

---

## 💾 BACKUP

Antes de começar, faça backup:

```bash
# Backup do CSS original
cp src/index.css src/index.css.backup

# Ou commit no Git
git add .
git commit -m "backup: antes da otimização"
```

---

## 📞 LINKS ÚTEIS

- **Google Webfonts Helper:** https://gwfh.mranftl.com/fonts
- **Vercel Docs:** https://vercel.com/docs
- **PageSpeed Insights:** https://pagespeed.web.dev/
- **Can I Use (woff2):** https://caniuse.com/woff2

---

**Tempo total:** ~5-10 minutos
**Dificuldade:** Baixa
**Risco:** Mínimo
