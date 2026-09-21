'use client';

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-emerald-500 selection:text-white">
      <Navbar />
      
      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}
