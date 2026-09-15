# Car Upgrade Calculator

Family-aligned PWA for Bernice Chua's calculator suite.

## Family standard
- Family navy: `#082F53`
- Page background: `#F5F5F7`
- White 16px cards, 12px controls
- Mobile-first, max width 520px
- `$` only
- Footer: `Bernice Chua | @bernice.mercedes`
- Offline PWA with persistent inputs until Clear
- Calculator-specific logo; shared layout and interaction system

## Upgrade-specific logic
- Net Trade-in Equity = Trade-in Value - Outstanding Settlement
- Effective Price = Car Price - Promo Discount
- Preset loan: 50%, 60%, 90%, or Custom
- Loan amount can be manually overwritten
- Interest: 2.28%, 2.6%, 2.98%, or Custom
- Tenure: 5, 7, 10 years, or Custom
- Loan amount rounds down for percentage-based loan
- Monthly instalment rounds up
- Cash Required = max(0, Down Payment - Net Trade-in Equity)
- Excess equity is shown as Surplus Equity
- Monthly Difference appears only when Current Instalment is entered
