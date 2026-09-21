'use client';

import React, { useState } from 'react';
import { INITIAL_NEWS, NewsItem } from '../../data/initialNews';
import NewsCard from '../../components/NewsCard';
import NewsDetailModal from '../../components/NewsDetailModal';
import { SearchIcon, FilterIcon, SparklesIcon } from '../../components/Icons';

export default function BeritaPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const categories = [
    'Semua',
    'Kegiatan KKN',
    'UMKM & Ekonomi',
    'Kesehatan',
    'Infrastruktur',
    'Pengumuman Desa'
  ];

  const filteredNews = INITIAL_NEWS.filter((news) => {
    const matchesCategory = selectedCategory === 'Semua' || news.category === selectedCategory;
    const matchesSearch =
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (news.tags && news.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-950 text-white p-8 sm:p-12 rounded-3xl shadow-xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/80 text-emerald-200 text-xs font-bold border border-emerald-700">
            <SparklesIcon className="w-3.5 h-3.5 text-emerald-300" />
            <span>Dokumentasi Resmi KKN</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Portal Berita & Kegiatan KKN
          </h1>
          <p className="text-emerald-100/80 text-sm leading-relaxed">
            Temukan seluruh catatan kegiatan, artikel pengabdian mahasiswa KKN 2026, serta pengumuman resmi Desa Utan Jati secara lengkap.
          </p>
        </div>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-emerald-100 space-y-4">
        
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Cari kegiatan KKN, judul berita, penulis, atau kata kunci..."
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

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs font-bold text-gray-500 flex items-center gap-1 shrink-0 mr-1">
            <FilterIcon className="w-4 h-4 text-emerald-600" />
            Kategori:
          </span>
          {categories.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  active
                    ? 'bg-emerald-800 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-emerald-50 hover:text-emerald-700'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

      </div>

      {/* Results Header Counter */}
      <div className="flex items-center justify-between text-xs text-gray-500 px-1">
        <p>
          Menampilkan <span className="font-bold text-gray-800">{filteredNews.length}</span> berita / laporan kegiatan KKN
        </p>
        {selectedCategory !== 'Semua' && (
          <span className="bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-bold">
            Filter: {selectedCategory}
          </span>
        )}
      </div>

      {/* News Grid */}
      {filteredNews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((news) => (
            <NewsCard key={news.id} news={news} onSelect={setSelectedNews} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm space-y-4">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl">
            🔍
          </div>
          <h3 className="text-lg font-bold text-gray-800">Tidak ada berita ditemukan</h3>
          <p className="text-xs text-gray-500 max-w-md mx-auto">
            Coba ubah kata kunci pencarian atau pilih kategori berita yang lain.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('Semua');
            }}
            className="px-4 py-2 rounded-xl bg-emerald-700 text-white font-bold text-xs"
          >
            Reset Filter
          </button>
        </div>
      )}

      {/* Detail Reader Modal */}
      <NewsDetailModal news={selectedNews} onClose={() => setSelectedNews(null)} />

    </div>
  );
}
