"use client";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronsUpDown, Plus } from "lucide-react";
import { useState } from "react";
import { useSidebar } from "@/components/ui/sidebar";
import { Geist } from "next/font/google";

const geist = Geist({ subsets: ["latin"] });

const systems = [
  { name: "Tofuyami", plan: "TXLY ERP E-Com" },
  { name: "Marjevin Soy Products", plan: "TXLY ERP Enterprise" },
  { name: "SoyLand", plan: "TXLY ERP Essentials" },
];

export default function SystemSelector() {
  const { isMobile } = useSidebar();
  const [activeSystem, setActiveSystem] = useState(systems[0]);
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"></div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">
                  {activeSystem.name}
                </span>
                <span className="truncate text-xs">{activeSystem.plan}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className={`w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg bg-txly-background border border-txly-border-primary ${geist.className}`}
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs text-txly-accent-foreground">
              Registered Systems
            </DropdownMenuLabel>
            {systems.map((system, index) => (
              <DropdownMenuItem
                key={system.name}
                onClick={() => setActiveSystem(system)}
                className="group gap-2 p-2 focus:bg-txly-accent"
              >
                <div className="flex size-6 items-center justify-center rounded-md border border-txly-border-primary group-focus:border-emerald-100"></div>
                <span className="text-txly-foreground">{system.name}</span>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator className="bg-txly-primary" />
            <DropdownMenuItem className="gap-2 p-2 group focus:bg-txly-accent">
              <div className="flex size-6 items-center justify-center rounded-md bg-txly-accent group-focus:bg-txly-background">
                <Plus className="size-4 text-txly-accent-foreground" />
              </div>
              <div className="font-medium text-txly-foreground">Add System</div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
