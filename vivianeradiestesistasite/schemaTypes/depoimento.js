// vivianeradiestesistasite/schemaTypes/depoimento.js
export default {
  name: 'depoimento',
  title: 'Depoimento',
  type: 'document',
  fields: [
    {
      name: 'nome',
      title: 'Nome da Pessoa',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'depoimento',
      title: 'Texto do Depoimento',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      name: 'aprovado',
      title: 'Aprovado para exibição no site?',
      type: 'boolean',
      description: 'Marque esta opção para que o depoimento apareça no site.',
      initialValue: true, // Já vem marcado como padrão
    },
  ],
}
