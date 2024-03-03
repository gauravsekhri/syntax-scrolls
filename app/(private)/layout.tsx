import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import { getServerSession } from "next-auth";
import authOptions from "@/utils/authOptions";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <>
      <PageHeader session={session} />
      {children}
      <PageFooter />
    </>
  );
}
