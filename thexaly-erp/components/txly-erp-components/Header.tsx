"use client"

import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Fragment } from "react"
import { useAppSelector } from "@/lib/redux/hooks"

export default function TXLYHeader() {
    const breadcrumbs = useAppSelector(svx => svx.sphereTree.navi);
    return <header className="w-full border-b border-neutral-100 flex h-13 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
                orientation="vertical"
                className="mr-2"
            />
            <Breadcrumb>
                <BreadcrumbList>
                    {breadcrumbs.map((breadcrumb, index) => {
                        const isLast = index === breadcrumbs.length - 1;
                        return (
                            <Fragment key={index}>
                                <BreadcrumbItem className="flex items-center gap-1">
                                    <BreadcrumbPage className={isLast ? "text-black" : ""}>
                                        {breadcrumb}
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                                {!isLast && <BreadcrumbSeparator />}
                            </Fragment>
                        );
                    })}

                </BreadcrumbList>
            </Breadcrumb>
        </div>
    </header>
}