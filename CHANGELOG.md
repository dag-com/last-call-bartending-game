# Changelog

All notable changes to **Last Call** are listed here, newest first.

This project uses simple version numbers: `MAJOR.MINOR.PATCH`
- **PATCH** (e.g. 1.0.1) — small fixes and tweaks
- **MINOR** (e.g. 1.1.0) — new features, fully backward-compatible
- **MAJOR** (e.g. 2.0.0) — big overhauls or changes that rework how the game works

Each version below corresponds to a tagged release on GitHub. To open or download
any past version, go to the repository's **Releases** page and pick that version.

---

## v1.1.0 — Profiles, mocktails, progression & judges (2026-06-24)

A big content and progression update. Everything still runs as a static site
(no servers or accounts yet — that's planned for a later release).

### Players & access
- **Profile / age gate** — first-time players set up a profile (name, age,
  location, email or unique ID). Saved on the device for now.
- **Age filtering** — under-18 players get a **mocktail-only** experience with
  all alcohol hidden across every mode; adults get the full bar.

### New content
- **12 mocktails** (Virgin Sunrise, Shirley Temple, Virgin Piña Colada, Virgin
  Mojito, Virgin Mary, and more).
- **Shots section** — B-52, Baby Guinness, Kamikaze, Lemon Drop, Green Tea Shot.
- Every drink now has a **difficulty rating** (easy → expert) based on its number
  of ingredients and preparation method; the **Recipe Book** is grouped into
  sections (Cocktails / Shots / Mocktails) and ordered easy-first.

### Progression & the core loop
- **Levels & XP** — earn XP for every drink you serve; a level bar shows progress.
- **Unlocks** — Advanced & Endless unlock at level 2, Mixologist at level 3.
- **Cocktail of the Day** — a fresh daily drink with no repeats, plus a bonus.
- **Daily streak** — keep your streak alive by playing each day.
- **Badges** — 10 achievements (first pour, three stars, streaks, level
  milestones, inventor, daily habit, and more) on a dedicated Badges screen.

### Invent-a-mix judging
- **Judges panel** — the Mixologist mode is now scored by a rotating panel of
  judges (3 of 10, each with their own palate and comments) instead of a single
  evaluator score.

### Still to come (needs a backend)
- Community sharing of your inventions, likes/feedback, and global leaderboards
  (most-likes and daily-streak tabs), plus real accounts that sync across devices.

---

## v1.0.0 — First release (2026-06-20)

The first official, versioned release of the game.

### Game modes
- **Basic** — pick ingredients and garnish; the glass and method are chosen for you.
- **Advanced** — you choose everything: glass, pour, method and garnish.
- **Mixologist** — a free-pour sandbox where you invent your own cocktail and an
  evaluator scores it on balance, strength, technique, glass fit and garnish,
  with coaching tips and "you just invented a…" classic recognition.
- **Training** — a guided lesson with a step-by-step coach that highlights the
  correct choice at each step, so new players learn how to build a cocktail.
- **Endless Shift** — serve random customer orders for points with lives and streaks.

### Content
- **50 cocktails** spanning the canonical classics, ordered easy → hard.
- **58 ingredients** including spirits, liqueurs, juices, mixers, syrups, bitters,
  dairy/egg and herbs/spice, each with mixology metadata for the evaluator.
- **Recipe Book** to browse every cocktail.
- **My Bar** to save your own inventions and recreate them later.

### Presentation & extras
- Animated bar station with SVG glassware, pouring, mixing and garnish animations.
- Programmatic sound effects plus a toggleable ambient bar loop.
- Progress bar, animated points counter and persistent high scores.
- Metric (ml) measurements throughout.
- Mobile-friendly layout that fits the screen without scrolling.
