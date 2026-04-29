# Golden-Age Job Matcher
**Empowering Senior Citizens with flexible, meaningful work opportunities.**

An MVP built for the Product Management Assessment, focusing on the social and financial inclusion of the elderly population.

# Vision
Post-retirement, many senior citizens face social isolation and a lack of engagement. The **Golden-Age Job Matcher** is a dedicated platform designed to bridge the gap between seniors looking for low-stress, flexible roles and organizations that value experience and reliability.

# Key Features
- **Curated Job Listings:** Specifically filtered for "Senior-Friendly" roles like Teaching, Telecalling, and Data Entry.
- **Simplified UI:** Clean, high-contrast interface built with Vite + React for lightning-fast performance.
- **Skill-Based Filtering:** Easy one-click filters to find jobs that match their expertise.
- **Accessibility Focused:** Minimalist design to reduce cognitive load for elderly users.

# Tech Stack
- **Frontend:** React.js (Vite)
- **Backend:** Node.js, Express.js
- **Styling:** Custom CSS3
- **Deployment:** Vercel (Frontend) & Render (Backend)

# Project Structure
```text
golden-age-job-matcher/
├── backend/
│   ├── server.js          # Core Express server & Mock Data
│   └── package.json       # Backend dependencies
└── frontend/
    ├── src/
    │   ├── App.jsx        # Main Logic & UI components
    │   └── App.css        # Custom Styling
    └── index.html         # Entry point

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
