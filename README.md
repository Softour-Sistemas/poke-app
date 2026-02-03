# poke-app
Poke-App es una aplicación web como proyecto de transición tecnológica

# 📱 Proyecto Ionic + Vue 3 + TypeScript
Este proyecto utiliza **Ionic Framework** con **Vue 3 + TypeScript**, junto con un entorno de testing completo basado en **Vitest**, **Testing Library** y **Playwright** para pruebas E2E.  
La arquitectura está organizada por módulos y responsabilidades claras para asegurar escalabilidad y mantenibilidad.

---

## 🚀 Tecnologías principales

- **Ionic Framework** (UI + Capacitor)
- **Vue 3**
- **TypeScript**
- **Vite**
- **Pinia** (estado global opcional)
- **Vitest** + **Testing Library** (unit tests)
- **Playwright** (end-to-end tests)

---

## 📦 Instalación

```bash
npm install


npm run dev           # Ejecuta la app en modo desarrollo (ionic serve)
npm run build         # Compila la app para producción
npm run test          # Ejecuta tests unitarios con Vitest
npm run test:ui       # Ejecuta Vitest en modo UI
npm run test:e2e      # Ejecuta tests E2E con Playwright
npm run test:e2e:ui   # Ejecuta Playwright en modo UI
