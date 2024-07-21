import { getArvakPermalink, getBlogPermalink } from './utils/permalinks';

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
          href: getArvakPermalink(),
        },
        {
          text: 'Outro',
          href: getBlogPermalink(),
        },
      ],
    },
  ],
};
