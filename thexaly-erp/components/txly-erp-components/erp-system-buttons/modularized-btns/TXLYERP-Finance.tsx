"use client"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { CreditCard, ChevronRight, ArrowUpRight, ArrowDownLeft, Paperclip, Banknote, FileText, Receipt, PhilippinePeso } from "lucide-react"
import { useAppSelector, useAppStore } from "@/lib/redux/hooks"
import { useRouter } from "next/navigation"
import { useSidebar } from "@/components/ui/sidebar"
import { useEffect, useState } from "react"
import { NaviTree } from "@/lib/redux/features/sphereTree"

export default function TXLYERPFinance() {
    const router = useRouter();
    const sphNavi = useAppSelector(svx => svx.sphereTree.navi);
    const { setOpenMobile } = useSidebar();
    const [currentLevel, setCurrentLevel] = useState<NaviTree | null>(null);
    const [collapsibleOpen, setCollapsibleOpen] = useState(false);
    useEffect(() => {
        setCollapsibleOpen(sphNavi[sphNavi.length - 2] === "Accounting / Finance");
        setCurrentLevel(sphNavi[sphNavi.length - 1]);
    }, [sphNavi])

    return <SidebarMenu>

        <Collapsible
            asChild
            open={collapsibleOpen}
            className="group/collapsible"
        >
            <SidebarMenuItem>
                <SidebarMenuButton>
                    <div className="flex items-center gap-2 w-full" onClick={() => { router.push("/accounting"); setOpenMobile(false) }}>
                        <CreditCard />
                        <span>Accounting / Finance</span>
                    </div>
                    <CollapsibleTrigger asChild onClick={() => { setCollapsibleOpen(!collapsibleOpen) }}>
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