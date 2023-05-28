import { TogglerProvider } from "./context/toggler";
import "./globals.css";

export const metadata = {
  title: "Darrell Rahan",
  description: "Personal Portofolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TogglerProvider>
      <html lang="en">
        <body className="bg-[#0a192f]">{children}</body>
      </html>
    </TogglerProvider>
  );
}
