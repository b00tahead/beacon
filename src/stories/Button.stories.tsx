import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../components/Button';
import { Search, Plus, Download, Trash2 } from 'lucide-react';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Accessible button component with multiple variants, sizes, and states. Fully compliant with WCAG 2.2 guidelines.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'destructive', 'ghost'],
      description: 'Visual variant of the button',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button',
    },
    icon: {
      control: false,
      description: 'Lucide React icon component',
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Position of the icon relative to text',
    },
    isLoading: {
      control: 'boolean',
      description: 'Show loading state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    children: {
      control: 'text',
      description: 'Button content',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Delete Item',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const Sizes: Story = {
  args: { children: 'Button' },
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const WithIcons: Story = {
  args: { children: 'Button' },
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Button icon={Search} iconPosition="left">Search</Button>
        <Button icon={Plus} iconPosition="left">Add Item</Button>
        <Button icon={Download} iconPosition="right">Download</Button>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="secondary" icon={Search} iconPosition="left">Search</Button>
        <Button variant="destructive" icon={Trash2} iconPosition="left">Delete</Button>
        <Button variant="ghost" icon={Plus} iconPosition="left">Add</Button>
      </div>
    </div>
  ),
};

export const States: Story = {
  args: { children: 'Button' },
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Button>Default</Button>
        <Button disabled>Disabled</Button>
        <Button isLoading>Loading</Button>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="secondary">Default</Button>
        <Button variant="secondary" disabled>Disabled</Button>
        <Button variant="secondary" isLoading>Loading</Button>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="destructive">Default</Button>
        <Button variant="destructive" disabled>Disabled</Button>
        <Button variant="destructive" isLoading>Loading</Button>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost">Default</Button>
        <Button variant="ghost" disabled>Disabled</Button>
        <Button variant="ghost" isLoading>Loading</Button>
      </div>
    </div>
  ),
};

export const AccessibilityDemo: Story = {
  args: { children: 'Button' },
  render: () => (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h2 className="text-heading-3 text-neutral-900 font-sans mb-4">
          WCAG 2.2 Compliance Features
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-heading-5 text-neutral-900 font-sans mb-2">
              Keyboard Navigation
            </h3>
            <p className="text-body text-neutral-600 font-sans mb-3">
              All buttons are keyboard accessible with proper focus management. Tab through the buttons below:
            </p>
            <div className="flex gap-3">
              <Button>Tab to me</Button>
              <Button variant="secondary">Then to me</Button>
              <Button variant="destructive">Then to me</Button>
              <Button variant="ghost">Finally to me</Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-heading-5 text-neutral-900 font-sans mb-2">
              High Contrast Ratios
            </h3>
            <p className="text-body text-neutral-600 font-sans mb-3">
              All button variants meet WCAG 2.2 AA contrast requirements (4.5:1 minimum):
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Button className="w-full">Primary (AA Compliant)</Button>
                <Button variant="secondary" className="w-full">Secondary (AA Compliant)</Button>
              </div>
              <div className="space-y-2">
                <Button variant="destructive" className="w-full">Destructive (AA Compliant)</Button>
                <Button variant="ghost" className="w-full">Ghost (AA Compliant)</Button>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-heading-5 text-neutral-900 font-sans mb-2">
              Touch Target Size
            </h3>
            <p className="text-body text-neutral-600 font-sans mb-3">
              All buttons meet minimum touch target requirements (44x44px on mobile, 32x32px on desktop). Notice the height differences:
            </p>
            <div className="flex items-start gap-3">
              <Button size="sm">Small (32px+)</Button>
              <Button size="md">Medium (44px+)</Button>
              <Button size="lg">Large (48px+)</Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-heading-5 text-neutral-900 font-sans mb-2">
              Screen Reader Support
            </h3>
            <p className="text-body text-neutral-600 font-sans mb-3">
              Icons are properly hidden from screen readers when decorative:
            </p>
            <div className="flex gap-3">
              <Button icon={Search} iconPosition="left">Search Items</Button>
              <Button variant="secondary" icon={Plus} iconPosition="left">Add New</Button>
              <Button variant="destructive" icon={Trash2} iconPosition="left">Delete Selected</Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-heading-5 text-neutral-900 font-sans mb-2">
              Loading States
            </h3>
            <p className="text-body text-neutral-600 font-sans mb-3">
              Loading states are properly announced to screen readers:
            </p>
            <div className="flex gap-3">
              <Button isLoading>Processing...</Button>
              <Button variant="secondary" isLoading>Saving...</Button>
              <Button variant="destructive" isLoading>Deleting...</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  args: { children: 'Button' },
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-heading-5 text-neutral-900 font-sans mb-3">Primary</h3>
        <div className="flex items-center gap-3">
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="md">Medium</Button>
          <Button variant="primary" size="lg">Large</Button>
        </div>
      </div>
      
      <div>
        <h3 className="text-heading-5 text-neutral-900 font-sans mb-3">Secondary</h3>
        <div className="flex items-center gap-3">
          <Button variant="secondary" size="sm">Small</Button>
          <Button variant="secondary" size="md">Medium</Button>
          <Button variant="secondary" size="lg">Large</Button>
        </div>
      </div>
      
      <div>
        <h3 className="text-heading-5 text-neutral-900 font-sans mb-3">Destructive</h3>
        <div className="flex items-center gap-3">
          <Button variant="destructive" size="sm">Small</Button>
          <Button variant="destructive" size="md">Medium</Button>
          <Button variant="destructive" size="lg">Large</Button>
        </div>
      </div>
      
      <div>
        <h3 className="text-heading-5 text-neutral-900 font-sans mb-3">Ghost</h3>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">Small</Button>
          <Button variant="ghost" size="md">Medium</Button>
          <Button variant="ghost" size="lg">Large</Button>
        </div>
      </div>
    </div>
  ),
};