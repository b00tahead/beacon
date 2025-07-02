# Design Language

Like any language, a design language is a methodical way of communicating with your audience through your approach to product design. It's the cornerstone of consistent customer experiences.

## Brand (0/5)

Brand drives every single decision you make when building new products or features. A good brand is much more than a name and a logo. It's the values that define your unique identity and what makes you stand out from others.

### Vision

**Beacon exists to light the way forward for accessible design.**

We believe that accessibility and beautiful design are not competing forces—they're inseparable. Beacon is the design system that makes accessibility the default, not an afterthought. When teams ask "How do we build inclusive experiences?" the answer should be Beacon. When people think of accessible design systems, Beacon should be the first name that comes to mind.

Our vision is to become the definitive reference for accessibility in design systems—setting the standard that future systems aspire to meet. We guide teams toward a future where every digital experience is inclusive by design, where accessibility expertise is democratized, and where creating barrier-free interfaces is as intuitive as it is essential.

**Core Values:**
- **Accessibility First**: Every decision prioritizes inclusive design
- **Clarity Through Simplicity**: Complex accessibility made approachable
- **Excellence by Default**: High standards that elevate the entire ecosystem
- **Knowledge Sharing**: Open practices that advance the field
- **Inclusive Innovation**: Leading change that benefits everyone

### Design principles

The considerations that guide the basis of our practice. These principles outline how we approach design philosophically and help with everyday decisions.

**1. Accessible by Default**
Every component, pattern, and interaction must meet WCAG 2.2 AA standards from the start—not as an afterthought. Accessibility is built into the foundation, not added on top. When in doubt, choose the most inclusive path forward.

**2. Clarity Over Cleverness** 
Simple, predictable interactions serve users better than innovative complexity. We favor clear mental models and familiar patterns that reduce cognitive load. Elegance comes from removing barriers, not adding features.

**3. Guidance Through Design**
Our components should teach accessibility best practices simply by being used. The right choice should be the obvious choice. We embed accessibility knowledge into the design itself, making it impossible to accidentally exclude users.

**4. Evidence-Based Decisions**
Every design choice is grounded in user research, accessibility guidelines, and real-world testing with assistive technologies. We lead by example, documenting our rationale so others can learn from our process.

**5. Progressive Enhancement**
Start with the most basic, accessible experience and enhance from there. Ensure core functionality works for everyone before adding conveniences for some. No user should be left behind in pursuit of advanced features.

**6. Inclusive Innovation**
When we push boundaries, we do so responsibly. New patterns and interactions must maintain or improve accessibility. We innovate with purpose, not for novelty's sake.

### Tone of voice

A clear tone of voice defines how we speak to our audience at every moment of their journey, helping them get wherever they want to go.

**Our Voice: The Knowledgeable Guide**

Beacon speaks as an experienced, trusted guide who illuminates the path forward without condescension. We are confident in our expertise while remaining humble about the complexity of accessibility. Our voice is that of a mentor who has walked this path many times and genuinely wants to help others succeed.

**Voice Characteristics:**

**Knowledgeable but not intimidating**
- We share deep expertise in accessible ways
- Complex concepts are broken down into clear, actionable steps
- We acknowledge when things are difficult rather than pretending they're simple

**Supportive and encouraging**
- We celebrate progress, however small
- Mistakes are learning opportunities, not failures
- We emphasize that accessibility is a journey, not a destination

**Direct and purposeful**
- Every word serves a purpose—no fluff or filler
- We get to the point quickly and clearly
- Instructions are specific and actionable

**Inclusive and welcoming**
- We assume positive intent and meet people where they are
- Language is jargon-free or clearly explained when technical terms are necessary
- We speak to all skill levels without talking down to anyone

**Examples in Practice:**

❌ **Not Beacon:** "Obviously, you should always include alt text—it's basic accessibility 101."

✅ **Beacon:** "Alt text helps screen reader users understand images. Here's how to write effective alt text for different contexts."

❌ **Not Beacon:** "This cutting-edge component leverages innovative interaction paradigms."

✅ **Beacon:** "This component follows familiar patterns that work well with assistive technologies."

### Terminology

Standard terms and phrases that must be kept consistent throughout the user experience, speeding up the design process and unifying our voice.

**Accessibility Terms:**

**✅ Use:** "Screen reader users" | **❌ Avoid:** "The blind"
- Person-first language that focuses on the tool, not the disability

**✅ Use:** "Keyboard navigation" | **❌ Avoid:** "Tab navigation" 
- Encompasses all keyboard interactions, not just Tab key

**✅ Use:** "Alternative text" or "Alt text" | **❌ Avoid:** "Alt tag"
- Technically accurate terminology (it's an attribute, not a tag)

**✅ Use:** "Assistive technology" | **❌ Avoid:** "Accessibility tools"
- Industry standard term that's more inclusive

**✅ Use:** "Color contrast" | **❌ Avoid:** "Color accessibility"
- Specific and measurable aspect of accessibility

**✅ Use:** "Focus indicator" | **❌ Avoid:** "Focus ring"
- Not all focus indicators are rings

**Component Terms:**

**✅ Use:** "Component" | **❌ Avoid:** "Element" or "Widget"
- Clear, consistent reference to design system building blocks

**✅ Use:** "Variant" | **❌ Avoid:** "Version" or "Type"
- Different styling options within a component (e.g., primary button variant)

**✅ Use:** "State" | **❌ Avoid:** "Mode" or "Status"
- Interactive conditions (hover, focus, disabled, etc.)

**✅ Use:** "Property" | **❌ Avoid:** "Attribute" or "Setting"
- Configurable aspects of components

**User Interface Terms:**

**✅ Use:** "User interface" or "Interface" | **❌ Avoid:** "UI" in user-facing content
- Spell out acronyms for clarity

**✅ Use:** "Interactive" | **❌ Avoid:** "Clickable"
- Includes all interaction methods, not just mouse clicks

**✅ Use:** "Select" or "Choose" | **❌ Avoid:** "Pick"
- More formal and clear

**✅ Use:** "Required field" | **❌ Avoid:** "Mandatory field"
- Standard web terminology

**Process Terms:**

**✅ Use:** "Design system" | **❌ Avoid:** "Component library" or "Style guide"
- Encompasses the full system, not just components or visual styles

**✅ Use:** "Implementation" | **❌ Avoid:** "Execution" or "Development"
- How components are built and used

**✅ Use:** "Pattern" | **❌ Avoid:** "Template" or "Layout"
- Reusable solutions to common design problems

**Phrases to Use Consistently:**

- "Built with accessibility in mind"
- "Meets WCAG 2.2 AA standards"
- "Works with assistive technologies"
- "Keyboard accessible"
- "Screen reader compatible"
- "High contrast compliant"
- "Inclusive by design"

### Brand assets

Using a consistent set of brand assets aligns the user experience across your product and marketing campaigns. These assets include your logo, fonts, icons, illustrations, etc.

**References:**

- [Patagonia's vision](https://www.patagonia.com/company-vision/)
- [IBM Design Principles](https://www.ibm.com/design/principles/)
- [Lightning Design System's Voice and Tone](https://www.lightningdesignsystem.com/guidelines/voice-and-tone/)

---

## Guidelines (0/5)

Understanding how to approach common UX patterns will allow your organization to establish a consistent approach and user experience on any platform.

### Accessibility

Guidelines for how you approach accessibility and how you leverage color, hierarchy, and assistive technologies to help your users.

### Writing guidelines

Every consistent experience needs watertight writing. Laying down the foundations for your house style early keeps everything in line with consistent grammar, style choices, and action-oriented language to help your design.

### Microcopy guidelines

The standard way to write for the components in your design system. These take platform conventions and best practices for writing all into consideration.

### Terminology

Create the standard terms and phrases that need to be kept the same throughout the user experience, speeding up the design process and unifying your voice.

### Internationalisation

Define standards for handling content translated into various languages supported by the product. It includes handling translation edge cases and content bi-directionality.

**References:**

- [Atlassian Design System: Writing guidelines](https://atlassian.design/content/writing-guidelines/)
- [Material Design: Glossary](https://material.io/design/communication/writing.html#glossary)
- [Material Design: Accessibility](https://material.io/design/usability/accessibility.html)
