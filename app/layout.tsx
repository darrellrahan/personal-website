import { TogglerProvider } from "./context/toggler";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Darrell Rafa Raihan",
  description: "Personal Portofolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TogglerProvider>
      <html lang="en" className="scroll-smooth">
        <body className={`${inter.className} bg-[#0a192f]`}>{children}</body>
      </html>
    </TogglerProvider>
  );
}
