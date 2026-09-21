'use client';

import React, { useState } from 'react';
import { ImageIcon, XIcon } from '../../components/Icons';

export default function GaleriPage() {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [previewImage, setPreviewImage] = useState<{ src: string; title: string; category: string; caption: string } | null>(null);

  const galleryItems = [
    {
      id: 200,
      title: 'Pembuatan & Penyerahan Spanduk Usaha UMKM Desa',
      category: 'UMKM',
      src: '/images/spanduk-umkm-sekitar.jpg',
      caption: 'Mahasiswa KKN Kelompok 18 Lentera saat berkunjung dan membantu pendataan branding warung usaha warga desa (7 September 2026).'
    },
    {
      id: 1,
      title: 'Gotong Royong Persiapan Konsumsi Maulid Nabi',
      category: 'KKN 2026',
      src: '/images/persiapan-maulid-nabi.jpg',
      caption: 'Kekompakan Mahasiswa KKN bersama pengurus dan warga desa dalam menyiapkan kemasan kudapan konsumsi jamaah Maulid Nabi (5 September 2026).'
    },
    {
      id: 2,
      title: 'Sosialisasi Bahaya Judi Online & Pinjol Ilegal',
      category: 'KKN 2026',
      src: '/images/sosialisasi-judol-pinjol.jpg',
      caption: 'Foto bersama Mahasiswa KKN Kelompok 18 Lentera dan warga masyarakat setelah penyampaian materi sosialisasi literasi digital (3 September 2026).'
    }
  ];

  const categories = ['Semua', 'KKN 2026', 'UMKM'];

  const filteredItems = activeCategory === 'Semua'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-950 text-white p-8 sm:p-12 rounded-3xl shadow-xl">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/80 text-emerald-200 text-xs font-bold border border-emerald-700">
            <ImageIcon className="w-4 h-4 text-emerald-300" />
            <span>Dokumentasi Visual</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Galeri Kegiatan KKN Desa Utan Jati
          </h1>
          <p className="text-emerald-100/80 text-sm leading-relaxed">
            Kumpulan foto-foto momen pengabdian mahasiswa KKN Tematik 2026 di Desa Utan Jati.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-gray-200">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeCategory === cat
                ? 'bg-emerald-800 text-white shadow-md'
                : 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 border border-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setPreviewImage(item)}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer"
          >
            <div className="h-64 sm:h-80 w-full overflow-hidden bg-gray-100">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="p-5 bg-white">
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                {item.category}
              </span>
              <h3 className="font-bold text-gray-900 text-base mt-2 line-clamp-1 group-hover:text-emerald-700 transition">
                {item.title}
              </h3>
              <p className="text-gray-500 text-xs mt-1 line-clamp-2">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {previewImage && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-emerald-950 rounded-3xl overflow-hidden shadow-2xl border border-emerald-800">
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition cursor-pointer"
            >
              <XIcon className="w-6 h-6" />
            </button>

            <div className="max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={previewImage.src}
                alt={previewImage.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6 text-white space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs bg-emerald-500 text-emerald-950 font-bold px-2.5 py-0.5 rounded-full">
                  {previewImage.category}
                </span>
              </div>
              <h2 className="text-xl font-bold text-white">{previewImage.title}</h2>
              <p className="text-xs text-emerald-200">{previewImage.caption}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
