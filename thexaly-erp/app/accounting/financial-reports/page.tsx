"use client"

import { setNaviBreadcrumb } from "@/lib/redux/features/sphereTree";
import TXLYHeader from "@/components/txly-erp-components/Header"
import { useEffect } from "react";
import { useAppDispatch } from "@/lib/redux/hooks";

export default function AccountingFinancialReports() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setNaviBreadcrumb(["Accounting / Finance", "Financial Reports"]))
    }, [dispatch])
    return <>
        <TXLYHeader />
    </>
}