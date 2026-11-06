# Cotizador de Préstamos

Calculadora de préstamos hecha con **React + Vite + Tailwind CSS**. Muestra al instante el total a pagar, el interés y la cuota mensual según la cantidad y el plazo elegidos.

**Demo:** https://jose0305rm.github.io/-loan_calculator/

## Funcionalidades

- Cantidad con slider o botones +/- y selección de plazo.
- **Interés automático:** la tasa se ajusta según la cantidad y el plazo.
- **Interés personalizado:** tasa anual, mensual o total, con interés simple o cuota fija (amortización francesa).

## Correr localmente

```bash
npm install
npm run dev
```

## Despliegue

`.github/workflows/deploy.yml` compila y publica en GitHub Pages en cada push a `main`
(Settings → Pages → Source: **GitHub Actions**).
