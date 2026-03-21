import { SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton } from "@/components/ui/sidebar"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { Truck, ChevronRight, Package, Building, Map, Car, ArrowLeft } from "lucide-react"

export default function TXLYERPLogistics() {
    return <SidebarMenu>
        <Collapsible
            asChild
            className="group/collapsible"
        >
            <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                        <Truck />
                        <span>Logistics</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <SidebarMenuSub>
                        <SidebarMenuSubItem>
                            <SidebarMenuSubButton asChild>
                                <div className="flex items-center gap-2">
                                    <Package />
                                    <span>Dispatch / Deliveries</span>
                                </div>
                            </SidebarMenuSubButton>
                            <SidebarMenuSubButton asChild>
                                <div className="flex items-center gap-2">
                                    <Building />
                                    <span>Warehouse Transfers</span>
                                </div>
                            </SidebarMenuSubButton>
                            <SidebarMenuSubButton asChild>
                                <div className="flex items-center gap-2">
                                    <Map />
                                    <span>Delivery Scheduling</span>
                                </div>
                            </SidebarMenuSubButton>
                            <SidebarMenuSubButton asChild>
                                <div className="flex items-center gap-2">
                                    <Car />
                                    <span>Fleet</span>
                                </div>
                            </SidebarMenuSubButton>
                            <SidebarMenuSubButton asChild>
                                <div className="flex items-center gap-2">
                                    <ArrowLeft />
                                    <span>Returns</span>
                                </div>
                            </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                    </SidebarMenuSub>
                </CollapsibleContent>
            </SidebarMenuItem>
        </Collapsible>
    </SidebarMenu>
}