import ChatBot from "@/components/ui/ChatBot";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"]
});



export const metadata: Metadata = {
  title: "Fenix Ingeniería Puentes Grúa, repuestos y mantenimientos",
  description: "Puentes grúa, repuestos, componentes y mantenimientos de alta calidad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
    className="dark"
    style={{ colorScheme: "dark" }}>
      <body className={urbanist.className}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
        <Navbar />
        {children}
        <Toaster/>
        <Footer />
      </ThemeProvider>
      <ChatBot/>
      </body>
    </html>
  );
}
