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

### 🎯 Current Features

1. **API Integration**

   - Hono.js backend integrated via Next.js API routes
   - Example endpoint: `GET /api/hello` returns JSON response
   - Catch-all route handler pattern for flexible API routing

2. **Frontend Setup**

   - Server components by default (Next.js 15 App Router)
   - Component-based architecture with `_components` directory
   - Tailwind CSS v4 with modern styling approach
   - Type-safe development with TypeScript strict mode

3. **Development Tools**
   - ESLint for code quality
   - Path aliases configured (`@/*` points to root)
   - Hot reload and fast refresh enabled

### 🚧 Next Steps (MVP)

- [ ] Set up PostgreSQL database with Prisma ORM
- [ ] Implement user authentication system
- [ ] Create game lobby components
- [ ] Build 6-Card Golf game logic
- [ ] Set up WebSocket connection for real-time gameplay
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

The card game "Golf" is known for its wide array of rule variations, creating a fragmented player base with no single standard for gameplay. This project's vision is not to enforce one specific ruleset, but to create a flexible and modular **"Golf sandbox."** The platform will empower players to create and join games with highly configurable rules, accommodating the diverse ways the game is played. This modularity will be the application's defining feature, aiming to establish it as the definitive online destination for all fans of Golf.

### Core Features (Planned)

#### 1. Multiple Game Variants

Supports the most popular versions of Golf, including:

- **4-Card Golf:** A memory-focused 2×2 grid layout
- **6-Card Golf:** A balanced 2×3 grid layout (MVP focus)
- **8-Card & 9-Card Golf:** Larger, more strategic 2×4 and 3×3 grid layouts

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

#### 5. Spectator and Replay Modes

- The event-driven architecture allows for a built-in spectator mode
- A complete game history log enables a full replay system for reviewing past matches

---

## Game Rules Overview

The objective in Golf is to achieve the **lowest score** over 9 or 18 rounds (or "holes"). Players are dealt a layout of face-down cards and take turns drawing from a stock or discard pile to swap with cards in their layout, aiming to reduce their score.

The table below summarizes the key differences between the most common variants that the platform will support.

### Variant Comparison Table

| Feature            | 4-Card (Memory)    | 6-Card (Standard)    | 9-Card (Strategic)     | Common House Rules           |
| ------------------ | ------------------ | -------------------- | ---------------------- | ---------------------------- |
| **Layout**         | 2×2 Grid           | 2×3 Grid             | 3×3 Grid               | 2×4 Grid (Eight-Card)        |
| **Initial Reveal** | Peek at 2 cards    | Turn 2 cards face-up | Turn 1-3 cards face-up | Varies                       |
| **End Condition**  | Knocking           | All cards revealed   | All cards revealed     | Configurable                 |
| **Ace (A)**        | 1 point            | 1 point              | 1 point                | 1 point (Universal)          |
| **Two (2)**        | 2 points           | **-2 points**        | 2 or -2 points         | **-2 points** (Most common)  |
| **King (K)**       | 0 points           | 0 points             | 0 points               | Red K = -1, Black K = 12     |
| **Joker**          | Not typically used | -2 points (optional) | -2 or -5 points        | Steal a card; -5 points      |
| **Pair Bonus**     | Adjacent pair = 0  | Column pair = 0      | N/A                    | Horizontal/Vertical pair = 0 |
| **Triplet Bonus**  | N/A                | N/A                  | Row/Col/Diag = 0       | N/A                          |

### Standard Card Values

| Card      | Points                       |
| --------- | ---------------------------- |
| Ace (A)   | 1                            |
| Two (2)   | -2                           |
| 3-10      | Face value                   |
| Jack (J)  | 11                           |
| Queen (Q) | 12                           |
| King (K)  | 0                            |
| Joker     | -2 to -5 (variant-dependent) |

---

## Technology Stack

### Frontend

- **Next.js (App Router)** - React framework with server components
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Modern utility-first styling
- **Lucide React** - Icon library
- **Zustand** _(Planned)_ - Lightweight state management

### Backend

- **Hono.js** - Fast, lightweight web framework (deployable on Node.js or Edge platforms)
- **Node.js** - JavaScript runtime
- **WebSockets** _(Planned)_ - Real-time bidirectional communication

### Database & ORM

- **PostgreSQL** _(Planned)_ - Relational database
- **Prisma** _(Planned)_ - Next-generation ORM

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
- Broadcasting state updates to all clients via WebSockets

#### Frontend (Next.js)

The Next.js application serves as a **"dumb client."** Its primary responsibilities are:

- Rendering the game state as provided by the server
- Capturing user input (e.g., drawing a card, swapping a card) and sending these actions to the server
- Establishing and maintaining the WebSocket connection to receive real-time updates

---

## API & Real-Time Events

### REST API Endpoints (Planned)

#### Authentication

- `POST /api/auth/register` - Create a new user account
- `POST /api/auth/login` - Authenticate a user and receive a JWT

#### Game Management

- `POST /api/games/create` - Create a new game lobby with a custom rule configuration
- `POST /api/games/{id}/join` - Join an existing game lobby
- `GET /api/games/list` - Get a list of available public games
- `GET /api/games/{id}` - Get details of a specific game

### WebSocket Events (Planned)

#### Server-to-Client Events

| Event                  | Description                                                                      | Payload                                          |
| ---------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------ |
| `GAME_STATE_UPDATE`    | Broadcasts the complete public game state to all players after any action        | `{ gameState: GameState }`                       |
| `PRIVATE_STATE_UPDATE` | Sent to a single player with private information (e.g., the card they just drew) | `{ privateData: PlayerPrivateData }`             |
| `PLAYER_JOINED`        | Notifies clients when a player joins the game                                    | `{ player: Player }`                             |
| `PLAYER_LEFT`          | Notifies clients when a player leaves the game                                   | `{ playerId: string }`                           |
| `GAME_ERROR`           | Informs a client of an invalid move                                              | `{ error: string }`                              |
| `ROUND_END`            | Signals the end of a round                                                       | `{ scores: PlayerScore[] }`                      |
| `GAME_END`             | Signals the end of the entire game                                               | `{ finalScores: PlayerScore[], winner: Player }` |

#### Client-to-Server Events

| Event           | Description                                                                            | Payload                                |
| --------------- | -------------------------------------------------------------------------------------- | -------------------------------------- |
| `PLAYER_ACTION` | A single event type used to send a player's intended move to the server for validation | `{ action: ActionType, payload: any }` |

**Example Actions:**

```typescript
// Draw from stock pile
{ action: "DRAW_FROM_STOCK", payload: {} }

// Draw from discard pile
{ action: "DRAW_FROM_DISCARD", payload: {} }

// Swap drawn card with a card in hand
{ action: "SWAP_CARD", payload: { cardIndex: 3 } }

// Discard the drawn card
{ action: "DISCARD_DRAWN_CARD", payload: {} }

// Knock (end the round)
{ action: "KNOCK", payload: {} }
```

---

## Development Roadmap

### Phase 1: Minimum Viable Product (MVP) - "The Core Experience"

**Focus:** Launch a stable, playable version to validate the core concept.

**Features:**

- ✅ Next.js project setup with TypeScript
- ✅ Hono.js API integration
- ✅ Basic routing and component structure
- 🚧 Database setup with PostgreSQL and Prisma
- 🚧 User authentication (JWT-based)
- 🚧 Implement 6-Card Golf with a single, standard scoring ruleset
- 🚧 Basic public and private lobbies for 2-4 players
- 🚧 User accounts for persistent score tracking
- 🚧 Build the foundational WebSocket architecture
- 🚧 Modular rules engine foundation
- 🚧 Game board UI with card interactions
- 🚧 Real-time game state synchronization

**Estimated Timeline:** 2-3 months

---

### Phase 2: Feature Expansion - "The Sandbox"

**Focus:** Deliver on the promise of customization and variety.

**Features:**

- Introduce 4-Card and 9-Card Golf variants
- Expose the full Custom Game Rules UI in the lobby
- Advanced rule configuration options:
  - Custom card values
  - Joker rules
  - Pair/triplet bonuses
  - End-of-round conditions
- Launch comprehensive player profile pages with detailed statistics
- Game history and replay system
- Spectator mode
- Improved lobby system with filters and search

**Estimated Timeline:** 2-3 months

---

### Phase 3: Community & Monetization - "The Living Game"

**Focus:** Foster long-term retention and community building.

**Features:**

- Introduce Ranked Mode with an Elo rating system and leaderboards
- Implement social features:
  - Friends lists
  - Direct challenges
  - In-game chat
  - Player blocking/reporting
- Explore non-intrusive monetization via cosmetics:
  - Custom card backs
  - Table themes
  - Avatar customization
- Add advanced "house rules" and "power cards" for maximum variety
- Achievement system with rewards
- Tournament system for organized competitive play
- Mobile-responsive design enhancements

**Estimated Timeline:** 3-4 months

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
