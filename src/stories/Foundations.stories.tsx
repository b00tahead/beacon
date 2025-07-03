import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Foundations/Design System',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Complete foundation showcase including colors, typography, spacing, and accessibility features of the Beacon Design System.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Colors: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-heading-3 text-neutral-900 font-sans mb-4">Primary Colors</h2>
        <div className="grid grid-cols-10 gap-2">
          {[
            { shade: 50, color: '#eff6ff' },
            { shade: 100, color: '#dbeafe' },
            { shade: 200, color: '#bfdbfe' },
            { shade: 300, color: '#93c5fd' },
            { shade: 400, color: '#60a5fa' },
            { shade: 500, color: '#3b82f6' },
            { shade: 600, color: '#2563eb' },
            { shade: 700, color: '#1d4ed8' },
            { shade: 800, color: '#1e40af' },
            { shade: 900, color: '#1e3a8a' },
          ].map(({ shade, color }) => (
            <div key={shade} className="text-center">
              <div 
                className="h-16 w-16 rounded border border-neutral-200 mx-auto mb-2"
                style={{ backgroundColor: color }}
              />
              <span className="text-caption font-sans text-neutral-600">{shade}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-heading-3 text-neutral-900 font-sans mb-4">Secondary Colors</h2>
        <div className="grid grid-cols-10 gap-2">
          {[
            { shade: 50, color: '#f8fafc' },
            { shade: 100, color: '#f1f5f9' },
            { shade: 200, color: '#e2e8f0' },
            { shade: 300, color: '#cbd5e1' },
            { shade: 400, color: '#94a3b8' },
            { shade: 500, color: '#64748b' },
            { shade: 600, color: '#475569' },
            { shade: 700, color: '#334155' },
            { shade: 800, color: '#1e293b' },
            { shade: 900, color: '#0f172a' },
          ].map(({ shade, color }) => (
            <div key={shade} className="text-center">
              <div 
                className="h-16 w-16 rounded border border-neutral-200 mx-auto mb-2"
                style={{ backgroundColor: color }}
              />
              <span className="text-caption font-sans text-neutral-600">{shade}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-heading-3 text-neutral-900 font-sans mb-4">Accent Colors</h2>
        <div className="grid grid-cols-10 gap-2">
          {[
            { shade: 50, color: '#f0fdfa' },
            { shade: 100, color: '#ccfbf1' },
            { shade: 200, color: '#99f6e4' },
            { shade: 300, color: '#5eead4' },
            { shade: 400, color: '#2dd4bf' },
            { shade: 500, color: '#14b8a6' },
            { shade: 600, color: '#0d9488' },
            { shade: 700, color: '#0f766e' },
            { shade: 800, color: '#115e59' },
            { shade: 900, color: '#134e4a' },
          ].map(({ shade, color }) => (
            <div key={shade} className="text-center">
              <div 
                className="h-16 w-16 rounded border border-neutral-200 mx-auto mb-2"
                style={{ backgroundColor: color }}
              />
              <span className="text-caption font-sans text-neutral-600">{shade}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-heading-3 text-neutral-900 font-sans mb-4">Success Colors</h2>
          <div className="grid grid-cols-5 gap-2">
            {[
              { shade: 100, color: '#dcfce7' },
              { shade: 300, color: '#86efac' },
              { shade: 500, color: '#22c55e' },
              { shade: 700, color: '#15803d' },
              { shade: 900, color: '#14532d' },
            ].map(({ shade, color }) => (
              <div key={shade} className="text-center">
                <div 
                  className="h-12 w-12 rounded border border-neutral-200 mx-auto mb-2"
                  style={{ backgroundColor: color }}
                />
                <span className="text-caption font-sans text-neutral-600">{shade}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-heading-3 text-neutral-900 font-sans mb-4">Error Colors</h2>
          <div className="grid grid-cols-5 gap-2">
            {[
              { shade: 100, color: '#fee2e2' },
              { shade: 300, color: '#fca5a5' },
              { shade: 500, color: '#ef4444' },
              { shade: 700, color: '#b91c1c' },
              { shade: 900, color: '#7f1d1d' },
            ].map(({ shade, color }) => (
              <div key={shade} className="text-center">
                <div 
                  className="h-12 w-12 rounded border border-neutral-200 mx-auto mb-2"
                  style={{ backgroundColor: color }}
                />
                <span className="text-caption font-sans text-neutral-600">{shade}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-heading-3 text-neutral-900 font-sans mb-4">Warning Colors</h2>
          <div className="grid grid-cols-5 gap-2">
            {[
              { shade: 100, color: '#fef3c7' },
              { shade: 300, color: '#fcd34d' },
              { shade: 500, color: '#f59e0b' },
              { shade: 700, color: '#b45309' },
              { shade: 900, color: '#78350f' },
            ].map(({ shade, color }) => (
              <div key={shade} className="text-center">
                <div 
                  className="h-12 w-12 rounded border border-neutral-200 mx-auto mb-2"
                  style={{ backgroundColor: color }}
                />
                <span className="text-caption font-sans text-neutral-600">{shade}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-heading-3 text-neutral-900 font-sans mb-4">Info Colors</h2>
          <div className="grid grid-cols-5 gap-2">
            {[
              { shade: 100, color: '#e0f2fe' },
              { shade: 300, color: '#7dd3fc' },
              { shade: 500, color: '#0ea5e9' },
              { shade: 700, color: '#0369a1' },
              { shade: 900, color: '#0c4a6e' },
            ].map(({ shade, color }) => (
              <div key={shade} className="text-center">
                <div 
                  className="h-12 w-12 rounded border border-neutral-200 mx-auto mb-2"
                  style={{ backgroundColor: color }}
                />
                <span className="text-caption font-sans text-neutral-600">{shade}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Typography: Story = {
  render: () => (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-display text-neutral-900 font-sans">Display Text</h1>
        <p className="text-body-sm font-sans text-neutral-600 mt-1">64px, Bold, -0.03em letter spacing</p>
      </div>
      
      <div>
        <h1 className="text-heading-1 text-neutral-900 font-sans">Heading 1</h1>
        <p className="text-body-sm font-sans text-neutral-600 mt-1">48px, Semibold, -0.03em letter spacing</p>
      </div>
      
      <div>
        <h2 className="text-heading-2 text-neutral-900 font-sans">Heading 2</h2>
        <p className="text-body-sm font-sans text-neutral-600 mt-1">40px, Semibold, -0.03em letter spacing</p>
      </div>
      
      <div>
        <h3 className="text-heading-3 text-neutral-900 font-sans">Heading 3</h3>
        <p className="text-body-sm font-sans text-neutral-600 mt-1">32px, Semibold, -0.02em letter spacing</p>
      </div>
      
      <div>
        <h4 className="text-heading-4 text-neutral-900 font-sans">Heading 4</h4>
        <p className="text-body-sm font-sans text-neutral-600 mt-1">28px, Semibold, -0.02em letter spacing</p>
      </div>
      
      <div>
        <h5 className="text-heading-5 text-neutral-900 font-sans">Heading 5</h5>
        <p className="text-body-sm font-sans text-neutral-600 mt-1">24px, Semibold, -0.02em letter spacing</p>
      </div>
      
      <div>
        <h6 className="text-heading-6 text-neutral-900 font-sans">Heading 6</h6>
        <p className="text-body-sm font-sans text-neutral-600 mt-1">20px, Semibold, -0.01em letter spacing</p>
      </div>
      
      <div>
        <p className="text-body-lg text-neutral-900 font-sans">Body Large Text</p>
        <p className="text-body-sm font-sans text-neutral-600 mt-1">18px, Normal weight, 1.6 line height</p>
      </div>
      
      <div>
        <p className="text-body text-neutral-900 font-sans">Body Text - This is the default body text size used throughout the design system. It provides excellent readability while maintaining efficient use of space.</p>
        <p className="text-body-sm font-sans text-neutral-600 mt-1">16px, Normal weight, 1.6 line height</p>
      </div>
      
      <div>
        <p className="text-body-sm text-neutral-900 font-sans">Body Small Text</p>
        <p className="text-body-sm font-sans text-neutral-600 mt-1">14px, Normal weight, 1.4 line height</p>
      </div>
      
      <div>
        <p className="text-caption text-neutral-600 font-sans">Caption Text</p>
        <p className="text-body-sm font-sans text-neutral-600 mt-1">12px, Normal weight, 1.4 line height</p>
      </div>
    </div>
  ),
};

export const Spacing: Story = {
  render: () => (
    <div className="space-y-6">
      <h2 className="text-heading-3 text-neutral-900 font-sans">4px Grid System</h2>
      <div className="space-y-4">
        {[
          { name: 'spacing-1', value: '4px', class: 'w-1' },
          { name: 'spacing-2', value: '8px', class: 'w-2' },
          { name: 'spacing-3', value: '12px', class: 'w-3' },
          { name: 'spacing-4', value: '16px', class: 'w-4' },
          { name: 'spacing-5', value: '20px', class: 'w-5' },
          { name: 'spacing-6', value: '24px', class: 'w-6' },
          { name: 'spacing-8', value: '32px', class: 'w-8' },
          { name: 'spacing-10', value: '40px', class: 'w-10' },
          { name: 'spacing-12', value: '48px', class: 'w-12' },
          { name: 'spacing-16', value: '64px', class: 'w-16' },
          { name: 'spacing-20', value: '80px', class: 'w-20' },
          { name: 'spacing-24', value: '96px', class: 'w-24' },
        ].map(({ name, value, class: className }) => (
          <div key={name} className="flex items-center gap-4">
            <div className={`h-4 bg-primary-500 ${className}`} />
            <span className="text-body font-sans text-neutral-900 w-20">{value}</span>
            <span className="text-body-sm font-sans text-neutral-600">{name}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const AccessibilityDemo: Story = {
  render: () => (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h2 className="text-heading-3 text-neutral-900 font-sans mb-4">WCAG 2.2 Contrast Compliance</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-heading-5 text-neutral-900 font-sans">High Contrast (7:1+)</h3>
            <div className="space-y-2">
              <div className="p-4 bg-white border border-neutral-200 rounded">
                <p className="text-body font-sans text-neutral-900">Primary text on white background</p>
              </div>
              <div className="p-4 rounded" style={{ backgroundColor: 'var(--color-primary-600)' }}>
                <p className="text-body font-sans text-white">White text on primary background</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-heading-5 text-neutral-900 font-sans">Medium Contrast (4.5:1+)</h3>
            <div className="space-y-2">
              <div className="p-4 bg-white border border-neutral-200 rounded">
                <p className="text-body font-sans text-neutral-600">Secondary text on white background</p>
              </div>
              <div className="p-4 rounded" style={{ backgroundColor: 'var(--color-neutral-100)' }}>
                <p className="text-body font-sans text-neutral-900">Dark text on light neutral background</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-heading-3 text-neutral-900 font-sans mb-4">Status Colors with Icons</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 rounded" style={{ backgroundColor: '#f0fdf4' }}>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#16a34a' }} />
            <span className="text-body font-sans" style={{ color: '#166534' }}>Success: Never relies on color alone</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded" style={{ backgroundColor: '#fef2f2' }}>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#dc2626' }} />
            <span className="text-body font-sans" style={{ color: '#991b1b' }}>Error: Always includes visual indicators</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded" style={{ backgroundColor: '#fffbeb' }}>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#d97706' }} />
            <span className="text-body font-sans" style={{ color: '#92400e' }}>Warning: Multiple visual cues provided</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded" style={{ backgroundColor: '#f0f9ff' }}>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#0284c7' }} />
            <span className="text-body font-sans" style={{ color: '#075985' }}>Info: Accessible to all users</span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-heading-3 text-neutral-900 font-sans mb-4">Focus Indicators</h2>
        <div className="space-y-3">
          <button className="px-4 py-2 text-body font-sans text-white rounded focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all" style={{ backgroundColor: '#2563eb' }}>
            Focusable Button (Tab to test)
          </button>
          <button className="px-4 py-2 text-body font-sans border border-neutral-300 text-neutral-900 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all">
            Secondary Button (Tab to test)
          </button>
        </div>
      </div>
    </div>
  ),
};