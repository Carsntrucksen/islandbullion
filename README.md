# Bullion Store Starter Website (Next.js)

This is a lightweight, deployable starter for an online bullion dealer:
- Home page with trust blocks + featured categories
- Shop page with sample products (1 oz silver bars/coins)
- Product pages (dynamic routes)
- Live Sales page (Facebook/Whatnot embeds placeholders)
- Policies: Shipping, Returns, Privacy, Terms
- Contact page

## Quick start
1) Install Node.js (LTS).
2) In this folder:
   npm install
   npm run dev
3) Open http://localhost:3000

## Deploy (recommended: Vercel)
- Push this folder to GitHub
- Import into Vercel
- Deploy

## Configure
Edit `data/products.json` for your catalog.
Set your business details in `data/site.json`.

## Live pricing
This starter includes a simple "spot price" widget stub.
Wire it to your preferred data source in `lib/spot.ts` (server-side).
Do NOT hardcode API keys client-side.

## Payments
Start with "Request Invoice" / "Pay by E-Transfer/Wire" workflows.
You can later add a payment provider once your banking/processor is approved.


## Domain
Set your domain in `data/site.json` (field: `domain`).
