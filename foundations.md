# Foundations

Design assets and tokens that store values for the base layer of your design system, like color and typography. They're used in components, so changes on this level will resonate throughout the whole system.

## Color (0/4)

Not only an efficient way to showcase your brand but also an efficient way to communicate with your users. Color palettes created with purpose over aesthetics in mind can help you develop intuitive design patterns by adding meaning to your interface.

### Accessibility

**Beacon's accessibility-first approach to color means every color decision prioritizes inclusion.**

**Contrast Requirements:**
- **WCAG 2.2 AA minimum:** 4.5:1 for normal text, 3:1 for large text (18pt+ or 14pt+ bold)
- **Beacon standard:** We exceed minimums with 7:1 for normal text, 4.5:1 for large text (AAA level)
- **All text sizes:** Every color combination works at any text size without compromise

**Color Blindness Considerations:**
- Never rely on color alone to convey information
- Red/green combinations always include additional visual cues (icons, patterns, shapes)
- Blue/yellow combinations tested for tritanopia accessibility
- All interactive states distinguishable without color perception

**Visual Impairment Support:**
- High contrast mode compatibility built-in
- Colors remain distinguishable with blur simulation testing
- Sufficient color separation for users with reduced acuity
- Pattern and texture alternatives for critical color-coded information

**Testing Standards:**
- All combinations verified with color contrast analyzers
- Simulated testing for protanopia, deuteranopia, and tritanopia
- Blur testing at various levels (0.5px to 2px)
- High contrast mode validation on Windows and macOS

### Semantic colors

**Purpose-driven colors that communicate meaning consistently across all interfaces.**

**System Status Colors:**
- **Success:** Communicates completion, validation, or positive outcomes
- **Warning:** Indicates caution, attention needed, or potential issues  
- **Error:** Signals problems, validation failures, or destructive actions
- **Info:** Provides helpful context, tips, or neutral information

**Functional Colors:**
- **Primary:** Main brand color for primary actions and key elements
- **Secondary:** Supporting actions and less prominent interactive elements  
- **Neutral:** Text, borders, backgrounds, and structural elements
- **Accent:** Highlighting, emphasis, and special attention areas

**State Colors:**
- **Default:** Resting state of interactive elements
- **Hover:** Mouse-over feedback for interactive elements
- **Active:** Pressed or currently engaged state
- **Focus:** Keyboard navigation and accessibility focus indicators
- **Disabled:** Non-interactive or unavailable elements
- **Selected:** Chosen items in lists, toggles, or selections

**Background Colors:**
- **Surface:** Container backgrounds, cards, panels
- **Background:** Page and app backgrounds
- **Overlay:** Modal backgrounds, dropdown overlays
- **Subtle:** Minimal contrast backgrounds for grouping

**Each semantic color includes:**
- Light and dark mode variants
- Multiple tonal steps (50, 100, 200, 300, 400, 500, 600, 700, 800, 900)
- Guaranteed accessible pairings with text colors
- Color blindness tested alternatives

### Dark mode

**Dark mode is a first-class citizen in Beacon, not an afterthought.**

**Design Philosophy:**
- Both light and dark modes are designed simultaneously, not one adapted from the other
- Color relationships and accessibility standards remain consistent across modes
- Automatic system preference detection with manual override capability

**Technical Implementation:**
- Semantic color tokens automatically switch based on mode
- Contrast ratios maintained or improved in dark mode
- All accessibility testing performed in both modes

**Dark Mode Specific Considerations:**
- **Pure black avoided:** Uses dark grays for better readability and reduced eye strain
- **Elevation through brightness:** Darker surfaces appear further away, lighter surfaces appear closer
- **Color desaturation:** Colors are less saturated in dark mode to prevent eye strain
- **Focus indicators enhanced:** Higher contrast focus rings for better visibility

**Color Behavior in Dark Mode:**
- **Success colors:** Shift to softer, less saturated greens
- **Error colors:** Use coral/salmon tones instead of pure reds
- **Warning colors:** Amber/orange tones optimized for dark backgrounds
- **Info colors:** Lighter blues that maintain contrast
- **Neutral colors:** Inverted hierarchy with warm undertones

**Accessibility Advantages:**
- Reduces eye strain in low-light environments
- Better for users with light sensitivity
- Improved battery life on OLED devices
- Enhanced focus for users with attention disorders

### Guidelines

**How and when to use colors in Beacon, ensuring accessibility and consistency.**

**Core Principles:**

**✅ Always Do:**
- Test every color combination with contrast analyzers before implementation
- Use semantic colors for their intended purpose (error for errors, success for success)
- Provide non-color indicators for all color-coded information
- Check color combinations in both light and dark modes
- Test with color blindness simulators
- Use focus indicators that meet 3:1 contrast against all backgrounds

**❌ Never Do:**
- Use color as the only way to convey information
- Use red and green as the only way to show positive/negative states
- Create custom color combinations without accessibility testing
- Use low contrast colors for critical information
- Rely on subtle color differences for important distinctions

**When to Use Each Color:**

**Primary Colors:**
- Main call-to-action buttons
- Primary navigation elements
- Key brand moments
- Important interactive elements

**Status Colors:**
- **Success:** Form validation, successful actions, positive outcomes
- **Error:** Form errors, failed actions, critical warnings
- **Warning:** Caution states, attention needed, potential issues
- **Info:** Helpful tips, neutral information, educational content

**Text Colors:**
- **High contrast:** Primary content, headings, critical information
- **Medium contrast:** Secondary content, supporting text
- **Low contrast:** Disabled text, placeholder text (still meeting minimum contrast)

**Background Colors:**
- **Page backgrounds:** Neutral, never competing with content
- **Surface backgrounds:** Subtle elevation, clear content boundaries
- **Interactive backgrounds:** Clear hover/focus states

**Accessibility Checklist:**
- [ ] 7:1 contrast ratio for normal text (Beacon standard)
- [ ] 4.5:1 contrast ratio for large text (18pt+ or 14pt+ bold)
- [ ] 3:1 contrast ratio for focus indicators and interactive elements
- [ ] Color meaning reinforced with icons, text, or patterns
- [ ] Tested with protanopia, deuteranopia, and tritanopia simulators
- [ ] Validated in high contrast modes
- [ ] Works with 2px blur simulation

**References:**

- [Reshaped: Color](https://reshaped.so/foundations/color)
- [Material Design: Dark theme](https://material.io/design/color/dark-theme.html)
- [IBM Design Language: Color](https://www.ibm.com/design/language/color/)

---

## Layout (0/4)

**Accessible layout systems that create clear visual hierarchy and support all users in understanding content structure.**

### Units

**The 4-point system creates predictable, accessible spacing that supports assistive technologies and cognitive accessibility.**

**Base Unit: 4px**
Our foundational unit ensures consistent spacing that aligns with accessibility guidelines:

**Core Scale:**
- **1 unit:** 4px - Minimal spacing, borders, fine adjustments
- **2 units:** 8px - Tight spacing, small component padding
- **3 units:** 12px - Standard small spacing, compact elements
- **4 units:** 16px - Base spacing unit, default gaps
- **5 units:** 20px - Medium spacing, comfortable padding
- **6 units:** 24px - Large spacing, section breaks
- **8 units:** 32px - Extra large spacing, major sections
- **10 units:** 40px - Component separation
- **12 units:** 48px - Section separation
- **16 units:** 64px - Page-level spacing
- **20 units:** 80px - Major layout divisions
- **24 units:** 96px - Hero sections, large separations

**Accessibility Benefits:**
- **Touch targets:** All interactive elements minimum 44px (11 units)
- **Focus indicators:** 2px (0.5 unit) outlines with 2px (0.5 unit) offset
- **Screen reader navigation:** Consistent spacing creates predictable mental models
- **Cognitive accessibility:** Regular intervals reduce mental processing load
- **Motor accessibility:** Adequate spacing prevents accidental interactions

### Grid

**Flexible, accessible grid systems that adapt content intelligently across all devices and contexts.**

**Grid Philosophy:**
- **Content-first approach:** Grid serves content, not the other way around
- **Accessibility priority:** Clear content flow for screen readers and keyboard navigation
- **Progressive enhancement:** Mobile-first design that scales up gracefully

**Responsive Grid System:**

**Mobile (320px - 767px):**
- **Columns:** 4 columns
- **Gutters:** 16px (4 units)
- **Margins:** 16px (4 units)
- **Max width:** 100% fluid
- **Content priority:** Single-column flow, minimal horizontal scrolling

**Tablet (768px - 1023px):**
- **Columns:** 8 columns
- **Gutters:** 24px (6 units)
- **Margins:** 32px (8 units)
- **Max width:** 100% fluid
- **Layout flexibility:** 2-3 column arrangements, sidebar support

**Desktop (1024px - 1439px):**
- **Columns:** 12 columns
- **Gutters:** 24px (6 units)
- **Margins:** 48px (12 units)
- **Max width:** 1200px centered
- **Complex layouts:** Multi-column support, advanced arrangements

**Large Desktop (1440px+):**
- **Columns:** 12 columns (wider)
- **Gutters:** 32px (8 units)
- **Margins:** 64px (16 units)
- **Max width:** 1440px centered
- **Enhanced spacing:** More breathing room for better readability

**Accessibility Considerations:**
- **Reading flow:** Content maintains logical order across all breakpoints
- **Focus management:** Tab order remains intuitive regardless of visual layout
- **Landmark regions:** Clear header, nav, main, aside, footer structure
- **Screen reader support:** Grid doesn't interfere with content semantics
- **Zoom compatibility:** Layout remains functional at 400% zoom

### Breakpoints

**Device-agnostic breakpoints based on content needs and accessibility requirements.**

**Primary Breakpoints:**
- **xs (extra small):** 0px - 319px - Small phones, minimal interfaces
- **sm (small):** 320px - 767px - Standard mobile devices, single-column focus
- **md (medium):** 768px - 1023px - Tablets, compact laptops, 2-column layouts
- **lg (large):** 1024px - 1439px - Desktop, multi-column support
- **xl (extra large):** 1440px+ - Large desktops, enhanced spacing

**Content-Based Approach:**
- Breakpoints chosen for content readability, not device categories
- Text line length optimization drives responsive behavior
- Component-level breakpoints for micro-responsive design

**Accessibility-Focused Breakpoints:**

**Touch Target Breakpoints:**
- **Below 768px:** 44px minimum touch targets (mobile optimization)
- **768px+:** 32px minimum targets acceptable (precise pointing devices)

**Reading Experience Breakpoints:**
- **320px - 479px:** 35-45 characters per line (thumb reading)
- **480px - 767px:** 45-55 characters per line (mobile reading)
- **768px+:** 45-75 characters per line (optimal desktop reading)

**Zoom Compatibility:**
- All breakpoints tested at 400% zoom (WCAG 2.2 requirement)
- Content remains functional without horizontal scrolling
- Navigation and interactive elements remain accessible

**Orientation Considerations:**
- Portrait mobile: Vertical scrolling optimized
- Landscape mobile: Horizontal space utilization
- Tablet orientation: Flexible column arrangements
- Desktop: Consistent experience regardless of window size

**Implementation Guidelines:**
- **Mobile-first CSS:** Base styles for smallest screens, enhance upward
- **Progressive disclosure:** More features/content available at larger sizes
- **Consistent navigation:** Core functionality available at all breakpoints
- **Performance optimization:** Different asset sizes for different breakpoints

### Spacing

**Systematic spacing that creates clear visual hierarchy and supports cognitive accessibility through predictable patterns.**

**Spacing Scale (4px base unit):**
- **0:** 0px - No spacing, connected elements
- **1:** 4px - Minimal separation, tight layouts
- **2:** 8px - Small spacing, compact components
- **3:** 12px - Standard small gaps
- **4:** 16px - Base spacing unit, default component padding
- **5:** 20px - Medium spacing, comfortable separation
- **6:** 24px - Large spacing, section breaks
- **8:** 32px - Extra large spacing, major separations
- **10:** 40px - Component-level spacing
- **12:** 48px - Section-level spacing
- **16:** 64px - Page-level spacing
- **20:** 80px - Major layout divisions
- **24:** 96px - Hero sections, dramatic separations

**Semantic Spacing:**

**Component Spacing:**
- **Padding:** 4-16px for internal component spacing
- **Element gaps:** 8-12px between related elements
- **Component margins:** 16-24px between different components

**Content Spacing:**
- **Paragraph spacing:** 16px (1.5× line height equivalent)
- **Section spacing:** 32-48px between major content sections
- **Page spacing:** 64-96px for top-level layout divisions

**Interactive Element Spacing:**
- **Button spacing:** 8px minimum between buttons in groups
- **Form field spacing:** 16px between form fields for clear separation
- **Navigation spacing:** 12-16px between navigation items

**Accessibility Considerations:**

**Touch Target Spacing:**
- **Mobile:** 8px minimum between touch targets (exceeds 3mm requirement)
- **Desktop:** 4px minimum sufficient for precise pointing devices
- **Dense interfaces:** Never less than 2px separation between interactive elements

**Cognitive Load Reduction:**
- **Consistent patterns:** Same spacing for same relationships throughout interface
- **Progressive spacing:** Larger gaps indicate more significant content breaks
- **Grouping support:** Related elements closer together, unrelated elements farther apart

**Screen Reader Support:**
- **Heading spacing:** Clear gaps help screen readers identify content structure
- **List spacing:** Adequate separation for individual list item identification
- **Landmark spacing:** Clear boundaries between page regions

**Visual Hierarchy:**
- **Information architecture:** Spacing reinforces content relationships
- **Scanning support:** Consistent spacing patterns aid visual scanning
- **Focus flow:** Proper spacing creates logical tab order and focus progression

**References:**

- [Material Design: Responsive Layout Grid](https://material.io/design/layout/responsive-layout-grid.html)
- [Ant Design: Layout](https://ant.design/components/layout/)

---

## Typography (0/5)

**Typography is fundamental to accessibility and user comprehension. Beacon's typography system prioritizes readability across all users and contexts.**

**Font Selection Philosophy:**
Beacon uses **humanist sans-serif typefaces** that maximize readability and accessibility:

**Primary Recommendations:**
- **Inter** - Excellent character differentiation, multiple weights, optimized for screens
- **Source Sans Pro** - Humanist characteristics, open letterforms, strong weight range
- **System Font Stack** - Platform-optimized fallback ensuring performance and familiarity

**Selection Criteria:**
- Open letterforms that prevent character confusion (a/o, b/d, p/q)
- Clear distinction between similar characters (Il1, 0O, rn/m)
- Extensive weight range (300-700) with consistent readability
- Optimized for both small and large sizes
- Strong performance across different rendering systems

### Responsiveness

**Fluid typography that scales meaningfully across all devices and contexts.**

**Scale Strategy:**
- **Mobile-first approach:** Base sizes optimized for smallest screens
- **Proportional scaling:** Larger screens get proportionally larger text
- **Accessibility compliance:** All sizes meet minimum requirements at every breakpoint

**Responsive Scale:**
- **Mobile (320px+):** 14px base, 1.125 scale ratio (major second)
- **Tablet (768px+):** 16px base, 1.2 scale ratio (minor third)  
- **Desktop (1024px+):** 18px base, 1.25 scale ratio (major third)
- **Large screens (1440px+):** 20px base, 1.25 scale ratio

**Breakpoint Considerations:**
- Text never smaller than 14px on any device
- Line height adjusts for optimal reading at each size
- Letter spacing fine-tuned for each scale level

### Grid relation

**Typography perfectly aligned with layout systems for consistent, predictable interfaces.**

**4-Point Grid Alignment:**
- All font sizes are multiples of 4px for grid harmony
- Line heights calculated to align with 4px baseline grid
- Consistent vertical rhythm across all text elements

**Font Size Scale (aligned to 4px grid):**
- **Caption:** 12px (3×4px)
- **Body Small:** 14px (3.5×4px) 
- **Body:** 16px (4×4px) - Default text size
- **Body Large:** 18px (4.5×4px)
- **Heading 6:** 20px (5×4px)
- **Heading 5:** 24px (6×4px)
- **Heading 4:** 28px (7×4px)
- **Heading 3:** 32px (8×4px)
- **Heading 2:** 40px (10×4px)
- **Heading 1:** 48px (12×4px)
- **Display:** 64px (16×4px)

**Line Height System:**
- **Tight:** 1.1 (for large headings and display text)
- **Normal:** 1.4 (for headings and short text blocks)
- **Relaxed:** 1.6 (for body text and long-form content)
- **Loose:** 1.8 (for very dense or technical content)

**Icon Pairing:**
- Icons sized to match cap height of paired text
- Consistent baseline alignment with text
- Proper optical spacing regardless of size combination

### Readability

**Optimized for maximum comprehension across all reading contexts and abilities.**

**Letter Spacing (Tracking):**
- **Headings:** -0.02em to -0.04em (tighter for visual cohesion)
- **Body text:** 0em (default spacing optimized by font)
- **Small text:** +0.01em to +0.02em (slightly looser for clarity)
- **All caps:** +0.1em to +0.15em (significantly looser for readability)

**Line Length Guidelines:**
- **Optimal:** 45-75 characters per line for body text
- **Mobile:** 35-55 characters (shorter for thumb reading)
- **Narrow columns:** 30-45 characters minimum
- **Wide layouts:** Never exceed 85 characters per line

**Reading Flow Optimization:**
- **Paragraph spacing:** 1.5× line height for clear separation
- **Section spacing:** 2-3× line height for content hierarchy
- **Margin ratios:** Proportional white space for breathing room

**Accessibility Enhancements:**
- **High contrast ratios:** All text meets 7:1 contrast minimum
- **Focus indicators:** 2px outline, 3:1 contrast against background
- **Selection states:** High contrast background for text selection
- **Zoom support:** Text remains readable up to 200% zoom

**Readability Testing:**
- **Simulated reading conditions:** Various lighting and screen types
- **Distance testing:** Arm's length to close reading distances
- **Speed reading:** Optimized for both scanning and deep reading
- **Cognitive load:** Reduced mental effort through clear hierarchy

### Performance

**Fast, reliable typography that never compromises user experience.**

**Font Loading Strategy:**
- **System fonts first:** Immediate rendering with high-quality fallbacks
- **Progressive enhancement:** Custom fonts load without layout shift
- **Critical subset:** Essential characters loaded first for instant display
- **Preload optimization:** Most-used font weights preloaded for key pages

**Fallback Stack:**
```css
font-family: 
  'Inter', /* Primary choice */
  'Source Sans Pro', /* Secondary choice */
  -apple-system, /* macOS system font */
  BlinkMacSystemFont, /* macOS Chrome */
  'Segoe UI', /* Windows */
  'Roboto', /* Android */
  'Helvetica Neue', /* Older macOS */
  Arial, /* Universal fallback */
  sans-serif; /* Generic fallback */
```

**Loading Performance:**
- **WOFF2 format:** Maximum compression with broad support
- **Font-display: swap:** Immediate text display with fallback fonts
- **Subset optimization:** Only load required character sets
- **Weight optimization:** Strategic loading of essential weights (400, 600)

**Metrics Monitoring:**
- **First Contentful Paint (FCP):** Text appears within 1.5 seconds
- **Largest Contentful Paint (LCP):** Main content renders within 2.5 seconds
- **Cumulative Layout Shift (CLS):** Zero layout shift during font swaps
- **Load time tracking:** Font download performance across regions

### Guidelines

**Clear direction for implementing accessible, readable typography across all contexts.**

**Hierarchy Usage:**

**✅ Correct Usage:**
- **Display:** Hero sections, marketing headlines, major page titles
- **Heading 1:** Page titles, main section headers
- **Heading 2:** Major subsections, article titles
- **Heading 3:** Minor subsections, component headers
- **Heading 4-6:** Small sections, card titles, compact headers
- **Body:** Default text for articles, descriptions, content
- **Body Large:** Introductory paragraphs, important callouts
- **Body Small:** Captions, metadata, secondary information
- **Caption:** Image captions, fine print, technical details

**❌ Avoid:**
- Skipping heading levels (H1 → H3 without H2)
- Using headings for styling instead of semantic meaning
- Body text smaller than 14px on any device
- More than 85 characters per line
- Line heights below 1.4 for body text

**Weight Guidelines:**
- **Light (300):** Large headings only, never for body text
- **Regular (400):** Default for all body text and most content
- **Medium (500):** Emphasis within body text, subtle headings
- **Semibold (600):** Strong emphasis, important headings
- **Bold (700):** Maximum emphasis, critical information only

**Accessibility Implementation:**
- Always maintain 7:1 contrast ratio with background colors
- Ensure focus indicators are clearly visible on all text
- Test with screen readers at all hierarchy levels
- Validate heading structure follows logical flow
- Confirm text remains readable at 200% zoom

**Content-Specific Guidelines:**
- **Forms:** Use medium weight for labels, regular for inputs
- **Buttons:** Semibold weight for primary actions, medium for secondary
- **Navigation:** Medium weight for consistency and clarity
- **Error messages:** Regular weight with semantic color for accessibility
- **Long-form content:** Relaxed line height (1.6) for optimal reading

**References:**

- [Material Design: Understanding Typography](https://material.io/design/typography/understanding-typography.html)
- [Better Web Type](https://betterwebtype.com/)

---

## Elevation (0/3)

**Elevation creates clear spatial hierarchy that supports accessibility through consistent visual layering and depth perception.**

### Shadows

**Accessible shadow system that works across all visual contexts and user needs.**

**Shadow Philosophy:**
- **Subtle but clear:** Shadows enhance hierarchy without overwhelming content
- **High contrast compatible:** Elevation remains perceivable in high contrast modes
- **Reduced motion friendly:** Static shadows that don't rely on animation
- **Performance optimized:** Efficient rendering across all devices

**Elevation Levels:**

**Level 0 - Flat (no shadow):**
- **Use:** Page backgrounds, inline elements, base surfaces
- **Shadow:** none
- **Purpose:** Elements that sit on the base layer

**Level 1 - Raised (2px):**
- **Shadow:** `0 1px 2px rgba(0, 0, 0, 0.1), 0 1px 4px rgba(0, 0, 0, 0.08)`
- **Use:** Cards, form elements, subtle content grouping
- **Purpose:** Slightly lifted content that needs gentle separation

**Level 2 - Floating (4px):**
- **Shadow:** `0 2px 8px rgba(0, 0, 0, 0.12), 0 2px 16px rgba(0, 0, 0, 0.08)`
- **Use:** Buttons, interactive elements, navigation items
- **Purpose:** Interactive elements that need clear affordance

**Level 3 - Hovering (8px):**
- **Shadow:** `0 4px 16px rgba(0, 0, 0, 0.16), 0 4px 32px rgba(0, 0, 0, 0.08)`
- **Use:** Hover states, active elements, selected items
- **Purpose:** Temporary elevation for interaction feedback

**Level 4 - Overlay (16px):**
- **Shadow:** `0 8px 32px rgba(0, 0, 0, 0.2), 0 8px 64px rgba(0, 0, 0, 0.12)`
- **Use:** Dropdowns, tooltips, floating panels
- **Purpose:** Content that floats above the main interface

**Level 5 - Modal (24px):**
- **Shadow:** `0 16px 64px rgba(0, 0, 0, 0.24), 0 16px 128px rgba(0, 0, 0, 0.16)`
- **Use:** Modals, dialogs, major overlays
- **Purpose:** Critical content that requires full user attention

**Accessibility Considerations:**
- **Focus indicators:** Elevation changes support focus visibility
- **Color independence:** Shadows work without relying on color perception
- **High contrast support:** Alternative visual indicators for high contrast modes
- **Cognitive clarity:** Consistent elevation = consistent meaning throughout interface

### Background colors

**Coordinated background colors that work with shadows to create consistent elevation across light and dark modes.**

**Light Mode Backgrounds:**
- **Level 0:** `#FFFFFF` (Pure white base)
- **Level 1:** `#FFFFFF` (White with shadow creates elevation)
- **Level 2:** `#FFFFFF` (White with stronger shadow)
- **Level 3:** `#FFFFFF` (White with prominent shadow)
- **Level 4:** `#FFFFFF` (White with overlay shadow)
- **Level 5:** `#FFFFFF` (White with modal shadow)

**Dark Mode Backgrounds (elevation through brightness):**
- **Level 0:** `#0F0F0F` (Dark base surface)
- **Level 1:** `#1A1A1A` (Slightly lighter for gentle elevation)
- **Level 2:** `#262626` (More prominent elevation)
- **Level 3:** `#333333` (Clear elevated surface)
- **Level 4:** `#404040` (Overlay-level brightness)
- **Level 5:** `#4D4D4D` (Modal-level prominence)

**High Contrast Mode:**
- **All levels:** System colors with 3:1 minimum contrast against adjacent surfaces
- **Border support:** 1px borders when shadows aren't visible
- **Pattern support:** Subtle textures for elevation differentiation when needed

**Accessibility Features:**
- **Automatic mode detection:** Surfaces adapt to user's system preference
- **Semantic consistency:** Same elevation = same meaning across all modes
- **Color contrast compliance:** All background/text combinations meet 7:1 ratio
- **Forced colors support:** Works with Windows high contrast themes

**Implementation Guidelines:**
- **Progressive enhancement:** Base functionality works without shadows
- **Platform optimization:** Leverages system preferences and capabilities
- **Performance consideration:** Minimal repaints when switching modes
- **Focus preservation:** Elevation never interferes with focus indicators

### Z-index

**Systematic z-index scale that prevents conflicts and ensures critical accessibility features always remain accessible.**

**Base Scale (powers of 10 for easy insertion):**
- **0:** Default flow (no z-index needed)
- **10:** Slightly above default (sticky elements, floating labels)
- **100:** Above content (dropdowns, tooltips)
- **1000:** Overlay level (modals, sheets, major popups)
- **10000:** System level (toast notifications, alerts)
- **100000:** Emergency level (critical system messages, accessibility features)

**Specific Layer Assignments:**

**Content Layers (0-99):**
- **0:** Default document flow
- **1:** Sticky table headers
- **10:** Floating form labels, progress indicators
- **20:** Hover cards, preview popups
- **50:** Fixed navigation bars, sticky headers

**Interface Layers (100-999):**
- **100:** Dropdown menus, select options
- **200:** Tooltips, help popups
- **300:** Date picker calendars, color pickers
- **500:** Context menus, right-click options
- **800:** Loading overlays, progress screens

**Modal Layers (1000-9999):**
- **1000:** Sheet modals, drawer navigation
- **2000:** Standard dialogs and modals
- **3000:** Confirmation dialogs
- **5000:** Critical action confirmations
- **8000:** Cookie banners, legal notices

**System Layers (10000+):**
- **10000:** Toast notifications, snackbars
- **20000:** System alerts, error messages
- **50000:** Accessibility overlays (screen reader tools)
- **100000:** Emergency system messages (never override)

**Accessibility Considerations:**
- **Focus management:** Z-index never prevents focus from reaching interactive elements
- **Screen reader compatibility:** Layer order doesn't interfere with content reading order
- **Keyboard navigation:** Tab order remains logical regardless of visual stacking
- **Emergency access:** Highest layers reserved for critical accessibility features

**Implementation Rules:**
- **Avoid arbitrary values:** Use systematic scale, don't use random high numbers
- **Context stacking:** Related elements use adjacent z-index values
- **Predictable behavior:** Same component types always use same z-index ranges
- **Documentation:** Every z-index value documented with purpose and context

**References:**

- [Reshaped: Shadow](https://reshaped.so/foundations/shadow)
- [Material Design: Elevation](https://material.io/design/environment/elevation.html)
- [Atlassian Design System: Elevation](https://atlassian.design/foundations/elevation)

---

## Motion (0/3)

**Purposeful motion that enhances usability while respecting accessibility needs and user preferences.**

### Easing

**Natural, accessible easing curves that feel organic while supporting cognitive accessibility.**

**Core Easing Functions:**

**Standard Ease (`cubic-bezier(0.4, 0.0, 0.2, 1)`):**
- **Use:** Default for most transitions, general purpose
- **Feel:** Smooth, natural deceleration
- **Applications:** Hover states, focus indicators, simple property changes

**Ease Out (`cubic-bezier(0.0, 0.0, 0.2, 1)`):**
- **Use:** Elements entering the screen or becoming visible
- **Feel:** Quick start, gentle finish
- **Applications:** Modal openings, dropdown appearances, content reveals

**Ease In (`cubic-bezier(0.4, 0.0, 1, 1)`):**
- **Use:** Elements leaving the screen or disappearing
- **Feel:** Gentle start, quick finish
- **Applications:** Modal closings, tooltip dismissals, content hiding

**Ease In-Out (`cubic-bezier(0.4, 0.0, 0.6, 1)`):**
- **Use:** Elements moving from one position to another
- **Feel:** Smooth acceleration and deceleration
- **Applications:** Carousel transitions, tab switching, layout changes

**Sharp (`cubic-bezier(0.4, 0.0, 0.6, 1)`):**
- **Use:** Quick, responsive interactions that need immediate feedback
- **Feel:** Crisp, direct response
- **Applications:** Button presses, toggle switches, immediate state changes

**Accessibility Considerations:**
- **Predictable motion:** Consistent easing builds user confidence
- **Cognitive support:** Smooth transitions help users track changes
- **Vestibular safety:** Gentle curves reduce motion sensitivity triggers
- **Performance:** Optimized curves that maintain 60fps on all devices

### Duration

**Carefully calibrated durations that feel responsive while accommodating different interaction contexts and accessibility needs.**

**Duration Scale (based on research for optimal perception):**

**Immediate (0ms):**
- **Use:** Instant feedback, critical interactions
- **Applications:** Form validation errors, focus indicators, urgent state changes
- **Accessibility:** Users with cognitive disabilities get immediate response

**Quick (150ms):**
- **Use:** Fast interactions, hover states, small changes
- **Applications:** Button hover, tooltip show/hide, small element transitions
- **Feel:** Responsive but noticeable

**Fast (250ms):**
- **Use:** Standard interactions, most UI transitions
- **Applications:** Dropdown menus, tab switching, accordion expand/collapse
- **Feel:** Snappy and engaging

**Medium (400ms):**
- **Use:** Complex transitions, content changes
- **Applications:** Modal open/close, page transitions, layout changes
- **Feel:** Deliberate but not slow

**Slow (600ms):**
- **Use:** Major interface changes, informational animations
- **Applications:** Onboarding sequences, tutorial highlights, progressive disclosure
- **Feel:** Thoughtful and guided

**Deliberate (800ms):**
- **Use:** Storytelling, emphasis, educational content
- **Applications:** Success confirmations, guided tours, celebration moments
- **Feel:** Purposeful and memorable

**Context-Specific Durations:**

**Mobile Adjustments:**
- Reduce all durations by 25% for touch interfaces
- Quicker feedback aligns with finger tap expectations
- Touch interactions feel more immediate

**Reduced Motion Compliance:**
- **Complete disable:** Remove all non-essential animations
- **Duration reduction:** Cut all durations to 10ms or less
- **Static alternatives:** Replace motion with color/opacity changes

**Performance Scaling:**
- **High-end devices:** Use full duration scale
- **Low-end devices:** Reduce durations by 50% for smoother performance
- **Slow connections:** Prioritize instant feedback over smooth transitions

**Accessibility Guidelines:**
- **Never exceed 5 seconds** for any animation (WCAG 2.2 requirement)
- **Provide controls** for users to pause animations longer than 5 seconds
- **Essential vs. decorative:** Essential animations (loading, feedback) can remain, decorative ones should be removable

### Accessibility

**Motion accessibility that respects user needs while maintaining functional feedback and spatial orientation.**

**Reduced Motion Implementation:**

**CSS Media Query Integration:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**Progressive Motion Reduction:**
- **Level 1 - Subtle:** Reduce durations by 75%, keep gentle movements
- **Level 2 - Minimal:** Remove decorative animations, keep functional feedback
- **Level 3 - None:** Disable all non-essential motion, instant state changes only

**Safe Motion Guidelines:**

**✅ Allowed in Reduced Motion:**
- **Focus indicators:** Essential for keyboard navigation
- **Loading states:** Critical feedback for system status
- **Form validation:** Immediate error/success feedback
- **State changes:** Button press feedback, toggle switches
- **Opacity transitions:** Gentle fade in/out for content changes

**❌ Avoided in Reduced Motion:**
- **Parallax scrolling:** Can trigger vestibular disorders
- **Rotating elements:** Circular motion particularly problematic
- **Bouncing animations:** Spring-like effects can cause nausea
- **Auto-playing videos:** Unexpected motion disrupts focus
- **Infinite loops:** Continuous motion creates distraction

**Vestibular Safety:**
- **Avoid large moving objects:** Small elements safer than full-screen motion
- **Limit simultaneous animations:** Multiple moving elements increase sensitivity
- **Respect user control:** Never auto-play motion without user initiation
- **Provide warnings:** Alert users before motion-heavy content

**Cognitive Accessibility:**
- **Predictable timing:** Consistent durations help users anticipate changes
- **Clear purpose:** Every animation should have obvious functional value
- **Interruptible motion:** Users can stop/pause when needed
- **Focus preservation:** Motion never disrupts keyboard or screen reader focus

**Implementation Strategy:**
- **Motion first:** Design with full motion, then create reduced variants
- **Graceful degradation:** Ensure functionality works without motion
- **User preferences:** Respect system settings by default
- **Manual controls:** Provide in-app motion reduction options

**Testing Requirements:**
- **Browser settings:** Test with reduced motion enabled
- **Assistive technology:** Verify screen readers aren't disrupted
- **Performance impact:** Motion shouldn't affect interaction responsiveness
- **User feedback:** Regular testing with motion-sensitive users

---

## Iconography (0/7)

**Universal visual language that communicates instantly across cultures, abilities, and contexts while supporting accessibility at every level.**

### Accessibility

**Comprehensive accessibility approach ensuring icons work for all users and assistive technologies.**

**Semantic Implementation:**
- **Functional icons:** Always include `aria-label` or `aria-labelledby` with clear, action-oriented descriptions
- **Decorative icons:** Use `aria-hidden="true"` to hide from screen readers
- **Interactive icons:** Include accessible names that describe the action, not appearance

**Text Alternatives:**
- **Never icons alone:** Always pair icons with text labels or accessible alternatives
- **Tooltip support:** Provide additional context through accessible tooltips when needed
- **Multiple formats:** Support both visual icons and text descriptions

**Screen Reader Support:**
```html
<!-- Functional icon with label -->
<button aria-label="Save document">
  <icon name="save" aria-hidden="true" />
</button>

<!-- Icon with visible text -->
<button>
  <icon name="download" aria-hidden="true" />
  Download
</button>

<!-- Decorative icon -->
<icon name="sparkle" aria-hidden="true" />
```

**Visual Accessibility:**
- **High contrast compatibility:** Icons work in high contrast modes
- **Size flexibility:** Scalable from 12px to 64px without loss of clarity
- **Color independence:** Icons remain understandable without color
- **Focus indicators:** Clear focus states for interactive icons

**Cognitive Accessibility:**
- **Universal symbols:** Prioritize globally recognized icons (home, search, menu)
- **Consistent meaning:** Same icon always means same thing across interface
- **Clear metaphors:** Visual connection between icon and function is obvious
- **Cultural sensitivity:** Avoid icons with specific cultural assumptions

### Style

**Consistent visual style that maximizes recognition and accessibility across all contexts.**

**Primary Style: Outlined Icons**
- **Rationale:** Outline icons provide better accessibility and visual clarity
- **Benefits:** Work well at small sizes, high contrast compatible, universally readable
- **Consistency:** All interface icons follow outlined approach

**Style Specifications:**
- **Stroke width:** 1.5px at base size (scales proportionally)
- **Corner radius:** 2px for rounded elements (subtle, not overly stylized)
- **Line endings:** Rounded caps for friendlier appearance
- **Optical weight:** Consistent visual weight across all icon sizes

**Style Variations by Context:**

**Interface Icons (Primary):**
- **Style:** 1.5px outline, rounded corners, minimal detail
- **Use:** Navigation, actions, form elements, system functions
- **Sizes:** 16px, 20px, 24px (most common interface contexts)

**Content Icons (Secondary):**
- **Style:** Slightly thicker 2px outline for emphasis
- **Use:** Content categories, feature highlights, marketing materials
- **Sizes:** 24px, 32px, 48px (larger content contexts)

**Status Icons (Filled variants):**
- **Style:** Filled with outline for maximum contrast
- **Use:** Success, error, warning, info states
- **Rationale:** Filled style draws attention for important system feedback

**Accessibility Considerations:**
- **Consistent recognition:** Same style family aids pattern recognition
- **Scalability:** Outline style maintains clarity at all sizes
- **Color flexibility:** Works with any color while maintaining shape clarity
- **Contrast support:** Outline style works well in high contrast modes

### Naming

**Semantic naming system that prioritizes function over form and supports international accessibility.**

**Naming Principles:**

**Function-First Naming:**
- **What it does, not what it looks like:** `play`, not `triangle`
- **Action-oriented:** `add`, `delete`, `edit`, `save`
- **Clear intent:** `close-dialog`, not just `close`
- **Accessibility aligned:** Names match what screen readers should announce

**Naming Convention Structure:**
```
[category]-[action]-[context]
```

**Examples:**
- `navigation-menu-open`
- `form-field-required`
- `status-success-filled`
- `media-play-circle`

**Category Classifications:**

**Action Icons:**
- `add`, `delete`, `edit`, `save`, `copy`, `share`
- `search`, `filter`, `sort`, `refresh`
- `play`, `pause`, `stop`, `next`, `previous`

**Navigation Icons:**
- `home`, `back`, `forward`, `up`, `down`
- `menu-open`, `menu-close`, `chevron-left`, `chevron-right`
- `external-link`, `internal-link`

**Status Icons:**
- `success`, `error`, `warning`, `info`
- `loading`, `complete`, `pending`, `blocked`
- `online`, `offline`, `syncing`

**Interface Icons:**
- `settings`, `profile`, `help`, `support`
- `notifications`, `messages`, `calendar`, `dashboard`
- `visibility-on`, `visibility-off`

**Accessibility Naming:**
- **Screen reader friendly:** Names that make sense when announced
- **Descriptive enough:** `volume-up` instead of just `volume`
- **Context aware:** `table-sort-ascending` vs. `arrow-up`
- **Internationally clear:** Avoid culture-specific references

**Aliases and Keywords:**
- **Primary name:** Official semantic name
- **Common aliases:** Alternative names for discoverability
- **Keywords:** Related terms for search functionality
- **Legacy support:** Maintain backward compatibility when renaming

### Relation with grid

**Grid-aligned icons that create harmonious relationships with typography and layout systems.**

**Grid Integration:**
- **4px base alignment:** All icons align to the 4px grid system
- **Standard sizes:** 12px, 16px, 20px, 24px, 32px, 48px, 64px (all multiples of 4)
- **Optical centering:** Icons optically centered within their bounding boxes
- **Typography pairing:** Icon sizes correspond to text cap heights

**Size Specifications:**

**12px Icons (3×4px):**
- **Use:** Inline with small text, tight UI contexts
- **Pairing:** Caption text (12px), small body text
- **Applications:** Table cells, compact lists, badges

**16px Icons (4×4px):**
- **Use:** Standard interface icons, most common size
- **Pairing:** Body text (16px), navigation items
- **Applications:** Form fields, buttons, menu items

**20px Icons (5×4px):**
- **Use:** Slightly larger interface elements
- **Pairing:** Large body text (18px), headings
- **Applications:** Primary navigation, important actions

**24px Icons (6×4px):**
- **Use:** Prominent interface elements, content icons
- **Pairing:** Heading 6 (20px), Heading 5 (24px)
- **Applications:** Section headers, content cards, feature lists

**32px Icons (8×4px):**
- **Use:** Large content contexts, marketing materials
- **Pairing:** Heading 3 (32px), prominent content
- **Applications:** Feature highlights, hero sections

**Alignment Guidelines:**
- **Baseline alignment:** Icons align with text baseline when inline
- **Center alignment:** Icons center with text cap height for buttons
- **Leading alignment:** Icons align with first line when multi-line text
- **Optical adjustments:** Manual fine-tuning for visual balance

**Grid Benefits for Accessibility:**
- **Predictable spacing:** Consistent relationships aid cognitive processing
- **Screen reader compatibility:** Grid alignment doesn't interfere with content flow
- **Touch target optimization:** Grid-based sizing ensures adequate touch areas
- **Zoom compatibility:** Icons remain properly aligned at all zoom levels

### Keywords

**Comprehensive keyword system that improves discoverability and supports diverse mental models and languages.**

**Keyword Strategy:**
- **Multiple entry points:** Different users think about icons differently
- **International support:** Include common translations and cultural variants
- **Action variants:** Different ways to describe the same function
- **Context variations:** How icons might be described in different use cases

**Keyword Categories:**

**Functional Keywords:**
- **Primary function:** `save`, `download`, `upload`, `delete`
- **Alternative actions:** `export` (for download), `remove` (for delete)
- **Context-specific:** `bookmark`, `favorite`, `star` (all related to saving/marking)

**Visual Keywords:**
- **Shape descriptions:** `arrow`, `triangle`, `circle`, `square`
- **Appearance:** `outline`, `filled`, `solid`, `line`
- **Orientation:** `up`, `down`, `left`, `right`, `horizontal`, `vertical`

**Domain-Specific Keywords:**
- **Technology:** `code`, `developer`, `API`, `database`
- **Business:** `analytics`, `reports`, `metrics`, `KPI`
- **Communication:** `email`, `message`, `chat`, `notification`

**Accessibility Keywords:**
- **Screen reader terms:** How screen readers might describe the icon
- **Alternative descriptions:** Different ways to explain the function
- **Plain language:** Simple terms for cognitive accessibility

**Example Keyword Sets:**

**Play Icon:**
- **Primary:** `play`, `start`, `begin`
- **Media context:** `video`, `audio`, `playback`
- **Visual:** `triangle`, `arrow-right`
- **Accessibility:** `start-playback`, `begin-media`

**Settings Icon:**
- **Primary:** `settings`, `preferences`, `configuration`
- **Alternative:** `options`, `controls`, `admin`
- **Visual:** `gear`, `cog`, `wheel`
- **Context:** `system`, `account`, `profile-settings`

**Search Functionality:**
- **Fuzzy matching:** Partial keyword matches return relevant results
- **Synonym support:** Related terms automatically included
- **Multi-language:** Keywords in multiple languages for international teams
- **Category filtering:** Filter by keyword categories (functional, visual, domain)

**Accessibility Benefits:**
- **Diverse mental models:** Multiple ways to find the same icon
- **Language support:** International and non-native speakers included
- **Cognitive assistance:** Multiple paths to the same destination
- **Learning support:** Helps users learn icon meanings through related terms

### Reserved icons

**Protected icon vocabulary that ensures critical actions remain instantly recognizable and cognitively consistent.**

**Universal Action Icons (Never Reuse):**
- **`add` (+):** Only for adding new items, content, or elements
- **`delete` (trash/×):** Only for permanent removal or destruction
- **`close` (×):** Only for closing dialogs, modals, or dismissing content
- **`save` (disk/checkmark):** Only for saving or preserving data
- **`search` (magnifying glass):** Only for search functionality

**Navigation Icons (Reserved):**
- **`home` (house):** Only for returning to main/home page
- **`back` (left arrow):** Only for going to previous page/step
- **`menu` (hamburger):** Only for opening navigation menu
- **`up/down arrows`:** Only for vertical navigation or sorting
- **`external-link`:** Only for links that open in new window/tab

**Status Icons (System Only):**
- **`success` (checkmark):** Only for positive outcomes and completion
- **`error` (×/triangle):** Only for errors and critical problems
- **`warning` (triangle/!):** Only for caution and potential issues
- **`info` (i):** Only for informational messages and help content

**Media Control Icons (Protected):**
- **`play` (triangle):** Only for starting media playback
- **`pause` (||):** Only for pausing media playback
- **`stop` (square):** Only for stopping media completely
- **`volume` (speaker):** Only for audio volume controls

**Accessibility Benefits of Reservation:**
- **Cognitive consistency:** Same icon = same action across all contexts
- **Learning efficiency:** Users only need to learn icon meanings once
- **Reduced mental load:** No context switching for common actions
- **Universal patterns:** Supports users with cognitive disabilities
- **Cross-platform consistency:** Aligns with platform conventions

**Enforcement Guidelines:**
- **Documentation:** Reserved icons clearly marked in icon library
- **Code constraints:** Technical enforcement prevents misuse
- **Design review:** Manual review process for all icon usage
- **Alternative options:** Provide alternative icons for different contexts

**Exception Process:**
- **Rare circumstances:** Very limited exceptions with design team approval
- **User research required:** Must validate that alternative meaning is clearer
- **Documentation update:** Any exceptions must be thoroughly documented
- **Rollback plan:** Clear path to revert if confusion emerges

### Guidelines

**Comprehensive implementation guidelines that ensure icons enhance accessibility and usability across all contexts.**

**Core Usage Principles:**

**✅ Always Do:**
- **Pair with text:** Never use icons alone for critical actions
- **Provide alt text:** Include aria-label or aria-labelledby for functional icons
- **Use semantic names:** Name icons by function, not appearance
- **Test with users:** Validate icon meaning with real users
- **Respect reserved icons:** Use system icons only for their intended purpose
- **Consider context:** Same icon might mean different things in different contexts

**❌ Never Do:**
- **Rely on color alone:** Icons must work without color
- **Use tiny icons:** Maintain minimum 16px size for interactive elements
- **Overcrowd interfaces:** Too many icons create cognitive overload
- **Use culture-specific icons:** Avoid symbols with limited cultural meaning
- **Ignore platform conventions:** Respect user expectations from their platform

**Implementation Context:**

**Buttons and Interactive Elements:**
- **Always include text labels** or accessible alternatives
- **Minimum touch target:** 44×44px for mobile, 32×32px for desktop
- **Clear focus indicators:** Visible focus state for keyboard users
- **Consistent placement:** Icon position consistent across similar actions

**Navigation:**
- **Familiar patterns:** Use universally recognized navigation icons
- **Clear hierarchy:** More important navigation gets more prominent icons
- **Breadcrumb support:** Icons help users understand their location
- **Mobile adaptation:** Consider collapsed/expanded states

**Forms and Data Entry:**
- **Required field indicators:** Use consistent iconography
- **Validation feedback:** Status icons for errors, success, warnings
- **Helper text support:** Icons that reveal additional context
- **Input type indication:** Icons that clarify expected input format

**Content and Communication:**
- **Status communication:** Use reserved status icons consistently
- **Category identification:** Icons that help organize content types
- **Priority indication:** Visual hierarchy through icon selection
- **Action availability:** Icons that show what actions are possible

**Accessibility Implementation Checklist:**
- [ ] Icon has appropriate ARIA label or is marked decorative
- [ ] Text alternative available for all functional icons
- [ ] Icon meaning is culturally universal or clearly explained
- [ ] Interactive icons meet minimum size requirements
- [ ] Focus states are clearly visible and high contrast
- [ ] Icon works in high contrast mode
- [ ] Screen reader testing completed
- [ ] Icon meaning validated with real users

**Performance and Technical:**
- **SVG format:** Use scalable SVG icons for crisp rendering
- **Optimized file sizes:** Minimize icon file sizes for fast loading
- **Caching strategy:** Implement efficient icon loading and caching
- **Fallback support:** Graceful degradation when icons fail to load

**References:**

- [A complete guide to iconography](https://www.designsystems.com/iconography-guide/)
- [Material Design: Product Icons](https://material.io/design/iconography/product-icons.html)
