import type { ReactNode } from "react";

export type ModalSize = "sm" | "md" | "lg" | "xl" | "xxl";

export interface ModalProps {
  /**
   * Controls whether the modal is open or closed.
   */
  isOpen: boolean;

  /**
   * Callback triggered when the modal requests to be closed.
   */
  onClose: () => void;

  /**
   * Title text rendered in the header and used for aria-label.
   * @default "Modal"
   */
  title?: string;

  /**
   * Modal body content.
   */
  children: ReactNode;

  /**
   * Optional footer content (such as action buttons).
   */
  footer?: ReactNode;

  /**
   * Modal size preset controlling maximum width.
   * @default "md"
   */
  size?: ModalSize;

  /**
   * Background color or Tailwind class for the modal dialog.
   * Supports Tailwind classes (e.g. "bg-white", "bg-neutral-900") or CSS colors (e.g. "#ffffff", "rgb(...)").
   * @default "bg-white"
   */
  bgColor?: string;

  /**
   * Background color or Tailwind class for the backdrop overlay.
   * Supports Tailwind classes (e.g. "bg-black/50", "backdrop-blur-sm bg-black/40") or CSS colors.
   * @default "bg-black/50"
   */
  overlayBg?: string;

  /**
   * Additional CSS classes for the modal dialog container.
   */
  className?: string;

  /**
   * Additional CSS classes for the outer backdrop overlay.
   */
  overlayClassName?: string;
}
