import { NavItemData, ControlMenuAction } from './types';
export const NavItemDataCollection: NavItemData[] = [
  {
    to: '/home',
    label: 'Home',
    iconURL: '/img/sprites.svg#icon-home3',
    title: 'Home Icon',
  },
  {
    to: '/myfiles',
    label: 'My Files',
    iconURL: '/img/sprites.svg#icon-folder',
    title: 'My Files',
  },
  {
    to: '/recentfiles',
    label: 'Recent Files',
    iconURL: '/img/sprites.svg#icon-clock',
    title: 'Recent Files',
  },
  {
    to: '/sharedfiles',
    label: 'Shared Files',
    iconURL: '/img/sprites.svg#icon-users',
    title: 'Shared Files',
  },
  {
    to: '/filerequests',
    label: 'File Requests',
    iconURL: '/img/sprites.svg#icon-folder-upload',
    title: 'File Requests',
  },
  {
    to: '/trash',
    label: 'Trash',
    iconURL: '/img/sprites.svg#icon-bin',
    title: 'Trash',
  },
];

export const OptionsMenuCollection: ControlMenuAction[] = [
  {
    label: 'Upload File',
    iconURL: '/img/sprites.svg#icon-cloud-upload',
    title: 'Upload a File',
  },
  {
    label: 'Upload Folder',
    iconURL: '/img/sprites.svg#icon-folder-upload',
    title: 'Upload a Folder',
  },
  {
    label: 'Share File',
    iconURL: '/img/sprites.svg#icon-share2',
    title: 'Share a file',
  },
  {
    label: 'More',
    iconURL: '/img/sprites.svg#icon-grid1',
    title: 'More options',
  },
];
export const CreateMenuCollection: ControlMenuAction[] = [
  {
    label: 'Create File',
    iconURL: '/img/sprites.svg#icon-file-empty',
    title: 'Create a new file',
  },
  {
    label: 'Create Folder',
    iconURL: '/img/sprites.svg#icon-folder-plus',
    title: 'Create a new folder',
  },
  {
    label: 'Create Group',
    iconURL: '/img/sprites.svg#icon-users',
    title: 'Create a new group',
  },
];
