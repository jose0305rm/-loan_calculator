# Loan Quoter

Loan calculator built with **React + Vite + Tailwind CSS**. It instantly shows the total to pay, the interest and the monthly payment for the chosen amount and term.

**Live demo:** https://jose0305rm.github.io/-loan_calculator/

## Features

- Choose the amount with a slider or the +/- buttons, and pick the payment term.
- **Automatic interest:** the rate adjusts to the amount requested and the term.
- **Custom interest:** annual, monthly or total rate, with simple interest or fixed payments (French amortization).

## Run locally

```bash
npm install
npm run dev
```

## Deployment

`.github/workflows/deploy.yml` builds the app and publishes it to GitHub Pages on every push to `main`
(Settings → Pages → Source: **GitHub Actions**).
