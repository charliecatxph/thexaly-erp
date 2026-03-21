"use client"

import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronsUpDown, Plus } from "lucide-react"
import { useState } from "react"
import { useSidebar } from "@/components/ui/sidebar"

const systems = [
    { name: "Tofuyami", plan: "TXLY ERP E-Com" },
    { name: "Marjevin Soy Products", plan: "TXLY ERP Enterprise" },
    { name: "SoyLand", plan: "TXLY ERP Essentials" },
]

export default function SystemSelector() {
    const { isMobile } = useSidebar()
    const [activeSystem, setActiveSystem] = useState(systems[0])
    return <SidebarMenu>
        <SidebarMenuItem>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <SidebarMenuButton
                        size="lg"
                        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                    >
                        <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">

                        </div>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                            <span className="truncate font-medium">{activeSystem.name}</span>
                            <span className="truncate text-xs">{activeSystem.plan}</span>
                        </div>
                        <ChevronsUpDown className="ml-auto" />
                    </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                    align="start"
                    side={isMobile ? "bottom" : "right"}
                    sideOffset={4}
                >
                    <DropdownMenuLabel className="text-xs text-muted-foreground">
                        Systems
                    </DropdownMenuLabel>
                    {systems.map((system, index) => (
                        <DropdownMenuItem
                            key={system.name}
                            onClick={() => setActiveSystem(system)}
                            className="gap-2 p-2"
                        >
                            <div className="flex size-6 items-center justify-center rounded-md border">

                            </div>
                            {system.name}

                        </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="gap-2 p-2">
                        <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                            <Plus className="size-4" />
                        </div>
                        <div className="font-medium text-muted-foreground">Add System</div>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </SidebarMenuItem>
    </SidebarMenu>
}