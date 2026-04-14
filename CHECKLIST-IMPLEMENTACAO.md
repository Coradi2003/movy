# ✅ CHECKLIST DE IMPLEMENTAÇÃO - Otimização Vercel

## 📋 PROGRESSO GERAL

```
[  ] Preparação
[  ] Download de Fontes
[  ] Aplicação do CSS
[  ] Testes Locais
[  ] Build de Produção
[  ] Deploy
[  ] Verificação
[  ] Monitoramento
```

---

## 🎯 FASE 1: PREPARAÇÃO (5 min)

### Leitura da Documentação
- [ ] Ler README-OTIMIZACAO.md
- [ ] Ler RESUMO-EXECUTIVO.md
- [ ] Ler COMANDOS-RAPIDOS.md

### Backup
- [ ] Fazer backup de `src/index.css`
  ```bash
  cp src/index.css src/index.css.backup
  ```
- [ ] Commit atual no Git
  ```bash
  git add .
  git commit -m "backup: antes da otimização de fontes"
  ```

### Verificação de Dependências
- [ ] Node.js instalado
  ```bash
  node --version
  ```
- [ ] npm instalado
  ```bash
  npm --version
  ```
- [ ] Projeto rodando localmente
  ```bash
  npm run dev
  ```

**Status Fase 1:** [ ] Completo

---

## 🎯 FASE 2: DOWNLOAD DE FONTES (5 min)

### Opção A: Script Automático (RECOMENDADO)
- [ ] Executar script de download
  ```bash
  node download-fonts.js
  ```
- [ ] Verificar arquivos baixados
  ```bash
  ls public/fonts/outfit/
  ls public/fonts/plus-jakarta-sans/
  ```

### Opção B: Download Manual
- [ ] Acessar https://gwfh.mranftl.com/fonts
- [ ] Baixar Outfit (pesos 300-900)
- [ ] Baixar Plus Jakarta Sans (pesos 300-700)
- [ ] Extrair para `public/fonts/outfit/`
- [ ] Extrair para `public/fonts/plus-jakarta-sans/`

### Verificação de Arquivos
- [ ] `public/fonts/outfit/outfit-v11-latin-300.woff2` existe
- [ ] `public/fonts/outfit/outfit-v11-latin-400.woff2` existe
- [ ] `public/fonts/outfit/outfit-v11-latin-500.woff2` existe
- [ ] `public/fonts/outfit/outfit-v11-latin-600.woff2` existe
- [ ] `public/fonts/outfit/outfit-v11-latin-700.woff2` existe
- [ ] `public/fonts/outfit/outfit-v11-latin-800.woff2` existe
- [ ] `public/fonts/outfit/outfit-v11-latin-900.woff2` existe
- [ ] `public/fonts/plus-jakarta-sans/plus-jakarta-sans-v8-latin-300.woff2` existe
- [ ] `public/fonts/plus-jakarta-sans/plus-jakarta-sans-v8-latin-400.woff2` existe
- [ ] `public/fonts/plus-jakarta-sans/plus-jakarta-sans-v8-latin-500.woff2` existe
- [ ] `public/fonts/plus-jakarta-sans/plus-jakarta-sans-v8-latin-600.woff2` existe
- [ ] `public/fonts/plus-jakarta-sans/plus-jakarta-sans-v8-latin-700.woff2` existe

**Total esperado:** 12 arquivos .woff2

**Status Fase 2:** [ ] Completo

---

## 🎯 FASE 3: APLICAÇÃO DO CSS (2 min)

### Substituir CSS
- [ ] Abrir `src/index.css`
- [ ] Abrir `src/index-FONTES-LOCAIS.css`
- [ ] Copiar conteúdo de `index-FONTES-LOCAIS.css`
- [ ] Colar em `index.css` (substituir tudo)

### OU via Comando
- [ ] Windows PowerShell:
  ```bash
  Copy-Item src/index-FONTES-LOCAIS.css src/index.css -Force
  ```
- [ ] Linux/Mac:
  ```bash
  cp src/index-FONTES-LOCAIS.css src/index.css
  ```

### Verificação
- [ ] `src/index.css` NÃO contém `@import url('https://fonts.googleapis.com`
- [ ] `src/index.css` contém `@font-face` para Outfit
- [ ] `src/index.css` contém `@font-face` para Plus Jakarta Sans
- [ ] `src/index.css` contém `url('/fonts/outfit/`
- [ ] `src/index.css` contém `url('/fonts/plus-jakarta-sans/`

**Status Fase 3:** [ ] Completo

---

## 🎯 FASE 4: TESTES LOCAIS (5 min)

### Iniciar Servidor de Desenvolvimento
- [ ] Parar servidor se estiver rodando (Ctrl+C)
- [ ] Limpar cache
  ```bash
  rm -rf node_modules/.vite
  ```
- [ ] Iniciar servidor
  ```bash
  npm run dev
  ```

### Verificação no Navegador
- [ ] Abrir http://localhost:8080
- [ ] Site carrega normalmente
- [ ] Fontes aparecem corretamente
- [ ] Visual idêntico ao anterior

### Verificação no DevTools
- [ ] Abrir DevTools (F12)
- [ ] Ir em "Network" → "Font"
- [ ] Recarregar página (Ctrl+R)
- [ ] Verificar requests de fontes

### Checklist de Requests
- [ ] NÃO há requests para `fonts.googleapis.com`
- [ ] NÃO há requests para `fonts.gstatic.com`
- [ ] HÁ requests para `localhost:8080/fonts/outfit/`
- [ ] HÁ requests para `localhost:8080/fonts/plus-jakarta-sans/`
- [ ] Total de ~12 requests de fontes (todos locais)

### Verificação Visual
- [ ] Título principal com fonte correta
- [ ] Textos com fonte correta
- [ ] Pesos de fonte corretos (300-900)
- [ ] Sem erros no console

**Status Fase 4:** [ ] Completo

---

## 🎯 FASE 5: BUILD DE PRODUÇÃO (3 min)

### Executar Build
- [ ] Parar servidor de desenvolvimento (Ctrl+C)
- [ ] Limpar build anterior
  ```bash
  rm -rf dist
  ```
- [ ] Executar build
  ```bash
  npm run build
  ```
- [ ] Build completo sem erros

### Verificação do Build
- [ ] Pasta `dist/` criada
- [ ] Pasta `dist/fonts/` existe
- [ ] Fontes copiadas para `dist/fonts/`
- [ ] Arquivos CSS gerados

### Teste do Build Localmente (Opcional)
- [ ] Executar preview
  ```bash
  npm run preview
  ```
- [ ] Abrir URL do preview
- [ ] Verificar fontes no DevTools
- [ ] Tudo funcionando

**Status Fase 5:** [ ] Completo

---

## 🎯 FASE 6: DEPLOY (5 min)

### Commit das Mudanças
- [ ] Adicionar arquivos ao Git
  ```bash
  git add .
  ```
- [ ] Commit com mensagem descritiva
  ```bash
  git commit -m "feat: otimizar fontes para reduzir requests na Vercel"
  ```

### Deploy na Vercel

#### Opção A: Via Git (RECOMENDADO)
- [ ] Push para repositório
  ```bash
  git push origin main
  ```
- [ ] Aguardar deploy automático da Vercel
- [ ] Verificar status no dashboard da Vercel

#### Opção B: Via CLI
- [ ] Executar deploy
  ```bash
  vercel --prod
  ```
- [ ] Aguardar conclusão
- [ ] Anotar URL de produção

### Verificação do Deploy
- [ ] Deploy concluído com sucesso
- [ ] Sem erros no log da Vercel
- [ ] URL de produção acessível

**Status Fase 6:** [ ] Completo

---

## 🎯 FASE 7: VERIFICAÇÃO EM PRODUÇÃO (5 min)

### Acesso ao Site
- [ ] Abrir site em produção
- [ ] Site carrega normalmente
- [ ] Visual idêntico ao anterior
- [ ] Sem erros visíveis

### Verificação de Fontes
- [ ] Abrir DevTools (F12)
- [ ] Ir em "Network" → "Font"
- [ ] Limpar (Clear)
- [ ] Recarregar página (Ctrl+Shift+R)

### Checklist de Requests em Produção
- [ ] NÃO há requests para `fonts.googleapis.com`
- [ ] NÃO há requests para `fonts.gstatic.com`
- [ ] HÁ requests para `seu-dominio.vercel.app/fonts/`
- [ ] Fontes carregam com status 200 (OK)
- [ ] Cache headers corretos (max-age=31536000)

### Verificação de Performance
- [ ] Abrir https://pagespeed.web.dev/
- [ ] Testar URL de produção
- [ ] Anotar Performance Score
- [ ] Comparar com score anterior (se disponível)

### Teste em Diferentes Dispositivos
- [ ] Desktop (Chrome)
- [ ] Desktop (Firefox)
- [ ] Mobile (Chrome)
- [ ] Mobile (Safari)

**Status Fase 7:** [ ] Completo

---

## 🎯 FASE 8: MONITORAMENTO (Contínuo)

### Primeiras 24 Horas
- [ ] Monitorar Vercel Analytics
- [ ] Verificar métricas de performance
- [ ] Checar logs de erro
- [ ] Verificar feedback de usuários

### Métricas a Acompanhar
- [ ] Requests totais (deve reduzir)
- [ ] Bandwidth (deve reduzir ~60%)
- [ ] First Contentful Paint (deve melhorar)
- [ ] Largest Contentful Paint (deve melhorar)
- [ ] Performance Score (deve aumentar)

### Vercel Dashboard
- [ ] Acessar https://vercel.com/dashboard
- [ ] Ir em Analytics
- [ ] Verificar Web Vitals
- [ ] Comparar com período anterior

### Google PageSpeed Insights
- [ ] Testar novamente após 24h
- [ ] Comparar scores
- [ ] Verificar melhorias

**Status Fase 8:** [ ] Em andamento

---

## 📊 RESULTADOS ESPERADOS

### Antes da Otimização
- Requests externos: ~13
- Tempo de carregamento: ~2.5s
- Performance Score: ~70

### Depois da Otimização
- Requests externos: 0 ✅
- Tempo de carregamento: ~1.5s ✅
- Performance Score: ~90 ✅

---

## 🐛 TROUBLESHOOTING

### Problema: Fontes não aparecem localmente
- [ ] Verificar se arquivos existem em `public/fonts/`
- [ ] Verificar nomes dos arquivos no CSS
- [ ] Limpar cache do navegador (Ctrl+Shift+R)
- [ ] Reiniciar servidor de desenvolvimento

### Problema: Build falha
- [ ] Verificar erros no console
- [ ] Limpar node_modules e reinstalar
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```
- [ ] Verificar sintaxe do CSS

### Problema: Fontes não aparecem em produção
- [ ] Verificar se fontes foram incluídas no build
- [ ] Verificar paths no CSS (devem começar com `/fonts/`)
- [ ] Verificar logs da Vercel
- [ ] Limpar cache da Vercel e redeployar

### Problema: Performance não melhorou
- [ ] Aguardar 24h para cache se propagar
- [ ] Verificar se fontes realmente vêm do seu domínio
- [ ] Testar em modo anônimo (sem cache)
- [ ] Verificar outros gargalos (imagens, scripts)

---

## 🔄 ROLLBACK (Se Necessário)

### Passos para Reverter
- [ ] Restaurar backup do CSS
  ```bash
  cp src/index.css.backup src/index.css
  ```
- [ ] Remover fontes locais
  ```bash
  rm -rf public/fonts
  ```
- [ ] Rebuild
  ```bash
  npm run build
  ```
- [ ] Redeploy
  ```bash
  git add .
  git commit -m "rollback: reverter otimização de fontes"
  git push
  ```

---

## ✅ CHECKLIST FINAL

- [ ] Todas as 8 fases completas
- [ ] Fontes carregando localmente
- [ ] Zero requests externos
- [ ] Performance melhorada
- [ ] Visual idêntico
- [ ] Sem erros
- [ ] Monitoramento ativo
- [ ] Documentação lida

---

## 🎉 CONCLUSÃO

**Status Geral:** [ ] COMPLETO

**Data de Implementação:** ___/___/______

**Tempo Total:** _______ minutos

**Problemas Encontrados:** 
_______________________________________
_______________________________________

**Melhorias Observadas:**
_______________________________________
_______________________________________

**Notas Adicionais:**
_______________________________________
_______________________________________

---

**Projeto:** Movy Soluções Financeira
**Implementado por:** _______________________
**Data:** 11/04/2026
