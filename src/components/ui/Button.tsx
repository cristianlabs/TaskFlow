"use client"

import { type ButtonHTMLAttributes, forwardRef } from "react";
import { clsx } from "clsx"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    variant?: "primary" | "ghost" | "outline" | "danger";
    size?: "sm" | "md" | "lg";
    loading?: boolean;
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({variant = "primary",size = "md", loading, disabled, className, children, ...props}, ref) => {
        return(
            <button
                ref={ref}
                disabled={disabled || loading}
                className={clsx(
                    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-color focus-visible:outline-none focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50",
                    {
                        "bg-blue-600 text-white hover:bg-blue-700": variant === "primary",
                        "bg-transparent text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800": variant === "ghost",
                        "border border-neutral-300 bg-transparent text-neutral-700 hover:bg-neutral-50 dark:border-neutral-300": variant === "outline",
                        "bg-red-600 text-white hover:bg-red-700": variant === "danger",
                    },
                    {
                        "h-7 px-2.5 text-xs": size === "sm",
                        "h-9 px-4 text-sm": size === "md",
                        "h-11 px-6 text-base": size === "lg",
                    },
                    className
                )}
                {...props}
            >
                {loading &&(
                    <svg className="h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                    </svg>
                )}
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";