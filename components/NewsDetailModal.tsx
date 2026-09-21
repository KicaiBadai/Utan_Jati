'use client';

import React from 'react';
import { NewsItem } from '../data/initialNews';
import { XIcon, CalendarIcon, UserIcon, ClockIcon, MapPinIcon, TagIcon, ShareIcon } from './Icons';

interface NewsDetailModalProps {
  news: NewsItem | null;
  onClose: () => void;
}

export default function NewsDetailModal({ news, onClose }: NewsDetailModalProps) {
  if (!news) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: news.title,
        text: news.summary,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Tautan berita berhasil disalin ke clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
      <div className="relative bg-white rounded-3xl max-w-3xl w-full shadow-2xl overflow-hidden border border-emerald-100 max-h-[90vh] flex flex-col my-6">
        
        {/* Sticky Header */}
        <div className="bg-emerald-950 px-6 py-4 text-white flex items-center justify-between z-10 border-b border-emerald-800">
          <div className="flex items-center gap-2">
            <span className="bg-emerald-500 text-emerald-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider">
              {news.category}
            </span>
            <span className="text-xs text-emerald-300">Desa Utan Jati</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-full hover:bg-white/10 text-emerald-300 hover:text-white transition-colors cursor-pointer"
              title="Bagikan Artikel"
            >
              <ShareIcon className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-emerald-300 hover:text-white transition-colors cursor-pointer"
            >
              <XIcon className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto flex-1">
          
          {/* Article Banner Image */}
          <div className="relative h-64 sm:h-80 w-full bg-gray-900">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h1 className="text-xl sm:text-3xl font-extrabold leading-tight mb-3 drop-shadow-md">
                {news.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-emerald-200">
                <span className="flex items-center gap-1.5">
                  <CalendarIcon className="w-4 h-4 text-emerald-400" />
                  {news.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <ClockIcon className="w-4 h-4 text-emerald-400" />
                  {news.readTime}
                </span>
                {news.location && (
                  <span className="flex items-center gap-1.5 text-emerald-300">
                    <MapPinIcon className="w-4 h-4 text-emerald-400" />
                    {news.location}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Body Content & Author Metadata */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Author Info Card */}
            <div className="flex items-center justify-between bg-emerald-50/80 p-4 rounded-2xl border border-emerald-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-700 text-white font-bold flex items-center justify-center text-sm shadow-md">
                  {news.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{news.author}</h4>
                  <p className="text-xs text-emerald-700 font-medium">{news.authorRole}</p>
                </div>
              </div>
              <span className="text-xs text-gray-500 font-medium bg-white px-3 py-1.5 rounded-xl border border-emerald-100">
                Dokumentasi KKN 2026
              </span>
            </div>

            {/* Main Text Content */}
            <div 
              className="prose prose-emerald max-w-none text-gray-700 leading-relaxed text-sm sm:text-base"
              dangerouslySetInnerHTML={{ __html: news.content }}
            />

            {/* Article Tags */}
            {news.tags && news.tags.length > 0 && (
              <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center gap-2">
                <TagIcon className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-bold text-gray-500 mr-1">Kata Kunci:</span>
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

          </div>

        </div>

        {/* Footer actions */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex items-center justify-between">
          <p className="text-xs text-gray-500">
            Diterbitkan untuk Publikasi Resmi Desa Utan Jati
          </p>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-emerald-800 text-white font-bold text-xs hover:bg-emerald-900 transition cursor-pointer"
          >
            Tutup Bacaan
          </button>
        </div>

      </div>
    </div>
  );
}
