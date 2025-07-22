export default {
  name: 'category',
  title: 'Kategori',
  type: 'document',
  fields: [
    { name: 'title', title: 'Nama Kategori', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }}
  ]
}
