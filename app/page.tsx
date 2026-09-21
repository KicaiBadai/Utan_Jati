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
                alt="Logo Resmi Desa Utan Jati"
                className="h-16 w-auto object-contain drop-shadow-xl"
              />
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-600/60 text-emerald-200 text-xs font-bold tracking-wide">
                <SparklesIcon className="w-4 h-4 text-emerald-300" />
                <span>Portal Resmi KKN Tematik 2026 • Desa Utan Jati</span>
              </div>
            </div>


            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none">
              Selamat Datang di <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
                Desa Utan Jati
              </span>
            </h1>

            <p className="text-emerald-100/90 text-base sm:text-lg leading-relaxed font-normal">
              Wadah publikasi resmi kegiatan pengabdian masyarakat mahasiswa Kuliah Kerja Nyata (KKN) serta pengenalan profil, potensi UMKM lokal, dan keasrian Desa Utan Jati.
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

      {/* 2. SAMBUTAN KADES & KETUA KKN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-emerald-100 flex flex-col justify-between">
            <div>
              <div className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
                Sambutan Kepala Desa
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                "Menggandeng Generasi Muda untuk Kejayaan Desa"
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed italic mb-6">
                "Kehadiran teman-teman mahasiswa KKN memberikan energi baru bagi Desa Utan Jati. Kami mengapresiasi setiap program kerja baik di bidang digitalisasi, kesehatan, hingga pengembangan UMKM sekitar desa kita."
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              <div className="w-12 h-12 rounded-full bg-emerald-800 text-white font-bold flex items-center justify-center text-base">
                UJ
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">Sarnin Ayub, SH</p>
                <p className="text-xs text-emerald-700 font-medium">Kepala Desa Utan Jati</p>
              </div>
            </div>
          </div>


          <div className="bg-gradient-to-br from-emerald-900 to-teal-950 p-6 sm:p-8 rounded-3xl text-white shadow-md flex flex-col justify-between">
            <div>
              <div className="inline-block bg-emerald-500/30 text-emerald-200 text-xs font-bold px-3 py-1 rounded-full mb-4 border border-emerald-400/30">
                Pesan Koordinator KKN
              </div>
              <h3 className="text-xl font-bold text-emerald-50 mb-3">
                "Pengabdian Tulus Berbasis Potensi Lokal"
              </h3>
              <p className="text-emerald-100/90 text-sm leading-relaxed italic mb-6">
                "Terima kasih atas penerimaan hangat masyarakat Desa Utan Jati. Kami berkomitmen menyalurkan ilmu pengetahuan perguruan tinggi secara nyata untuk kemajuan desa tercinta."
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-emerald-800">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-emerald-950 font-bold flex items-center justify-center text-base">
                KKN
              </div>
              <div>
                <p className="font-bold text-white text-sm">Muhammad Rizky</p>
                <p className="text-xs text-emerald-300">Ketua Tim KKN Tematik 2026</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. BERITA & KEGIATAN KKN TERBARU */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold tracking-wider uppercase mb-1">
              <TreeIcon className="w-4 h-4" />
              <span>Dokumentasi Pengabdian</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Kegiatan KKN & Berita Desa Terbaru
            </h2>
          </div>

          <Link
            href="/berita"
            className="inline-flex items-center gap-1 text-sm font-bold text-emerald-700 hover:text-emerald-800 hover:underline"
          >
            <span>Semua Berita KKN</span>
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
              Dukung Usaha UMKM Sekitar Desa Utan Jati
            </h2>
            <p className="text-emerald-100/80 text-sm leading-relaxed">
              Jelajahi berbagai usaha kuliner khas desa, warung sembako, rumah makan, konter pulsa digital, serta produk UMKM warga Desa Utan Jati.
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

      {/* 5. POTENSI UNGGULAN DESA UTAN JATI */}
      <section className="bg-emerald-900/10 py-16 border-y border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-emerald-950 mb-3">
              Potensi Unggulan Desa Utan Jati
            </h2>
            <p className="text-gray-600 text-sm">
              Sektor-sektor utama yang menjadi penggerak ekonomi, sosial, dan keasrian lingkungan di Desa Utan Jati.
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
                Lahan pertanian padi organik, palawija, dan kebun kelapa yang luas membentang, menjadi penyokong ketahanan pangan warga lokal.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xl mb-4">
                🏞️
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Wisata Alam Dusun Asri</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                Pemandangan sungai alami dan perbukitan hijau yang menyejukkan mata, ideal untuk pengembangan desa wisata berbasis komunitas.
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
