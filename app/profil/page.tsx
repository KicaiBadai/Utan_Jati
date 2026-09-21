import React from 'react';
import { VILLAGE_STATS, KKN_MEMBERS } from '../../data/initialNews';
import { SparklesIcon, TreeIcon, MapPinIcon, UserIcon } from '../../components/Icons';

export const metadata = {
  title: "Profil Kedaung Barat - Sejarah, Geografis, Demografi & Sarana Prasarana",
  description: "Informasi resmi mengenai sejarah berdiri, silsilah kepemimpinan, letak geografis, demografi penduduk, serta sarana prasarana Kedaung Barat, Kecamatan Sepatan Timur, Kabupaten Tangerang.",
};

export default function ProfilPage() {
  const pemdesList = [
    { name: 'Sarnin Ayub, SH', role: 'Kepala Desa' },
    { name: 'Mariadi', role: 'Sekretaris Desa' },
    { name: 'Aeb Saipudin', role: 'Ketua RT' },
    { name: 'Indra', role: 'Ketua Karang Taruna' },
  ];

  const kadesHistory = [
    { no: 1, name: 'Lurah Tamin (Pitang Bin Karang)', period: '1946 – 1966', note: 'Putra daerah pertama memimpin (2 periode @ 10 thn)' },
    { no: 2, name: 'Ahmad Bin Ali', period: '1967', note: 'Menjabat kurang lebih 1 tahun' },
    { no: 3, name: 'HM Rais Bin Misat', period: '1967 – 1977', note: 'Menjabat 10 tahun' },
    { no: 4, name: 'Adi Yasan', period: '1978 – 1988', note: 'Menjabat 1 periode' },
    { no: 5, name: 'Sadin Nasain', period: '1988 – 2005', note: 'Menjabat 2 periode' },
    { no: 6, name: 'Sainin Wijaya Karma', period: '2006 – 2012', note: 'Menjabat 1 periode' },
    { no: 7, name: 'Suhendri Sukri', period: '2013 – 2017', note: 'Menjabat 1 periode' },
    { no: 8, name: 'PJ. H. Ahmad Frengky, S.H.', period: '2017 – 2019', note: 'Penjabat Kepala Desa (~2 tahun)' },
    { no: 9, name: 'Sarnin Ayub (Terpilih)', period: '01 Des 2019', note: 'Mantan Sekretaris Kedaung Barat' },
    { no: 10, name: 'Bapak Sarnin Ayub', period: '2019 – 2025', note: 'Kepala Desa Aktif Periode 2019-2025' },
  ];

  const saranaPendidikan = [
    { name: 'Taman Kanak – Kanak (TK)', qty: '3 unit' },
    { name: 'SD / Sederajat', qty: '4 unit' },
    { name: 'SMP / Sederajat', qty: '1 unit' },
    { name: 'SMA / Sederajat', qty: '1 unit' },
    { name: 'Pondok Pesantren', qty: '1 unit' },
    { name: 'Majelis Ta’lim', qty: '2 unit' },
  ];

  const saranaPeribadatan = [
    { name: 'Masjid', qty: '4 unit' },
    { name: 'Mushalla', qty: '16 unit' },
    { name: 'Gereja', qty: '2 unit' },
    { name: 'Vihara', qty: '4 unit' },
  ];

  const saranaPemerintahan = [
    { name: 'Kantor Desa', qty: '1 unit' },
    { name: 'Kantor Kecamatan', qty: '1 unit' },
    { name: 'Balai Pertemuan & Aula', qty: '1 unit' },
    { name: 'Pos Kamling', qty: '20 unit' },
  ];

  const saranaKesehatan = [
    { name: 'Pos Yandu', qty: '8 unit' },
    { name: 'Puskesmas', qty: '1 unit' },
  ];

  const saranaOlahraga = [
    { name: 'Lapangan Sepak Bola', qty: '2 unit' },
    { name: 'Lapangan Futsal', qty: '1 unit' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Banner Profil Header */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-950 text-white p-8 sm:p-14 rounded-3xl shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="flex items-center gap-4 flex-wrap">
            <img
              src="/images/logo-desa.png"
              alt="Logo Resmi Kabupaten Tangerang - Kedaung Barat"
              className="h-20 w-auto object-contain drop-shadow-xl"
            />
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/80 text-emerald-200 text-xs font-bold border border-emerald-700">
              <TreeIcon className="w-4 h-4 text-emerald-300" />
              <span>Profil Resmi Kedaung Barat</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Kedaung Barat
          </h1>
          <p className="text-emerald-100/90 text-base sm:text-lg leading-relaxed max-w-3xl">
            Kecamatan Sepatan Timur, Kabupaten Tangerang, Provinsi Banten. Desa berdaya yang menjunjung tinggi toleransi umat beragama, keasrian lingkungan, serta pelayanan masyarakat digital.
          </p>
        </div>
      </div>

      {/* A. SEJARAH KEDAUNG BARAT */}
      <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-emerald-100 space-y-6">
        <div className="border-b border-gray-100 pb-4">
          <div className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
            Bagian A
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Sejarah Kedaung Barat
          </h2>
        </div>

        <div className="prose prose-emerald max-w-none text-gray-700 text-sm leading-relaxed space-y-4">
          <p>
            Kedaung Barat merupakan bagian dari wilayah yang terletak di <strong>Kecamatan Sepatan Timur, Kabupaten Tangerang, Provinsi Banten</strong>. Mempunyai total luas wilayah sebesar <strong>225 ha</strong>, yang meliputi daratan seluas 110 ha dan persawahan seluas 115 ha.
          </p>
          <p>
            Nama Kedaung Barat ini berasal dari nama pohon <strong>“Kedaung”</strong> yang dahulu tumbuh dalam jumlah banyak di wilayah tersebut, sehingga desa ini dikenal dengan sebutan Kedaung dengan tambahan kata <strong>“Barat”</strong> yang mengartikan bahwa letak desa ini berada di sebelah Barat atau Kulon dari Desa Kedaung Baru. Dahulu Kedaung terbagi menjadi dua bagian yaitu Kedaung Barat dan Kedaung Wetan.
          </p>
          <p>
            Kedaung Barat dipimpin pertama kalinya oleh <strong>Van So She</strong> berkebangsaan Belanda pada zaman Kolonial Belanda sebelum Indonesia merdeka. Kemudian pada tahun 1946 putra daerah memimpin Kedaung Barat untuk pertama kalinya.
          </p>
        </div>

        {/* Tabel Riwayat Kepala Desa */}
        <div className="pt-4 space-y-3">
          <h3 className="text-base font-bold text-gray-900">Riwayat Kepemimpinan Kepala Desa (1946 – Sekarang)</h3>
          <div className="overflow-x-auto rounded-2xl border border-emerald-100">
            <table className="w-full text-left text-xs">
              <thead className="bg-emerald-900 text-white uppercase text-[11px] font-bold">
                <tr>
                  <th className="py-3 px-4">No</th>
                  <th className="py-3 px-4">Nama Kepala Desa</th>
                  <th className="py-3 px-4">Masa Jabatan</th>
                  <th className="py-3 px-4">Keterangan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {kadesHistory.map((row) => (
                  <tr key={row.no} className="hover:bg-emerald-50/50 transition">
                    <td className="py-3 px-4 font-bold text-emerald-800">{row.no}</td>
                    <td className="py-3 px-4 font-bold text-gray-900">{row.name}</td>
                    <td className="py-3 px-4 font-semibold text-emerald-700">{row.period}</td>
                    <td className="py-3 px-4 text-gray-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* B. LETAK GEOGRAFIS KEDAUNG BARAT */}
      <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-emerald-100 space-y-6">
        <div className="border-b border-gray-100 pb-4">
          <div className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
            Bagian B
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Letak Geografis & Batas Wilayah
          </h2>
        </div>

        <p className="text-gray-700 text-sm leading-relaxed">
          Secara topografi, Kedaung Barat memiliki temperatur <strong>29°C – 34°C</strong> sebagai dataran rendah. Kedaung Barat memiliki luas wilayah sebesar <strong>225 Ha</strong> (Daratan 110 Ha & Persawahan 115 Ha).
        </p>

        {/* Tampilan Gambar Peta Satelit Google Maps Kedaung Barat */}
        <div className="space-y-2 pt-2">
          <div className="relative overflow-hidden rounded-2xl border-2 border-emerald-100 shadow-md group bg-gray-900">
            <img
              src="/images/peta-geografis-kedaung-barat.jpg"
              alt="Gambar 1.1 Peta Letak Geografis Kedaung Barat (Satelit Google Maps)"
              className="w-full h-auto object-cover max-h-[550px] w-full transition-transform duration-500 group-hover:scale-[1.01]"
            />
            <div className="absolute top-4 left-4 bg-emerald-950/80 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-2 rounded-xl flex items-center gap-2 border border-emerald-800 shadow-lg">
              <MapPinIcon className="w-4 h-4 text-emerald-400" />
              <span>Gambar 1.1 Peta Satelit Google Maps Wilayah Kedaung Barat</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 italic text-center">
            Peta Citra Satelit Letak Geografis & Garis Batas Wilayah Kedaung Barat, Sepatan Timur, Tangerang
          </p>
        </div>

        {/* Grid Batas Wilayah & Akses Jarak */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          
          {/* Card Batas Wilayah */}
          <div className="bg-emerald-50/80 p-6 rounded-2xl border border-emerald-100 space-y-3">
            <h3 className="font-bold text-emerald-950 text-base flex items-center gap-2">
              <MapPinIcon className="w-5 h-5 text-emerald-700" />
              <span>Batas-Batas Wilayah:</span>
            </h3>
            <ul className="space-y-2 text-xs text-gray-700">
              <li className="flex justify-between bg-white p-2.5 rounded-xl border border-emerald-100">
                <span className="font-bold text-gray-900">Sebelah Utara:</span>
                <span className="text-emerald-800 font-semibold">Berbatasan dengan Desa Gempolsari</span>
              </li>
              <li className="flex justify-between bg-white p-2.5 rounded-xl border border-emerald-100">
                <span className="font-bold text-gray-900">Sebelah Timur:</span>
                <span className="text-emerald-800 font-semibold">Berbatasan dengan Desa Kedaung Baru</span>
              </li>
              <li className="flex justify-between bg-white p-2.5 rounded-xl border border-emerald-100">
                <span className="font-bold text-gray-900">Sebelah Selatan:</span>
                <span className="text-emerald-800 font-semibold">Berbatasan dengan Desa Lebak Wangi</span>
              </li>
              <li className="flex justify-between bg-white p-2.5 rounded-xl border border-emerald-100">
                <span className="font-bold text-gray-900">Sebelah Barat:</span>
                <span className="text-emerald-800 font-semibold">Berbatasan dengan Desa Jati Mulya</span>
              </li>
            </ul>
          </div>

          {/* Card Jarak & Administrasi */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-4">
            <h3 className="font-bold text-gray-900 text-base">Jarak Ke Pusat Pemerintahan & Administrasi</h3>
            <p className="text-xs text-gray-600">
              Secara administrative, Kedaung Barat terdiri dari <strong>27 RT</strong>, <strong>5 RW</strong>, serta terdapat <strong>4 Kejaroan</strong>.
            </p>
            <div className="space-y-2 pt-1">
              <div className="flex justify-between text-xs bg-white p-2.5 rounded-xl border border-gray-200">
                <span className="text-gray-700 font-medium">Jarak Ke Pusat Kabupaten Tangerang:</span>
                <span className="font-bold text-emerald-800">15 km</span>
              </div>
              <div className="flex justify-between text-xs bg-white p-2.5 rounded-xl border border-gray-200">
                <span className="text-gray-700 font-medium">Jarak Ke Ibu Kota Provinsi Banten:</span>
                <span className="font-bold text-emerald-800">68 km</span>
              </div>
              <div className="flex justify-between text-xs bg-white p-2.5 rounded-xl border border-gray-200">
                <span className="text-gray-700 font-medium">Jarak Ke Ibu Kota Negara:</span>
                <span className="font-bold text-emerald-800">28 km</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* C. STRUKTUR PENDUDUK & DEMOGRAFI */}
      <div className="bg-emerald-950 text-white p-8 sm:p-10 rounded-3xl space-y-6">
        <div className="border-b border-emerald-800 pb-4">
          <div className="inline-block bg-emerald-800 text-emerald-200 text-xs font-bold px-3 py-1 rounded-full mb-2">
            Bagian C
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Struktur Penduduk Kedaung Barat
          </h2>
          <p className="text-xs text-emerald-200 mt-1">
            Data Demografi Kedaung Barat terdata sampai dengan bulan Desember tahun 2019.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-emerald-900/60 p-6 rounded-2xl border border-emerald-800 text-center space-y-1">
            <p className="text-xs text-emerald-300 font-bold uppercase">Penduduk Laki-laki</p>
            <p className="text-3xl font-black text-white">5.237</p>
            <p className="text-xs text-emerald-400">Jiwa</p>
          </div>
          <div className="bg-emerald-900/60 p-6 rounded-2xl border border-emerald-800 text-center space-y-1">
            <p className="text-xs text-emerald-300 font-bold uppercase">Penduduk Perempuan</p>
            <p className="text-3xl font-black text-amber-300">5.576</p>
            <p className="text-xs text-emerald-400">Jiwa (Didominasi sedikit lebih banyak)</p>
          </div>
          <div className="bg-emerald-900/80 p-6 rounded-2xl border border-emerald-700 text-center space-y-1">
            <p className="text-xs text-emerald-200 font-bold uppercase">Total Keadaan Penduduk</p>
            <p className="text-3xl font-black text-emerald-200">10.813</p>
            <p className="text-xs text-emerald-300">Jiwa Terdata</p>
          </div>
        </div>
      </div>

      {/* D. SARANA DAN PRASARANA DESA */}
      <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-emerald-100 space-y-8">
        <div className="border-b border-gray-100 pb-4">
          <div className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
            Bagian D
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Sarana Dan Prasarana Umum
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Rincian fasilitas dan sarana prasarana umum Kedaung Barat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Pendidikan */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-3">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
              <span className="p-1.5 bg-emerald-700 text-white rounded-lg text-xs">🎓</span>
              <h3>Sarana & Prasarana Pendidikan</h3>
            </div>
            <ul className="space-y-1.5 text-xs">
              {saranaPendidikan.map((item, i) => (
                <li key={i} className="flex justify-between bg-white p-2 rounded-lg border border-gray-100">
                  <span className="text-gray-700 font-medium">{item.name}</span>
                  <span className="font-bold text-emerald-800">{item.qty}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Peribadatan */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-3">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
              <span className="p-1.5 bg-emerald-700 text-white rounded-lg text-xs">🕌</span>
              <h3>Sarana Peribadatan (Toleransi)</h3>
            </div>
            <p className="text-[11px] text-gray-500 italic">Menjunjung tinggi sikap toleransi antar umat beragama.</p>
            <ul className="space-y-1.5 text-xs">
              {saranaPeribadatan.map((item, i) => (
                <li key={i} className="flex justify-between bg-white p-2 rounded-lg border border-gray-100">
                  <span className="text-gray-700 font-medium">{item.name}</span>
                  <span className="font-bold text-emerald-800">{item.qty}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pemerintahan */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-3">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
              <span className="p-1.5 bg-emerald-700 text-white rounded-lg text-xs">🏛️</span>
              <h3>Sarana Pemerintahan</h3>
            </div>
            <ul className="space-y-1.5 text-xs">
              {saranaPemerintahan.map((item, i) => (
                <li key={i} className="flex justify-between bg-white p-2 rounded-lg border border-gray-100">
                  <span className="text-gray-700 font-medium">{item.name}</span>
                  <span className="font-bold text-emerald-800">{item.qty}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Kesehatan */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-3">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
              <span className="p-1.5 bg-emerald-700 text-white rounded-lg text-xs">🏥</span>
              <h3>Sarana Kesehatan</h3>
            </div>
            <ul className="space-y-1.5 text-xs">
              {saranaKesehatan.map((item, i) => (
                <li key={i} className="flex justify-between bg-white p-2 rounded-lg border border-gray-100">
                  <span className="text-gray-700 font-medium">{item.name}</span>
                  <span className="font-bold text-emerald-800">{item.qty}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Olahraga */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-3">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
              <span className="p-1.5 bg-emerald-700 text-white rounded-lg text-xs">⚽</span>
              <h3>Sarana Olah Raga</h3>
            </div>
            <ul className="space-y-1.5 text-xs">
              {saranaOlahraga.map((item, i) => (
                <li key={i} className="flex justify-between bg-white p-2 rounded-lg border border-gray-100">
                  <span className="text-gray-700 font-medium">{item.name}</span>
                  <span className="font-bold text-emerald-800">{item.qty}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* KANTOR BALAI DESA SHOWCASE */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-emerald-100 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-6 rounded-2xl overflow-hidden shadow-md border border-gray-100 max-h-[360px]">
          <img
            src="/images/kantor-kelurahan-desa.png"
            alt="Kantor Balai Kedaung Barat"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="md:col-span-6 space-y-4">
          <div className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
            Gedung Kantor Balai
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900 leading-tight">
            Kantor Balai & Pusat Pelayanan Warga
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Gedung Kantor Balai Kedaung Barat merupakan pusat pelayanan administrasi publik serta tempat berlangsungnya berbagai kegiatan musyawarah pembangunan warga.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-emerald-700 font-semibold bg-emerald-50 p-3 rounded-xl border border-emerald-100 flex-1">
              <MapPinIcon className="w-4 h-4 shrink-0 text-emerald-600" />
              <span>Sepatan Timur, Kabupaten Tangerang, Banten</span>
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
            <p className="text-xs text-gray-500 mt-1">Daftar 12 mahasiswa pengabdi di Kedaung Barat.</p>
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

      {/* Perangkat Kedaung Barat */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-100 space-y-6">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900">Perangkat Pemerintahan</h2>
          <p className="text-xs text-gray-500 mt-1">Jajaran pemerintahan Kedaung Barat.</p>
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
