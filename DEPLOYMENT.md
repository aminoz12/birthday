# Deployment Guide

This Next.js application is configured for **static export** and can be deployed to any static hosting service.

## Build Output

The build process generates a static site in the `out/` directory, which contains all the HTML, CSS, JavaScript, and assets needed to run your application.

## Building for Production

To create a production build, run:

```bash
npm install
npm run build
```

This will generate the static files in the `out/` directory.

## Deployment Options

### 1. Netlify (Recommended - Already Configured)

Your project is already configured for Netlify deployment with the `netlify.toml` file.

**Deploy Steps:**
1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Log in to [Netlify](https://www.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Connect your Git repository
5. Netlify will automatically detect the configuration from `netlify.toml`
6. Click "Deploy site"

**Manual Deployment:**
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=out
```

### 2. Vercel

**Using Vercel CLI:**
```bash
npm install -g vercel
vercel --prod
```

**Using Vercel Dashboard:**
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

### 3. GitHub Pages

**Deploy Steps:**
1. Update `next.config.ts` to set the correct `assetPrefix`:
   ```typescript
   assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
   ```
2. Build the project: `npm run build`
3. Push the `out/` directory to a `gh-pages` branch
4. Enable GitHub Pages in your repository settings

**Using gh-pages package:**
```bash
npm install --save-dev gh-pages
# Add to package.json scripts:
# "deploy": "gh-pages -d out"
npm run deploy
```

### 4. Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Select "out" as the public directory
# Configure as single-page app: Yes
firebase deploy
```

### 5. AWS S3 + CloudFront

1. Build the project: `npm run build`
2. Create an S3 bucket with static website hosting enabled
3. Upload the contents of the `out/` directory to the bucket
4. (Optional) Set up CloudFront distribution for CDN and HTTPS

### 6. Any Static Host

Simply upload the contents of the `out/` directory to any web server or static hosting service:
- DigitalOcean App Platform
- Render
- Cloudflare Pages
- Azure Static Web Apps
- Google Cloud Storage
- etc.

## Important Notes

- **Static Export**: This app uses Next.js static export (`output: 'export'`), which means no server-side features are available
- **Image Optimization**: Images are unoptimized (`images.unoptimized: true`) to support static hosting
- **Client-Side Routing**: All routing is handled client-side using Next.js App Router
- **404 Handling**: A custom 404 page is automatically generated for handling not-found routes

## Configuration Files

- `next.config.ts`: Next.js configuration with static export enabled
- `netlify.toml`: Netlify-specific configuration
- `public/_redirects`: Client-side routing configuration for Netlify

## Environment Variables

This project doesn't require any environment variables for production deployment.

## Post-Deployment

After deployment, your site will be available at the URL provided by your hosting service. Test all features:
- Quiz functionality
- Page navigation
- Image gallery
- Audio playback
- Animations and effects

## Troubleshooting

**Audio files not playing:**
- Ensure audio files are in the `public/` directory
- Check browser console for any CORS errors

**Images not loading:**
- Verify all image paths start with `/` (e.g., `/image.jpg`)
- Ensure images are in the `public/` directory

**Routing issues:**
- Make sure your hosting service is configured to serve `index.html` for all routes
- For Netlify, the `_redirects` file handles this automatically

## Need Help?

Refer to the official documentation:
- [Next.js Static Exports](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)
- [Netlify Documentation](https://docs.netlify.com/)
- [Vercel Documentation](https://vercel.com/docs)

