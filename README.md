# Beacon Design System

A comprehensive, accessible React component library built with TypeScript, Tailwind CSS, and Storybook. Beacon focuses on delivering fully WCAG 2.2 AA compliant components with a clean, modern design language.

## ✨ Features

- **🔧 Fully Accessible**: All components meet WCAG 2.2 AA standards with proper ARIA attributes, keyboard navigation, and screen reader support
- **🎨 Modern Design**: Clean, minimal aesthetic with thoughtful typography and spacing
- **⚡ Developer Experience**: Built with TypeScript for type safety and excellent IntelliSense
- **📖 Comprehensive Documentation**: Interactive Storybook with live examples and accessibility demos
- **🎯 Tailwind Integration**: Leverages Tailwind CSS 4.1+ with custom design tokens
- **🧪 Testing Ready**: Browser-based testing with Vitest + Playwright integration

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
# Start development server
npm run dev

# Start Storybook
npm run storybook

# Run tests
npm run test

# Build for production
npm run build
```

## 📦 Components

### Available Components

- **Button**: Primary, secondary, destructive, and ghost variants with icon support
- **Input**: Text fields with validation states, icons, and helper text  
- **Textarea**: Multi-line text input with resize options
- **Icon**: Lucide React icons with semantic sizing

### Foundation Elements

- **Typography**: Humanist font stack with 4px grid-aligned sizes
- **Colors**: Comprehensive palette with semantic tokens
- **Spacing**: 4px-based spacing system for consistent layouts
- **Accessibility**: Focus indicators, touch targets, and contrast ratios

## 🎨 Design Principles

### Accessibility First
Every component is built with accessibility as a core requirement, not an afterthought:
- Semantic HTML structure
- Proper ARIA labeling and descriptions
- Keyboard navigation support
- High contrast ratios (4.5:1 minimum)
- Touch target compliance (44px mobile, 32px desktop)
- Screen reader optimization

### Consistent Design Language
- **4px grid system** for predictable spacing and alignment
- **Semantic color tokens** for consistent theming
- **Typography scale** that pairs with the grid system
- **Component variants** that maintain visual hierarchy

### Developer Experience
- **TypeScript first** with comprehensive type definitions
- **Composable APIs** that follow React best practices
- **Consistent prop patterns** across all components
- **Excellent documentation** with live examples

## 🏗️ Tech Stack

- **React 19** + **TypeScript** for the component library
- **Tailwind CSS 4.1+** for styling with custom design tokens
- **Vite 7** for fast development and building
- **Storybook 9** for component documentation and testing
- **Vitest + Playwright** for browser-based testing
- **ESLint 9** with TypeScript support for code quality

## 📚 Documentation

Visit the Storybook documentation to explore components, view accessibility demonstrations, and see live examples:

```bash
npm run storybook
```

### Key Documentation Sections

- **Foundations**: Colors, typography, spacing, and accessibility features
- **Components**: Interactive examples with all variants and states
- **Accessibility Demos**: WCAG 2.2 compliance demonstrations
- **Design Tokens**: Available CSS custom properties and Tailwind classes

## 🧪 Testing

The project uses a comprehensive testing strategy:

```bash
# Run all tests
npm run test

# Build and validate
npm run build

# Lint code
npm run lint
```

- **Browser Testing**: Vitest with Playwright for real browser environments
- **Accessibility Testing**: Automated a11y testing in Storybook
- **Visual Regression**: Storybook stories serve as visual tests
- **Type Checking**: Full TypeScript validation

## 🤝 Contributing

### Development Workflow

1. **Component Development**: Follow the established patterns in existing components
2. **Accessibility Testing**: Use Storybook's accessibility addon to validate compliance
3. **Documentation**: Create comprehensive stories with accessibility demos
4. **Testing**: Ensure all tests pass and new components have proper coverage

### Component Checklist

When creating new components, ensure they include:
- [ ] TypeScript interface with proper prop types
- [ ] Accessibility features (ARIA labels, keyboard navigation)
- [ ] Multiple variants and sizes
- [ ] Validation states (error, warning, success)
- [ ] Disabled states
- [ ] Comprehensive Storybook stories
- [ ] Accessibility demonstration story

## 📋 Component Roadmap

### Core Components (In Progress)
- [x] Button - Primary, secondary, destructive, ghost variants
- [x] Input - Text fields with validation and icons
- [x] Textarea - Multi-line text input
- [ ] Select - Dropdown selection with search
- [ ] Checkbox - Form control with custom styling
- [ ] Radio - Radio button groups
- [ ] Switch - Toggle controls

### Layout Components (Planned)
- [ ] Container - Responsive content containers
- [ ] Grid - CSS Grid-based layouts
- [ ] Stack - Vertical and horizontal spacing
- [ ] Card - Content containers with variants

### Interactive Components (Planned)
- [ ] Modal - Accessible overlays with focus management
- [ ] Dropdown - Action and navigation menus
- [ ] Tabs - Content organization
- [ ] Tooltip - Contextual help

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Tailwind CSS** for the utility-first CSS framework
- **Storybook** for component documentation and development
- **Lucide** for the beautiful icon set
- **WCAG Guidelines** for accessibility standards and best practices