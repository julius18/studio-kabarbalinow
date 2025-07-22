export default {
  name: 'post',
  title: 'Berita',
  type: 'document',
  fields: [
    { name: 'title', title: 'Judul', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }},
    { name: 'publishedAt', title: 'Tanggal Publikasi', type: 'datetime' },
    { name: 'coverImage', title: 'Gambar Utama', type: 'image', options: { hotspot: true } },
    { name: 'body', title: 'Isi Berita', type: 'array', of: [{ type: 'block' }] },
    { name: 'category', title: 'Kategori', type: 'reference', to: [{ type: 'category' }] },
    { name: 'locale', title: 'Bahasa', type: 'string', options: { list: ['id', 'en'] } }
  ]
}
