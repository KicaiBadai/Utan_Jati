'use client';

import React, { useState } from 'react';
import { UMKM_LIST, UMKMItem } from '../../data/umkmData';
import { SearchIcon, FilterIcon, MapPinIcon, SparklesIcon, XIcon, UserIcon, PhoneIcon } from '../../components/Icons';

export default function UMKMPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [selectedUMKM, setSelectedUMKM] = useState<UMKMItem | null>(null);

  const categories = ['Semua', ...Array.from(new Set(UMKM_LIST.map((item) => item.category)))];

  const filteredUMKM = UMKM_LIST.filter((item) => {
    const matchesCat = selectedCategory === 'Semua' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.owner.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.phone && item.phone.includes(searchQuery));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-950 text-white p-8 sm:p-12 rounded-3xl shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/80 text-emerald-200 text-xs font-bold border border-emerald-700">
            <SparklesIcon className="w-4 h-4 text-emerald-300" />
            <span>Pemberdayaan Ekonomi Desa</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Katalog UMKM & Produk Lokal Kedaung Barat
          </h1>
          <p className="text-emerald-100/80 text-sm leading-relaxed">
            Dukung dan jelajahi berbagai produk kuliner khas desa, sembako harian, konter pulsa digital, serta warung usaha masyarakat Kedaung Barat. Klik pada kartu usaha untuk melihat deskripsi lengkap.
          </p>

        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-emerald-100 space-y-4">
        
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Cari nama usaha, produk, pemilik warung, atau kata kunci..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none text-sm transition"
          />
          <SearchIcon className="w-5 h-5 text-gray-400 absolute left-3.5 top-3.5" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-3.5 text-xs text-gray-400 hover:text-gray-600 font-bold"
            >
              Hapus
            </button>
          )}
        </div>

        {/* Filter Categories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs font-bold text-gray-500 flex items-center gap-1 shrink-0 mr-1">
            <FilterIcon className="w-4 h-4 text-emerald-600" />
            Kategori Usaha:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer shrink-0 ${
                selectedCategory === cat
                  ? 'bg-emerald-800 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-emerald-50 hover:text-emerald-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* Results counter */}
      <div className="flex items-center justify-between text-xs text-gray-500 px-1">
        <p>
          Menampilkan <span className="font-bold text-gray-800">{filteredUMKM.length}</span> usaha UMKM sekitar desa
        </p>
        <span className="text-emerald-700 font-medium hidden sm:inline">
          💡 Klik salah satu kartu UMKM untuk melihat deskripsi & detail
        </span>
      </div>

      {/* UMKM Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUMKM.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedUMKM(item)}
            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-emerald-100/80 flex flex-col justify-between cursor-pointer"
          >
            <div>
              {/* Image & Badge */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 z-10 flex gap-2">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full shadow-sm bg-emerald-800 text-white">
                    {item.category}
                  </span>
                  {item.badge && (
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full shadow-sm bg-amber-500 text-emerald-950">
                      {item.badge}
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs text-emerald-700 font-semibold mt-1 flex items-center gap-1">
                    <UserIcon className="w-3.5 h-3.5 text-emerald-600" />
                    Pemilik: {item.owner}
                  </p>
                  {item.phone && (
                    <p className="text-xs text-gray-600 font-medium mt-1 flex items-center gap-1">
                      <PhoneIcon className="w-3.5 h-3.5 text-emerald-600" />
                      No. Kontak: <span className="font-bold text-emerald-800">{item.phone}</span>
                    </p>
                  )}
                </div>

                <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 pt-3 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-gray-500 truncate max-w-[70%]">
                <MapPinIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="truncate">{item.address}</span>
              </div>
              <span className="text-xs font-bold text-emerald-700 group-hover:underline shrink-0">
                Lihat Detail &rarr;
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* POP-UP MODAL DESKRIPSI UMKM */}
      {selectedUMKM && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
          onClick={() => setSelectedUMKM(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative border border-emerald-100 max-h-[90vh] flex flex-col my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header / Image Banner */}
            <div className="relative h-64 sm:h-80 w-full bg-gray-900 shrink-0">
              <img
                src={selectedUMKM.image}
                alt={selectedUMKM.name}
                className="w-full h-full object-cover opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedUMKM(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition cursor-pointer backdrop-blur-md z-20"
                aria-label="Tutup Pop-up"
              >
                <XIcon className="w-5 h-5" />
              </button>

              {/* Badges */}
              <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                <span className="text-xs font-bold px-3 py-1 rounded-full shadow-md bg-emerald-700 text-white">
                  {selectedUMKM.category}
                </span>
                {selectedUMKM.badge && (
                  <span className="text-xs font-bold px-3 py-1 rounded-full shadow-md bg-amber-400 text-emerald-950">
                    {selectedUMKM.badge}
                  </span>
                )}
              </div>

              {/* Title & Owner inside Banner */}
              <div className="absolute bottom-4 left-6 right-6 text-white z-10 space-y-1">
                <h2 className="text-2xl sm:text-3xl font-extrabold drop-shadow-md">
                  {selectedUMKM.name}
                </h2>
                <p className="text-xs sm:text-sm text-emerald-200 font-medium flex items-center gap-1.5">
                  <UserIcon className="w-4 h-4 text-emerald-400" />
                  Pemilik Usaha: <span className="font-bold text-white">{selectedUMKM.owner}</span>
                </p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              
              {/* Nomor Kontak jika ada */}
              {selectedUMKM.phone && (
                <div className="bg-emerald-50/80 p-4 rounded-2xl border border-emerald-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-emerald-700 text-white rounded-xl shrink-0">
                      <PhoneIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wider">No. Kontak / Pemesanan</h4>
                      <p className="text-sm font-extrabold text-emerald-800 mt-0.5">{selectedUMKM.phone}</p>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/62${selectedUMKM.phone.replace(/\D/g, '').replace(/^0/, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl transition shadow-sm flex items-center gap-1.5 shrink-0 cursor-pointer"
                  >
                    Hubungi WA
                  </a>
                </div>
              )}

              {/* Lokasi */}
              <div className="bg-gray-50/80 p-4 rounded-2xl border border-gray-200/80 flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-600 text-white rounded-xl shrink-0 mt-0.5">
                    <MapPinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider">Lokasi & Alamat Usaha</h4>
                    <p className="text-sm text-gray-800 font-medium mt-0.5">{selectedUMKM.address}</p>
                  </div>
                </div>
                {selectedUMKM.mapUrl && (
                  <a
                    href={selectedUMKM.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl transition shadow-sm flex items-center gap-1.5 shrink-0 cursor-pointer"
                  >
                    <MapPinIcon className="w-3.5 h-3.5 text-emerald-300" />
                    Buka Google Maps &rarr;
                  </a>
                )}
              </div>

              {/* Deskripsi Lengkap */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Deskripsi Lengkap Usaha
                </h4>
                <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line bg-gray-50 p-4 sm:p-5 rounded-2xl border border-gray-100">
                  {selectedUMKM.description}
                </div>
              </div>

              {/* Footer action button */}
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedUMKM(null)}
                  className="px-6 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl font-bold text-sm transition shadow-md cursor-pointer"
                >
                  Tutup Pop-up
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}


