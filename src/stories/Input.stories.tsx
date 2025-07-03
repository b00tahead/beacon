import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '../components/Input';
import { Textarea } from '../components/Textarea';
import { Search, Mail, User, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Accessible input component with labels, validation states, icons, and helper text. Fully compliant with WCAG 2.2 guidelines.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input field',
    },
    variant: {
      control: 'select',
      options: ['default', 'error', 'warning', 'success'],
      description: 'Visual variant of the input',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'HTML input type',
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Position of the icon',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    required: {
      control: 'boolean',
      description: 'Required field indicator',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Email address',
    placeholder: 'Enter your email',
    type: 'email',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    helperText: 'Must be between 3-20 characters and contain only letters, numbers, and underscores.',
  },
};

export const Required: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    type: 'password',
    required: true,
    helperText: 'Must be at least 8 characters long.',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email address',
    placeholder: 'Enter your email',
    type: 'email',
    value: 'invalid-email',
    errorMessage: 'Please enter a valid email address.',
  },
};

export const Sizes: Story = {
  args: { children: 'Input' },
  render: () => (
    <div className="space-y-4">
      <Input size="sm" label="Small input" placeholder="Small size" />
      <Input size="md" label="Medium input" placeholder="Medium size (default)" />
      <Input size="lg" label="Large input" placeholder="Large size" />
    </div>
  ),
};

export const ValidationStates: Story = {
  args: { children: 'Input' },
  render: () => (
    <div className="space-y-4">
      <Input 
        label="Default state" 
        placeholder="Enter text" 
        helperText="This is helper text"
      />
      <Input 
        label="Success state" 
        placeholder="Enter text" 
        variant="success"
        value="Valid input"
        helperText="This input looks good!"
      />
      <Input 
        label="Warning state" 
        placeholder="Enter text" 
        variant="warning"
        value="Potentially problematic"
        helperText="This might cause issues"
      />
      <Input 
        label="Error state" 
        placeholder="Enter text" 
        variant="error"
        value="Invalid input"
        errorMessage="This field has an error"
      />
    </div>
  ),
};

export const WithIcons: Story = {
  args: { children: 'Input' },
  render: () => (
    <div className="space-y-4">
      <Input 
        label="Search" 
        placeholder="Search for something..." 
        icon={Search}
        iconPosition="left"
      />
      <Input 
        label="Email" 
        placeholder="Enter your email" 
        type="email"
        icon={Mail}
        iconPosition="left"
      />
      <Input 
        label="Username" 
        placeholder="Enter username" 
        icon={User}
        iconPosition="right"
      />
    </div>
  ),
};


const PasswordToggleExample = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className="relative">
      <Input 
        label="Password with toggle" 
        placeholder="Enter your password"
        type={showPassword ? 'text' : 'password'}
        icon={showPassword ? EyeOff : Eye}
        iconPosition="right"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-[2.125rem] text-neutral-500 hover:text-neutral-700"
        aria-label={showPassword ? 'Hide password' : 'Show password'}
      >
        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
      </button>
    </div>
  );
};

export const InteractivePassword: Story = {
  args: { children: 'Input' },
  render: () => <PasswordToggleExample />,
};

export const Disabled: Story = {
  args: { children: 'Input' },
  render: () => (
    <div className="space-y-4">
      <Input 
        label="Disabled input" 
        placeholder="This field is disabled" 
        disabled
      />
      <Input 
        label="Disabled with value" 
        value="Cannot edit this"
        disabled
      />
      <Input 
        label="Disabled with icon" 
        placeholder="Disabled field" 
        icon={User}
        disabled
      />
    </div>
  ),
};

export const TextareaExamples: Story = {
  args: { children: 'Input' },
  render: () => (
    <div className="space-y-4">
      <Textarea 
        label="Message" 
        placeholder="Enter your message here..."
        helperText="Maximum 500 characters"
      />
      <Textarea 
        label="Comments" 
        placeholder="Add your comments..."
        rows={6}
        resize="vertical"
      />
      <Textarea 
        label="Feedback (Required)" 
        placeholder="Your feedback is important to us"
        required
        errorMessage="This field is required"
      />
    </div>
  ),
};

export const AccessibilityDemo: Story = {
  args: { children: 'Input' },
  render: () => (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h2 className="text-heading-3 text-neutral-900 font-sans mb-4">
          WCAG 2.2 Input Accessibility Features
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-heading-5 text-neutral-900 font-sans mb-3">
              Label Association
            </h3>
            <p className="text-body text-neutral-600 font-sans mb-3">
              Click the labels below to focus the inputs. Labels are properly associated using htmlFor/id:
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Input label="First Name" placeholder="Click the label above" />
              <Input label="Last Name" placeholder="Labels move focus here" />
            </div>
          </div>
          
          <div>
            <h3 className="text-heading-5 text-neutral-900 font-sans mb-3">
              ARIA Descriptions
            </h3>
            <p className="text-body text-neutral-600 font-sans mb-3">
              Helper text and error messages are announced by screen readers:
            </p>
            <div className="space-y-4">
              <Input 
                label="Email with Helper Text"
                placeholder="user@example.com"
                type="email"
                helperText="We'll never share your email with anyone else"
              />
              <Input 
                label="Invalid Email Example"
                value="not-an-email"
                type="email"
                errorMessage="Please enter a valid email address"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-heading-5 text-neutral-900 font-sans mb-3">
              Required Field Indicators
            </h3>
            <p className="text-body text-neutral-600 font-sans mb-3">
              Required fields are marked with an asterisk and announced to screen readers:
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Input label="Optional Field" placeholder="Not required" />
              <Input label="Required Field" placeholder="Must be filled" required />
            </div>
          </div>
          
          <div>
            <h3 className="text-heading-5 text-neutral-900 font-sans mb-3">
              Keyboard Navigation
            </h3>
            <p className="text-body text-neutral-600 font-sans mb-3">
              All inputs are fully keyboard accessible with proper focus management:
            </p>
            <div className="space-y-3">
              <Input label="Tab to me first" placeholder="Press Tab to navigate" />
              <Input label="Then to me" placeholder="Continue with Tab" />
              <Input label="Finally to me" placeholder="Tab order is logical" />
            </div>
          </div>
          
          <div>
            <h3 className="text-heading-5 text-neutral-900 font-sans mb-3">
              High Contrast & Focus Indicators
            </h3>
            <p className="text-body text-neutral-600 font-sans mb-3">
              Focus rings meet WCAG contrast requirements and are clearly visible:
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Input label="Focus Test 1" placeholder="Click or tab to focus" />
              <Input label="Focus Test 2" placeholder="Notice the focus ring" />
            </div>
          </div>
          
          <div>
            <h3 className="text-heading-5 text-neutral-900 font-sans mb-3">
              Icon Accessibility
            </h3>
            <p className="text-body text-neutral-600 font-sans mb-3">
              Icons are properly hidden from screen readers when decorative:
            </p>
            <div className="space-y-4">
              <Input 
                label="Search Field"
                placeholder="Icons don't interfere with screen readers"
                icon={Search}
                iconPosition="left"
              />
              <Input 
                label="Email Field"
                placeholder="Decorative icons are aria-hidden"
                type="email"
                icon={Mail}
                iconPosition="left"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};