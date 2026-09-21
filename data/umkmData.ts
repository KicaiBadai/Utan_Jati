export interface UMKMItem {
  id: string;
  name: string;
  category: 'Kuliner & Minuman' | 'Sembako & Kebutuhan Harian' | 'Jasa & Konter HP' | 'Jasa & Konveksi';
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
    address: 'Lingkungan Dusun RT Desa Utan Jati',
    image: '/images/warung-teh-siti-fatimah.jpg',
    description: 'Menyediakan berbagai varian jajanan lezat khas desa, aneka makanan ringan anak-anak & warga, serta kudapan santai. Binaan program pembuatan spanduk usaha oleh Tim KKN Kelompok 18 Lentera.',
    badge: 'Dibina KKN 18'
  },
  {
    id: 'umkm-001',
    name: 'Es Kelapa Muda & Kopyor Ibu Halimah',
    category: 'Kuliner & Minuman',
    owner: 'Ibu Halimah',
    address: 'Dusun Jati Indah RT 02 / RW 01, Desa Utan Jati',
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
    address: 'Lingkungan Desa Utan Jati',
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
    address: 'Desa Utan Jati',
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
    address: 'Desa Utan Jati',
    image: '/images/di-cell.png',
    description: 'Konter pulsa & produk digital terlengkap Desa Utan Jati. Menyediakan voucher kuota internet (Telkomsel, Indosat, Tri, XL, Axis), kartu perdana, memory card (8GB, 16GB, 32GB), aksesoris HP, serta pengisian pulsa dan paket data.',
    badge: 'Konter Pulsa',
    mapUrl: 'https://maps.app.goo.gl/YYNZoCL8JfBnWfS67'
  }
];





