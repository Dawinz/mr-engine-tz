# Quick Start - Get Your Site Live in 10 Minutes

## Step 1: Test Locally (2 minutes)

```bash
# Install dependencies (if not already done)
npm install

# Start development server
npm run dev
```

Open http://localhost:3000 in your browser.

**Test checklist:**
- [ ] Homepage loads
- [ ] Click language switcher (EN ↔ SW)
- [ ] Navigate to Services page
- [ ] Click on a service to view details
- [ ] Check Gallery, About, Blog, Contact pages
- [ ] Test mobile view (resize browser)

## Step 2: Customize Contact Info (3 minutes)

### Update Phone Numbers
Find and replace `+255123456789` with your real number in:
- `components/sections/header.tsx`
- `components/sections/footer.tsx`
- `app/contact/page.tsx`

### Update Email
Find and replace `info@mrenginetz.com` with your real email in:
- `components/sections/footer.tsx`
- `app/contact/page.tsx`

### Update Location
Find and replace `Dar es Salaam, Tanzania` with your address in:
- `components/sections/footer.tsx`
- `app/contact/page.tsx`

**Quick way:** Use VS Code's "Find and Replace" (Cmd/Ctrl + Shift + H)

## Step 3: Deploy to Vercel (5 minutes)

### 3.1 Push to GitHub

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Mr Engine Tz website"

# Create GitHub repo (go to github.com/new)
# Then connect and push:
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/mr-engine-tz.git
git push -u origin main
```

### 3.2 Deploy on Vercel

1. Go to [vercel.com](https://vercel.com/signup)
2. Sign up with GitHub
3. Click "Add New Project"
4. Select your `mr-engine-tz` repository
5. Click "Deploy" (Vercel auto-detects Next.js)
6. Wait ~2 minutes for deployment

**Done!** Your site is now live at `https://mr-engine-tz.vercel.app`

## Step 4: Optional Enhancements

### Add Your Logo
1. Create `public/images/logo.png` (200x60px recommended)
2. Update `components/sections/header.tsx`:
```tsx
<Link href="/" className="-m-1.5 p-1.5">
  <Image src="/images/logo.png" alt="Mr Engine Tz" width={200} height={60} />
</Link>
```

### Add Real Images
1. Place images in `public/images/`
2. Recommended images:
   - Hero background: `hero-workshop.jpg` (1920x1080)
   - Gallery before/after: `gallery/` folder
   - About page: `team.jpg` (1200x800)
   - Service images: `services/` folder

### Set Up Contact Form
Choose one option:

**Option A - Formspree (easiest, free tier available):**
1. Go to [formspree.io](https://formspree.io)
2. Create form, get form ID
3. In `app/contact/page.tsx`, update form tag:
```tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option B - EmailJS:**
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Follow their React integration guide
3. Add to contact form

## Common Issues

**Build fails:**
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

**Site not updating after push:**
- Check Vercel dashboard for build status
- May take 1-2 minutes to redeploy

**Styles look broken:**
- Clear browser cache (Cmd/Ctrl + Shift + R)
- Check that CSS imports are correct

**Language switching not working:**
- Make sure you're on a page, not on dev tools
- Check browser console for errors

## Daily Workflow

### Making Changes

1. Edit files locally
2. Test with `npm run dev`
3. Commit and push:
```bash
git add .
git commit -m "Description of changes"
git push
```
4. Vercel auto-deploys in ~2 minutes

### Common Updates

**Change a service description:**
→ Edit `lib/services-data.ts`

**Update homepage hero text:**
→ Edit `lib/translations.ts`

**Add a new service:**
→ Add entry to `lib/services-data.ts`

**Change colors:**
→ Edit `app/globals.css`

**Update footer links:**
→ Edit `components/sections/footer.tsx`

## Resources

- **Project Overview**: PROJECT_SUMMARY.md
- **Full Customization Guide**: CUSTOMIZATION.md
- **Deployment Details**: DEPLOYMENT.md
- **Technical Docs**: README.md

## Support

**Vercel Issues:**
- Dashboard: vercel.com/dashboard
- Docs: vercel.com/docs

**Next.js Issues:**
- Docs: nextjs.org/docs

**Code Issues:**
- Check component files (they have comments)
- Review error messages carefully
- Use browser DevTools console

## Success Checklist

After deployment:

- [ ] Visit your live site URL
- [ ] Test on mobile phone
- [ ] Share with team for feedback
- [ ] Add to Google Search Console
- [ ] Set up Google Analytics (optional)
- [ ] Configure custom domain (optional)
- [ ] Test contact form submissions
- [ ] Add to Google My Business

## Next Level

Once live, consider:

1. **SEO:**
   - Submit sitemap to Google
   - Add meta descriptions
   - Get listed on directories

2. **Marketing:**
   - Add social media links
   - Create Facebook/Instagram posts
   - Share WhatsApp Business link

3. **Features:**
   - Online booking system
   - Customer reviews display
   - Live chat widget
   - Blog with real content

4. **Analytics:**
   - Google Analytics
   - Vercel Analytics
   - Track conversions

---

**That's it!** You now have a professional automotive service website live on the internet.

🎉 **Congratulations!**
