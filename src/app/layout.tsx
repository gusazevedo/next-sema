import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./reset.css";
import "./main-style.css";

const roboto = Roboto({ subsets: ['latin'], display: 'swap', });

export const metadata: Metadata = {
  title: "Academia Sema",
  description: "Venha conhecer e comece hoje sua evolução!",
  viewport: "width=device-width, initial-scale=1.0, viewport-fit=cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.className}`}>
        {children}
      </body>
    </html>
  );
}
