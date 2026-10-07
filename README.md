# react-nat-modal

A lightweight, accessible, animated, and fully customizable React modal component built for modern React applications.

## Features

- 🎨 **Customizable Backgrounds**: Customize the modal dialog and backdrop overlay with Tailwind CSS classes or direct CSS colors (Hex, RGB, HSL).
- 📐 **Multiple Size Presets**: Pre-configured responsive sizes (`sm`, `md`, `lg`, `xl`, `xxl`).
- ⚡ **Smooth Animations**: Built-in scale and opacity transitions for enter and exit animations.
- ♿ **Accessible**: Includes `dialog` role, `aria-modal`, and `aria-label` attributes.
- 🛠 **Fully Typed**: Written in TypeScript with full type definitions and JSDoc documentation.
- 📦 **Zero External State Dependencies**: Simple and predictable controlled component.

---

## Installation

```bash
# npm
npm install react-nat-modal

# bun
bun add react-nat-modal

# pnpm
pnpm add react-nat-modal

# yarn
yarn add react-nat-modal
```

### Peer Dependencies

Ensure you have React 18 or newer installed:
```bash
npm install react react-dom
```

---

## Quick Start

```tsx
import { useState } from "react";
import Modal from "react-nat-modal";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Welcome to react-nat-modal"
      >
        <p>This is the modal body content.</p>
      </Modal>
    </div>
  );
}
```

---

## Customizing Backgrounds

You can change both the **modal container background** (`bgColor`) and the **backdrop overlay background** (`overlayBg`).

### 1. Using Tailwind CSS Classes

```tsx
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Dark Theme Modal"
  bgColor="bg-neutral-900 text-white"
  overlayBg="bg-black/75"
>
  <p className="text-neutral-300">
    Styled easily with your existing Tailwind CSS utility classes.
  </p>
</Modal>
```

### 2. Using Direct CSS Color Values (Hex, RGB, HSL)

```tsx
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Custom Color Modal"
  bgColor="#1e293b"
  overlayBg="rgba(15, 23, 42, 0.7)"
>
  <p style={{ color: "#f8fafc" }}>
    Direct hex and rgba color strings are supported out of the box.
  </p>
</Modal>
```

---

## Sizes

Change modal max-width using the `size` prop:

| Size | Tailwind Max Width |
| :--- | :--- |
| `sm` | `max-w-md` (~448px) |
| `md` *(default)* | `max-w-lg` (~512px) |
| `lg` | `max-w-2xl` (~672px) |
| `xl` | `max-w-4xl` (~896px) |
| `xxl` | `max-w-6xl` (~1152px) |

```tsx
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  size="xl"
  title="Large Modal"
>
  <p>Large modal content...</p>
</Modal>
```

---

## Adding a Footer

Pass action buttons or custom markup using the `footer` prop:

```tsx
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm Action"
  footer={
    <div className="flex justify-end gap-3">
      <button
        onClick={() => setIsOpen(false)}
        className="px-4 py-2 border rounded-lg hover:bg-gray-50"
      >
        Cancel
      </button>
      <button
        onClick={() => {
          handleSave();
          setIsOpen(false);
        }}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Save
      </button>
    </div>
  }
>
  <p>Are you sure you want to save these changes?</p>
</Modal>
```

---

## Props Reference

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `isOpen` | `boolean` | **Required** | Controls visibility of the modal. |
| `onClose` | `() => void` | **Required** | Callback triggered when closing the modal (e.g. close button click). |
| `children` | `ReactNode` | **Required** | Content rendered inside the modal body. |
| `title` | `string` | `"Modal"` | Title text displayed in the header and set as the dialog's `aria-label`. |
| `footer` | `ReactNode` | `undefined` | Optional footer element (e.g. action buttons). |
| `size` | `"sm" \| "md" \| "lg" \| "xl" \| "xxl"` | `"md"` | Max-width size preset of the modal dialog. |
| `bgColor` | `string` | `"bg-white"` | Background color or class for the modal dialog. Accepts Tailwind classes or raw CSS colors (`#hex`, `rgb`, etc.). |
| `overlayBg` | `string` | `"bg-black/50"` | Background color or class for the backdrop overlay. Accepts Tailwind classes or raw CSS colors. |
| `className` | `string` | `""` | Extra CSS classes applied to the modal dialog card. |
| `overlayClassName` | `string` | `""` | Extra CSS classes applied to the outer backdrop overlay container. |

---

## TypeScript Support

All types can be imported directly:

```tsx
import type { ModalProps, ModalSize } from "react-nat-modal";
```

---

## License

MIT
