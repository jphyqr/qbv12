import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import NavBar from "@/components/layout/navbar";
import { ContactFormProvider } from "./context/contact-form-context";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QBV1",
  description: "Product Engineering and SEO Consultant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
                  <ContactFormProvider>
                   <NavBar/>
                   <main  className=' py-20 md:py-72  md:px-5 lg:px-16'>
        {children}
        <Toaster />
        </main>
        </ContactFormProvider>
        </ThemeProvider>
        </body>
    </html>
  );
}
