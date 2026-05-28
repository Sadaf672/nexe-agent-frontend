import type { Metadata } from "next";
import "./globals.css";

import MainLayout from "../components/MainLayout";

export const metadata: Metadata = {
  title: "Nexe Agent",
  description: "Frontend Internship Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="en">

      <body>

        <MainLayout>

          {children}

        </MainLayout>

      </body>

    </html>
  );
}