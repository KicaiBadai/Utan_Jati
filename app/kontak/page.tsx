import React from 'react';
import { MapPinIcon, ClockIcon, ChevronRightIcon } from '../../components/Icons';

export const metadata = {
  title: "Kontak & Lokasi Kantor Kedaung Barat",
  description: "Alamat resmi kantor balai Kedaung Barat, Sepatan Timur, Kabupaten Tangerang, Banten serta petunjuk rute Google Maps.",
};

export default function KontakPage() {
  const mapUrl = "https://maps.app.goo.gl/HRdXevS1LB8iy4386";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-950 text-white p-8 sm:p-12 rounded-3xl shadow-xl">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/80 text-emerald-200 text-xs font-bold border border-emerald-700">
            <MapPinIcon className="w-4 h-4 text-emerald-300" />
            <span>Pusat Informasi & Lokasi</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Kantor Balai Kedaung Barat
          </h1>
          <p className="text-emerald-100/80 text-sm leading-relaxed">
            Informasi alamat resmi Balai Kedaung Barat, Kecamatan Sepatan Timur, Kabupaten Tangerang, Provinsi Banten.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Info Card Alamat */}
        <div className="bg-emerald-950 text-white p-8 sm:p-10 rounded-3xl space-y-6 flex flex-col justify-between shadow-lg">
          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold text-white">Alamat Resmi Balai Desa</h2>
            
            <div className="space-y-6 text-sm text-emerald-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-900/80 rounded-2xl border border-emerald-800 shrink-0">
                  <MapPinIcon className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="space-y-2">
                  <p className="font-bold text-white text-base">Kantor Kepala Kedaung Barat</p>
                  <p className="text-xs text-emerald-300/90 leading-relaxed">
                    Kecamatan Sepatan Timur, Kabupaten Tangerang, Provinsi Banten (Kode Pos: 15510)
                  </p>
                  <div className="pt-2">
                    <a
                      href={mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-400 text-emerald-950 font-bold text-xs shadow-md hover:bg-emerald-300 transition"
                    >
                      <MapPinIcon className="w-4 h-4" />
                      <span>Petunjuk Lokasi Google Maps</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-emerald-900/80 pt-6">
                <div className="p-3 bg-emerald-900/80 rounded-2xl border border-emerald-800 shrink-0">
                  <ClockIcon className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-white text-base">Jam Operasional Kantor</p>
                  <p className="text-xs text-emerald-300 font-semibold">Senin - Jumat: 08.00 - 15.30 WIB</p>
                  <p className="text-[11px] text-emerald-400/80">Sabtu & Minggu / Hari Libur Nasional: Tutup</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-900/50 border border-emerald-800 text-xs text-emerald-300 space-y-1">
            <p className="font-bold text-white">Pelayanan Masyarakat</p>
            <p className="text-[11px] text-emerald-300/80 leading-relaxed">
              Pelayanan administrasi kependudukan dan surat-menyurat warga dilayani langsung di Balai Kedaung Barat pada jam kerja.
            </p>
          </div>
        </div>

        {/* Peta Digital Google Maps Card */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-emerald-100 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 text-emerald-800 text-xs font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              <MapPinIcon className="w-3.5 h-3.5 text-emerald-600" />
              <span>Peta Digital Google Maps</span>
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900">Petunjuk Arah Rute Google Maps</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Anda dapat mengklik tombol petunjuk arah di bawah ini untuk menavigasi rute perjalanan secara akurat menuju Kantor Balai Kedaung Barat melalui Google Maps.
            </p>

            <div className="relative overflow-hidden rounded-2xl border border-emerald-100 shadow-sm bg-gray-900 mt-4">
              <img
                src="/images/peta-geografis-kedaung-barat.jpg"
                alt="Peta Satelit Kedaung Barat"
                className="w-full h-48 object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-white text-xs font-semibold">Wilayah Kedaung Barat, Sepatan Timur</span>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-700 to-teal-700 text-white font-bold text-sm shadow-md hover:shadow-emerald-700/30 hover:scale-[1.01] transition flex items-center justify-center gap-2"
            >
              <MapPinIcon className="w-5 h-5" />
              <span>Buka di Aplikasi Google Maps</span>
              <ChevronRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
