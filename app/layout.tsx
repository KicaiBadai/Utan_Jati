import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ClientShell from "../components/ClientShell";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Website Resmi Desa Utan Jati & Portal Berita KKN",
  description: "Portal resmi profil Desa Utan Jati, Kecamatan Utan. Menyajikan informasi demografi, potensi lokal, serta dokumentasi kegiatan KKN Tematik 2026.",
  keywords: ["Desa Utan Jati", "Profil Desa", "Berita Desa", "Kegiatan KKN", "UMKM Jati", "Posyandu Desa"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${jakartaSans.variable} font-sans scroll-smooth`}>
      <body className="antialiased min-h-screen bg-slate-50 text-slate-900">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
