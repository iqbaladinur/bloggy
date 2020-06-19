---
navTitle: doc
title: doc
description: page description here.
type: static
---

### Getting Started
1. Use this github boilerplate, [use it](https://github.com/iqbaladinur/bloggy/generate).
2. Install dependencies with bellow command.

```bash
npm install
```
3. Create .env file, for example see env.example.
4. Run development mode.

```bash
# run development
npm run dev
#serve generated site on./dist
npm run serve
```
5. Create Content.

```bash
# create page
npm run create-page your-page-title

# create post
npm run create-post your-post-title
```
6. Deployment.

```bash
# generate static site result in ./dist
# you can create deployment on netlify, github pages, vercel or other static host.
npm run generate
```