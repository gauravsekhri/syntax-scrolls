import React from "react";
import { ThemeProvider } from "./themeProvider";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from "nextjs-toploader";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <NextTopLoader color="#E11D48" showSpinner={true} />
        {children}
        <Toaster richColors={true} position="bottom-left" />
      </ThemeProvider>
    </>
  );
};

export default Providers;
