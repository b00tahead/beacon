import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from '../components/Icon';
import { 
  Heart, 
  Star, 
  User, 
  Settings, 
  Home, 
  Search, 
  Bell, 
  Mail, 
  Calendar,
  Download,
  Upload,
  Check,
  X,
  AlertTriangle,
  Info,
  ChevronRight,
  ChevronLeft,
  Plus
} from 'lucide-react';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A fully accessible icon component built on Lucide React that provides comprehensive ARIA support and follows WCAG 2.2 guidelines.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      description: 'The Lucide React icon component to render',
      control: false,
    },
    size: {
      description: 'Size of the icon (preset sizes or custom number)',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    className: {
      description: 'Additional CSS classes',
      control: 'text',
    },
    title: {
      description: 'Tooltip text for the icon',
      control: 'text',
    },
    'aria-label': {
      description: 'Accessible label for screen readers',
      control: 'text',
    },
    'aria-hidden': {
      description: 'Hide icon from screen readers (for decorative icons)',
      control: 'boolean',
    },
    role: {
      description: 'ARIA role for the icon',
      control: 'select',
      options: ['img', 'presentation'],
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: Heart,
    size: 'md',
    'aria-label': 'Favorite',
  },
};

export const Sizes: Story = {
  args: { icon: Star },
  render: () => (
    <div className="flex items-center gap-4">
      <Icon icon={Star} size="xs" aria-label="Extra small star" />
      <Icon icon={Star} size="sm" aria-label="Small star" />
      <Icon icon={Star} size="md" aria-label="Medium star" />
      <Icon icon={Star} size="lg" aria-label="Large star" />
      <Icon icon={Star} size="xl" aria-label="Extra large star" />
    </div>
  ),
};

export const CustomSize: Story = {
  args: {
    icon: User,
    size: 40,
    'aria-label': 'User profile',
  },
};

export const WithTitle: Story = {
  args: {
    icon: Settings,
    title: 'Open settings',
    'aria-label': 'Open settings',
  },
};

export const Decorative: Story = {
  args: { icon: Star },
  render: () => (
    <div className="flex items-center gap-2">
      <Icon icon={Home} aria-hidden role="presentation" />
      <span>Home Page</span>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Decorative icons should use aria-hidden and role="presentation" when they don\'t add meaning.',
      },
    },
  },
};

export const Interactive: Story = {
  args: { icon: Star },
  render: () => (
    <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-fast">
      <Icon icon={Search} size="sm" aria-hidden />
      Search
    </button>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Interactive elements using design system colors and timing tokens.',
      },
    },
  },
};

export const StandaloneInteractive: Story = {
  args: { icon: Star },
  render: () => (
    <button className="p-2 text-neutral-600 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded transition-colors duration-fast">
      <Icon icon={Bell} aria-label="View notifications" />
    </button>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Standalone interactive icons need accessible labels.',
      },
    },
  },
};

export const StatusIcons: Story = {
  args: { icon: Star },
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Icon icon={Check} className="text-success-600" aria-label="Success" />
        <span>Operation completed successfully</span>
      </div>
      <div className="flex items-center gap-2">
        <Icon icon={X} className="text-error-600" aria-label="Error" />
        <span>Operation failed</span>
      </div>
      <div className="flex items-center gap-2">
        <Icon icon={AlertTriangle} className="text-warning-600" aria-label="Warning" />
        <span>Please review your input</span>
      </div>
      <div className="flex items-center gap-2">
        <Icon icon={Info} className="text-info-600" aria-label="Information" />
        <span>Additional information available</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Status icons using semantic color tokens from the design system.',
      },
    },
  },
};

export const NavigationIcons: Story = {
  args: { icon: Star },
  render: () => (
    <div className="flex gap-2">
      <button className="p-2 border border-neutral-300 rounded hover:bg-neutral-50 transition-colors duration-fast">
        <Icon icon={ChevronLeft} aria-label="Previous page" />
      </button>
      <button className="p-2 border border-neutral-300 rounded hover:bg-neutral-50 transition-colors duration-fast">
        <Icon icon={ChevronRight} aria-label="Next page" />
      </button>
    </div>
  ),
};

export const IconGallery: Story = {
  args: { icon: Star },
  render: () => (
    <div className="grid grid-cols-6 gap-4 p-4">
      {[
        { icon: Heart, label: 'Heart' },
        { icon: Star, label: 'Star' },
        { icon: User, label: 'User' },
        { icon: Settings, label: 'Settings' },
        { icon: Home, label: 'Home' },
        { icon: Search, label: 'Search' },
        { icon: Bell, label: 'Bell' },
        { icon: Mail, label: 'Mail' },
        { icon: Calendar, label: 'Calendar' },
        { icon: Download, label: 'Download' },
        { icon: Upload, label: 'Upload' },
        { icon: Plus, label: 'Plus' },
      ].map(({ icon, label }) => (
        <div key={label} className="flex flex-col items-center gap-2 p-2">
          <Icon icon={icon} size="lg" aria-label={label} />
          <span className="text-caption text-neutral-600">{label}</span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Gallery of commonly used icons with their labels.',
      },
    },
  },
};