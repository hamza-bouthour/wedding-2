# Wedding Invitation - Frontend Only Export

This is now a pure frontend-only wedding invitation website with no backend dependencies!

## What's Changed

✅ **Removed all backend dependencies**
- No Express server needed
- No database connections
- No API calls

✅ **Embedded guest data directly in code**
- All guest information in `client/src/data/guestData.ts`
- Wedding details and photos included

✅ **Simplified RSVP system**
- Frontend-only form validation
- Console logging for submissions (you can connect to email service later)

## How to Deploy

### Option 1: Deploy to Vercel (Free)
1. Download the `client` folder
2. Go to [vercel.com](https://vercel.com)
3. Drag and drop the `client` folder
4. Your site will be live instantly!

### Option 2: Deploy to Netlify (Free)
1. Download the `client` folder
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `client` folder to deploy
4. Get a free custom domain!

### Option 3: Build and Host Anywhere
```bash
cd client
npm install
npm run build
```
The `dist` folder contains your complete website.

## Guest URLs Work Perfectly
- `/` - Main invitation page
- `/sahar` - Sahar's personalized page
- `/khoubeib` - Khoubeib's page (includes siblings)
- `/afef` - Afef's personalized page

## Features Included
✅ Beautiful photo gallery with your real wedding photos
✅ Personalized guest welcome messages
✅ Confirmed guests list
✅ Reception details
✅ RSVP form (frontend validation)
✅ Mobile-responsive design
✅ Elegant color scheme (blush, sage, champagne)

## Cost: $0
No monthly fees, no server costs, completely free to host!