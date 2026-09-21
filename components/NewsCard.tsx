'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NewsItem } from '../data/initialNews';
import { CalendarIcon, UserIcon, ClockIcon, MapPinIcon, ChevronRightIcon } from './Icons';

interface NewsCardProps {
  news: NewsItem;
  onSelect?: (news: NewsItem) => void;
  featured?: boolean;
}

export default function NewsCard({ news, onSelect, featured = false }: NewsCardProps) {
  const categoryColorMap: Record<string, string> = {
    'Kegiatan KKN': 'bg-emerald-600 text-white',
    'Pengumuman Desa': 'bg-blue-600 text-white',
    'UMKM & Ekonomi': 'bg-amber-600 text-white',
    'Kesehatan': 'bg-rose-600 text-white',
    'Pendidikan': 'bg-purple-600 text-white',
    'Infrastruktur': 'bg-teal-600 text-white',
  };

  const badgeStyle = categoryColorMap[news.category] || 'bg-gray-700 text-white';

  if (featured) {
    return (
      <div 
        onClick={() => onSelect && onSelect(news)}
        className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-emerald-100 flex flex-col md:flex-row cursor-pointer"
      >
        <div className="md:w-1/2 relative min-h-[260px] md:min-h-[360px] overflow-hidden bg-gray-100">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 z-10">
            <span className={`text-xs font-bold px-3.5 py-1.5 rounded-full shadow-md ${badgeStyle}`}>
              {news.category}
            </span>
          </div>
        </div>

        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between bg-gradient-to-b from-white to-emerald-50/30">
          <div>
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-gray-500 mb-3">
              <span className="flex items-center gap-1.5">
                <CalendarIcon className="w-4 h-4 text-emerald-600" />
                {news.date}
              </span>
              <span className="flex items-center gap-1.5">
                <ClockIcon className="w-4 h-4 text-emerald-600" />
                {news.readTime}
              </span>
              {news.location && (
                <span className="flex items-center gap-1.5 text-emerald-700">
                  <MapPinIcon className="w-4 h-4 text-emerald-600" />
                  {news.location}
                </span>
              )}
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors line-clamp-2 mb-3 leading-snug">
              {news.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6">
              {news.summary}
            </p>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-emerald-100">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 text-xs font-bold">
                {news.author.charAt(0)}
              </div>
              <div>
                <p className="text-xs font-bold text-gray-800">{news.author}</p>
                <p className="text-[11px] text-gray-500">{news.authorRole}</p>
              </div>
            </div>

            <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 group-hover:translate-x-1 transition-transform">
              Baca Selengkapnya
              <ChevronRightIcon className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={() => onSelect && onSelect(news)}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between cursor-pointer"
    >
      <div>
        <div className="relative h-48 w-full overflow-hidden bg-gray-100">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 z-10">
            <span className={`text-[11px] font-bold px-3 py-1 rounded-full shadow-sm ${badgeStyle}`}>
              {news.category}
            </span>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
            <span className="flex items-center gap-1">
              <CalendarIcon className="w-3.5 h-3.5 text-emerald-600" />
              {news.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ClockIcon className="w-3.5 h-3.5 text-emerald-600" />
              {news.readTime}
            </span>
          </div>

          <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors line-clamp-2 mb-2 leading-snug">
            {news.title}
          </h4>

          <p className="text-gray-600 text-xs leading-relaxed line-clamp-3 mb-4">
            {news.summary}
          </p>
        </div>
      </div>

      <div className="px-5 pb-5 pt-3 border-t border-gray-50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <UserIcon className="w-3.5 h-3.5 text-emerald-600" />
          <span className="text-xs font-semibold text-gray-700 truncate max-w-[120px]">
            {news.author}
          </span>
        </div>
        
        <span className="text-xs font-bold text-emerald-600 group-hover:text-emerald-800 flex items-center gap-0.5">
          Detail
          <ChevronRightIcon className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  );
}
