import { getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Personagens',
      links: [
        {
          text: 'Arvak Von Neustain',
          href: 'arvak',
        },
        {
          text: 'Outro',
          href: getBlogPermalink(),
        },
      ],
    },
  ],
};
