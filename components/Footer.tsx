import React from 'react';
import Link from 'next/link';
import { MapPinIcon, TreeIcon } from './Icons';

export default function Footer() {
  const mapUrl = "https://maps.app.goo.gl/HRdXevS1LB8iy4386";

  return (
    <footer className="bg-emerald-950 text-emerald-200/90 border-t border-emerald-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-emerald-900/80">
          
          {/* Col 1: About Village */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo-desa.png"
                alt="Logo Desa"
                className="h-11 w-auto object-contain p-0.5 bg-white/10 rounded-lg"
              />
              <span className="font-bold text-xl text-white tracking-tight">KEDAUNG BARAT</span>
            </div>

            <p className="text-xs leading-relaxed text-emerald-300/80">
              Portal resmi informasi profil Kedaung Barat, Sepatan Timur, Kabupaten Tangerang, Banten.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-900/50 p-2.5 rounded-lg border border-emerald-800">
              <TreeIcon className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>Desa Asri, Berdaya & Rukun Toleran</span>
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
                <Link href="/profil" className="hover:text-emerald-300 transition-colors">Profil Desa</Link>
              </li>
              <li>
                <Link href="/berita" className="hover:text-emerald-300 transition-colors">Berita Desa</Link>
              </li>
              <li>
                <Link href="/umkm" className="hover:text-emerald-300 transition-colors">Katalog UMKM Desa</Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-emerald-300 transition-colors">Kontak & Lokasi Balai Desa</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Address & Location Info */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase text-emerald-300">
              Alamat Balai Desa
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <span className="text-emerald-200/90 text-xs leading-relaxed block">
                    Kantor Kedaung Barat, Kecamatan Sepatan Timur, Kabupaten Tangerang, Banten
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
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-emerald-400/70 gap-4">
          <p>© 2026 Pemerintah Kedaung Barat. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
