import { SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton } from "@/components/ui/sidebar"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { Heart, ChevronRight, Users, DoorOpen, PhilippinePeso, UserPlus, Box, Phone, Building, TrendingUp, Leaf, Droplet } from "lucide-react"

export default function TXLYERPInventory() {
    return <SidebarMenu>
        <Collapsible
            asChild
            className="group/collapsible"
        >
            <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                        <Box />
                        <span>Inventory</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <SidebarMenuSub>
                        <SidebarMenuSubItem>
                            <SidebarMenuSubButton asChild>
                                <div className="flex items-center gap-2">
                                    <Droplet />
                                    <span>Products</span>
                                </div>
                            </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                            <SidebarMenuSubButton asChild>
                                <div className="flex items-center gap-2">
                                    <Building />
                                    <span>Warehouse Management</span>
                                </div>
                            </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                            <SidebarMenuSubButton asChild>
                                <div className="flex items-center gap-2">
                                    <TrendingUp />
                                    <span>Analytics & Forecasts</span>
                                </div>
                            </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                            <SidebarMenuSubButton asChild>
                                <div className="flex items-center gap-2">
                                    <Leaf />
                                    <span>Replenishment Rules</span>
                                </div>
                            </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                    </SidebarMenuSub>
                </CollapsibleContent>
            </SidebarMenuItem>
        </Collapsible>
    </SidebarMenu>
}