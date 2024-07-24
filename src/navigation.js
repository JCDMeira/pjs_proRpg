import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Homes',
      href: '/',
      // links: [
      //   {
      //     text: 'SaaS',
      //     href: getPermalink('/homes/saas'),
      //   },
      //   {
      //     text: 'Startup',
      //     href: getPermalink('/homes/startup'),
      //   },
      //   {
      //     text: 'Mobile App',
      //     href: getPermalink('/homes/mobile-app'),
      //   },
      //   {
      //     text: 'Personal',
      //     href: getPermalink('/homes/personal'),
      //   },
      // ],
    },
    {
      text: 'Sobre os Personagens',
      links: [
        {
          text: 'Todos os posts',
          href: getBlogPermalink(),
        },
        {
          text: 'Por personagem',
          href: getPermalink('arvak', 'category'),
        },
        {
          text: 'Lista de personagens',
          href: getPermalink('personagens', 'tag'),
        },
      ],
    },
  ],
};
