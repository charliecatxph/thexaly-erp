import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useBreadcrumbs } from "@/contexts/BreadcrumbsContext";
import { Geist } from "next/font/google";
import { Fragment } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Paintbrush } from "lucide-react";
import { useTheme } from "next-themes";

const geist = Geist({ subsets: ["latin"] });

export default function TXLYHeader() {
  const { breadcrumbs } = useBreadcrumbs();
  const { setTheme } = useTheme();
  return (
    <header
      className={`${geist.className} sticky top-0 z-99 bg-txly-bg-alt w-full flex h-13 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12`}
    >
      <div className="flex items-center justify-between gap-2 px-4 w-full">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="-ml-1 text-emerald-200 hover:bg-emerald-800 hover:text-emerald-100" />
          <Separator orientation="vertical" className="mr-2 bg-emerald-900" />
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbs.map((breadcrumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <Fragment key={index}>
                    <BreadcrumbItem className="flex items-center gap-1">
                      <BreadcrumbPage
                        className={
                          isLast
                            ? "text-emerald-100 font-[500]"
                            : "text-emerald-100 font-[500]"
                        }
                      >
                        {breadcrumb}
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                    {!isLast && (
                      <BreadcrumbSeparator className="text-emerald-200" />
                    )}
                  </Fragment>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-txly-accent">
                <Paintbrush />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className={`w-40 bg-txly-background border border-txly-border-primary ${geist.className}`}
              align="start"
            >
              <DropdownMenuGroup>
                <DropdownMenuLabel className="text-xs text-txly-accent-foreground">
                  Theme
                </DropdownMenuLabel>
                <DropdownMenuItem
                  className="text-txly-foreground focus:bg-txly-accent"
                  onClick={() => setTheme("lush-green")}
                >
                  Lush Green
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-txly-foreground focus:bg-txly-accent"
                  onClick={() => setTheme("purple")}
                >
                  Purple
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-txly-foreground focus:bg-txly-accent"
                  onClick={() => setTheme("blue")}
                >
                  Blue
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-txly-foreground focus:bg-txly-accent"
                  onClick={() => setTheme("salt-white")}
                >
                  Salt White
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-txly-foreground focus:bg-txly-accent"
                  onClick={() => setTheme("midnight")}
                >
                  Midnight
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
