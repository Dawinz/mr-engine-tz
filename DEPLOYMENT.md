# Deployment Guide - Mr Engine Tz

## Quick Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit - Mr Engine Tz website"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click "Add New Project"

4. Import your GitHub repository

5. Vercel will automatically detect Next.js and configure:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

6. Click "Deploy"

Your site will be live at `https://your-project-name.vercel.app`

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts:
   - Set up and deploy? Yes
   - Which scope? (select your account)
   - Link to existing project? No
   - Project name: mr-engine-tz
   - Directory: ./
   - Auto-detected Next.js. OK? Yes
   - Want to override settings? No

4. For production deployment:
```bash
vercel --prod
```

## Environment Variables

If you need to add environment variables (for forms, analytics, etc.):

1. In Vercel Dashboard:
   - Go to your project
   - Settings → Environment Variables
   - Add your variables

2. Or create `.env.local` locally (not committed to git):
```
NEXT_PUBLIC_CONTACT_EMAIL=info@mrenginetz.com
NEXT_PUBLIC_PHONE=+255745879628
```

## Custom Domain

1. In Vercel Dashboard:
   - Go to your project
   - Settings → Domains
   - Add your domain (e.g., mrenginetz.com)
   - Follow DNS configuration instructions

2. Typical DNS settings:
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Add A record: `@` → `76.76.21.21`

## Post-Deployment Checklist

- [ ] Test all pages on mobile and desktop
- [ ] Verify bilingual switching works (EN ↔ SW)
- [ ] Test contact form (if connected to backend)
- [ ] Check all service pages load correctly
- [ ] Verify navigation works on all pages
- [ ] Test phone/WhatsApp links on mobile
- [ ] Check page load speed (should be < 2s)
- [ ] Verify SEO meta tags (view page source)

## Performance Optimization

The site is already optimized with:
- ✅ Static page generation
- ✅ Automatic code splitting
- ✅ Optimized fonts (Inter from Google Fonts)
- ✅ Responsive images (Next.js Image component ready)
- ✅ Minified CSS and JS

To further optimize:
1. Add actual images to `/public/images/`
2. Use WebP format for photos
3. Enable Vercel Analytics in dashboard
4. Set up Vercel Speed Insights

## Monitoring

Enable in Vercel Dashboard:
- **Analytics**: Track visitors and page views
- **Speed Insights**: Monitor real-world performance
- **Web Vitals**: Track Core Web Vitals scores

## Updating the Site

After making changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

Vercel will automatically:
- Build and test your changes
- Deploy to a preview URL
- Promote to production (on main branch)

## Troubleshooting

### Build fails
- Check build logs in Vercel dashboard
- Run `npm run build` locally to test
- Ensure all dependencies are in package.json

### Pages not loading
- Check that all dynamic routes exist
- Verify no broken imports
- Check browser console for errors

### Styling issues
- Clear browser cache
- Check that CSS is loading
- Verify Tailwind classes are correct

## Support

For deployment issues:
- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs

For code issues:
- Check the README.md
- Review component documentation
