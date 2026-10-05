# Phoenix 8 Labs website

Read HANDOVER.md in full before any task. Follow its brand tokens, copy and build phases exactly.

- Design target: docs/design/home-desktop.png (1440px) and docs/design/home-mobile.png (390px). The matching .html files in docs/design open in a browser and show exact spacing, sizes and colours; inspect them when a screenshot is ambiguous. They are references only, not production code.
- Logos and brand tokens: public/brand/ (tokens.json holds every colour, type style, spacing and radius value).
- Work one build phase at a time and stop for review after each.
- Keep [square-bracket] placeholders visible; never invent client names, results, testimonials or numbers.

## Git workflow
- Work on `develop` (or a feature branch off it). Never push directly to `main`: it deploys to production and is protected.
- Ship by opening a pull request `develop` → `main`; CI (lint + build) must pass.
