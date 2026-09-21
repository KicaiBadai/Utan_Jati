'use client';

import React, { useState } from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, SparklesIcon } from '../../components/Icons';

export default function KontakPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', topic: 'Aspirasi Warga', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', phone: '', topic: 'Aspirasi Warga', message: '' });
    }, 4000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-950 text-white p-8 sm:p-12 rounded-3xl shadow-xl">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/80 text-emerald-200 text-xs font-bold border border-emerald-700">
            <PhoneIcon className="w-4 h-4 text-emerald-300" />
            <span>Pusat Informasi & Layanan</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Kontak Posko KKN & Balai Desa
          </h1>
          <p className="text-emerald-100/80 text-sm leading-relaxed">
            Sampaikan masukan, koordinasi kegiatan KKN, atau pertanyaan seputar pelayanan publik Desa Utan Jati.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Info Contact Card */}
        <div className="bg-emerald-950 text-white p-8 rounded-3xl space-y-6 flex flex-col justify-between shadow-lg">
          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold text-white">Alamat Sekretariat</h2>
            
            <div className="space-y-4 text-sm text-emerald-200">
              <div className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Balai Desa & Posko Utama KKN</p>
                  <p className="text-xs text-emerald-300 mt-0.5">
                    Jl. Raya Utan Jati No. 01, Kecamatan Utan, Jawa Tengah 57400
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <p className="font-bold text-white">Telepon / WhatsApp Posko</p>
                  <p className="text-xs text-emerald-300">+62 812-3456-7890 (Humas KKN)</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MailIcon className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <p className="font-bold text-white">Email Resmi</p>
                  <p className="text-xs text-emerald-300">kkn2026@desautanjati.id</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <ClockIcon className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Jam Operasional Balai Desa</p>
                  <p className="text-xs text-emerald-300">Senin - Jumat: 08.00 - 15.30 WIB</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-900/60 border border-emerald-800 text-xs text-emerald-300 space-y-1">
            <p className="font-bold text-white">Posko KKN Standby 24 Jam</p>
            <p className="text-[11px] text-emerald-300/80">
              Tim mahasiswa KKN berada di Dusun 1 & Dusun 2 Desa Utan Jati untuk pendampingan warga.
            </p>
          </div>
        </div>

        {/* Form Aspirasi Warga */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-100 lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">Formulir Pesan & Aspirasi</h2>
            <p className="text-xs text-gray-500 mt-1">Kirimkan masukan atau usulan kegiatan untuk Tim KKN dan Perangkat Desa.</p>
          </div>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-6 rounded-2xl text-center space-y-2">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                ✓
              </div>
              <h3 className="font-bold text-lg">Pesan Berhasil Terkirim!</h3>
              <p className="text-xs text-emerald-800">
                Terima kasih. Pesan Anda telah diterima oleh Tim KKN dan Sekretariat Desa Utan Jati.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-sm text-gray-800">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Nama Lengkap</label>
                  <input
                    type="text"
                    required
                    placeholder="Nama Anda"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">Nomor WhatsApp / HP</label>
                  <input
                    type="tel"
                    placeholder="0812xxxxxxx"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Topik Pesan</label>
                <select
                  value={form.topic}
                  onChange={(e) => setForm({ ...form, topic: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-white transition"
                >
                  <option value="Aspirasi Warga">Aspirasi & Masukan Warga</option>
                  <option value="Kegiatan KKN">Koordinasi Program KKN</option>
                  <option value="UMKM">Kemitraan UMKM Jati</option>
                  <option value="Lainnya">Pertanyaan Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Isi Pesan / Aspirasi</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tuliskan pesan Anda..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm shadow-md transition cursor-pointer"
              >
                Kirim Pesan Ke Posko
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
}
