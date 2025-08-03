export default {
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    {
      name: 'pergunta',
      title: 'Pergunta',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'resposta',
      title: 'Resposta',
      type: 'text', 
      validation: (Rule) => Rule.required(),
    },
  ],
}
