import type { Metadata } from "next";
import "./globals.css";

import { Prompt, DM_Serif_Display } from "next/font/google";

import Footer from "./_components/footer";
import Header from "./_components/header";

const prompt = Prompt({
  subsets: ["latin"],
  variable: "--font-prompt",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ankeny Backstage Company",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${prompt.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
