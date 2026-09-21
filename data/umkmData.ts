export interface UMKMItem {
  id: string;
  name: string;
  category: 'Kuliner & Minuman' | 'Sembako & Kebutuhan Harian' | 'Jasa & Konter HP' | 'Jasa & Konveksi' | 'Jasa & Otomotif';
  owner: string;
  address: string;
  image: string;
  description: string;
  badge?: string;
  phone?: string;
  mapUrl?: string;
}


export const UMKM_LIST: UMKMItem[] = [
  {
    id: 'umkm-000',
    name: 'Warung Bu RT & Teh Siti Fatimah',
    category: 'Kuliner & Minuman',
    owner: 'Teh Siti Fatimah & Bu RT',
    address: 'Lingkungan Dusun RT Kedaung Barat',
    image: '/images/warung-teh-siti-fatimah.jpg',
    description: 'Menyediakan berbagai varian jajanan lezat khas desa, aneka makanan ringan anak-anak & warga, serta kudapan santai. Binaan program pembuatan spanduk usaha oleh Tim KKN Kelompok 18 Lentera.',
    badge: 'Dibina KKN 18'
  },
  {
    id: 'umkm-001',
    name: 'Es Kelapa Muda & Kopyor Ibu Halimah',
    category: 'Kuliner & Minuman',
    owner: 'Ibu Halimah',
    address: 'Dusun RT 02 / RW 01, Kedaung Barat',
    image: '/images/spanduk-umkm-sekitar.jpg',
    description: 'Menyajikan aneka minuman es kelapa segar, es kopyor murni khas desa, serta camilan gorengan hangat berkualitas. Binaan pembuatan spanduk oleh Tim KKN 18.',
    badge: 'Dibina KKN 18',
    phone: '0838 7335 5614'
  },
  {
    id: 'umkm-002',
    name: 'Warung Sembako Mpo Mirna',
    category: 'Sembako & Kebutuhan Harian',
    owner: 'Mpo Mirna',
    address: 'Lingkungan Kedaung Barat',
    image: '/images/warung-sembako-mpo-mirna.jpg',
    description: 'Menyediakan kebutuhan pokok sembako (beras, minyak goreng, telur, gas elpiji, air galon Aqua) serta aneka kuliner lezat seperti seblak, martabak, sosis bakar, dan bakso geprek. Melayani juga transaksi keuangan: top up E-Wallet, tarik/setor tunai, transfer bank, serta pembayaran listrik & pulsa. Binaan pembuatan spanduk oleh Tim KKN 18 Lentera.',
    badge: 'Dibina KKN 18',
    phone: '0831 6944 9072'
  },
  {
    id: 'umkm-003',
    name: 'Rumah Makan Teh Nia',
    category: 'Kuliner & Minuman',
    owner: 'Teh Nia',
    address: 'Kedaung Barat',
    image: '/images/rumah-makan-teh-nia.png',
    description: 'Menyajikan aneka masakan rumahan selera nusantara yang lezat dan gurih saban hari, seperti balado telur, ikan goreng rempah, tempe orek, tumisan segar, serta aneka lauk pauk masakan khas warung nasi tradisional.',
    badge: 'Kuliner Khas',
    mapUrl: 'https://maps.app.goo.gl/wScTKWqqBXkFP8797'
  },
  {
    id: 'umkm-004',
    name: 'Di Cell',
    category: 'Jasa & Konter HP',
    owner: 'Di Cell',
    address: 'Kedaung Barat',
    image: '/images/di-cell.png',
    description: 'Konter pulsa & produk digital terlengkap Kedaung Barat. Menyediakan voucher kuota internet (Telkomsel, Indosat, Tri, XL, Axis), kartu perdana, memory card (8GB, 16GB, 32GB), aksesoris HP, serta pengisian pulsa dan paket data.',
    badge: 'Konter Pulsa',
    mapUrl: 'https://maps.app.goo.gl/YYNZoCL8JfBnWfS67'
  },
  {
    id: 'umkm-005',
    name: 'Pempek Yuk Heni',
    category: 'Kuliner & Minuman',
    owner: 'Yuk Heni',
    address: 'Kedaung Barat',
    image: '/images/pempek-yuk-heni.jpg',
    description: 'Menyajikan aneka pempek khas Palembang yang lezat dan gurih, seperti pempek kapal selam, kapal selam mini, pempek adaan, pempek kulit, dan pempek bulat dengan racikan cuka (cuko) kaya rasa khas Yuk Heni.',
    badge: 'Kuliner Khas',
    mapUrl: 'https://maps.app.goo.gl/n6ira7PKWQ2ptd266'
  },
  {
    id: 'umkm-006',
    name: 'Steam Motor Kedaung Barat',
    category: 'Jasa & Otomotif',
    owner: 'Pemilik Usaha Steam',
    address: 'Kedaung Barat',
    image: '/images/steam-motor.png',
    description: 'Layanan jasa cuci steam sepeda motor bersih, cepat, dan mengkilap di Kedaung Barat. Melayani pencucian bodi motor, mesin, sasis bawah dari lumpur & kotoran jalan, serta pengeringan dan pengkilap bodi secara merata dengan harga terjangkau.',
    badge: 'Jasa Steam',
    mapUrl: 'https://maps.app.goo.gl/aQsczEA6LmD3VJ5h7'
  },
  {
    id: 'umkm-007',
    name: 'Angkringan Mas El',
    category: 'Kuliner & Minuman',
    owner: 'Mas El',
    address: 'Kedaung Barat',
    image: '/images/angkringan-mas-el.png',
    description: 'Menyajikan aneka nasi kucing khas angkringan, varian sate-satean lezat (sate usus, sate telor puyuh, sate kulit, ati ampela), gorengan hangat, serta aneka seduhan wedangan santai seperti wedang jahe, kopi, dan teh manis hangat.',
    badge: 'Kuliner Khas',
    mapUrl: 'https://maps.app.goo.gl/xp1PbGGBui8DLxfJA'
  }
];





