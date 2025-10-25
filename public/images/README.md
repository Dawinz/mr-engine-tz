# Images Directory

## Current Images

All images are sourced from Unsplash (free to use under Unsplash License).

### Hero Images
- `hero-workshop.jpg` - Main workshop background (1920x1080)
- `diagnostics.jpg` - Automotive diagnostics (About page)
- `workshop-team.jpg` - Team/workshop image

### Service Images (`/services/`)
- `engine.jpg` - Engine work
- `electrical.jpg` - Electrical systems
- `maintenance.jpg` - Vehicle maintenance
- `suspension.jpg` - Suspension work
- `ac.jpg` - Air conditioning service
- `brakes.jpg` - Brake service (placeholder - add real image)

### Gallery Images (`/gallery/`)
- `before-1.jpg` - Before shot 1
- `before-2.jpg` - Before shot 2
- `after-1.jpg` - After shot 1
- `after-2.jpg` - After shot 2

## Image Guidelines

### Recommended Sizes
- Hero images: 1920x1080px or larger
- Service images: 800x800px minimum
- Gallery images: 800x800px minimum
- Thumbnails: 400x400px

### Format
- Use JPEG for photos (.jpg)
- Use WebP for better compression (optional)
- Keep file sizes under 500KB when possible

### Naming Convention
- Use lowercase
- Use hyphens for spaces
- Be descriptive: `brake-repair-before.jpg` not `img1.jpg`

## Replacing Images

To replace any image:
1. Add your new image to the appropriate folder
2. Use the same filename, OR
3. Update the component that references it

### Where Images are Used

**Hero Section** (`components/sections/hero.tsx`):
- `/images/hero-workshop.jpg`

**About Page** (`app/about/page.tsx`):
- `/images/diagnostics.jpg`

**Gallery Page** (`app/gallery/page.tsx`):
- `/images/gallery/before-1.jpg`
- `/images/gallery/before-2.jpg`
- `/images/gallery/after-1.jpg`
- `/images/gallery/after-2.jpg`
- `/images/services/engine.jpg`
- `/images/services/electrical.jpg`
- `/images/services/suspension.jpg`

## Adding New Images

1. Add image to appropriate folder
2. Import Image component: `import Image from "next/image"`
3. Use the Image component:
```tsx
<Image
  src="/images/your-image.jpg"
  alt="Descriptive alt text"
  width={800}
  height={600}
  className="object-cover"
/>
```

## Image Optimization

Next.js automatically optimizes all images:
- Resizes for different screen sizes
- Converts to modern formats (WebP)
- Lazy loads images
- Optimizes quality

No manual optimization needed!

## Credits

All images sourced from [Unsplash](https://unsplash.com)
- Free to use
- No attribution required
- High-quality automotive photography

## Future Improvements

Consider adding:
- Your own workshop photos
- Customer vehicle before/after shots
- Team member photos
- Equipment and tools close-ups
- Process documentation photos
