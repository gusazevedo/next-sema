import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./reset.css";
import "./main-style.css";

const roboto = Roboto({ subsets: ['latin'], display: 'swap', });

export const metadata: Metadata = {
  title: "Academia Sema",
  description: "Venha conhecer e comece hoje sua evolução!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        {children}
      </body>
    </html>
  );
}
