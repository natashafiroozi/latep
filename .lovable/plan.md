

# LATEP Website Implementation Plan

## Overview
Build a luxurious, minimal floral studio website for LATEP with 5 pages, using the provided brand identity, real floral imagery, and Calma Miami-inspired split-form layouts.

---

## Page Structure & Components

### 1. **Navigation Header** (Shared across all pages)
- Minimal top navigation bar with LATEP logo/text
- Navigation links: Home | About | Order | Event Inquiry
- Responsive mobile menu (hamburger)
- Sticky or fixed positioning
- Clean spacing using brand colors (soft lavender background or ivory)

### 2. **Homepage** (`/`)
**Hero Section:**
- Full-width or near-full-width area with prominent LATEP logo
- Centered tagline: *"Los Angeles–based floral studio specializing in elevated, custom arrangements"*
- Generous whitespace with subtle background (ivory or lavender)

**Services Section:**
- Grid or vertical stack of service cards: Custom Orders, Events, Installations, House/Corporate Accounts, Editorial Styling
- Each card shows service name + brief description
- Featured floral image from collection (e.g., the vibrant pink/yellow arrangement from IMG_2194.jpg)

**Brand Statement Section:**
- Large typography (Or Lemmen or similar serif) with brand philosophy quote about seasonality and texture
- Supporting image (e.g., the lush orchid/green arrangement from IMG_8631.jpg)

**Call-to-Action Buttons:**
- "Start Your Order" → /order
- "Plan an Event" → /event-inquiry
- "Learn More" → /about

**Footer:**
- Contact email: natasha@latep.co
- Social links (optional)
- Copyright

### 3. **About Page** (`/about`)
**Hero/Header:**
- Page title: "About LATEP"
- Featured hero image (e.g., the peach/coral arrangement from IMG_7428.jpeg)

**Content Sections:**
- **Founder Bio:** Natasha Firoozi's story + philosophy
- **The Approach:** Classic floristry with contemporary eye, seasonal focus, one-of-a-kind arrangements
- **Why Trust LATEP:** Emphasis on personal connection, quality, and artistry

**Image Gallery:**
- 2-3 additional floral arrangement images throughout the page (from the collection)
- Positioned strategically with text flowing around them

**Footer:**
- Contact CTA: "Ready to order? Start here"
- Link back to Order page

### 4. **Order Page** (`/order`)
**Split-Layout Design (inspired by Calma Miami):**

**Left Side (50%):**
- Heading: "Custom Orders"
- Copy about bespoke arrangements, seasonal flowers, made-to-order process
- Feature image: The burgundy/dried arrangement (FullSizeRender.jpeg)
- Additional details about lead time, delivery options

**Right Side (50%):**
- Form Title: "Let's Create Your Arrangement"
- Form Fields:
  - Full Name (text input)
  - Email (email input)
  - Describe what you'd like (textarea, ~200 chars)
  - Budget range (dropdown: $200-400, $400-600, $600-1000, $1000+)
  - Preferred delivery date (date picker)
  - Submit button

**Form Handling:**
- On submit, send email to natasha@latep.co with form details
- Show success/confirmation message: "Thank you! Natasha will respond within 48 hours."

### 5. **Event Inquiry Page** (`/event-inquiry`)
**Split-Layout Design (same as Order page):**

**Left Side (50%):**
- Heading: "Events & Installations"
- Copy about event florals, 48-hour response time, $1,000 minimum
- Feature image: The hanging green/trailing arrangement (IMG_6296.jpg)
- Details about what to include in inquiry

**Right Side (50%):**
- Form Title: "Plan Your Event"
- Form Fields:
  - First Name (text input)
  - Last Name (text input)
  - Email (email input)
  - Event description (textarea, ~300 chars)
  - Event date (date picker)
  - Event floral budget (dropdown: $1000-2500, $2500-5000, $5000-10000, $10000+)
  - Submit button

**Form Handling:**
- On submit, send email to natasha@latep.co with event inquiry details
- Show success/confirmation message: "Thank you! We'll be in touch soon."

---

## Design System Implementation

**Colors (from brand kit):**
- Primary: Soft Lavender (#DEBCD7)
- Secondary: Earthy Olive (#B4B072)
- Accent: Warm Ivory (#F8F7D2)
- Background: White/off-white
- Text: Dark gray/charcoal

**Typography:**
- Body: Inter (Thin/Light/Regular) for elegant, airy feel
- Headings: Or Lemmen or serif alternative for luxury feel
- Setup in Tailwind with custom font imports in CSS

**Styling Approach:**
- Generous whitespace (padding/margins)
- Subtle hover animations (slight scale, opacity changes)
- Clean borders/separators in muted colors
- Mobile-responsive (stack on mobile, side-by-side on desktop for split layouts)
- Smooth transitions and minimal transitions (150-300ms)

---

## Image Asset Management

**Floral Images to Use:**
1. **FullSizeRender.jpeg** - Burgundy/dried flowers (Order page featured)
2. **IMG_1777.jpg** - Blue hydrangea arrangement (potential gallery/homepage)
3. **IMG_1938.jpg** - Cream/peach orchids & hydrangea (About page or gallery)
4. **IMG_2194.jpg** - Hot pink/yellow arrangement (Services section featured)
5. **IMG_6296.jpg** - Trailing green arrangement (Event page featured)
6. **IMG_7428.jpeg** - Peach/coral roses (About page or gallery)

**Asset Setup:**
- Copy images to `src/assets/images/`
- Import in components as ES6 modules
- Optimize with responsive sizing (srcSet for different viewports)
- Use consistent aspect ratios and styling (subtle shadows, rounded corners)

---

## Backend Integration (Email Form Submissions)

**Technology:**
- Supabase Edge Function (via Lovable Cloud)
- Resend email service
- Form validation with react-hook-form + zod

**Email Template:**
- Order form → Email with all fields to natasha@latep.co
- Event form → Email with all fields to natasha@latep.co
- Include timestamps and submission details

**Confirmation UX:**
- Form submission shows loading state
- Success message displayed on same page
- Optional: Send confirmation email back to user

---

## Responsive Design

**Mobile Optimization:**
- Stack split layouts vertically on mobile (form full-width)
- Touch-friendly button sizes (min 44px)
- Readable font sizes (16px+)
- Single-column navigation menu with hamburger toggle
- Optimized image sizes for mobile (compressed, lower res)

**Desktop:**
- Side-by-side split layouts (50/50)
- Horizontal navigation
- Larger images and more generous spacing

---

## Additional Considerations

**Logo Placement:**
- Use `Latep_Logo_Lockup_Soft_Lavendar.svg` or `Latep_Logo_Lockup.svg` for header
- Clean integration with navigation

**Accessibility:**
- Semantic HTML (nav, main, section, article)
- ARIA labels for forms
- Sufficient color contrast
- Alt text for all images

**Performance:**
- Lazy loading for images below the fold
- Optimized image formats (WebP)
- Minimal animation for better performance
- Code splitting for pages

