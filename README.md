# Prela Automobile AG - Astro Version

This is the modern, static version of the Prela Automobile AG website, rewritten using [Astro](https://astro.build/).

## Features
- **Modern Tech Stack**: Built with Astro for superior performance and developer experience.
- **Static Site Generation (SSG)**: Lightning-fast page loads and improved SEO.
- **Component-Based Architecture**: Reusable UI components (Header, Footer, FAQ, Breadcrumbs).
- **Fully Responsive**: Optimized for all devices.
- **Lead Generation**: Integrated forms for car valuation and contact.

## Prerequisites
- **Node.js**: Version 18.17.1 or higher.
- **npm**: Package manager (comes with Node.js).

## How to Run Locally

### 1. Installation
Navigate to the project directory and install dependencies:
```bash
npm install
```

### 2. Development Server
Start the development server:
```bash
npm run dev
```
Open your browser at [http://localhost:4321/](http://localhost:4321/) to view the site.

### 3. Build for Production
Generate the static site:
```bash
npm run build
```
The output will be in the `dist/` directory.

### 4. Preview Production Build
Preview the generated static site locally:
```bash
npm run preview
```

## Project Structure
- `src/layouts/`: Base layout for all pages.
- `src/components/`: Reusable UI components.
- `src/pages/`: Website pages (Astro's file-based routing).
- `public/`: Static assets (CSS, JS, Images, Fonts).

## Deployment
This project is ready for deployment to any static hosting provider like Netlify, Vercel, or GitHub Pages. Simply upload the contents of the `dist/` directory after running `npm run build`.

---
*Note: This project was migrated from a Django-based implementation to provide better performance and easier maintenance.*
