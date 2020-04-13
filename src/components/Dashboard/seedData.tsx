import { SuggestedContent, RecentContent } from './types';
import faker from 'faker';
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

export const recentContentFromDB: RecentContent[] = [
  {
    name: faker.system.commonFileName(faker.system.commonFileExt()),
    lastAccessed: faker.date
      .between(
        new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        new Date(Date.now())
      )
      .toLocaleDateString(),
    iconURL: process.env.PUBLIC_URL + '/img/sprites.svg#icon-folder',
  },
  {
    name: faker.system.commonFileName(faker.system.commonFileExt()),
    lastAccessed: faker.date
      .between(
        new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        new Date(Date.now())
      )
      .toLocaleDateString(),
    iconURL: process.env.PUBLIC_URL + '/img/sprites.svg#icon-folder',
  },
  {
    name: faker.system.commonFileName(faker.system.commonFileExt()),
    lastAccessed: faker.date
      .between(
        new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        new Date(Date.now())
      )
      .toLocaleDateString(),
    iconURL: process.env.PUBLIC_URL + '/img/sprites.svg#icon-folder',
  },
  {
    name: faker.system.commonFileName(faker.system.commonFileExt()),
    lastAccessed: faker.date
      .between(
        new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        new Date(Date.now())
      )
      .toLocaleDateString(),
    iconURL: process.env.PUBLIC_URL + '/img/sprites.svg#icon-folder',
  },
  {
    name: faker.system.commonFileName(faker.system.commonFileExt()),
    lastAccessed: faker.date
      .between(
        new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        new Date(Date.now())
      )
      .toLocaleDateString(),
    iconURL: process.env.PUBLIC_URL + '/img/sprites.svg#icon-folder',
  },
  {
    name: faker.system.commonFileName(faker.system.commonFileExt()),
    lastAccessed: faker.date
      .between(
        new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        new Date(Date.now())
      )
      .toLocaleDateString(),
    iconURL: process.env.PUBLIC_URL + '/img/sprites.svg#icon-folder',
  },
  {
    name: faker.system.commonFileName(faker.system.commonFileExt()),
    lastAccessed: faker.date
      .between(
        new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        new Date(Date.now())
      )
      .toLocaleDateString(),
    iconURL: process.env.PUBLIC_URL + '/img/sprites.svg#icon-folder',
  },
  {
    name: faker.system.commonFileName(faker.system.commonFileExt()),
    lastAccessed: faker.date
      .between(
        new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        new Date(Date.now())
      )
      .toLocaleDateString(),
    iconURL: process.env.PUBLIC_URL + '/img/sprites.svg#icon-folder',
  },
  {
    name: faker.system.commonFileName(faker.system.commonFileExt()),
    lastAccessed: faker.date
      .between(
        new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        new Date(Date.now())
      )
      .toLocaleDateString(),
    iconURL: process.env.PUBLIC_URL + '/img/sprites.svg#icon-folder',
  },
  {
    name: 'really really really long filename really really really long.exe',
    lastAccessed: faker.date
      .between(
        new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        new Date(Date.now())
      )
      .toLocaleDateString(),
    iconURL: process.env.PUBLIC_URL + '/img/sprites.svg#icon-folder',
  },
];
