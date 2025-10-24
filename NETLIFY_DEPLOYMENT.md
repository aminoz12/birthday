# 🚀 Netlify Deployment Guide

Your birthday website is fully configured and ready to deploy on Netlify!

## ✅ Pre-Deployment Checklist

All of these are already configured:
- ✅ Build configuration (`netlify.toml`)
- ✅ Static export enabled (`next.config.ts`)
- ✅ Node.js version specified (`.node-version`)
- ✅ Client-side routing configured (`public/_redirects`)
- ✅ Security headers configured
- ✅ Cache control headers for optimal performance
- ✅ Build successfully tested locally

## 🎯 Deployment Methods

### Method 1: Deploy via Git (Recommended)

This is the easiest and most automated approach.

#### Step 1: Push to Git Repository

If you haven't already, initialize and push your code to GitHub:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Ready for Netlify deployment"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
```

#### Step 2: Connect to Netlify

1. Go to [Netlify](https://www.netlify.com/) and sign in (or create a free account)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose your Git provider (GitHub, GitLab, or Bitbucket)
4. Authorize Netlify to access your repositories
5. Select your birthday website repository
6. **Netlify will automatically detect all settings** from your `netlify.toml` file:
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: 20
7. Click **"Deploy site"**

#### Step 3: Wait for Deployment

- Netlify will automatically build and deploy your site
- You'll see the build logs in real-time
- Deployment typically takes 2-5 minutes
- Once complete, you'll get a live URL like: `https://random-name-123456.netlify.app`

#### Step 4: Configure Custom Domain (Optional)

1. In your Netlify site dashboard, go to **"Domain settings"**
2. Click **"Add custom domain"**
3. Enter your domain name
4. Follow the instructions to configure DNS

---

### Method 2: Deploy via Netlify CLI

For manual or local deployment using the command line.

#### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

#### Step 2: Login to Netlify

```bash
netlify login
```

This will open your browser to authenticate.

#### Step 3: Build Your Site

```bash
npm install
npm run build
```

#### Step 4: Deploy to Netlify

**For a draft/preview deployment:**
```bash
netlify deploy --dir=out
```

**For production deployment:**
```bash
netlify deploy --prod --dir=out
```

Follow the prompts:
- Create a new site or link to an existing one
- Set the deployment directory to `out`

You'll get a live URL immediately after deployment!

---

### Method 3: Drag and Drop (Quick Test)

For a quick test deployment without Git.

1. Build your site locally:
   ```bash
   npm install
   npm run build
   ```

2. Go to [Netlify Drop](https://app.netlify.com/drop)

3. Drag and drop your `out/` folder onto the page

4. Get an instant live URL!

> **Note:** This method doesn't support automatic rebuilds. Use Git-based deployment for continuous deployment.

---

## 🎨 Post-Deployment Configuration

### Custom Site Name

1. Go to **"Site configuration"** → **"General"** → **"Site details"**
2. Click **"Change site name"**
3. Choose a custom name like `smahane-birthday.netlify.app`

### Environment Variables

This project doesn't require any environment variables, but if you add any in the future:
1. Go to **"Site configuration"** → **"Environment variables"**
2. Click **"Add a variable"**
3. Enter key and value

### Deploy Notifications

Set up notifications for successful/failed deployments:
1. Go to **"Site configuration"** → **"Build & deploy"** → **"Deploy notifications"**
2. Add email, Slack, or webhook notifications

---

## 🔍 Verifying Your Deployment

After deployment, test these features:

### ✅ Must Test
- [ ] Quiz page loads correctly
- [ ] All 4 quiz questions work
- [ ] Navigation to story page works
- [ ] All images load properly
- [ ] Background music plays (may require user interaction)
- [ ] Voice messages play
- [ ] Animations and transitions work
- [ ] Mobile responsive design works
- [ ] Gallery images load and display correctly

### Test on Multiple Devices
- [ ] Desktop browser (Chrome, Firefox, Safari)
- [ ] Mobile browser (iOS Safari, Android Chrome)
- [ ] Tablet

---

## 📊 Build Configuration Details

### netlify.toml Settings

Your site is configured with:

**Build Settings:**
- Command: `npm run build`
- Publish directory: `out/`
- Node version: 20

**Performance:**
- Aggressive caching for static assets (1 year)
- Cache headers for JS, CSS, images, and audio files

**Security:**
- X-Frame-Options: DENY (prevents clickjacking)
- X-Content-Type-Options: nosniff (prevents MIME sniffing)
- Referrer-Policy: strict-origin-when-cross-origin

### Client-Side Routing

The `public/_redirects` file ensures that all routes serve `index.html`, enabling Next.js client-side routing to work correctly.

---

## 🐛 Troubleshooting

### Build Fails on Netlify

**Check build logs:**
1. Go to your site dashboard
2. Click on the failed deploy
3. Read the error message in the build log

**Common solutions:**
- Ensure Node version matches (should be 20)
- Clear cache and retry: **"Site configuration"** → **"Build & deploy"** → **"Clear cache and retry deploy"**
- Check that all dependencies are in `package.json`

### Audio Not Playing

**Browser autoplay policies:**
- Most browsers require user interaction before audio plays
- Your app already handles this with click prompts
- Test by clicking anywhere on the page first

### Images Not Loading

**Check the browser console:**
- Open DevTools (F12)
- Look for 404 errors
- Verify image paths are correct (should start with `/`)

### Routing Issues

**Symptom:** Direct URL access gives 404
**Solution:** The `_redirects` file should handle this automatically
- Verify `public/_redirects` exists
- Content should be: `/*    /index.html   200`

---

## 🔄 Continuous Deployment

Once connected via Git, Netlify automatically:
- ✅ Deploys every push to your main branch
- ✅ Creates preview deployments for pull requests
- ✅ Runs builds in a clean environment
- ✅ Provides instant rollback to previous deployments

### Deploy Previews

Every pull request gets its own preview URL:
1. Create a new branch: `git checkout -b feature/new-feature`
2. Make changes and commit
3. Push and create a pull request
4. Netlify automatically creates a preview deployment
5. Test the preview before merging

---

## 📈 Performance Features

Your site benefits from Netlify's:
- **Global CDN:** Fast loading from anywhere in the world
- **Automatic HTTPS:** Free SSL certificates
- **Continuous Deployment:** Automatic builds on Git push
- **Instant Cache Invalidation:** Changes go live immediately
- **Asset Optimization:** Automatic compression

---

## 💰 Pricing

**Free Tier includes:**
- ✅ 100 GB bandwidth/month
- ✅ Unlimited sites
- ✅ Continuous deployment
- ✅ HTTPS
- ✅ Global CDN

Your birthday website will easily stay within the free tier limits! 🎉

---

## 🆘 Need Help?

- [Netlify Documentation](https://docs.netlify.com/)
- [Netlify Community Forum](https://answers.netlify.com/)
- [Next.js Static Export Docs](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

---

## 🎉 Your Site is Ready!

Everything is configured for optimal deployment on Netlify. Just push to Git or use the CLI to deploy!

**Quick Start:**
```bash
# Push to GitHub
git add .
git commit -m "Deploy to Netlify"
git push

# Or deploy directly
npm run build
netlify deploy --prod --dir=out
```

**Happy Birthday to Smahane! 💕🎂✨**

