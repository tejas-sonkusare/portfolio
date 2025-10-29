import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";

const font = Montserrat({ subsets: ["latin"], weight: ["300", "400", "600", "700"] });

export const metadata: Metadata = {
  title: "Tejas Sonkusare | DevOps • Cloud • Full-Stack",
  description:
    "DevOps Engineer and Full-Stack Java Developer building scalable, secure, automated cloud systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${font.className} bg-background text-foreground antialiased`}>{children}</body>
    </html>
  );
}


