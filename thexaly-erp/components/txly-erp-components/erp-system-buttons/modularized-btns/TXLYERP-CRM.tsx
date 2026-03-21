"use client"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Globe2, ChevronRight, ArrowLeftRight, AlertCircle, Users, Mail, Calendar } from "lucide-react"

export default function TXLYERPCRM() {
    return <SidebarMenu>
        <Collapsible
            asChild
            className="group/collapsible"
        >
            <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                        <Globe2 />
                        <span>CRM</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <SidebarMenuSub>
                        <SidebarMenuSubItem>
                            <SidebarMenuSubButton asChild>
                                <div className="flex items-center gap-2">
                                    <ArrowLeftRight />
                                    <span>Leads</span>
                                </div>
                            </SidebarMenuSubButton>
                            <SidebarMenuSubButton asChild>
                                <div className="flex items-center gap-2">
                                    <AlertCircle />
                                    <span>Opportunities</span>
                                </div>
                            </SidebarMenuSubButton>
                            <SidebarMenuSubButton asChild>
                                <div className="flex items-center gap-2">
                                    <Users />
                                    <span>Customers</span>
                                </div>
                            </SidebarMenuSubButton>
                            <SidebarMenuSubButton asChild>
                                <div className="flex items-center gap-2">
                                    <Mail />
                                    <span>Messages</span>
                                </div>
                            </SidebarMenuSubButton>
                            <SidebarMenuSubButton asChild>
                                <div className="flex items-center gap-2">
                                    <Calendar />
                                    <span>Appointments / Scheduling</span>
                                </div>
                            </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                    </SidebarMenuSub>
                </CollapsibleContent>
            </SidebarMenuItem>
        </Collapsible>
    </SidebarMenu>
}