import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PageHeader from "@/components/Common/PageHeader";
import PageFooter from "@/components/Common/PageFooter";
import { getServerSession } from "next-auth";
import authOptions from "@/utils/authOptions";
import { ScrollArea } from "@/components/ui/scroll-area";

export const metadata: Metadata = {
  title: "Syntax Scrolls",
  description:
    "The Untold Syntax: Behind the Code. Master the unseen forces. Go beyond the keyboard. Dive into the fascinating world of how code truly works.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <>
      <PageHeader session={session} variant="public" />
      <div className="flex flex-col min-h-screen pt-24">
        {children}
        <PageFooter />
      </div>
    </>
  );
}
