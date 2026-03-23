import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { store as reduxStore } from "@/lib/redux/store";
import { Provider } from "react-redux";
import TXLYSidebar from "@/components/txly-erp-components/Sidebar";
import { BreadcrumbsProvider } from "@/contexts/BreadcrumbsContext";
import { ThemeProvider } from "@/components/theme-provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={reduxStore}>
      <ThemeProvider>
        <TooltipProvider>
          <SidebarProvider>
            <BreadcrumbsProvider
              initialBreadcrumbs={pageProps.initialBreadcrumbs}
            >
              <TXLYSidebar sig={pageProps.naviShow} />
              <Component {...pageProps} />
            </BreadcrumbsProvider>
          </SidebarProvider>
        </TooltipProvider>
      </ThemeProvider>
    </Provider>
  );
}
