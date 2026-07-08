import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "/icon.svg",
  },
  title: "BrokerEngine — Deal Room, CIM Generator & Outreach for M&A Advisors",
  description:
    "BrokerEngine replaces the 5-tool stack M&A brokers assemble themselves. Secure deal room, AI CIM generator, valuation calculators, NDA e-sign, buyer matching, and outreach — from $499/mo. Apollo prospecting included.",
  openGraph: {
    title: "BrokerEngine — Deal Room, CIM Generator & Outreach for M&A Advisors",
    description: "Secure deal room, AI CIM generator, valuation calculators, buyer matching, and outreach. Replaces the $500–$700/mo stack brokers assemble themselves. From $499/mo.",
    url: "https://www.brokerengine.ai",
    siteName: "BrokerEngine",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrokerEngine — Deal Room, CIM Generator & Outreach for M&A Advisors",
    description: "Secure deal room, AI CIM generator, valuation calculators, buyer matching, and outreach. From $499/mo.",
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
