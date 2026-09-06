# Digital Technologies Learning Platform

Mobile-first, offline-capable lesson platform for Nigerian senior secondary students (SS1 & SS2).

**Phase 1 is entirely static.** No backend, no database, no authentication. Progress in `localStorage`. Build produces a plain folder for web host, `file://`, or USB.

## Setup

```bash
npm install
npm run build-modules
npm run dev
```

## Build for USB / static host

```bash
npm run build
# copy the out/ folder
```

## Add content

Edit `content/ss1/week-NN.md` or `content/ss2/week-NN.md` using the documented markdown structure (WEEK heading, Sub-topics, PERIOD cards, EVALUATION with **Answers:** line, teacher notes).

Or place `content/raw/ss1-term.md` and run `npm run split`.

## Release dates

Edit `data/schedule.json`. Unlock logic is in `lib/schedule.js`.

## Parser test

```bash
npm run parse-sample
```
