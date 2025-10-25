# Customization Guide

## Quick Customizations

### 1. Update Contact Information

**Phone Numbers:**
- `components/sections/header.tsx` - Line ~68
- `components/sections/footer.tsx` - Lines ~54-57
- `app/contact/page.tsx` - Lines ~103, 113

**Email:**
- `components/sections/footer.tsx` - Line ~62
- `app/contact/page.tsx` - Line ~126

**Address:**
- `components/sections/footer.tsx` - Line ~68
- `app/contact/page.tsx` - Line ~138

**Working Hours:**
- `app/contact/page.tsx` - Lines ~149-152

### 2. Change Brand Colors

Edit `app/globals.css`:

```css
@theme {
  --color-charcoal: #111111;   /* Dark text/backgrounds */
  --color-steel: #444444;       /* Secondary gray */
  --color-orange: #FF6B35;      /* Accent color (CTA buttons) */
}
```

Common color schemes:
- **Professional Blue**: `#0066CC` instead of orange
- **Modern Green**: `#10B981` instead of orange
- **Bold Red**: `#DC2626` instead of orange

### 3. Add Real Images

Replace placeholder images in these locations:

**Homepage Hero:**
- Create: `public/images/hero-workshop.jpg` (1920x1080px)
- Update: `components/sections/hero.tsx`

**Gallery:**
- Add: `public/images/gallery/before-*.jpg`
- Add: `public/images/gallery/after-*.jpg`
- Update: `app/gallery/page.tsx` - Lines 7-28

**About Page:**
- Add: `public/images/workshop-team.jpg`
- Update: `app/about/page.tsx` - Line ~83

**Service Pages:**
- Add: `public/images/services/[service-name].jpg`
- Update each service detail page if needed

### 4. Modify Services

Edit `lib/services-data.ts` to:
- Add new services
- Change service descriptions
- Update service icons (use [Lucide Icons](https://lucide.dev))

Example:
```typescript
{
  id: '13',
  slug: 'tire-service',
  title: {
    en: 'Tire Service & Alignment',
    sw: 'Huduma ya Tairi & Alignment',
  },
  // ... rest of service data
}
```

### 5. Add/Edit Translations

Edit `lib/translations.ts` to modify text in both languages.

Example adding a new section:
```typescript
export const translations = {
  en: {
    // ... existing translations
    newSection: {
      title: 'New Section Title',
      description: 'Section description',
    },
  },
  sw: {
    // ... existing translations
    newSection: {
      title: 'Kichwa cha Sehemu Mpya',
      description: 'Maelezo ya sehemu',
    },
  },
};
```

### 6. Add Social Media Links

Edit `components/sections/footer.tsx` to add social media:

```tsx
// Add to footer component
import { Facebook, Instagram, Twitter } from "lucide-react";

// Add in the footer render
<div className="flex gap-4 mt-4">
  <a href="https://facebook.com/mrenginetz" className="text-gray-400 hover:text-orange">
    <Facebook className="h-5 w-5" />
  </a>
  <a href="https://instagram.com/mrenginetz" className="text-gray-400 hover:text-orange">
    <Instagram className="h-5 w-5" />
  </a>
</div>
```

### 7. Add Blog Functionality

Currently blog posts are hardcoded in `app/blog/page.tsx`.

To make it dynamic:
1. Create `lib/blog-data.ts` (similar to `services-data.ts`)
2. Add blog post content
3. Create `app/blog/[slug]/page.tsx` for individual posts

Or integrate with a CMS like:
- Contentful
- Sanity
- WordPress (headless)

### 8. Connect Contact Form

The contact form in `app/contact/page.tsx` needs a backend.

**Option 1 - Formspree (easiest):**
```tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  {/* form fields */}
</form>
```

**Option 2 - Vercel Functions:**
Create `api/contact/route.ts` and handle form submission

**Option 3 - Third-party services:**
- EmailJS
- SendGrid
- Resend

### 9. Add Google Maps

Replace map placeholder in `app/contact/page.tsx`:

```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  className="rounded-lg"
></iframe>
```

Get embed code from [Google Maps](https://www.google.com/maps)

### 10. Add Analytics

**Google Analytics:**
1. Get tracking ID from Google Analytics
2. Add to `app/layout.tsx`:

```tsx
import Script from 'next/script'

// In layout component
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

**Or use Vercel Analytics:**
```bash
npm install @vercel/analytics
```

Add to `app/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react'

// In layout return
<Analytics />
```

### 11. Add WhatsApp Chat Widget

Add before closing `</body>` in `app/layout.tsx`:

```tsx
<a
  href="https://wa.me/255123456789"
  className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors"
  target="_blank"
  rel="noopener noreferrer"
>
  <MessageSquare className="h-6 w-6" />
</a>
```

### 12. Change Fonts

Current font: **Inter** (professional, modern)

To change, edit `app/layout.tsx`:

```tsx
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['400', '500', '700']
});

// Use in body tag
<body className={roboto.className}>
```

Popular alternatives:
- **Poppins** - Friendly, rounded
- **Montserrat** - Bold, modern
- **Open Sans** - Clean, readable
- **Raleway** - Elegant, thin

## Advanced Customizations

### Add Search Functionality
- Integrate Algolia or Meilisearch
- Add search bar to header
- Index services and blog posts

### Add Booking System
- Integrate Calendly
- Custom booking with database
- Send confirmation emails

### Add Reviews/Testimonials
- Pull from Google Reviews API
- Manual testimonials in data file
- Third-party review widgets

### Multi-language Expansion
- Add more languages to `lib/translations.ts`
- Update language switcher
- Consider i18n library for scaling

## Need Help?

Check these files for examples:
- **Colors**: `app/globals.css`
- **Layout**: `app/layout.tsx`
- **Components**: `components/` directory
- **Content**: `lib/` directory
- **Pages**: `app/` directory
