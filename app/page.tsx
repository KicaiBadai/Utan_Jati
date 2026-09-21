'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { INITIAL_NEWS, VILLAGE_STATS, NewsItem } from '../data/initialNews';
import NewsCard from '../components/NewsCard';
import NewsDetailModal from '../components/NewsDetailModal';
import { SparklesIcon, CalendarIcon, UserIcon, MapPinIcon, TreeIcon, ChevronRightIcon } from '../components/Icons';

export default function Home() {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const featuredNews = INITIAL_NEWS[0];
  const recentNews = INITIAL_NEWS.slice(1, 4);

  return (
    <div className="space-y-16 pb-16">

      {/* 1. HERO SECTION */}
      <section className="relative bg-emerald-950 text-white overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 z-0 opacity-25 bg-[url('https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-emerald-950 via-emerald-950/90 to-emerald-900/80"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">

            <div className="flex items-center gap-4 flex-wrap">
              <img
                src="/images/logo-desa.png"
                alt="Logo Resmi Kedaung Barat"
                className="h-16 w-auto object-contain drop-shadow-xl"
              />
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-600/60 text-emerald-200 text-xs font-bold tracking-wide">
                <SparklesIcon className="w-4 h-4 text-emerald-300" />
                <span>Portal Resmi Pemerintah Kedaung Barat</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none">
              Selamat Datang di <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
                Kedaung Barat
              </span>
            </h1>

            <p className="text-emerald-100/90 text-base sm:text-lg leading-relaxed font-normal">
              Portal resmi publikasi informasi profil desa, sejarah kepemimpinan, potensi UMKM lokal, serta keasrian Kedaung Barat, Kecamatan Sepatan Timur, Kabupaten Tangerang.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/berita"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-emerald-950 font-bold text-sm shadow-xl shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <span>Lihat Berita Desa</span>
                <ChevronRightIcon className="w-4 h-4" />
              </Link>
              <Link
                href="/profil"
                className="px-6 py-3.5 rounded-xl bg-emerald-900/80 hover:bg-emerald-800 text-emerald-100 font-bold text-sm border border-emerald-700/60 transition-all"
              >
                Jelajahi Profil Desa
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SAMBUTAN KEPALA DESA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-emerald-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-3.5 py-1.5 rounded-full">
              Sambutan Kepala Desa
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 leading-tight">
              "Membangun Kedaung Barat yang Berdaya, Asri & Rukun"
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed italic">
              "Selamat datang di portal informasi resmi Kedaung Barat. Kami senantiasa berkomitmen memberikan pelayanan terbaik bagi seluruh warga, mendorong kemajuan usaha UMKM lokal, serta menjaga keasrian dan kerukunan lingkungan desa tercinta."
            </p>

            <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
              <div className="w-12 h-12 rounded-full bg-emerald-800 text-white font-bold flex items-center justify-center text-base shadow-sm">
                DKB
              </div>
              <div>
                <p className="font-bold text-gray-900 text-base">Sarnin Ayub, SH</p>
                <p className="text-xs text-emerald-700 font-semibold">Kepala Kedaung Barat</p>
              </div>
            </div>
          </div>

          <div className="shrink-0 p-4 bg-emerald-50 rounded-2xl border border-emerald-100 hidden lg:block">
            <img
              src="/images/logo-desa.png"
              alt="Logo Kedaung Barat"
              className="w-32 h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* 3. BERITA & KEGIATAN DESA TERBARU */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold tracking-wider uppercase mb-1">
              <TreeIcon className="w-4 h-4" />
              <span>Dokumentasi Desa</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Berita & Kegiatan Desa Terbaru
            </h2>
          </div>

          <Link
            href="/berita"
            className="inline-flex items-center gap-1 text-sm font-bold text-emerald-700 hover:text-emerald-800 hover:underline"
          >
            <span>Semua Berita Desa</span>
            <ChevronRightIcon className="w-4 h-4" />
          </Link>
        </div>

        {/* Featured Top Article */}
        {featuredNews && (
          <div className="mb-8">
            <NewsCard news={featuredNews} onSelect={setSelectedNews} featured={true} />
          </div>
        )}

        {/* Recent Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentNews.map((news) => (
            <NewsCard key={news.id} news={news} onSelect={setSelectedNews} />
          ))}
        </div>
      </section>

      {/* 4. SEKSI JELAJAH UMKM DESA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-900 to-teal-950 text-white p-8 sm:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-block bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-400/20">
              Pemberdayaan Ekonomi Warga
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Dukung Usaha UMKM Sekitar Kedaung Barat
            </h2>
            <p className="text-emerald-100/80 text-sm leading-relaxed">
              Jelajahi berbagai usaha kuliner khas desa, warung sembako, rumah makan, konter pulsa digital, serta produk UMKM warga Kedaung Barat.
            </p>
          </div>

          <Link
            href="/umkm"
            className="px-6 py-3.5 rounded-2xl bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-bold text-sm shadow-lg transition flex items-center gap-2 shrink-0"
          >
            <span>Lihat Katalog UMKM</span>
            <ChevronRightIcon className="w-4 h-4 text-emerald-950" />
          </Link>
        </div>
      </section>

      {/* 5. POTENSI UNGGULAN KEDAUNG BARAT */}
      <section className="bg-emerald-900/10 py-16 border-y border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-emerald-950 mb-3">
              Potensi Unggulan Kedaung Barat
            </h2>
            <p className="text-gray-600 text-sm">
              Sektor-sektor utama yang menjadi penggerak ekonomi, sosial, dan keasrian lingkungan di Kedaung Barat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xl mb-4">
                🏪
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Usaha Mikro & Perdagangan Desa</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                Aneka warung kuliner lezat, rumah makan tradisional, toko sembako harian, serta konter layanan digital yang digerakkan oleh warga lokal.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xl mb-4">
                🌾
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Pertanian & Perkebunan Subur</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                Lahan pertanian seluas 115 Ha dan daratan 110 Ha yang membentang subur, menjadi penyokong ketahanan pangan warga lokal.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xl mb-4">
                🏞️
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Lingkungan Dusun Asri & Toleran</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                Suasana pedesaan yang asri dan sejuk dengan keberagaman tempat ibadah yang menjunjung tinggi nilai-nilai toleransi antar warga.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL READ DETAIL */}
      <NewsDetailModal news={selectedNews} onClose={() => setSelectedNews(null)} />

    </div>
  );
}
