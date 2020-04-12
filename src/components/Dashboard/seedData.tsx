import { SuggestedContent } from './types';

export const suggestedContentsFromDB: SuggestedContent[] = [
  {
    iconURL: process.env.PUBLIC_URL + '/img/sprites.svg#icon-folder',
    name: 'Hot Memes',
    lastAccessed: new Date().toDateString(),
    collaborators: [
      {
        name: 'batman',
        imageURL: process.env.PUBLIC_URL + '/img/people/batman.png',
      },
    ],
  },
  {
    iconURL: process.env.PUBLIC_URL + '/img/sprites.svg#icon-folder',
    name: 'Top Secret Documents',
    lastAccessed: new Date().toDateString(),
    collaborators: [
      {
        name: 'chris',
        imageURL: process.env.PUBLIC_URL + '/img/people/chris.jpg',
      },
      {
        name: 'philip',
        imageURL: process.env.PUBLIC_URL + '/img/people/philip.jpg',
      },
    ],
  },
  {
    iconURL: process.env.PUBLIC_URL + '/img/sprites.svg#icon-file-word',
    name: 'John Doe Resume.docx',
    lastAccessed: new Date().toDateString(),
    collaborators: [
      {
        name: 'robert',
        imageURL: process.env.PUBLIC_URL + '/img/people/robert.jpg',
      },
    ],
  },
  {
    iconURL: process.env.PUBLIC_URL + '/img/sprites.svg#icon-file-pdf',
    name: 'World Domination Plans.pdf',
    lastAccessed: new Date().toDateString(),
    collaborators: [
      {
        name: 'jurica',
        imageURL: process.env.PUBLIC_URL + '/img/people/jurica.jpg',
      },
      {
        name: 'chris',
        imageURL: process.env.PUBLIC_URL + '/img/people/chris.jpg',
      },
      {
        name: 'robert',
        imageURL: process.env.PUBLIC_URL + '/img/people/robert.jpg',
      },
      {
        name: 'philip',
        imageURL: process.env.PUBLIC_URL + '/img/people/philip.jpg',
      },
      {
        name: 'batman',
        imageURL: process.env.PUBLIC_URL + '/img/people/batman.png',
      },
    ],
  },
];
