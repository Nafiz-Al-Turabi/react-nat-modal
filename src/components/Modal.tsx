"use client";

import React, { useEffect, useState } from "react";

import type { ModalProps } from "../types/modal.types";

export type { ModalProps, ModalSize } from "../types/modal.types";

export function Modal({
  isOpen,
  onClose,
  title = "Modal",
  children,
  footer,
  size = "md",
  bgColor = "bg-white",
  overlayBg = "bg-black/50",
  className = "",
  overlayClassName = "",
}: ModalProps) {
  const [isRendered, setIsRendered] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationFrame: number | undefined;
    let closeTimeout: ReturnType<typeof setTimeout> | undefined;

    if (isOpen) {
      animationFrame = requestAnimationFrame(() => {
        setIsRendered(true);
        animationFrame = requestAnimationFrame(() => setIsVisible(true));
      });
    } else {
      animationFrame = requestAnimationFrame(() => {
        setIsVisible(false);
        closeTimeout = setTimeout(() => setIsRendered(false), 200);
      });
    }

    return () => {
      if (animationFrame !== undefined) cancelAnimationFrame(animationFrame);
      if (closeTimeout !== undefined) clearTimeout(closeTimeout);
    };
  }, [isOpen]);

  if (!isRendered) return null;

  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    xxl: "max-w-6xl",
  };

  const isCustomBg =
    bgColor?.startsWith("#") ||
    bgColor?.startsWith("rgb") ||
    bgColor?.startsWith("hsl");

  const isCustomOverlayBg =
    overlayBg?.startsWith("#") ||
    overlayBg?.startsWith("rgb") ||
    overlayBg?.startsWith("hsl");

  return (
    <div
      style={isCustomOverlayBg ? { backgroundColor: overlayBg } : undefined}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-200 ease-out motion-reduce:transition-none ${
        !isCustomOverlayBg ? overlayBg : ""
      } ${isVisible ? "opacity-100" : "opacity-0"} ${overlayClassName}`}
    >
      {/* Modal */}
      <div
        style={isCustomBg ? { backgroundColor: bgColor } : undefined}
        className={`flex max-h-[90vh] w-full ${sizeClasses[size]} flex-col overflow-hidden rounded-2xl shadow-2xl transition-[opacity,scale,translate] duration-200 ease-out motion-reduce:transition-none ${
          !isCustomBg ? bgColor : ""
        } ${
          isVisible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-2 scale-90 opacity-0"
        } ${className}`}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-gray-200 px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="rounded-lg h-8 w-8 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
          >
            ✕
          </button>
        </div>

        {/* Content*/}
        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="shrink-0 border-t border-gray-200 px-6 py-4">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
