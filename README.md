# Nail IB Frontend

This project is the frontend for Nail IB, a landing experience built for IB students.
My focus was on clarity, performance, and a calm UI that works well for long study sessions.

The design is intentionally minimal but premium, with smooth interactions and a structure that can scale as features grow.

## � Approach

- **Bento-style layout** to break complex IB content into clear, scannable sections
- **Dark-first UI** to reduce eye strain during late-night study sessions
- **GSAP animations** used only where they improve flow and feedback
- **Cyclic carousels** with consistent media sizing to avoid layout shifts

Every UI choice was tied to usability or maintainability rather than visual noise.

## 🛠️ Setup

```bash
git clone https://github.com/khushi-1907/Nailib_frontend.git
cd nailib-frontend
npm install
npm run dev
```

Open: [http://localhost:3000](http://localhost:3000)

## 💻 Tech Stack

- **Next.js** (App Router)
- **React + TypeScript**
- **Tailwind CSS**
- **GSAP**
- **Phosphor Icons**

## 📂 Folder Structure

```text
src/
├── app/            # Pages, layout, globals
├── components/     # Navbar, sections, UI blocks
│   └── ui/         # Reusable primitives
├── lib/            # Shared utilities
public/             # Images, videos, assets
```
