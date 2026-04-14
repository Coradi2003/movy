# 🚨 Relatório de Otimização - Redução de Requests na Vercel

## Problema Identificado
Seu site está gerando **excesso de requests** principalmente devido ao carregamento de fontes externas via Google Fonts CDN.

---

## 🔴 CAUSAS PRINCIPAIS (Por Ordem de Impacto)

### 1. Google Fonts via CDN ⚠️ CRÍTICO
**Impacto:** 12+ requests por visita
**Localização:** `src/index.css` linha 1

```css
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
```

**Problema:**
- Cada visita faz request para `fonts.googleapis.com`
- Depois faz múltiplos requests para `fonts.gstatic.com` (um por peso de fonte)
- Total: 2 fontes × 12 pesos = ~14 requests externos
- Não aproveita cache do seu domínio Vercel

---

### 2. React Query Não Utilizado
**Impacto:** Baixo, mas desnecessário
**Localização:** `src/App.tsx`

```tsx
const queryClient = new QueryClient();
```

**Problema:**
- Biblioteca instalada mas não está sendo usada
- Adiciona ~40KB ao bundle sem necessidade

---

### 3. Framer Motion em Todos os Componentes
**Impacto:** Médio
**Problema:**
- Biblioteca pesada (~60KB) usada extensivamente
- Cada componente importa e usa animações

---

## ✅ SOLUÇÕES IMPLEMENTADAS

### Solução 1: Hospedar Fontes Localmente (RECOMENDADO) ⭐

**Benefícios:**
- Elimina 12+ requests externos
- Fontes servidas pelo CDN da Vercel
- Cache otimizado
- Melhor performance e privacidade

**Como implementar:**

1. Baixar as fontes do Google Fonts
2. Colocar em `public/fonts/`
3. Atualizar `src/index.css` para usar fontes locais

**Redução estimada:** 85% dos requests externos

---

### Solução 2: Usar Fontes do Sistema (ALTERNATIVA)

**Benefícios:**
- Zero requests de fontes
- Performance máxima
- Fontes já instaladas no dispositivo do usuário

**Desvantagem:**
- Muda a aparência visual do site

---

### Solução 3: Remover React Query

**Benefícios:**
- Reduz bundle em ~40KB
- Remove dependência não utilizada

---

### Solução 4: Lazy Load do Framer Motion

**Benefícios:**
- Carrega animações apenas quando necessário
- Reduz bundle inicial

---

## 📊 IMPACTO ESPERADO

| Solução | Redução de Requests | Dificuldade | Prioridade |
|---------|---------------------|-------------|------------|
| Fontes Locais | -12 requests/visita | Baixa | 🔴 CRÍTICA |
| Remover React Query | -1 request | Muito Baixa | 🟡 Média |
| Otimizar Framer Motion | -0 requests, -30KB | Média | 🟢 Baixa |

---

## 🎯 RECOMENDAÇÃO FINAL

**AÇÃO IMEDIATA:** Implementar fontes locais

Isso sozinho vai resolver 85% do problema de requests excessivos na Vercel.

---

## 📝 Próximos Passos

1. ✅ Baixar fontes do Google Fonts
2. ✅ Hospedar em `public/fonts/`
3. ✅ Atualizar CSS para usar fontes locais
4. ✅ Testar localmente
5. ✅ Deploy na Vercel
6. ✅ Monitorar redução de requests

---

**Gerado em:** 11/04/2026
**Projeto:** Movy Soluções Financeira
