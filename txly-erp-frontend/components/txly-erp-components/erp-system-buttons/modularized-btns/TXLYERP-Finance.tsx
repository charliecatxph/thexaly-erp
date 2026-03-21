import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { CreditCard, ChevronRight, ArrowUpRight, ArrowDownLeft, Paperclip, Banknote, FileText, Receipt, PhilippinePeso } from "lucide-react"
import { useRouter } from "next/navigation"
import { useSidebar } from "@/components/ui/sidebar"
import { useEffect, useState } from "react"
import { useAppSelector } from "@/lib/redux/hooks"
import type { NaviTree } from "@/lib/redux/slices/sphereNavigation"
import { useBreadcrumbs } from "@/contexts/BreadcrumbsContext"

export default function TXLYERPFinance() {
    const router = useRouter();
    const { breadcrumbs } = useBreadcrumbs();
    const { setOpenMobile } = useSidebar();
    const [currentLevel, setCurrentLevel] = useState<NaviTree | null>(breadcrumbs[breadcrumbs.length - 1]);

    useEffect(() => {
        setCurrentLevel(breadcrumbs[breadcrumbs.length - 1]);
    }, [breadcrumbs])

    return <SidebarMenu>
        <Collapsible
            asChild
            className="group/collapsible"
        >
            <SidebarMenuItem>
                <SidebarMenuButton>
                    <div className="flex items-center gap-2 w-full" onClick={() => { router.push("/accounting"); setOpenMobile(false) }}>
                        <CreditCard />
                        <span>Accounting / Finance</span>
                    </div>
                    <CollapsibleTrigger asChild>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </CollapsibleTrigger>
                </SidebarMenuButton>

                <CollapsibleContent>
                    <SidebarMenuSub>
                        <SidebarMenuSubItem>
                            <SidebarMenuSubButton asChild onClick={() => { router.push("/accounting/payables"); setOpenMobile(false) }} isActive={currentLevel === "Payables"}>
                                <div className="flex items-center gap-2">
                                    <ArrowUpRight />
                                    <span>Payables</span>
                                </div>
                            </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                            <SidebarMenuSubButton asChild onClick={() => { router.push("/accounting/receivables"); setOpenMobile(false) }} isActive={currentLevel === "Receivables"}>
                                <div className="flex items-center gap-2">
                                    <ArrowDownLeft />
                                    <span>Receivables</span>
                                </div>
                            </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                            <SidebarMenuSubButton asChild onClick={() => { router.push("/accounting/journals"); setOpenMobile(false) }} isActive={currentLevel === "Journals"}>
                                <div className="flex items-center gap-2">
                                    <Paperclip />
                                    <span>Journals</span>
                                </div>
                            </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                            <SidebarMenuSubButton asChild onClick={() => { router.push("/accounting/bank-statements"); setOpenMobile(false) }} isActive={currentLevel === "Bank Statements"}>
                                <div className="flex items-center gap-2">
                                    <Banknote />
                                    <span>Bank Statements</span>
                                </div>
                            </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                            <SidebarMenuSubButton asChild onClick={() => { router.push("/accounting/financial-reports"); setOpenMobile(false) }} isActive={currentLevel === "Financial Reports"}>
                                <div className="flex items-center gap-2">
                                    <FileText />
                                    <span>Financial Reports</span>
                                </div>
                            </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                            <SidebarMenuSubButton asChild onClick={() => { router.push("/accounting/expenses"); setOpenMobile(false) }} isActive={currentLevel === "Expenses"}>
                                <div className="flex items-center gap-2">
                                    <Receipt />
                                    <span>Expenses</span>
                                </div>
                            </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                            <SidebarMenuSubButton asChild onClick={() => { router.push("/accounting/budgeting"); setOpenMobile(false) }} isActive={currentLevel === "Budgeting"}>
                                <div className="flex items-center gap-2">
                                    <PhilippinePeso />
                                    <span>Budgeting</span>
                                </div>
                            </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                    </SidebarMenuSub>
                </CollapsibleContent>
            </SidebarMenuItem>
        </Collapsible>
    </SidebarMenu>
}