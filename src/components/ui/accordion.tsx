"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export const Accordion = AccordionPrimitive.Root;

export function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      className={cn("border-b border-line", className)}
      {...props}
    />
  );
}

export function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-cursor="link"
        className={cn(
          "group flex flex-1 items-center justify-between gap-4 py-7 text-left font-display text-lg font-medium tracking-tight transition-colors hover:text-violet-2 sm:text-xl",
          className
        )}
        {...props}
      >
        {children}
        <Plus className="h-5 w-5 shrink-0 text-mist-faint transition-transform duration-300 group-data-[state=open]:rotate-45 group-data-[state=open]:text-cyan" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      className={cn(
        "overflow-hidden text-mist-dim data-[state=closed]:animate-[accordion-up_0.3s_ease] data-[state=open]:animate-[accordion-down_0.3s_ease]",
        className
      )}
      {...props}
    >
      <div className="pb-7 pr-10 leading-relaxed">{children}</div>
    </AccordionPrimitive.Content>
  );
}
