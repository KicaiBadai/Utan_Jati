import React from 'react';
import { VILLAGE_STATS, KKN_MEMBERS } from '../../data/initialNews';
import { SparklesIcon, TreeIcon, MapPinIcon, UserIcon } from '../../components/Icons';

export const metadata = {
  title: "Profil Desa Utan Jati - Sejarah, Visi Misi & Demografi",
  description: "Informasi resmi mengenai sejarah berdiri, visi dan misi pembangunan, serta demografi penduduk Desa Utan Jati.",
};

export default function ProfilPage() {
  const pemdesList = [
    { name: 'H. Sulaeman, S.Sos.', role: 'Kepala Desa' },
    { name: 'Bambang Sukojo, S.E.', role: 'Sekretaris Desa' },
    { name: 'Sri Rahayu', role: 'Kaur Keuangan & Perencanaan' },
    { name: 'Kuswanto', role: 'Kasi Pemerintahan & Kesejahteraan' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Banner Profil */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-950 text-white p-8 sm:p-14 rounded-3xl shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/80 text-emerald-200 text-xs font-bold border border-emerald-700">
            <TreeIcon className="w-4 h-4 text-emerald-300" />
            <span>Profil Resmi Desa Utan Jati</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Mengenal Lebih Dekat Desa Utan Jati
          </h1>
          <p className="text-emerald-100/90 text-base leading-relaxed">
            Desa yang subur, berbudaya tinggi, serta menjadi pusat pengrajin kayu jati lokal yang berkomitmen menuju desa digital mandiri.
          </p>
        </div>
      </div>

      {/* Visi & Misi */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-100 lg:col-span-1 flex flex-col justify-center bg-gradient-to-b from-emerald-50/50 to-white">
          <div className="w-12 h-12 bg-emerald-800 text-white font-bold rounded-2xl flex items-center justify-center text-xl mb-4">
            🌟
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Visi Desa Utan Jati</h2>
          <p className="text-gray-700 text-sm leading-relaxed italic border-l-4 border-emerald-600 pl-4 py-1">
            "Terwujudnya Desa Utan Jati yang Sejahtera, Mandiri, Berbasis Potensi Lokal Jati & Pertanian, Serta Unggul Dalam Digitalisasi Pelayanan Masyarakat."
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-100 lg:col-span-2">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6 flex items-center gap-2">
            <span>Misi Utama Pembangunan Desa</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <span className="w-7 h-7 rounded-lg bg-emerald-700 text-white font-bold flex items-center justify-center text-xs mb-2">1</span>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Pemberdayaan Ekonomi UMKM</h3>
              <p className="text-xs text-gray-600">Mengembangkan potensi produk olahan kayu jati dan hasil tani warga ke pasar nasional.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <span className="w-7 h-7 rounded-lg bg-emerald-700 text-white font-bold flex items-center justify-center text-xs mb-2">2</span>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Peningkatan Layanan Digital</h3>
              <p className="text-xs text-gray-600">Mewujudkan transparansi administrasi dan akses informasi publik berbasis website desa.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <span className="w-7 h-7 rounded-lg bg-emerald-700 text-white font-bold flex items-center justify-center text-xs mb-2">3</span>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Kesehatan & Cegah Stunting</h3>
              <p className="text-xs text-gray-600">Memperkuat Posyandu dan nutrisi balita bersama tim medis dan kader PKK.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <span className="w-7 h-7 rounded-lg bg-emerald-700 text-white font-bold flex items-center justify-center text-xs mb-2">4</span>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Kelestarian Lingkungan Dusun</h3>
              <p className="text-xs text-gray-600">Menjaga kelestarian hutan jati rakyat dan kerapihan sanitasi dusun warga.</p>
            </div>
          </div>
        </div>

      </div>

      {/* KANTOR BALAI DESA / KELURAHAN PHOTO SHOWCASE */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-emerald-100 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-6 rounded-2xl overflow-hidden shadow-md border border-gray-100 max-h-[360px]">
          <img
            src="/images/kantor-kelurahan-desa.png"
            alt="Kantor Balai Desa Utan Jati"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="md:col-span-6 space-y-4">
          <div className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
            Gedung Kantor Desa
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900 leading-tight">
            Kantor Balai Desa & Pusat Pelayanan Warga
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Gedung Kantor Balai Desa Utan Jati merupakan pusat pelayanan administrasi publik, musyawarah pembangunan warga, serta menjadi Posko Utama tempat berkordinasi seluruh kegiatan pengabdian masyarakat Tim KKN Kelompok 18 Lentera.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-emerald-700 font-semibold bg-emerald-50 p-3 rounded-xl border border-emerald-100 flex-1">
              <MapPinIcon className="w-4 h-4 shrink-0 text-emerald-600" />
              <span>Jl. Raya Utan Jati No. 01, Kecamatan Utan</span>
            </div>
            <a
              href="https://maps.app.goo.gl/HRdXevS1LB8iy4386"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs shadow-sm transition flex items-center gap-1.5"
            >
              <MapPinIcon className="w-4 h-4 text-emerald-300" />
              <span>Buka Google Maps</span>
            </a>
          </div>
        </div>
      </div>

      {/* Sejarah Singkat Desa Utan Jati */}
      <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-emerald-100 space-y-4">
        <h2 className="text-2xl font-extrabold text-gray-900">Sejarah Desa Utan Jati</h2>
        <div className="prose prose-emerald max-w-none text-gray-700 text-sm leading-relaxed space-y-3">
          <p>
            Nama <strong>Desa Utan Jati</strong> diambil dari hamparan kawasan hutan pohon jati yang tumbuh subur sejak awal abad ke-20. Dahulu, area ini merupakan wilayah pemukiman yang dikelilingi pepohonan jati rindang dan dialiri oleh dua muara sungai jernih.
          </p>
          <p>
            Secara perlahan, keahlian warga mengolah sisa kayu jati menjadi barang ukiran dan perkakas rumah tangga berkembang pesat dari generasi ke generasi. Kini, Desa Utan Jati telah berkembang menjadi desa berdaya yang memadukan tradisi kerajinan jati dengan pemanfaatan teknologi informasi untuk kesejahteraan masyarakat.
          </p>
        </div>
      </div>

      {/* Demografi & Statistik Penduduk */}
      <div className="bg-emerald-950 text-white p-8 sm:p-10 rounded-3xl space-y-6">
        <div className="max-w-xl">
          <h2 className="text-2xl font-extrabold text-white mb-2">Demografi & Wilayah Desa</h2>
          <p className="text-xs text-emerald-200">
            Data statistik kependudukan dan luas cakupan wilayah Desa Utan Jati.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-emerald-900/60 p-4 rounded-2xl border border-emerald-800">
            <p className="text-xs text-emerald-300">Total Penduduk</p>
            <p className="text-2xl font-black text-white mt-1">{VILLAGE_STATS.population}</p>
            <p className="text-[10px] text-emerald-400">Jiwa</p>
          </div>
          <div className="bg-emerald-900/60 p-4 rounded-2xl border border-emerald-800">
            <p className="text-xs text-emerald-300">Kepala Keluarga</p>
            <p className="text-2xl font-black text-white mt-1">{VILLAGE_STATS.households}</p>
            <p className="text-[10px] text-emerald-400">KK</p>
          </div>
          <div className="bg-emerald-900/60 p-4 rounded-2xl border border-emerald-800">
            <p className="text-xs text-emerald-300">Luas Wilayah</p>
            <p className="text-2xl font-black text-white mt-1">{VILLAGE_STATS.areaSize}</p>
            <p className="text-[10px] text-emerald-400">Hektar</p>
          </div>
          <div className="bg-emerald-900/60 p-4 rounded-2xl border border-emerald-800">
            <p className="text-xs text-emerald-300">Tim Mahasiswa KKN</p>
            <p className="text-2xl font-black text-emerald-300 mt-1">{VILLAGE_STATS.kknStudents}</p>
            <p className="text-[10px] text-emerald-400">Kelompok 18 Lentera</p>
          </div>
        </div>
      </div>

      {/* STRUKTUR TIM KKN KELOMPOK 18 LENTERA */}
      <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-emerald-100 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-6">
          <div>
            <div className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Anggota Tim Pengabdian
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Tim Mahasiswa KKN Kelompok 18 Lentera
            </h2>
            <p className="text-xs text-gray-500 mt-1">Daftar 12 mahasiswa pengabdi di Desa Utan Jati.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {KKN_MEMBERS.map((member, idx) => {
            const isLeadership = member.role.includes('Ketua') || member.role.includes('Sekretaris') || member.role.includes('Bendahara');
            return (
              <div
                key={idx}
                className={`p-5 rounded-2xl border transition-all ${
                  isLeadership
                    ? 'bg-gradient-to-br from-emerald-50 to-teal-50/50 border-emerald-200 shadow-sm'
                    : 'bg-slate-50/80 border-gray-100 hover:border-emerald-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-xl font-bold flex items-center justify-center text-sm shadow-sm ${
                    isLeadership ? 'bg-emerald-800 text-white' : 'bg-teal-700 text-white'
                  }`}>
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm leading-snug">{member.name}</h3>
                    <p className="text-xs font-semibold text-emerald-700 mt-0.5">{member.role}</p>
                    <span className="inline-block text-[10px] font-medium text-gray-500 bg-white px-2 py-0.5 rounded border border-gray-200 mt-1">
                      Kelas: {member.classGroup}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Perangkat Desa Utan Jati */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-100 space-y-6">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900">Perangkat Pemerintah Desa</h2>
          <p className="text-xs text-gray-500 mt-1">Jajaran pemerintahan Desa Utan Jati.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pemdesList.map((person, idx) => (
            <div key={idx} className="p-4 rounded-2xl border border-gray-100 bg-slate-50/80 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-900 text-white font-bold flex items-center justify-center text-xs">
                Desa
              </div>
              <div>
                <p className="font-bold text-gray-900 text-xs">{person.name}</p>
                <p className="text-[11px] text-emerald-700 font-medium">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
