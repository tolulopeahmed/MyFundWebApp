import type { Metadata } from "next";
import "./globals.css";
import { karla, nexa, productSans, proxima } from "./ui/font";
import NavBar from "./ui/landing/navbar";

export const metadata: Metadata = {
  title: "MyFund",
  description:
    "MyFund helps working-class people save towards properties. Unlike the currently available solutions. MyFund offers lifetime rental income for users via its national hostel project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${karla.variable} ${nexa.variable} ${productSans.variable} ${proxima.variable} ${nexa.className} px-6 lg:px-10 xl:px-20 h-auto`}
      >
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
