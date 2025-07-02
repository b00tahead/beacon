# Design System Checklist

## Core Components

Components are the main building blocks for user interfaces. Building a reusable component library enhances your product development workflow by reducing design and tech debt and speeding up the process. Core components can't be broken down into granular pieces without losing their meaning.

## Accordion (0/4)

Accordion toggles the visibility of content regions when the trigger element gets pressed.

### Active state

Accordion comes in two states for toggling its content visibility. If an accordion trigger displays an icon, it should be visually distinct between states.

### Composition

Content area should be flexible enough to support various types of content, including other components.

### Toggle transition

Add a subtle animation to help users understand and follow the component behavior when switching between states.

### Content and trigger relation

Focusing the content area with assistive technologies should announce additional context from the trigger element.

**References:** Reshaped: Accordion, MUI: Accordion, Radix: Accordion

---

## Alert (0/6)

Alert displays a prominent message about the whole page or its specific area.

### Colors

It's crucial to differentiate the alert's visual appearance based on its role. If you're using background colors for role differentiation, ensure there's enough contrast ratio with the content displayed inside the alert.

### Title support

Supporting a title can help your user understand the context of the message faster for longer alert messages.

### Icon support

Icon illustrates the role of the alert and provides an additional hint about it for colorblind people.

### Supplementary actions

Actions in the alert should relate to their text and provide a way to react to the message sent to the user.

### Responsiveness

Alert can adapt to the viewport size, usually becoming full-width for mobile to save some space.

### Accessibility roles

When using assistive technologies, alerts should announce their accessibility role correctly.

**References:** Reshaped: Alert, Atlassian Design System: Banner, MUI: Alert

---

## Avatar (0/7)

Thumbnail of a user photo, organization, or a visual representation of other types of content.

### Image

Avatars should mask an image into their shape and work with any image size since they may get this image from unknown data sources.

### Image fallback

When not passing an image or there is an image loading error, avatars should be able to show a fallback with a different image, icon, or text initials.

### Sizes

There are many contexts to use an avatar, which require different sizes for the component. Use at least 2-3 different sizes for average projects and ensure there's at least a small size available.

### Colors

A background color should be applied to the avatar shape when used without an image. Make sure that icons and text have enough contrast ratio with the background according to the WCAG AA standard.

### Shape

Avatars might support multiple shapes, like square or circle, based on the area they are used in.

### Avatar groups

Multiple avatars can be stacked together to represent a group of users.

### Accessibility label

Avatar should provide an accessibility label when used for non-decorative images and has no text representation of its contents.

**References:** Reshaped: Avatar, Polaris: Avatar, Chakra: Avatar

---

## Badge (0/7)

Compact element that represents the status of an object or user input.

### Colors

Badges may play various roles in your product, and having a predefined color for each role should help users understand their meaning. When changing colors, make sure the text has enough contrast ratio with the background according to the WCAG AA standard.

### Variants

Based on where in the product badges are rendered, you might support multiple component variants. For example, you can have some badges using a faded background to avoid drawing too much attention.

### Sizes

Badges can come in multiple sizes depending on where a badge is used. For example, you can use the large size for marketing pages.

### Icon support

To better illustrate the meaning of a badge, you can display an icon next to the text. Make sure that for small badges, icon contents are still recognizable.

### Dismissible action

Badges can be used as a dynamic way to display selected values, and there should be a way to dismiss them.

### Empty state

Badges can be used without any text content inside. That usually requires changing their styles to preserve the correct shape.

### Positioning

When used as a status badge, like a notification indicator – you should be able to position it relative to those elements.

**References:** Reshaped: Badge, Material: Badge, Spectrum: Badge

---

## Button (0/10)

Interactive element used for single-step actions.

### Colors

Buttons may play various roles in your product, and having a predefined color for each role should help users understand their meaning. When changing colors, make sure the text has enough contrast ratio with the background according to the WCAG AA standard.

### Variants

When using multiple buttons, there should be a way to differentiate between primary and secondary actions. Buttons may play different roles for the user or be used on various surfaces, and they have to change how they look.

### Sizes

Depending on where a button will be used, it can come in multiple sizes. For example, you can use the small size for dense areas of your application.

### Icon support

Icons easily communicate the button's purpose when used next to its label or can be used without text when there's insufficient space. Ensure the accessibility label is provided when used with an icon only.

### Hover state

Clearly show that the button is interactive when hovered with a mouse cursor.

### Active state

Provide a visual cue when a button is pressed, used for selecting a value, or toggles other elements on the page.

### Loading state

Indicate when users have to wait for the result of their action after pressing a button. If a spinner is used to display this state, ensure it's not changing the original button width or height.

### Disabled state

Visually shows that the button is not interactive and restricts it from being pressed.

### Accessibility role

Button should correctly announce the button or link accessibility roles and automatically resolve it based on the properties passed to it.

### Focus indicator

Button should have a visible focus indicator when it's focused using the keyboard or assistive technologies.

**References:** Reshaped: Button, Atlassian Design System: Button, Material: Button

---

## Breadcrumbs (0/4)

Top-level product navigation that helps user understand the location of the current page and navigate back to its parents.

### Icon support

Icons help to communicate the roles of the pages to which breadcrumbs items link. Most of the time, you want to ensure they're used consistently, not only for random items in the list.

### Disabled state

Each item in the list can be disabled separately to prevent users from navigating to the page.

### Collapsed state

If breadcrumbs items don't fit into the parent container, the list should support collapsing items only to keep the relevant ones visible to the user.

### Custom separator

Depending on the usage context, items in the breadcrumbs list can use different separator styles.

**References:** Reshaped: Breadcrumbs, Atlassian Design System: Breadcrumbs, Spectrum: Breadcrumbs

---

## Calendar (0/7)

Grid displaying days in one or more months and allow users to select a single date or a date range.

### Display modes

Calendar might be used in various product areas and viewports. Make sure to support different display modes for rendering more than one month or a vertical layout.

### Selected state

Calendar should support a single date and a selection range. Selected dates should be visually highlighted, and the range between selected dates should be visible to the users.

### Month selection

To help users navigate longer date ranges, the calendar should provide an easy way to switch displayed months.

### Day names

Provide short labels for the weekday names in addition to the date numbers to let users easier navigate the date selection.

### Internationalisation

Calendars should be localized for all country regions supported by the product. That includes date formats and correct ordering of the weekdays.

### Keyboard navigation

Calendar dates should be focusable with keyboard and assistive technologies. Further navigation on the dates should happen with keyboard arrows or screen reader navigation and support switching the month by navigating out of a column or a row.

### State announcement

Selected dates should be announced by the assistive technologies when they get focused.

**References:** Atlassian Design System: Calendar, React Spectrum: Calendar, MUI: Date picker

---

## Card (0/5)

Container to group information about subjects and their related actions.

### Content composition

Content area should be flexible enough to support various types of content, including other components.

### Media sections

Cards are frequently used with media content. The most popular options are having a full-width area on top of the content or an area at one of the card's sides.

### Supplementary actions

Cards can be used with actions usually placed at the bottom of the card, or the card itself can be tappable and represent an action.

### Responsiveness

On mobile viewports, cards are usually full-width to save space for the content.

### Card groups

Multiple cards can be grouped in a single list of content sections.

**References:** Reshaped: Card, MUI: Card, Material: Card

---

## Carousel (0/6)

Horizontal scrollable areas used for displaying grouped content.

### Navigation controls

Carousels should be accessible for navigating its content on devices that work with the mouse instead of touch events.

### Item composition

Content area of the carousel items should be flexible enough to support various types of content, including other components.

### Item sizes

Layout of the items should be flexible to support different types of content. For mobile devices, make sure to show a part of the carousel item that doesn't fit into the viewport to indicate the scrollable area.

### Touch navigation

Carousel content should be rendered inside a scrollable area to support touch events.

### Responsiveness

Carousel items layout might require adjustments based on the available space.

### Keyboard navigation

Keyboard and assistive technologies users should be able to navigate the carousel content without clicking on the navigation controls.

**References:** Reshaped: Carousel, Mantine: Carousel, Mistica: Carousel

---

## Checkbox (0/7)

Form field used to select one or multiple values from the list.

### Label

There should be a text label linked with the checkbox field. Clicking the label should also trigger the checkbox selection. If the label is not rendered on the page, assistive technologies should still announce it.

### Checked state

Display when the checkbox gets selected and is used for the form submission.

### Error state

Use an error state for form validation when the error is related to the checkbox field. Always use a text error along with a different field color.

### Disabled state

Use a disabled state to prevent checkbox interactions and remove its value from the submitted form values.

### Indeterminate state

Visually display when the checkbox has children selectable elements and only some are selected.

### Checkbox group

Checkboxes can be grouped to work with multiple values at the same time.

### Keyboard support

Checkbox selections should be triggered with the keyboard. Using native elements for this should provide this kind of interaction automatically.

**References:** Reshaped: Checkbox, Audi Design System: Checkbox, MUI: Checkbox

---

## Divider (0/2)

Element for visual content separation.

### Direction

Dividers should separate both horizontal and vertical lists of content.

### Accessibility role

If the divider is playing a non-decorative role in the layout, its role should be announced by the assistive technologies.

**References:** Reshaped: Divider, React Spectrum: Divider, Mantine: Divider

---

## Dropdown (0/6)

List of contextual actions that users can trigger.

### Content composition

Dropdowns may be used for context menus, product navigation, and other purposes. Their content area should be flexible enough to support various types of content, including other components.

### Hover trigger

Dropdown should support displaying its content on hover events. The same behavior should happen for keyboard users once its trigger gets focused.

### Dynamic positioning

Dropdown content should be displayed based on the current position of the trigger element on the screen and always stay visible to the user.

### Responsiveness

Dropdown content should be adjusted if it doesn't fit the screen the same way on mobile devices as on desktop.

### Focus trapping

Once dropdown content is opened, the focus ring should move inside its content area and return to the trigger element when closed.

### Keyboard navigation

Dropdown should be accessible for keyboard and assistive technologies. Users should be able to close the dropdown using a separate close action, or once they tab outside the content area.

**References:** Reshaped: Popover, Atlassian Design System: Dropdown menu, MUI: Popover

---

## Icon (0/3)

Wrapper for SVG assets to control their appearance.

### Colors

Icons should support color values available in design system tokens. Additionally, it's a good practice to support color inheritance from their parent element.

### Sizes

Icons should have several predefined sizes to provide a holistic experience across the product. Typography pairings may be used for these size values to ensure they align with the text sizes.

### Interactivity

Icons are used as decorative elements most of the time. If an icon is meant to be interactive – that functionality should be included using buttons, links, or other interactive components.

**References:** Reshaped: Icon, React Spectrum: Icon, Polaris: Icon

---

## Image (0/4)

Utility for displaying images and controlling their behavior.

### Sizes

Image should be flexible in terms of supported sizes. Besides just supporting width and height – add support for aspect ratio to scale its proportions based on the parent element dynamically.

### Image fallback

Display a fallback when the image URL is incorrect or undefined. That can be an empty box with a background, an icon, or a static placeholder image.

### Screen density support

Depending on the screen density, you should support loading multiple image assets of different sizes and serve the relevant one to the user.

### Alt text

When the image is non-decorative, it should provide an alt text describing the picture contents.

**References:** Reshaped: Image, Chakra: Image, Mantine: Image

---

## Link (0/6)

Interactive text element used for navigation within the text paragraphs.

### Icon support

An icon can be used next to the link to communicate the purpose of the link. Icons shouldn't be used inside a link without a text label.

### Colors

Links may play various roles in your product, and having a predefined color for each role should help users understand their meaning. Since the link is a text element, it should be able to automatically inherit the color defined by its parent element, the same as other text content.

### Disabled state

Visually shows that the link is not interactive and restricts it from being pressed.

### Font inheritance

Links should be able to inherit the typography styles when used as a part of the text element.

### Multiline display

When used inside a text paragraph, links should support multiline display without breaking the text flow.

### Accessibility role

Links should correctly announce the button or link accessibility roles automatically resolve it based on the properties passed to it.

**References:** Reshaped: Link, React Spectrum: Link, MUI: Link

---

## List (0/3)

List is used to display a list of items.

### Order

List items can use bulleted, numbered, and other styles and types of ordering.

### Content composition

List item content areas should be flexible enough to support various types of content, including other components.

### Accessibility role

Assistive technologies should announce lists with the correct role and number of items displayed.

**References:** Polaris: List, Carbon Design System: List, Mantine: List

---

## Loading Indicator (0/5)

Animated element that communicates progress without telling how long the process will take.

### Colors

Loading indicators might be used inside the elements with various roles and follow their color scheme.

### Sizes

Loading indicators might provide multiple sizes, depending on the size of the areas where the loading indicator is rendered.

### Loading duration

In some cases, the wait time can't be determined. The loading indicator should be shown until the loading finishes or an error happens. In other cases, it's better to indicate the time left until the loading is finished.

### Reduced motion

The loading indicator should be synced with the system motion settings and reduce its animation speed when reduced motion settings are turned on.

### Accessibility label

If the loading indicator is standalone – provide an accessibility label for the content area it's loading.

**References:** Reshaped: Loader, Atlassian Design System: Spinner, Carbon Design System: Loading

---

## Modal (0/8)

Container appearing in front of the main content to provide critical information or an actionable piece of content.

### Content composition

The main content area should be flexible enough to support various types of content, including other components.

### Supplementary actions

Since content in the modal may be actionable, it's essential to have an area for action elements. This area is usually located at the bottom of the modal container.

### Close action

Modals should provide a straightforward way to close, as they block content when open. This may be either a separate close button or one of the supplementary actions.

### Positioning

Modals can be positioned in the center of the screen or displayed as sliding sheets on either side of the screen.

### Sizes

Provide support for changing the modal height and width based on the content you display.

### Focus trapping

When the modal gets opened, the user focus should move to the first focusable element and stay trapped inside it. When the modal is closed, the focus should return to the last active element.

### Keyboard navigation

It should be possible to close a modal by pressing the Esc key, and all the focusable elements inside the modal container should be accessible with keyboard navigation.

### Title and subtitle labeling

Modals should use the correct accessibility role, and they should be labeled by the title and subtitle elements. If there is no visible title or subtitle, it may use an accessibility label instead.

**References:** Reshaped: Modal, Atlassian Design System: Modal Dialog, React Spectrum: Dialog

---

## Pagination (0/6)

Pagination enables a selection from a range of pages.

### Selected page state

Visually highlight the selected page in the list and make it non-interactive.

### Page display ranges

Define the ranges for pages rendered around the selected page. It helps render only a limited number of pages but lets the users navigate faster than moving by 1 page at a time.

### Amount of items per page

Provide an option to select the number of paginated items displayed on the page.

### Indeterminate amount of pages

When you don't know the total number of available pages beforehand, use a different display mode to navigate pages individually.

### Full page label announcements

Pagination should provide clear, dynamic labels for each page for assistive technologies instead of just announcing the number without context.

### State announcement

Pagination should announce when a selected page is focused.

**References:** MUI: Pagination, Atlassian Design System: Pagination, Carbon Design System: Pagination

---

## Progress Bar (0/4)

Bar displaying progress for a task that takes a long time or consists of several steps.

### Label

Provide support for visually displaying a label explaining what a progress bar is responsible for.

### Sizes

Loading indicators might provide multiple sizes, depending on the size of the areas where the loading indicator is rendered.

### Duration

In some cases, the wait time can't be determined. The loading indicator should be shown until the loading finishes or an error happens. In other cases, it's better to indicate the time left until the loading is complete.

### Accessibility label

Provide support for adding an accessibility label in case you can't display a label in the interface.

**References:** Reshaped: Progress, Atlassian Design System: Progress bar, Polaris: Progress bar

---

## Input Radio (0/5)

Radio is a form element used for selecting one option from a list.

### Label

There should be a text label linked with the radio field. Clicking the label should also trigger the checkbox selection. If the label is not rendered on the page, assistive technologies should still announce it.

### Checked state

Display when the radio gets selected and is used for the form submission.

### Error state

Use an error state for form validation when the error is related to the radio field. Always use a text error along with a different field color.

### Radio group

Radio buttons are always used as a group to avoid locking the selection after one of the radio buttons is checked.

### Keyboard support

Radio selection should be triggered with the keyboard. Using native elements for this should provide this kind of interaction automatically.

**References:** Reshaped: Radio, Material: Radio button, Polaris: Radio button

---

## Select (0/8)

Select lets you choose a single value from a list of options.

### Label

Text labels linked with the Select field can provide users with additional context. Clicking the label should also trigger the select dropdown.

### Error state

Use an error state for form validation when the error is related to the select only. Display an additional error icon for better accessibility.

### Disabled state

Use the disabled state to prevent Select interactions and remove its value from the submitted form values.

### Placeholder

When no value is selected – display a placeholder value. You can use the same placeholder value to let users reset the select value back to the default.

### Helper text

Provide users with additional context about the select purpose and the requirements for the selection.

### Icon support

Add an area for displaying an icon at the start of the field to communicate the purpose of the Select as a component or the selected value.

### Prefix

Add an area for custom content to make the selection more contextual for the user. For example, you can display country flags in your country code selection.

### Accessibility label

In case you don't provide a visual text label for select, make sure to provide an accessibility label still describing the purpose of the component.

**References:** Reshaped: Select, Polaris: Select, Atlassian Design System: Select

---

## Skeleton (0/4)

Placeholder replacing page elements while their data is loading.

### Sizes

Skeleton should be able to match components of various sizes available in your design system to avoid unnecessary layout shifts once data is loaded.

### Shapes

Skeleton should be able to match components of various shapes available in your design system to keep the loading state aligned with the actual components' layout.

### Composition

You can compose simple skeletons into more advanced layouts. You don't have to 1:1 map your application interface with skeletons.

### Reduced motion

Reduce or altogether remove the animation for the reduced motion user preference.

**References:** Reshaped: Skeleton, MUI: Skeleton, Chakra: Skeleton

---

## Switch (0/5)

Toggle for immediately changing the state of a single item.

### Label

There should be a text label linked with the switch. Clicking the label should also trigger the switch selection. If the label is not rendered on the page, assistive technologies should still announce it.

### Checked state

Display when the switch gets selected and activates the underlying functionality. Often, a switch is used to immediately update the data after it's selected.

### Disabled state

Use a disabled state to prevent switch interactions.

### Keyboard navigation

Switch selection should be triggered with the keyboard. Using native elements for this should provide this kind of interaction automatically.

### Accessibility label

In case you don't provide a visual text label for Switch, make sure to provide an accessibility label still describing the purpose of the component.

**References:** Reshaped: Switch, Mantine: Switch, Material: Switch

---

## Tabs (0/7)

Navigation between multiple pages or content sections.

### Content composition

Content area should be flexible enough to support various types of content, including other components.

### Variants

To support different rendering contexts, tabs might support multiple variants. For example, they might be rendered as pills when used directly on the page while using an underlined variant for tabs rendered inside cards.

### Selected state

Since tabs always display the content from one of their panels, one of the tab triggers should always be selected and highlighted visually.

### Disabled state

Tab triggers can be disabled to prevent users from switching to a specific tab panel.

### Icon support

To better illustrate the meaning of each tab, you can display an icon next to the tab trigger text.

### Equal width layout

When used to take the entire width of the parent container, tab triggers can be stretched to take equal horizontal space.

### Keyboard support

When interacting with tabs using the keyboard, they should support arrow navigation to switch between the previous and next panels. The Home and End buttons should also move the selection to the first and last panels, respectively.

**References:** Reshaped: Tabs, Atlassian Design System: Tabs, MUI: Tabs

---

## Text Area (0/7)

Form field to enter and edit multiline text.

### Label

Text labels linked with the text area can provide users with additional context. Clicking the label should move the focus to the field.

### Error state

Use an error state for form validation when the error is related only to the Text area.

### Disabled state

Use a disabled state to prevent text area interactions and remove its value from the submitted form values.

### Placeholder

When the text area value is empty – display a placeholder value. Make sure that it's not used instead of the label.

### Helper text

Provide users with additional context about the Text area purpose and the requirements for the expected value.

### Sizes

Depending on where the text area will be used, it can come in multiple sizes. For example, you can use the large size for the forms on marketing pages.

### Accessibility label

In case you don't provide a visual text label for the text area, make sure to provide an accessibility label still describing the purpose of the component.

**References:** Reshaped: Text area, Chakra: Text area, React Spectrum: Text area

---

## Text Field (0/9)

Form field to enter and edit single-line text.

### Label

Text labels linked with the text field can provide users with additional context. Clicking the label should move the focus to the field.

### Error state

Use an error state for form validation when the error is related only to the text field.

### Disabled state

Use a disabled state to prevent text field interactions and remove its value from the submitted form values.

### Placeholder

When the text field value is empty – display a placeholder value. Make sure that it's not used instead of the label.

### Helper text

Provide users with additional context about the text field purpose and the requirements for the expected value.

### Icon support

Add an area for displaying an icon at the start of the field to communicate the purpose of the text field as a component or the field value.

### Prefix / Suffix

Add an area for custom content to make the selection more contextual for the user. For example, you can display payment providers in the text field for credit card numbers.

### Sizes

Depending on where the text field will be used, it can come in multiple sizes. For example, you can use the large size for the forms on marketing pages.

### Accessibility label

In case you don't provide a visual text label for the text field, make sure to provide an accessibility label still describing the purpose of the component.

**References:** Reshaped: Text field, React Spectrum: Text field, Polaris: Text field

---

## Toast (0/8)

Notification message or a piece of information displayed above the page content.

### Content composition

Content area should be flexible enough to support various types of content, including other components.

### Colors

Depending on the role of the notification displayed in the toast, it can come in multiple colors. For example, it can be colored red for error notifications.

### Icon support

Add an area for displaying an icon at the start of the toast to communicate the purpose of the notification.

### Timeout

Toasts are usually dismissed after a timeout. Make sure to provide a long enough timeout to let the users read the message. If there is no timeout – provide a button to close the notification.

### Stacking

When multiple toasts have been triggered, stack them on top of each other to avoid cluttering the screen.

### Supplementary action

Actions in the notifications should be contextual to the notification purpose. For example, if you notify the user about deleting content, an action element can help them undo this operation.

### Focus management

When toasts have actions, they should be focusable from the keyboard to trigger them. While the focus is inside the toast container – timeout should get disabled.

### Reduced motion

Reduce or altogether remove the animation for the reduced motion user preference.

**References:** Reshaped: Toast, Polaris: Toast, Material: Snackbar

---

## Tooltip (0/3)

Contextual text information display on element hover or focus.

### Positioning

When the tooltip default position doesn't let it fit into the viewport – make sure to dynamically switch its position to another value.

### Timeout

Wait briefly before opening the Tooltip to ensure they don't open while the user moves their cursor around the screen.

### Keyboard support

Tooltips should be accessible not only on mouse hover but also on the trigger element focus.

**References:** Reshaped: Tooltip, React Spectrum: Tooltip, Atlassian Design System: Tooltip

---

## About

**Need more than a checklist?**

We've used this checklist to build Reshaped, a professionally crafted design system for Figma and React. Reshaped provides regular package licenses with unlimited updates, access to the source code of the system and design system focused consulting.

[Learn more](https://reshaped.so)

_Design System Checklist_
