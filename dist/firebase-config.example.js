// Salin jadi firebase-config.js — dari Firebase Console (BUKAN IP)

window.firebaseConfig = {
  apiKey: 'ISI_API_KEY',
  authDomain: 'ISI_PROJECT_ID.firebaseapp.com',
  projectId: 'ISI_PROJECT_ID',
  storageBucket: 'ISI_PROJECT_ID.appspot.com',
  messagingSenderId: 'ISI_SENDER_ID',
  appId: 'ISI_APP_ID',
};

// Nama koleksi Firestore (semua data website)
window.firebaseCollections = {
  pendaftar: 'pendaftar',       // form pendaftaran
  berita: 'berita',               // berita pesantren
  galeri: 'galeri',               // foto galeri
  pengaturan: 'pengaturan',       // kontak, alamat, WA, dll.
  hero: 'hero',                   // slide beranda (opsional)
  halaman: 'halaman',           // konten halaman dinamis (opsional)
};
