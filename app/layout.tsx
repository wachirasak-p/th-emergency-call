import type { Metadata } from "next";
import { Geist, Geist_Mono, Kanit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kanit = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  subsets: ["thai"],
});

export const metadata: Metadata = {
  title: "ศูนย์รวมเบอร์ฉุกเฉินทั่วไทย – โทรด่วนทันที",
  description:
    "รวมเบอร์โทรศัพท์ฉุกเฉินสำคัญในประเทศไทย แบ่งตามหมวดหมู่ เช่น เหตุด่วนเหตุร้าย การแพทย์ สาธารณูปโภค และการเดินทาง พร้อมระบบค้นหา และกดโทรออกได้ทันที",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kanit.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
