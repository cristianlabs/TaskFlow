"use client"

import { type InputHTMLAttributes, forwardRef } from "react";
import {clsx} from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label?: string;
    error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({label, error, className, id, ...props},ref) => {
        const inputId = id ?? label?.toLowerCase().replace(/\s+/g,"-");
        return (
            <div className="flex flex-col gap-1.5">
                {label &&(
                    <label htmlFor={inputId} className="test-sm font-medium text-neutral-700 dark:text-neutral-300">
                        {label}
                    </label>
                )}
                <input
                ref={ref}
                id={inputId}
                className={clsx(
                    "h-9 w-full rounded-lg border border-neutral-300 bg-white px-3 text-sm text-neutral-900 placeholder-neutral-400 transition-colors",
                    "focus: border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue500/20",
                    "dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder-neutral-500",
                    error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
                    className
                )}></input>
                {error}
            </div>
        );
    }
);

Input.displayName = "Input";