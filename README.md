# Beacon Design System

**Beacon** is a design system that lights the path to inclusive, thoughtful, and efficient digital experiences.  
Rooted in accessibility and powered by scalable architecture, it brings clarity to complexity—helping teams move faster with purpose.

---

## Figma Foundation File

View the foundational design file here:  
[Beacon – Foundations in Figma](https://www.figma.com/design/C7CrLnQyrOL2eJJ5OHSq0r/Beacon---Foundations?m=auto&t=R0qhgtFIlk41rABo-6)  
_Includes typography, spacing, color tokens, and component styles._

---

## Folder Structure

The repository is initialized as a [Storybook](https://storybook.js.org/) project and follows this structure:

```
.
├── .storybook/           # Storybook config files
├── src/
│   ├── components/       # UI components
│   ├── tokens/           # Design tokens (color, spacing, typography)
│   └── styles/           # Global styles or helpers
├── public/               # Static assets
├── docs/                 # System documentation
├── README.md             # Project overview
└── package.json
```

---

## Future Roadmap

This project will evolve through iterative phases:

### Phase 1: Foundations (in progress)

- [x] Define core design principles and vision
- [x] Set up foundational Figma styles (color, type, spacing)
- [x] Initialize Storybook with project scaffolding

### Phase 2: Token System + Core Components

- [ ] Implement JSON/JS token infrastructure
- [ ] Build core components: `Button`, `Input`, `Alert`, `Badge`
- [ ] Sync visual and code tokens via Token Studio or Style Dictionary

### Phase 3+: Automation, CI/CD, and AI Integration

- [ ] Add automated a11y testing (axe-core, Storybook a11y)
- [ ] Setup GitHub Actions for CI/CD and Chromatic visual testing
- [ ] Integrate AI-assisted documentation (component usage, accessibility)

---

## Philosophy

- **Accessible by default**: Accessibility is the baseline, not an enhancement.
- **Clarity over customization**: Consistency and usability come first.
- **Progressive structure**: Scale simply and iteratively.
- **Documented and discoverable**: Everything has context.
- **Evolve through use**: This system is alive and always improving.

---

## Feedback & Contributions

This system is solo-developed but designed with collaboration in mind.  
Issues, discussions, and feedback are welcome as the system grows.
