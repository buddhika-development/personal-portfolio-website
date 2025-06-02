import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./styles/globals.css";
import "./styles/common.css"

const roboto = Roboto({
  variable: "--font-primary",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Buddhika Madusanka",
  description: "Lets re create the world as we want..",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
