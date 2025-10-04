# Online Multiplayer "Golf" Card Game

A flexible, configurable online version of the classic card game "Golf," where the goal is to get the lowest score. This project is built with a modern tech stack featuring Next.js for the frontend and Hono.js for the backend.

## Table of Contents

- [Current Project Status](#current-project-status)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Project Vision](#project-vision)
- [Game Rules Overview](#game-rules-overview)
- [Technology Stack](#technology-stack)
- [API & Real-Time Events](#api--real-time-events)
- [Development Roadmap](#development-roadmap)

---

## Current Project Status

### ✅ Completed

- **Initial Next.js setup** with TypeScript and Tailwind CSS v4
- **Hono.js integration** via Next.js API routes
- **Basic project structure** following Next.js App Router conventions
- **Development environment** configured with ESLint and proper tooling
- **Route helper utilities** for API endpoint management

### 📁 Project Structure

```
/Users/samyamkc/hobby-projects/golf/golf game/
├── app/
│   ├── _components/         # Reusable UI components
│   │   └── Homepage/
│   │       └── index.tsx    # Homepage component
│   ├── api/
│   │   └── [...route]/
│   │       └── route.ts     # Hono.js API handler (catch-all route)
│   ├── globals.css          # Global styles with Tailwind CSS
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Homepage route
├── lib/
│   └── utils.ts             # Utility functions (cn helper)
├── routeHelper.ts           # API route constants and helpers
├── components.json          # shadcn/ui configuration
├── next.config.ts           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
├── eslint.config.mjs        # ESLint configuration
├── postcss.config.mjs       # PostCSS configuration
└── package.json             # Project dependencies
```

### 🔧 Technology Stack (Implemented)

| Technology       | Version | Purpose                         |
| ---------------- | ------- | ------------------------------- |
| **Next.js**      | 15.5.4  | React framework with App Router |
| **React**        | 19.2.0  | UI library                      |
| **TypeScript**   | 5.9.3   | Type safety                     |
| **Hono.js**      | 4.9.9   | Lightweight backend framework   |
| **Tailwind CSS** | 4.1.14  | Utility-first styling           |
| **Lucide React** | 0.544.0 | Icon library                    |

### 🚧 Next Steps (MVP)

- [ ] Set up PostgreSQL database with Drizzle ORM
- [ ] Implement user authentication system
- [ ] Create game lobby components
- [ ] Build 4-Card Golf game logic
- [ ] Set up SSE connection for real-time gameplay
- [ ] Implement game state management
- [ ] Create game board UI components
- [ ] Add player hand and card interaction logic

---

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- pnpm package manager

### Installation

1. **Install dependencies:**

   ```bash
   pnpm install
   ```

2. **Set up environment variables:**

   Create a `.env.local` file in the root directory:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   ```

3. **Run the development server:**

   ```bash
   pnpm dev
   ```

4. **Open the application:**

   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

---

## Environment Variables

| Variable              | Description                | Example                     |
| --------------------- | -------------------------- | --------------------------- |
| `NEXT_PUBLIC_API_URL` | Base URL for API endpoints | `http://localhost:3000/api` |

---

## Project Vision

The card game "Golf" is known for its wide array of rule variations, creating a fragmented player base with no single standard for gameplay. This project's vision is not to enforce one specific ruleset, but to create a flexible and modular **"Golf sandbox."** The platform will empower players to create and join games .

### Core Features (Planned)

#### 1. Base Game Variant

- **4-Card Golf:** A memory-focused 2×2 grid layout

#### 2. Customizable Rules Engine

Players can create custom game lobbies with a wide range of rule modifications:

- Number of decks and inclusion of Jokers
- Variable scoring for cards (e.g., Kings worth 0, Twos worth -2)
- Different end-of-round conditions ("Knocking" vs. "All Cards Revealed")
- Special combination bonuses (e.g., four-of-a-kind for -25 points)

#### 3. Real-Time Multiplayer

- Public and private game lobbies with shareable invite codes
- Seamless, responsive gameplay powered by WebSockets
- 2-4 players per game

#### 4. Player Accounts & Progression

- Persistent user accounts to track stats and game history
- Detailed player profiles with statistics like win/loss record and average score
- Ranked mode with a skill-based matchmaking system and leaderboards
- Achievement system to reward gameplay milestones

---

## Game Rules Overview

The objective in Golf is to achieve the **lowest score** over 9 or 18 rounds (or "holes"). Players are dealt a layout of face-down cards and take turns drawing from a stock or discard pile to swap with cards in their layout, aiming to reduce their score.

The table below summarizes the key differences between the most common variants that the platform will support.

### Variant Comparison Table

| Feature            | 4-Card (Memory)   | Common House Rules           |
| ------------------ | ----------------- | ---------------------------- |
| **Layout**         | 2×2 Grid          | 2×4 Grid (Eight-Card)        |
| **Initial Reveal** | Peek at 2 cards   | Varies                       |
| **End Condition**  | Knocking          | Configurable                 |
| **Ace (A)**        | 1 point           | 1 point (Universal)          |
| **Two (2)**        | 2 points          | **-2 points** (Most common)  |
| **King (K)**       | 0 points          | Red K = -1, Black K = 12     |
| **Pair Bonus**     | Adjacent pair = 0 | Horizontal/Vertical pair = 0 |

### Standard Card Values

| Card           | Points     |
| -------------- | ---------- |
| Ace (A)        | 1          |
| 2-10           | Face value |
| Jack (J)       | 11         |
| Queen (Q)      | 12         |
| Red King (K)   | 13         |
| Black King (K) | 0          |

---

## Technology Stack

### Frontend

- **Next.js (App Router)** - React framework with server components
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Modern utility-first styling
- **Lucide React** - Icon library
- **Zustand** - Lightweight state management

### Backend

- **Hono.js** - Fast, lightweight web framework (deployable on Node.js or Edge platforms)
- **Node.js** - JavaScript runtime
- **SWE** - Real-time communication

### Database & ORM

- **PostgreSQL** - Relational database
- **Drizzle** - Next-generation ORM

### Development Tools

- **ESLint** - Code linting
- **TypeScript** - Static type checking
- **pnpm** - Fast, efficient package manager

### Architecture Overview

The application follows a modern client-server architecture with a clear separation of concerns.

#### Backend (Hono.js)

The Hono.js server acts as the **authoritative game engine**. It is responsible for:

- Managing user authentication and sessions
- Creating and managing game lobbies
- Handling all game state and enforcing the rules defined by the game's configuration
- Broadcasting state updates to all clients via SSE

#### Frontend (Next.js)

The Next.js application serves as a **"dumb client."** Its primary responsibilities are:

- Rendering the game state as provided by the server
- Capturing user input (e.g., drawing a card, swapping a card) and sending these actions to the server
- Establishing and maintaining the WebSocket connection to receive real-time updates

---

## Contributing

This is currently a personal project, but contributions are welcome! Please feel free to submit issues or pull requests.

### Code Style Guidelines

- Follow the established Next.js and TypeScript conventions
- Use functional components and hooks
- Write descriptive variable names with auxiliary verbs (`isLoading`, `hasError`)
- Use lowercase with dashes for directory names (`components/auth-wizard`)
- Implement proper error handling with early returns
- Add JSDoc comments for complex functions

---

## License

MIT License - feel free to use this project as a reference or starting point for your own implementations.

---

## Contact

For questions, feedback, or collaboration opportunities, please open an issue on the repository.

---

**Happy coding! 🃏⛳**
