import type { Metadata } from "next";
import PageHeader from "@/components/Common/PageHeader";
import PageFooter from "@/components/Common/PageFooter";
import { getServerSession } from "next-auth";
import authOptions from "@/utils/authOptions";

export const metadata: Metadata = {
  title: "Syntax Scrolls | Private",
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
      <div className="flex flex-col min-h-screen">
        <PageHeader session={session} variant="private" />
        {children}
        <PageFooter />
      </div>
    </>
  );
}
