import React from 'react';
import Link from 'next/link';
import { MapPinIcon, PhoneIcon, MailIcon, TreeIcon } from './Icons';

export default function Footer() {
  const mapUrl = "https://maps.app.goo.gl/HRdXevS1LB8iy4386";

  return (
    <footer className="bg-emerald-950 text-emerald-200/90 border-t border-emerald-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-emerald-900/80">
          
          {/* Col 1: About Village & KKN */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center text-emerald-950 font-black text-lg">
                UJ
              </div>
              <span className="font-bold text-xl text-white tracking-tight">DESA UTAN JATI</span>
            </div>
            <p className="text-xs leading-relaxed text-emerald-300/80">
              Portal resmi informasi profil Desa Utan Jati dan publikasi rekapitulasi program pengabdian masyarakat Tim KKN Tematik 2026.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-900/50 p-2.5 rounded-lg border border-emerald-800">
              <TreeIcon className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>Desa Asri, Produktif & Berbasis Digital</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 text-emerald-300">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-emerald-300 transition-colors">Beranda Utama</Link>
              </li>
              <li>
                <Link href="/profil" className="hover:text-emerald-300 transition-colors">Profil & Visi Misi Desa</Link>
              </li>
              <li>
                <Link href="/berita" className="hover:text-emerald-300 transition-colors">Berita & Kegiatan KKN</Link>
              </li>
              <li>
                <Link href="/galeri" className="hover:text-emerald-300 transition-colors">Galeri Dokumentasi</Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-emerald-300 transition-colors">Kontak & Layanan Warga</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: KKN Program Focus */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 text-emerald-300">
              Program Unggulan KKN
            </h4>
            <ul className="space-y-2 text-sm text-emerald-300/80">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Digitalisasi Profil Desa</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Pemberdayaan UMKM Jati</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Pencegahan Stunting & Posyandu</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Penataan Infrastruktur Dusun</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Posko Info */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase text-emerald-300">
              Sekretariat & Posko KKN
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <span className="text-emerald-200/90 text-xs leading-relaxed block">
                    Balai Desa Utan Jati, Jl. Raya Utan Jati No. 01, Kecamatan Utan
                  </span>
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 px-3 py-1.5 rounded-lg transition-colors shadow-sm"
                  >
                    <MapPinIcon className="w-3.5 h-3.5" />
                    <span>Buka Lokasi Google Maps</span>
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-1">
                <PhoneIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-emerald-200/90">+62 812-3456-7890 (Posko KKN)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-emerald-400/70 gap-4">
          <p>© 2026 Government Profile Desa Utan Jati & Tim KKN Tematik. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="bg-emerald-900/40 text-emerald-300 px-3 py-1 rounded-full text-[11px] border border-emerald-800">
              Dibuat dengan Next.js & Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
