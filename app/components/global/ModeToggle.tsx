"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
// Assuming Button component is not strictly needed here as you use a custom button
// import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle({
  className = "",
}: {
  className?: string;
}): React.ReactElement {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* 1. Keep 'group' class on the button */}
        <button
          className={`group h-8 ml-2 w-fit px-3.5 hover:px-4 py-2 rounded-2xl flex gap-2 items-center outline outline-1 outline-accent-foreground/10 hover:outline-accent-foreground/20 transition-all duration-400 bg-[var(--bg-dynamic-1)] hover:bg-white/100 dark:hover:text-primary-foreground font-extralight hover:font-semibold hover:rounded-xl data-[state=open]:px-4
            data-[state=open]:outline-accent-foreground/20
            data-[state=open]:bg-white/100
            dark:data-[state=open]:text-primary-foreground
            data-[state=open]:font-semibold
              data-[state=open]:rounded-xl ${className}`}
        >
          <Sun
            className={
              "h-4 w-4 md:h-3 md:w-3 group-hover:h-4 group-hover:w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 group-data-[state=open]:h-4 group-data-[state=open]:w-4"
            }
          />
          <Moon
            className={
              "absolute h-4 w-4 md:h-3 md:w-3 group-hover:h-4 group-hover:w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 group-data-[state=open]:h-4 group-data-[state=open]:w-4"
            }
          />
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
