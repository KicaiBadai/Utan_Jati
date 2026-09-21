export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  category: 'Kegiatan KKN' | 'Pengumuman Desa' | 'UMKM & Ekonomi' | 'Kesehatan' | 'Pendidikan' | 'Infrastruktur';
  summary: string;
  content: string;
  date: string;
  author: string;
  authorRole: string;
  image: string;
  readTime: string;
  tags: string[];
  location?: string;
}

export interface KKNMember {
  name: string;
  role: string;
  classGroup: string;
}

export const KKN_MEMBERS: KKNMember[] = [
  { name: 'Dandi Taufiqurrahman', role: 'Ketua Tim KKN', classGroup: 'TI SE1' },
  { name: 'Muhammad Ilham Maulana', role: 'Wakil Ketua Tim KKN', classGroup: 'TI 23 SH SE' },
  { name: 'Anisa Rahma Susanti', role: 'Sekretaris', classGroup: 'BD-MBD2' },
  { name: 'Riska Intan Wulandari', role: 'Bendahara', classGroup: 'BD-MBD2' },
  { name: 'Aditya Maula Wiratama', role: 'Anggota Tim', classGroup: 'TI SE1' },
  { name: 'Dilla Almanda', role: 'Anggota Tim', classGroup: 'BD-MBD2' },
  { name: 'Alika Cesya N.M', role: 'Anggota Tim', classGroup: 'BD2-23P' },
  { name: 'Rian Maulana', role: 'Anggota Tim', classGroup: 'TI23SEM' },
  { name: 'Rayhan Faras Ramadhani', role: 'Anggota Tim', classGroup: 'TI23SEM' },
  { name: 'Haikal Falah', role: 'Anggota Tim', classGroup: 'TI 23 SH SE' },
  { name: 'Bagus Ferdiansyah', role: 'Anggota Tim', classGroup: 'TI 23 M SE' },
  { name: 'Althaf Erol Dipa Maezadanar', role: 'Anggota Tim', classGroup: 'TI 23 P CN' },
];

/**
 * DATABANK KEGIATAN KKN & BERITA KEDAUNG BARAT
 * 
 * Untuk menambah kegiatan KKN / berita baru, Anda cukup menambahkan objek baru
 * ke dalam list `INITIAL_NEWS` di bawah ini!
 */
export const INITIAL_NEWS: NewsItem[] = [
  {
    id: 'kkn-009',
    title: 'Sosialisasi & Edukasi di SMA: Bijak Menggunakan AI & Cerdas Bermedia Sosial',
    slug: 'sosialisasi-bijak-penggunaan-ai-dan-cerdas-bermedsos-sma',
    category: 'Pendidikan',
    summary: 'Mahasiswa KKN Kelompok 18 Lentera menyelenggarakan edukasi literasi digital bagi para siswa SMA mengenai etika kecerdasan buatan (AI), cegah hoaks, serta strategi cerdas dalam bermedia sosial.',
    content: `
      <p class="mb-4"><strong>KEDAUNG BARAT</strong> — Pada tanggal 15 September 2026, tim mahasiswa KKN (Kelompok 18 Lentera) melaksanakan program sosialisasi literasi teknologi bertajuk <strong>"Bijak Dalam Penggunaan AI & Cerdas Bermedia Sosial"</strong> di aula sekolah SMA setempat.</p>
      
      <p class="mb-4">Kegiatan ini bertujuan untuk membekali generasi muda dan pelajar SMA agar memiliki kesadaran kritis serta etika dalam memanfaatkan kecanggihan teknologi Artificial Intelligence (AI) dan platform media sosial sehari-hari.</p>

      <h3 class="text-xl font-bold mt-6 mb-3 text-emerald-800">Materi Edukasi & Sesi Cerdas Cermat</h3>
      <p class="mb-4">Penyampaian materi oleh pemateri mahasiswa KKN mencakup berbagai aspek penting teknologi masa kini:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Manfaat & Risiko Artificial Intelligence (AI):</strong> Bagaimana memanfaatkan alat AI secara positif untuk mendukung tugas sekolah tanpa bergantung penuh atau melakukan kecurangan akademik (plagiarisme).</li>
        <li><strong>Etika Bermedia Sosial & Pemfilteran Informasi:</strong> Mengenali bahaya berita bohong (hoaks), menjaga privasi data pribadi, serta menghindari tindakan cyberbullying di ruang digital.</li>
        <li><strong>Sesi Kuis Cerdas Cermat Interaktif:</strong> Pengujian pemahaman siswa melalui tanya jawab seru dan pembagian kenang-kenangan bagi siswa aktif.</li>
      </ul>

      <blockquote class="border-l-4 border-emerald-600 pl-4 italic my-4 text-gray-700 bg-emerald-50/60 p-3 rounded-r">
        "Penjelasan dari kakak-kakak KKN sangat membuka wawasan kami tentang cara pakai ChatGPT dan AI dengan benar untuk belajar, serta diingatkan agar tidak gampang percaya hoaks di TikTok dan Instagram," ujar salah satu siswa peserta sosialisasi.
      </blockquote>

      <p class="mb-4">Sosialisasi diakhiri dengan penyerahan sertifikat apresiasi kepada pihak sekolah dan foto bersama seluruh siswa serta mahasiswa KKN.</p>
    `,
    date: '15 September 2026',
    author: 'Kelompok 18 KKN Lentera',
    authorRole: 'Divisi Pendidikan & Teknologi',
    image: '/images/sosialisasi-ai-bermedsos-sma.jpg',
    readTime: '4 min baca',
    tags: ['KKN 2026', 'Edukasi SMA', 'Literasi AI', 'Cerdas Bermedsos', 'Pendidikan Teknologi'],
    location: 'Ruang Kelas SMA Desa'
  },
  {
    id: 'kkn-008',
    title: 'Program Pemberdayaan UMKM: Pendataan & Pembuatan Spanduk Usaha Bagi Pedagang Desa',
    slug: 'pembuatan-spanduk-pemberdayaan-umkm-desa',
    category: 'UMKM & Ekonomi',
    summary: 'Mahasiswa KKN melaksanakan pendataan usaha lokal serta mendesain dan menyerahkan spanduk promosi usaha gratis untuk meningkatkan daya tarik dan identitas visual UMKM sekitar desa.',
    content: `
      <p class="mb-4"><strong>KEDAUNG BARAT</strong> — Sebagai bentuk dukungan terhadap pertumbuhan ekonomi warga, mahasiswa KKN (Kelompok 18 Lentera) memfasilitasi program pembenahan identitas visual usaha kecil melalui pendataan dan pembuatan spanduk promosi UMKM pada tanggal 7 September 2026.</p>
      
      <p class="mb-4">Tim mahasiswa mendatangi langsung beberapa titik warung dan usaha kuliner warga sekitar, termasuk warung olahan minuman es kelapa kopyor Ibu Halimah, untuk melakukan pengukuran lokasi serta pendataan daftar menu dan kontak usaha.</p>

      <h3 class="text-xl font-bold mt-6 mb-3 text-emerald-800">Cakupan Program Branding UMKM</h3>
      <p class="mb-4">Program pembuatan spanduk usaha ini bertujuan untuk meningkatkan daya pikat dan kemudahan titik temu pelanggan, meliputi:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Desain Spanduk Informatif & Menarik:</strong> Merancang tata letak nama kedai, daftar varian produk utama, serta promo menarik agar tampak bersih dan jelas terbaca dari tepi jalan.</li>
        <li><strong>Pemasangan Struktur Rangka Spanduk:</strong> Membantu penataan dan pergantian spanduk lama dengan spanduk baru yang lebih kuat tahan cuaca.</li>
        <li><strong>Edukasi Pemasaran & Pelayanan Pelanggan:</strong> Memberikan masukan mengenai kebersihan tempat dan kemasan ramah lingkungan bagi pengunjung.</li>
      </ul>

      <blockquote class="border-l-4 border-emerald-600 pl-4 italic my-4 text-gray-700 bg-emerald-50/60 p-3 rounded-r">
        "Senang sekali warung kami dibantu dibuatkan spanduk baru oleh anak-anak mahasiswa KKN. Tampilannya jadi lebih rapi, segar, dan pembeli dari luar desa jadi gampang menemukan tempat usaha kami," tutur pemilik usaha warung.
      </blockquote>

      <p class="mb-4">Melalui inisiatif ini, diharapkan pelaku UMKM lokal Kedaung Barat semakin percaya diri dan mampu meningkatkan volume penjualan usaha mereka secara berkelanjutan.</p>
    `,
    date: '7 September 2026',
    author: 'Kelompok 18 KKN Lentera',
    authorRole: 'Divisi Ekonomi & UMKM',
    image: '/images/spanduk-umkm-sekitar.jpg',
    readTime: '3 min baca',
    tags: ['KKN 2026', 'UMKM Desa', 'Branding Usaha', 'Spanduk Promosi', 'Pemberdayaan Ekonomi'],
    location: 'Lapak & Warung UMKM Desa'
  },
  {
    id: 'kkn-007',
    title: 'Gotong Royong Tim KKN Membantu Persiapan Acara Peringatan Maulid Nabi Muhammad SAW',
    slug: 'persiapan-peringatan-maulid-nabi-muhammad-saw',
    category: 'Kegiatan KKN',
    summary: 'Mahasiswa KKN bersama panitia masjid dan warga desa bergotong royong membungkus ratusan paket konsumsi dan penataan ruang untuk peringatan Maulid Nabi.',
    content: `
      <p class="mb-4"><strong>KEDAUNG BARAT</strong> — Menjelang peringatan hari besar Islam Maulid Nabi Muhammad SAW, mahasiswa KKN (Kelompok 18 Lentera) turut ambil bagian dalam aksi gotong royong membantu panitia pengurus masjid dan warga desa pada tanggal 5 September 2026.</p>
      
      <p class="mb-4">Sejak pagi hari, anggota kelompok KKN putra dan putri tampak antusias berkumpul bersama bapak-bapak dan ibu-ibu warga untuk menyiapkan logistik dan kemasan konsumsi acara.</p>

      <h3 class="text-xl font-bold mt-6 mb-3 text-emerald-800">Dukungan Persiapan Logistik & Acara</h3>
      <p class="mb-4">Bentuk keikutsertaan tim mahasiswa KKN meliputi berbagai persiapan penting, antara lain:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Pengemasan Snack Box & Kudapan Warga:</strong> Membantu membungkus ratusan porsi kudapan kue tradisional, gorengan, serta bingkisan konsumsi jamaah.</li>
        <li><strong>Penataan Aula & Karpet Kebersihan:</strong> Membantu merapikan karpet sholat, penggelaran terpal, serta perapihan sistem pengeras suara (*sound system*).</li>
        <li><strong>Koordinasi Penerimaan Tamu Undangan:</strong> Menyusun skema penyambutan para penceramah, tokoh agama, dan rombongan jamaah antardusun.</li>
      </ul>

      <blockquote class="border-l-4 border-emerald-600 pl-4 italic my-4 text-gray-700 bg-emerald-50/60 p-3 rounded-r">
        "Kehadiran anak-anak KKN sangat membantu pekerjaan panitia. Semangat dan keceriaan mereka membungkus konsumsi bersama warga tua muda menciptakan keakraban yang luar biasa," ungkap pengurus panitia Maulid Nabi.
      </blockquote>

      <p class="mb-4">Kegiatan gotong royong ditutup dengan makan bersama dan doa keselamatan untuk kelancaran seluruh rangkaian acara peringatan Maulid Nabi Muhammad SAW di Kedaung Barat.</p>
    `,
    date: '5 September 2026',
    author: 'Kelompok 18 KKN Lentera',
    authorRole: 'Divisi Keagamaan & Kehumasan',
    image: '/images/persiapan-maulid-nabi.jpg',
    readTime: '3 min baca',
    tags: ['KKN 2026', 'Maulid Nabi', 'Gotong Royong', 'Keagamaan', 'Sosial Kemasyarakatan'],
    location: 'Aula & Serba Guna Masjid'
  },
  {
    id: 'kkn-006',
    title: 'Sosialisasi Literasi Digital: Bahaya Judi Online (Judol) & Pinjaman Online (Pinjol) Ilegal',
    slug: 'sosialisasi-bahaya-judi-online-dan-pinjol-ilegal',
    category: 'Kegiatan KKN',
    summary: 'Mahasiswa KKN menyelenggarakan edukasi cegah judi online dan jebakan pinjaman online ilegal bersama warga masyarakat dan tokoh desa untuk memperkuat ketahanan finansial keluarga.',
    content: `
      <p class="mb-4"><strong>KEDAUNG BARAT</strong> — Pada tanggal 3 September 2026, Mahasiswa KKN (Kelompok 18 Lentera) menggelar program sosialisasi dan edukasi literasi digital mengenai <strong>"Bahaya Judi Online (Judol) & Pinjaman Online (Pinjol) Ilegal"</strong> bertempat di lingkungan posko warga.</p>
      
      <p class="mb-4">Kegiatan ini diselenggarakan sebagai langkah responsif dalam melindungi ekonomi dan ketenteraman keluarga warga dari maraknya kejahatan finansial berbasis digital yang kian meresahkan.</p>

      <h3 class="text-xl font-bold mt-6 mb-3 text-emerald-800">Poin Penting Sosialisasi & Edukasi</h3>
      <p class="mb-4">Tim mahasiswa KKN menyampaikan sejumlah materi krusial bagi masyarakat, antara lain:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Memahami Modus & Bahaya Judi Online:</strong> Dampak kecanduan psikologis, kehancuran finansial keluarga, hingga risiko jeratan hukum.</li>
        <li><strong>Ciri-Ciri Pinjol Ilegal vs Fintech Resmi OJK:</strong> Mengenali perbedaan bunga tidak wajar, jeratan denda tersembunyi, dan penyalahgunaan data pribadi kontak HP.</li>
        <li><strong>Langkah Hukum & Pengaduan:</strong> Penjelasan mengenai cara melaporkan nomor spam dan aplikasi ilegal ke OJK, Kominfo, serta pihak berwajib.</li>
        <li><strong>Solusi Finansial Sehat:</strong> Mengajak warga memanfaatkan koperasi desa dan lembaga keuangan mikro yang aman dan terdaftar resmi.</li>
      </ul>

      <blockquote class="border-l-4 border-emerald-600 pl-4 italic my-4 text-gray-700 bg-emerald-50/60 p-3 rounded-r">
        "Acara ini sangat bermanfaat agar bapak-bapak dan ibu-ibu tidak gampang tergiur iming-iming pinjaman cepat di HP yang ternyata ilegal. Kami berterima kasih kepada adik-adik mahasiswa KKN," tutur salah satu perwakilan warga desa.
      </blockquote>

      <p class="mb-4">Acara diakhiri dengan sesi tanya jawab interaktif serta foto bersama antara seluruh tim KKN dan masyarakat setempat dengan penuh kehangatan.</p>
    `,
    date: '3 September 2026',
    author: 'Kelompok 18 KKN Lentera',
    authorRole: 'Divisi Literasi Digital & Hukum',
    image: '/images/sosialisasi-judol-pinjol.jpg',
    readTime: '4 min baca',
    tags: ['KKN 2026', 'Literasi Digital', 'Cegah Judol', 'Pinjol Ilegal', 'Edukasi Warga'],
    location: 'Posko Kelompok 18 Lentera'
  }
];

export const VILLAGE_STATS = {
  population: '10.813',
  households: '27 RT / 5 RW',
  areaSize: '225 Ha',
  hamlets: '4 Kejaroan',
  kknStudents: '12 Mahasiswa',
  umkmCount: '5 Usaha'
};

