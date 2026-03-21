"use client"

import { setNaviBreadcrumb } from "@/lib/redux/features/sphereTree";
import TXLYHeader from "@/components/txly-erp-components/Header"
import { useEffect } from "react";
import { useAppDispatch } from "@/lib/redux/hooks";

export default function AccountingExpenses() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setNaviBreadcrumb(["Accounting / Finance", "Expenses"]))
    }, [dispatch])
    return <>
        <TXLYHeader />
    </>
}