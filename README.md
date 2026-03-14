# Codarse — Course Platform

A course platform built with **Next.js**, **TypeScript**, and **Tailwind CSS**, powered by the **YouTube Data API v3**. YouTube playlists are used as courses and their videos as lessons, creating a seamless learning experience.

## Features

- **Course Catalog** — Browse all available courses in grid or horizontal scroll layouts
- **Course Detail** — View course description, module breakdown, and start watching
- **Video Player** — Embedded YouTube player with auto-next lesson, clickable timestamps, and progress tracking
- **Playlist Sidebar** — Accordion-style module navigation with lesson status (playing/done)
- **Share & Copy Link** — Dropdown with one-click URL copy to clipboard
- **Responsive Design** — Mobile drawer navigation, adaptive layouts, and sticky elements
- **SEO Optimized** — Dynamic metadata and OpenGraph tags generated per course via `generateMetadata`
- **Static Generation (SSG)** — Course pages are pre-rendered at build time with `generateStaticParams`

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.1.6 | React framework (App Router, SSG, ISR) |
| [React](https://react.dev/) | 19.2.3 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | ^5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | v4 | Utility-first styling |
| [Radix UI](https://www.radix-ui.com/) | Tabs 1.1.13 / Themes 3.3.0 | Accessible UI primitives |
| [react-player](https://github.com/cookpete/react-player) | 3.4.0 | YouTube video embedding |
| [react-icons](https://react-icons.github.io/react-icons/) | 5.5.0 | Material Design icons |
| [interweave](https://interweave.dev/) | 13.1.1 | Safe HTML rendering with auto-linking |
| [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer) | 10.0.2 | Viewport detection for sticky elements |
| [@googleapis/youtube](https://github.com/googleapis/google-api-nodejs-client) | 31.0.0 | YouTube Data API v3 client |

## API Integration

The app uses the **YouTube Data API v3** to fetch course data:

- **`playlists.list`** — Fetches all playlists from a specific channel, filtered by `#CODARSE` tag in the description
- **`playlistItems.list`** — Fetches all videos in a playlist with automatic pagination, then groups them into modules based on a `CODARSE - <module name>` pattern in each video's description

Data is cached using Next.js ISR with revalidation intervals (48h for playlists, 24h for playlist items).

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/plataformadecursos.git
   cd plataformadecursos
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with your YouTube API key:
   ```
   YOUTUBE_API_KEY=your_api_key_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                 # Root layout (Nunito font, global metadata)
│   ├── globals.css                # Dark theme + Tailwind v4 config
│   ├── (default)/                 # Route group with navigation header
│   │   ├── page.tsx               # Home page
│   │   └── cursos/
│   │       ├── page.tsx           # All courses (grid)
│   │       └── [id]/page.tsx      # Course detail (SSG)
│   ├── player/
│   │   └── [courseid]/[classid]/  # Video player page
│   └── components/                # Reusable UI components
└── shared/
    └── services/
        └── api-youtube/           # YouTube API service layer
```

## License

This project is for educational purposes.
