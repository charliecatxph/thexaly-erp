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
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Cpu, Settings, Sun, ArrowRightCircle, Banknote, Coins, Settings2, Paperclip, ReceiptIcon, Box, Handshake, Factory, Presentation, ShoppingBag, Boxes, CheckCheckIcon, ArrowUpRight, ArrowDownLeft, PhilippinePeso, ArrowRight, ArrowLeftCircle, Scale, TrendingUp, Repeat, FileCheck, Layers, Book, Hash, User, Truck, Clipboard, ArrowDown, ArrowUp, Sigma, Tag, LineChart, PieChart, Percent, Search, Network, Library, CreditCard, CalendarClock, LockKeyhole, Package, Timer, Construction, MoveRight, Wrench, Users, History, Diff, Hammer, FolderTree, MapPin, ShoppingCart, Zap, PackagePlus, FilePlus2, ReceiptText, FileQuestion, MessageSquareQuote, Quote, FileSignature, FileText, Contact2, Users2, BookOpen, Tags, BarChartBig, Phone, Crown, Ticket, Globe, UserCheck, SlidersHorizontal, Terminal, UserCog, Monitor, Receipt, FileCheck2, FileSearch, BadgeDollarSign, DollarSign, Stethoscope, FileStack, FileBarChart2, ShieldCheck, GanttChart, Hourglass, CalendarRange, ClipboardList, DraftingCompass, PackageCheck, Microscope, FileType, ClipboardCheck, Warehouse, UserPlus, CalendarCheck, Contact, Webhook, Fingerprint, Code2, Shield, UserCircle, Blocks, } from "lucide-react";
import { useState } from "react";
import { useSidebar } from "@/components/ui/sidebar";
import { Geist } from "next/font/google";
import { Checkbox } from "radix-ui";

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
          <DropdownMenuTrigger asChild className="">
            <SidebarMenuButton
              size="lg"
              className="hover:bg-txly-bg-alt-accent data-[state=open]:bg-txly-bg-alt-accent data-[state=open]:text-txly-alt-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"></div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">
                  {activeSystem.name}
                </span>
                <span className="truncate text-xs">{activeSystem.plan}</span>
              </div>
              <ChevronDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className={`w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg bg-txly-bg ${geist.className}`}
            align="start"
            sideOffset={4}
          >
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="txly-dpd-menu-item flex justify-between text-xs">
                <Cpu className="size-3" /> Thexaly Modules
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent className="bg-txly-bg text-txly-alt-foreground w-[200px]">
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="txly-dpd-menu-item2 text-xs">
                      <div className="txly-dpd-menu-item-icon2"><Blocks className="size-2" /></div>
                      Thexaly Framework
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent className="bg-txly-bg">
                        <DropdownMenuItem className="txly-dpd-menu-item2">
                          <div className="dmix-icx flex gap-2 items-center text-xs">
                            <div className="txly-dpd-menu-item-icon2"><UserCircle className="size-2" /></div>
                            ThexalyERP Accounts
                          </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="txly-dpd-menu-item2">
                          <div className="dmix-icx flex gap-2 items-center text-xs">
                            <div className="txly-dpd-menu-item-icon2"><Shield className="size-2" /></div>
                            Roles & Permissions
                          </div>
                        </DropdownMenuItem>

                        {/* Dev Tools Sub-menu */}
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger className="txly-dpd-menu-item2 text-xs">
                            <div className="dmix-icx flex gap-2 items-center text-xs">
                              <div className="txly-dpd-menu-item-icon3"><Code2 className="size-2" /></div>
                              Developer Tools
                            </div>
                          </DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent className="bg-txly-bg">
                              <DropdownMenuItem className="txly-dpd-menu-item2">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon3"><Fingerprint className="size-2" /></div>
                                  API Endpoints
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="txly-dpd-menu-item2">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon3"><Webhook className="size-2" /></div>
                                  Webhooks
                                </div>
                              </DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>


                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="txly-dpd-menu-item text-xs">
                      <div className="txly-dpd-menu-item-icon">
                        <Paperclip className="size-2" />
                      </div>
                      Accounting
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent className="bg-txly-bg">
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger className="txly-dpd-menu-item text-xs">
                            <div className="txly-dpd-menu-item-icon">
                              <ReceiptIcon className="size-2" />
                            </div>
                            Invoicing
                          </DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent className="bg-txly-bg">
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon">
                                    <Coins className="size-2" />
                                  </div>
                                  Payment Entry
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon">
                                    <ArrowLeftCircle className="size-2" />
                                  </div>
                                  Purchase Invoice
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon">
                                    <ArrowRightCircle className="size-2" />
                                  </div>
                                  Sales Invoice
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon">
                                    <ArrowUpRight className="size-2" />
                                  </div>
                                  Payables
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon">
                                    <ArrowDownLeft className="size-2" />
                                  </div>
                                  Receivables
                                </div>
                              </DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger className="txly-dpd-menu-item text-xs">
                            <div className="dmix-icx flex gap-2 items-center text-xs">
                              <div className="txly-dpd-menu-item-icon">
                                <Paperclip className="size-2" />
                              </div>
                              FinRep
                            </div>
                          </DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent className="bg-txly-bg">
                              {/* Main Reports */}
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><Scale className="size-2" /></div>
                                  Balance Sheet
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><TrendingUp className="size-2" /></div>
                                  Profit & Loss (P&L)
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><Repeat className="size-2" /></div>
                                  Cash Flow
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><FileCheck className="size-2" /></div>
                                  Trial Balance
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><Layers className="size-2" /></div>
                                  Consolidated Report
                                </div>
                              </DropdownMenuItem>

                              {/* Ledgers Sub-menu */}
                              <DropdownMenuSub>
                                <DropdownMenuSubTrigger className="txly-dpd-menu-item text-xs">
                                  <div className="dmix-icx flex gap-2 items-center text-xs">
                                    <div className="txly-dpd-menu-item-icon"><Book className="size-2" /></div>
                                    Ledgers
                                  </div>
                                </DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                  <DropdownMenuSubContent className="bg-txly-bg">
                                    <DropdownMenuItem className="txly-dpd-menu-item">
                                      <div className="dmix-icx flex gap-2 items-center text-xs">
                                        <div className="txly-dpd-menu-item-icon"><Hash className="size-2" /></div>
                                        General Ledger
                                      </div>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="txly-dpd-menu-item">
                                      <div className="dmix-icx flex gap-2 items-center text-xs">
                                        <div className="txly-dpd-menu-item-icon"><User className="size-2" /></div>
                                        Customer Ledger
                                      </div>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="txly-dpd-menu-item">
                                      <div className="dmix-icx flex gap-2 items-center text-xs">
                                        <div className="txly-dpd-menu-item-icon"><Truck className="size-2" /></div>
                                        Supplier Ledger
                                      </div>
                                    </DropdownMenuItem>
                                  </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                              </DropdownMenuSub>

                              {/* Registers Sub-menu */}
                              <DropdownMenuSub>
                                <DropdownMenuSubTrigger className="txly-dpd-menu-item text-xs">
                                  <div className="dmix-icx flex gap-2 items-center text-xs">
                                    <div className="txly-dpd-menu-item-icon"><Clipboard className="size-2" /></div>
                                    Registers
                                  </div>
                                </DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                  <DropdownMenuSubContent className="bg-txly-bg">
                                    <DropdownMenuItem className="txly-dpd-menu-item">
                                      <div className="dmix-icx flex gap-2 items-center text-xs">
                                        <div className="txly-dpd-menu-item-icon"><ArrowDown className="size-2" /></div>
                                        Accounts Receivables
                                      </div>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="txly-dpd-menu-item">
                                      <div className="dmix-icx flex gap-2 items-center text-xs">
                                        <div className="txly-dpd-menu-item-icon"><ArrowUp className="size-2" /></div>
                                        Accounts Payables
                                      </div>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="txly-dpd-menu-item">
                                      <div className="dmix-icx flex gap-2 items-center text-xs">
                                        <div className="txly-dpd-menu-item-icon"><Sigma className="size-2" /></div>
                                        AR/AP Summary
                                      </div>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="txly-dpd-menu-item">
                                      <div className="dmix-icx flex gap-2 items-center text-xs">
                                        <div className="txly-dpd-menu-item-icon"><Tag className="size-2" /></div>
                                        Sales Register
                                      </div>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="txly-dpd-menu-item">
                                      <div className="dmix-icx flex gap-2 items-center text-xs">
                                        <div className="txly-dpd-menu-item-icon"><ShoppingBag className="size-2" /></div>
                                        Purchase Register
                                      </div>
                                    </DropdownMenuItem>
                                  </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                              </DropdownMenuSub>

                              {/* Profitability Sub-menu */}
                              <DropdownMenuSub>
                                <DropdownMenuSubTrigger className="txly-dpd-menu-item text-xs">
                                  <div className="dmix-icx flex gap-2 items-center text-xs">
                                    <div className="txly-dpd-menu-item-icon"><PieChart className="size-2" /></div>
                                    Profitability
                                  </div>
                                </DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                  <DropdownMenuSubContent className="bg-txly-bg">
                                    <DropdownMenuItem className="txly-dpd-menu-item">
                                      <div className="dmix-icx flex gap-2 items-center text-xs">
                                        <div className="txly-dpd-menu-item-icon"><Percent className="size-2" /></div>
                                        Gross Profit
                                      </div>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="txly-dpd-menu-item">
                                      <div className="dmix-icx flex gap-2 items-center text-xs">
                                        <div className="txly-dpd-menu-item-icon"><Search className="size-2" /></div>
                                        Analysis
                                      </div>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="txly-dpd-menu-item">
                                      <div className="dmix-icx flex gap-2 items-center text-xs">
                                        <div className="txly-dpd-menu-item-icon"><LineChart className="size-2" /></div>
                                        Trends
                                      </div>
                                    </DropdownMenuItem>
                                  </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                              </DropdownMenuSub>
                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>

                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger className="txly-dpd-menu-item text-xs">
                            <div className="dmix-icx flex gap-2 items-center text-xs">
                              <div className="txly-dpd-menu-item-icon">
                                <Settings2 className="size-2" />
                              </div>
                              Accounts Setup
                            </div>
                          </DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent className="bg-txly-bg">
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon">
                                    <Network className="size-2" />
                                  </div>
                                  Chart of Accounts
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon">
                                    <Library className="size-2" />
                                  </div>
                                  Finance Books
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon">
                                    <CreditCard className="size-2" />
                                  </div>
                                  Mode of Payment (MOP)
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon">
                                    <CalendarClock className="size-2" />
                                  </div>
                                  Deferred Payment Term Setup
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon">
                                    <LockKeyhole className="size-2" />
                                  </div>
                                  Period Closing Voucher
                                </div>
                              </DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>
                        <DropdownMenuItem className="txly-dpd-menu-item">
                          <div className="dmix-icx flex gap-2 items-center text-xs">
                            <div className="txly-dpd-menu-item-icon">
                              <Coins className="size-2" />
                            </div>
                            Taxes
                          </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="txly-dpd-menu-item">
                          <div className="dmix-icx flex gap-2 items-center text-xs">
                            <div className="txly-dpd-menu-item-icon">
                              <Banknote className="size-2" />
                            </div>
                            Budget Constraints
                          </div>
                        </DropdownMenuItem>

                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="txly-dpd-menu-item text-xs">
                      <div className="txly-dpd-menu-item-icon">
                        <Package className="size-2" />
                      </div>
                      Assets
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent className="bg-txly-bg">
                        <DropdownMenuItem className="txly-dpd-menu-item">
                          <div className="dmix-icx flex gap-2 items-center text-xs">
                            <div className="txly-dpd-menu-item-icon"><Timer className="size-2" /></div>
                            Depreciation Schedule
                          </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="txly-dpd-menu-item">
                          <div className="dmix-icx flex gap-2 items-center text-xs">
                            <div className="txly-dpd-menu-item-icon"><Construction className="size-2" /></div>
                            Asset Capitalization
                          </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="txly-dpd-menu-item">
                          <div className="dmix-icx flex gap-2 items-center text-xs">
                            <div className="txly-dpd-menu-item-icon"><MoveRight className="size-2" /></div>
                            Asset Movement
                          </div>
                        </DropdownMenuItem>

                        {/* Maintenance Sub-menu */}
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger className="txly-dpd-menu-item text-xs">
                            <div className="dmix-icx flex gap-2 items-center text-xs">
                              <div className="txly-dpd-menu-item-icon"><Wrench className="size-2" /></div>
                              Maintenance
                            </div>
                          </DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent className="bg-txly-bg">
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><Users className="size-2" /></div>
                                  Asset Maintenance Team
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><Wrench className="size-2" /></div>
                                  Asset Maintenance
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><History className="size-2" /></div>
                                  Asset Maintenance Log
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><Diff className="size-2" /></div>
                                  Asset Value Adjustment
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><Hammer className="size-2" /></div>
                                  Asset Repair
                                </div>
                              </DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>

                        {/* Setup Sub-menu */}
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger className="txly-dpd-menu-item text-xs">
                            <div className="dmix-icx flex gap-2 items-center text-xs">
                              <div className="txly-dpd-menu-item-icon"><Settings className="size-2" /></div>
                              Setup
                            </div>
                          </DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent className="bg-txly-bg">
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><FolderTree className="size-2" /></div>
                                  Asset Category
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><MapPin className="size-2" /></div>
                                  Asset Location
                                </div>
                              </DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="txly-dpd-menu-item text-xs">
                      <div className="txly-dpd-menu-item-icon">
                        <ShoppingCart className="size-2" />
                      </div>
                      Procurement
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent className="bg-txly-bg">

                        {/* QuickActions Sub-menu */}
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger className="txly-dpd-menu-item text-xs">
                            <div className="dmix-icx flex gap-2 items-center text-xs">
                              <div className="txly-dpd-menu-item-icon"><Zap className="size-2" /></div>
                              QuickActions
                            </div>
                          </DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent className="bg-txly-bg">
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><PackagePlus className="size-2" /></div>
                                  Record and add to stock
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><FilePlus2 className="size-2" /></div>
                                  Append transaction for liquidation
                                </div>
                              </DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>

                        <DropdownMenuItem className="txly-dpd-menu-item">
                          <div className="dmix-icx flex gap-2 items-center text-xs">
                            <div className="txly-dpd-menu-item-icon"><ReceiptText className="size-2" /></div>
                            Liquidation Reports
                          </div>
                        </DropdownMenuItem>

                        <DropdownMenuItem className="txly-dpd-menu-item">
                          <div className="dmix-icx flex gap-2 items-center text-xs">
                            <div className="txly-dpd-menu-item-icon"><FileQuestion className="size-2" /></div>
                            Material Request
                          </div>
                        </DropdownMenuItem>

                        <DropdownMenuItem className="txly-dpd-menu-item">
                          <div className="dmix-icx flex gap-2 items-center text-xs">
                            <div className="txly-dpd-menu-item-icon"><MessageSquareQuote className="size-2" /></div>
                            Request for Quotation
                          </div>
                        </DropdownMenuItem>

                        <DropdownMenuItem className="txly-dpd-menu-item">
                          <div className="dmix-icx flex gap-2 items-center text-xs">
                            <div className="txly-dpd-menu-item-icon"><Quote className="size-2" /></div>
                            Supplier Quotation
                          </div>
                        </DropdownMenuItem>

                        <DropdownMenuItem className="txly-dpd-menu-item">
                          <div className="dmix-icx flex gap-2 items-center text-xs">
                            <div className="txly-dpd-menu-item-icon"><FileSignature className="size-2" /></div>
                            Purchase Order (PO)
                          </div>
                        </DropdownMenuItem>




                        <DropdownMenuItem className="txly-dpd-menu-item">
                          <div className="dmix-icx flex gap-2 items-center text-xs">
                            <div className="txly-dpd-menu-item-icon"><FileText className="size-2" /></div>
                            Purchase Invoice (PI)
                          </div>
                        </DropdownMenuItem>
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger className="txly-dpd-menu-item text-xs">
                            <div className="dmix-icx flex gap-2 items-center text-xs">
                              <div className="txly-dpd-menu-item-icon"><PackageCheck className="size-2" /></div>
                              Purchase Receipt (PR)
                            </div>
                          </DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent className="bg-txly-bg">
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><Microscope className="size-2" /></div>
                                  Quality Inspection Procedure
                                </div>
                              </DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>
                        {/* Setup Sub-menu */}
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger className="txly-dpd-menu-item text-xs">
                            <div className="dmix-icx flex gap-2 items-center text-xs">
                              <div className="txly-dpd-menu-item-icon"><Settings className="size-2" /></div>
                              Setup
                            </div>
                          </DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent className="bg-txly-bg">
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><Contact2 className="size-2" /></div>
                                  Supplier List
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><Users2 className="size-2" /></div>
                                  Supplier Group
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><BookOpen className="size-2" /></div>
                                  Supplier Item Registry
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><Tags className="size-2" /></div>
                                  Supplier Item Price Registry
                                </div>
                              </DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>

                        <DropdownMenuItem className="txly-dpd-menu-item">
                          <div className="dmix-icx flex gap-2 items-center text-xs">
                            <div className="txly-dpd-menu-item-icon"><BarChartBig className="size-2" /></div>
                            Purchase Analytics
                          </div>
                        </DropdownMenuItem>

                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="txly-dpd-menu-item text-xs">
                      <div className="txly-dpd-menu-item-icon">
                        <BadgeDollarSign className="size-2" />
                      </div>
                      Selling
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent className="bg-txly-bg">
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger className="txly-dpd-menu-item text-xs">
                            <div className="dmix-icx flex gap-2 items-center text-xs">
                              <div className="txly-dpd-menu-item-icon"><Zap className="size-2" /></div>
                              QuickActions
                            </div>
                          </DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent className="bg-txly-bg">
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><DollarSign className="size-2" /></div>
                                  On-the-spot Sell
                                </div>
                              </DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>
                        <DropdownMenuItem className="txly-dpd-menu-item">
                          <div className="dmix-icx flex gap-2 items-center text-xs">
                            <div className="txly-dpd-menu-item-icon"><FileSearch className="size-2" /></div>
                            Product/s Quotation
                          </div>
                        </DropdownMenuItem>

                        <DropdownMenuItem className="txly-dpd-menu-item">
                          <div className="dmix-icx flex gap-2 items-center text-xs">
                            <div className="txly-dpd-menu-item-icon"><FileCheck2 className="size-2" /></div>
                            Sales Order
                          </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="txly-dpd-menu-item">
                          <div className="dmix-icx flex gap-2 items-center text-xs">
                            <div className="txly-dpd-menu-item-icon"><Truck className="size-2" /></div>
                            Sale Delivery
                          </div>
                        </DropdownMenuItem>

                        <DropdownMenuItem className="txly-dpd-menu-item">
                          <div className="dmix-icx flex gap-2 items-center text-xs">
                            <div className="txly-dpd-menu-item-icon"><Receipt className="size-2" /></div>
                            Sales Invoice
                          </div>
                        </DropdownMenuItem>

                        {/* POS Sub-menu */}
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger className="txly-dpd-menu-item text-xs">
                            <div className="dmix-icx flex gap-2 items-center text-xs">
                              <div className="txly-dpd-menu-item-icon"><Monitor className="size-2" /></div>
                              POS
                            </div>
                          </DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent className="bg-txly-bg">
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><UserCog className="size-2" /></div>
                                  POS Profile
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><Terminal className="size-2" /></div>
                                  POS Invoice
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><SlidersHorizontal className="size-2" /></div>
                                  POS Settings
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><UserCheck className="size-2" /></div>
                                  Assigned POS Personnel
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><TrendingUp className="size-2" /></div>
                                  Global POS Statistics
                                </div>
                              </DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>

                        {/* E-Commerce Sub-menu */}
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger className="txly-dpd-menu-item text-xs">
                            <div className="dmix-icx flex gap-2 items-center text-xs">
                              <div className="txly-dpd-menu-item-icon"><Globe className="size-2" /></div>
                              E-Commerce
                            </div>
                          </DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent className="bg-txly-bg">
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><ShoppingBag className="size-2" /></div>
                                  Listed Items
                                </div>
                              </DropdownMenuItem>

                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><Library className="size-2" /></div>
                                  Customer Account Registry
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><CreditCard className="size-2" /></div>
                                  Mode of Payments
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><Ticket className="size-2" /></div>
                                  Vouchers
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><Truck className="size-2" /></div>
                                  Delivery Channels
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><TrendingUp className="size-2" /></div>
                                  Statistics
                                </div>
                              </DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>

                        {/* Merchandise Sub-menu */}
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger className="txly-dpd-menu-item text-xs">
                            <div className="dmix-icx flex gap-2 items-center text-xs">
                              <div className="txly-dpd-menu-item-icon"><Boxes className="size-2" /></div>
                              Merchandise
                            </div>
                          </DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent className="bg-txly-bg">
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><Package className="size-2" /></div>
                                  Items
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><FolderTree className="size-2" /></div>
                                  Item Group / Classification
                                </div>
                              </DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>

                        <DropdownMenuItem className="txly-dpd-menu-item">
                          <div className="dmix-icx flex gap-2 items-center text-xs">
                            <div className="txly-dpd-menu-item-icon"><Crown className="size-2" /></div>
                            Loyalty Program
                          </div>
                        </DropdownMenuItem>

                        {/* Customer Sub-menu */}
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger className="txly-dpd-menu-item text-xs">
                            <div className="dmix-icx flex gap-2 items-center text-xs">
                              <div className="txly-dpd-menu-item-icon"><Users className="size-2" /></div>
                              Customer
                            </div>
                          </DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent className="bg-txly-bg">
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><Contact2 className="size-2" /></div>
                                  Customer List
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><Users className="size-2" /></div>
                                  Customer Group
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><MapPin className="size-2" /></div>
                                  Customer Address
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><Phone className="size-2" /></div>
                                  Customer Contact
                                </div>
                              </DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>

                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="txly-dpd-menu-item text-xs">
                      <div className="txly-dpd-menu-item-icon">
                        <Factory className="size-2" />
                      </div>
                      Manufacturing
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent className="bg-txly-bg">

                        <DropdownMenuItem className="txly-dpd-menu-item">
                          <div className="dmix-icx flex gap-2 items-center text-xs">
                            <div className="txly-dpd-menu-item-icon"><DraftingCompass className="size-2" /></div>
                            Bill of Materials (BOM) Creator
                          </div>
                        </DropdownMenuItem>

                        <DropdownMenuItem className="txly-dpd-menu-item">
                          <div className="dmix-icx flex gap-2 items-center text-xs">
                            <div className="txly-dpd-menu-item-icon"><ClipboardList className="size-2" /></div>
                            Work Order
                          </div>
                        </DropdownMenuItem>

                        {/* Material Planning Sub-menu */}
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger className="txly-dpd-menu-item text-xs">
                            <div className="dmix-icx flex gap-2 items-center text-xs">
                              <div className="txly-dpd-menu-item-icon"><CalendarRange className="size-2" /></div>
                              Material Planning
                            </div>
                          </DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent className="bg-txly-bg">
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><Hourglass className="size-2" /></div>
                                  Item Production Lead Time
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><GanttChart className="size-2" /></div>
                                  Work Order Production Plan
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><ShieldCheck className="size-2" /></div>
                                  Quality Inspection Plan
                                </div>
                              </DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>

                        <DropdownMenuItem className="txly-dpd-menu-item">
                          <div className="dmix-icx flex gap-2 items-center text-xs">
                            <div className="txly-dpd-menu-item-icon"><Cpu className="size-2" /></div>
                            Workstation
                          </div>
                        </DropdownMenuItem>

                        {/* Reports Sub-menu */}
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger className="txly-dpd-menu-item text-xs">
                            <div className="dmix-icx flex gap-2 items-center text-xs">
                              <div className="txly-dpd-menu-item-icon"><FileBarChart2 className="size-2" /></div>
                              Reports
                            </div>
                          </DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent className="bg-txly-bg">
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><FileStack className="size-2" /></div>
                                  Work Order Summary
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><Stethoscope className="size-2" /></div>
                                  Quality Inspection Summary
                                </div>
                              </DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>

                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="txly-dpd-menu-item text-xs">
                      <div className="txly-dpd-menu-item-icon">
                        <ShieldCheck className="size-2" />
                      </div>
                      Quality
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent className="bg-txly-bg">

                        <DropdownMenuItem className="txly-dpd-menu-item">
                          <div className="dmix-icx flex gap-2 items-center text-xs">
                            <div className="txly-dpd-menu-item-icon">
                              <FileType className="size-2" />
                            </div>
                            Quality Inspection Templates
                          </div>
                        </DropdownMenuItem>

                        <DropdownMenuItem className="txly-dpd-menu-item">
                          <div className="dmix-icx flex gap-2 items-center text-xs">
                            <div className="txly-dpd-menu-item-icon">
                              <ClipboardCheck className="size-2" />
                            </div>
                            Quality Review Summary
                          </div>
                        </DropdownMenuItem>

                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="txly-dpd-menu-item text-xs">
                      <div className="txly-dpd-menu-item-icon">
                        <Warehouse className="size-2" />
                      </div>
                      Stock
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent className="bg-txly-bg">

                        {/* Tools Sub-menu */}
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger className="txly-dpd-menu-item text-xs">
                            <div className="dmix-icx flex gap-2 items-center text-xs">
                              <div className="txly-dpd-menu-item-icon"><Construction className="size-2" /></div>
                              Tools
                            </div>
                          </DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent className="bg-txly-bg">
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><Scale className="size-2" /></div>
                                  Stock Reconciliation
                                </div>
                              </DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>

                        {/* Setup Sub-menu */}
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger className="txly-dpd-menu-item text-xs">
                            <div className="dmix-icx flex gap-2 items-center text-xs">
                              <div className="txly-dpd-menu-item-icon"><Settings className="size-2" /></div>
                              Setup
                            </div>
                          </DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent className="bg-txly-bg">
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><Box className="size-2" /></div>
                                  Item
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><Boxes className="size-2" /></div>
                                  Item Group
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><MapPin className="size-2" /></div>
                                  Item Locations
                                </div>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="txly-dpd-menu-item">
                                <div className="dmix-icx flex gap-2 items-center text-xs">
                                  <div className="txly-dpd-menu-item-icon"><Truck className="size-2" /></div>
                                  Shipping Rules
                                </div>
                              </DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>

                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="txly-dpd-menu-item text-xs">
                      <div className="txly-dpd-menu-item-icon"><Contact className="size-2" /></div>
                      HR
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent className="bg-txly-bg">
                        <DropdownMenuItem className="txly-dpd-menu-item">
                          <div className="dmix-icx flex gap-2 items-center text-xs">
                            <div className="txly-dpd-menu-item-icon"><Users className="size-2" /></div>
                            Employee List
                          </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="txly-dpd-menu-item">
                          <div className="dmix-icx flex gap-2 items-center text-xs">
                            <div className="txly-dpd-menu-item-icon"><Banknote className="size-2" /></div>
                            Payroll
                          </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="txly-dpd-menu-item">
                          <div className="dmix-icx flex gap-2 items-center text-xs">
                            <div className="txly-dpd-menu-item-icon"><CalendarCheck className="size-2" /></div>
                            Attendance
                          </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="txly-dpd-menu-item">
                          <div className="dmix-icx flex gap-2 items-center text-xs">
                            <div className="txly-dpd-menu-item-icon"><UserPlus className="size-2" /></div>
                            Recruitment
                          </div>
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem className="txly-dpd-menu-item text-xs"><Sun className="size-3" /> Set Theme</DropdownMenuItem>
            <DropdownMenuItem className="txly-dpd-menu-item text-xs"><Settings className="size-3" /> Settings</DropdownMenuItem>
            <DropdownMenuItem className="txly-dpd-menu-item text-xs"><ArrowRightCircle className="size-3" /> Log Out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
