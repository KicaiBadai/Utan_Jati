'use client';

import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { INITIAL_NEWS, NewsItem } from '../../../data/initialNews';
import { CalendarIcon, UserIcon, ClockIcon, MapPinIcon, TagIcon, ShareIcon, ChevronRightIcon } from '../../../components/Icons';

export default function SingleNewsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [news, setNews] = useState<NewsItem | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('kedaung_barat_news') || localStorage.getItem('utan_jati_news');
    let all: NewsItem[] = INITIAL_NEWS;
    if (saved) {
      try {
        all = JSON.parse(saved);
      } catch (e) {
        all = INITIAL_NEWS;
      }
    }
    const found = all.find(item => item.id === resolvedParams.id || item.slug === resolvedParams.id);
    setNews(found || all[0]);
  }, [resolvedParams.id]);

  if (!news) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <p className="text-gray-500">Memuat artikel berita...</p>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs font-semibold text-gray-500">
        <Link href="/" className="hover:text-emerald-700">Beranda</Link>
        <ChevronRightIcon className="w-3.5 h-3.5" />
        <Link href="/berita" className="hover:text-emerald-700">Berita & KKN</Link>
        <ChevronRightIcon className="w-3.5 h-3.5" />
        <span className="text-gray-800 truncate max-w-[200px]">{news.title}</span>
      </nav>

      {/* Article Header */}
      <div className="space-y-4">
        <div className="inline-block bg-emerald-800 text-white font-bold text-xs px-3.5 py-1 rounded-full">
          {news.category}
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
          {news.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-gray-500 border-b border-gray-100 pb-4">
          <span className="flex items-center gap-1.5">
            <CalendarIcon className="w-4 h-4 text-emerald-600" />
            {news.date}
          </span>
          <span className="flex items-center gap-1.5">
            <ClockIcon className="w-4 h-4 text-emerald-600" />
            {news.readTime}
          </span>
          {news.location && (
            <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
              <MapPinIcon className="w-4 h-4 text-emerald-600" />
              {news.location}
            </span>
          )}
        </div>
      </div>

      {/* Feature Image */}
      <div className="rounded-3xl overflow-hidden shadow-lg border border-emerald-100 max-h-[480px]">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Author Card */}
      <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-100 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-emerald-700 text-white font-bold flex items-center justify-center text-sm">
          {news.author.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-gray-900 text-sm">{news.author}</p>
          <p className="text-xs text-emerald-700">{news.authorRole}</p>
        </div>
      </div>

      {/* Content Text */}
      <div
        className="prose prose-emerald max-w-none text-gray-800 leading-relaxed text-base sm:text-lg"
        dangerouslySetInnerHTML={{ __html: news.content }}
      />

      {/* Tags */}
      {news.tags && news.tags.length > 0 && (
        <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center gap-2">
          <TagIcon className="w-4 h-4 text-emerald-600" />
          <span className="text-xs font-bold text-gray-500">Tags:</span>
          {news.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs bg-gray-100 text-gray-700 font-semibold px-3 py-1 rounded-lg border border-gray-200"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Back button */}
      <div className="pt-6">
        <Link
          href="/berita"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-800 text-white font-bold text-sm hover:bg-emerald-900 transition"
        >
          ← Kembali ke Portal Berita
        </Link>
      </div>

    </article>
  );
}
