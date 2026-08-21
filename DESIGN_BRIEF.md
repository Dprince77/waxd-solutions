# Waxd Solutions Landing Page: Design Brief

## My design approach

The original Waxd site is built on Wix. It uses a pretty generic light-blue
template look. It doesn't really feel like a fintech/payments product, it could be
almost any small business site. Since the brief says the goal isn't to copy the
existing site but to show my own take on it, I decided to go with a dark theme
instead, since a lot of tech/payment products (banking apps, POS software) lean dark
and it feels more "product," less "brochure."

I picked two accent colors, a mint green and a light blue. I used them
consistently for buttons, icons and highlighted text throughout the page, instead of
picking random colors per section. The idea was that Waxd's product is really about
two things: knowing *who* someone is (fingerprint/biometric) and knowing *where* a
transaction is happening (location). So I used the two colors to loosely represent
those two ideas and mixed them into one gradient for buttons and headings.

For photos, I used real pictures of taxis, farms, retail stores and the handheld
device instead of the cartoon-style icons the original site uses, since I think real
photos make the product feel more grounded and trustworthy.

## Key decisions I made during development

- **Plain HTML, CSS and JavaScript, no frameworks.** The brief asked for HTML/CSS/JS
  specifically, so I kept it to that instead of pulling in React or anything else.
  All the interactivity (mobile menu, form validation, scroll animations) is written
  in plain JavaScript with `addEventListener` and `classList`.
- **Mobile-first CSS.** I wrote the base styles for small screens first, then used
  `@media (min-width: ...)` queries to add rules for tablet/desktop, instead of the
  other way around. This is the order I found easiest to reason about: get it
  working on one column first, then add multi-column layout once there's room.
- **CSS custom properties (variables) for color.** I set up a handful of `:root`
  variables (background color, text color, muted text, the two accent colors) at the
  top of the stylesheet and used `var(--name)` everywhere instead of typing hex codes
  repeatedly. Makes it a lot easier to tweak the whole color scheme from one place.
- **One shared card style, reused everywhere.** Instead of writing separate CSS
  for each "box" on the page (services, why-us reasons, etc.), I built one card
  class with the background/border/padding, then just changed the content inside.
  Less repeated CSS. Everything stays visually consistent without me having to
  think about it each time.
- **A single contact form with plain JS validation.** No backend, no external
  service. It checks the fields aren't empty using an `if` statement and shows a
  message in a paragraph tag. It's not sending anywhere yet, but it demonstrates form
  handling and `event.preventDefault()`.
- **Used a local dev server (Vite) just to get live-reload while building**, so I
  didn't have to manually refresh the browser every time I saved a file. It's not
  required to run the site though. The finished site is just static HTML/CSS/JS
  files that work if you open `index.html` directly or host the folder anywhere.
- **Class names are prefixed with `wx-`** (short for Waxd) and written as full,
  readable words rather than abbreviations, e.g. `wx-button` instead of `btn`,
  `wx-icon` instead of `ico`. Makes the CSS easier to scan and ties the naming back to
  the actual project instead of looking like it was copied from a generic template.

## Where I think the current UX could still be improved

- **The contact form doesn't actually send anywhere yet.** Right now it only
  validates the fields client-side and shows a success message. To make it real, it
  would need to be connected to something like a Formspree endpoint or an actual
  backend that emails the submission somewhere.
- **No dropdown/mega-menu for the "Solutions" nav item.** Right now Transport,
  Agriculture, Retail, MaaS and Taxi App are all just separate cards on one page.
  Once there were more product lines, a proper dropdown menu would make more sense
  than one long scroll.
- **Limited proof/testimonials.** There's basically one quote from the CEO on the
  site. Real testimonials from taxi owners or retailers, or logos of partner
  companies, would probably do more to build trust than the current copy.
- **Accessibility could go further.** I added things like a skip-to-content link,
  visible focus outlines and alt text on images, but I didn't get to test with an
  actual screen reader, so there could be gaps I'm not aware of.
- **Some of the deeper content (agriculture stats, retail feature list) isn't on the
  homepage itself.** It's on separate pages linked from the cards. That was a
  deliberate choice to keep the main landing page from getting too long, but I know
  it means a visitor has to click through to see the full detail on each industry.

## Note on scope

The brief's required sections (nav bar, hero, about, featured services, why choose
us, call-to-action, contact, footer) are all on `index.html` as one page. I also
built a few extra linked pages (solutions, MaaS, Taxi App, story, news, legal) to
practice building out a small multi-page site, but those go beyond what was actually
asked for. `index.html` on its own covers the requirements.
