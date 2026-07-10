import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "/icon.svg",
  },
  title: "BrokerEngine — The operating system for boutique M&A advisors",
  description:
    "One calm, private workspace for M&A advisors: prospecting, AI CIM generator, a secure NDA-gated deal room, buyer matching, and outreach — instead of six logins. $200/mo, founding-broker pricing. Apollo prospecting included.",
  openGraph: {
    title: "BrokerEngine — The operating system for boutique M&A advisors",
    description: "Prospecting, AI CIMs, a secure deal room, buyer matching, and outreach in one workspace. $200/mo founding-broker pricing. Apollo prospecting included.",
    url: "https://www.brokerengine.ai",
    siteName: "BrokerEngine",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrokerEngine — The operating system for boutique M&A advisors",
    description: "Prospecting, AI CIMs, a secure deal room, buyer matching, and outreach in one workspace. $200/mo founding-broker pricing.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
