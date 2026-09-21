'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuIcon, XIcon, TreeIcon } from './Icons';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Profil Desa', href: '/profil' },
    { name: 'Berita Desa', href: '/berita' },
    { name: 'UMKM Desa', href: '/umkm' },
    { name: 'Kontak', href: '/kontak' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-emerald-950/90 backdrop-blur-md border-b border-emerald-800/40 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Village Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/images/logo-desa.png"
              alt="Logo Desa Utan Jati"
              className="h-12 w-auto object-contain drop-shadow group-hover:scale-105 transition-transform duration-300"
            />
            <div>

              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-emerald-50 tracking-tight group-hover:text-emerald-300 transition-colors">
                  DESA UTAN JATI
                </span>

              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${active
                    ? 'bg-emerald-800/80 text-emerald-200 shadow-sm border border-emerald-700/60'
                    : 'text-emerald-100/80 hover:text-white hover:bg-emerald-900/60'
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-emerald-900/80 text-emerald-200 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-emerald-950 border-b border-emerald-800 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-lg text-base font-semibold ${isActive(link.href)
                ? 'bg-emerald-800 text-white border-l-4 border-emerald-400'
                : 'text-emerald-200 hover:bg-emerald-900 hover:text-white'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
