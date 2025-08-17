// vivianeradiestesistasite/schemaTypes/certificado.js
export default {
  name: 'certificado',
  title: 'Certificado',
  type: 'document',
  fields: [
    {
      name: 'titulo',
      title: 'Título do Certificado',
      type: 'string',
      description: 'Ex: Formação em Cristaloterapia',
      validation: Rule => Rule.required(),
    },
    {
      name: 'imagem',
      title: 'Imagem do Certificado',
      type: 'image',
      options: {
        hotspot: true, // Permite recortar a imagem de forma inteligente
      },
      validation: Rule => Rule.required(),
    },
  ],
}
