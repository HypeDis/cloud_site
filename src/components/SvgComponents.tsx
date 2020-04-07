import React from 'react';

import { ReactComponent as FileEmpty } from '../svg/file-empty.svg';
import { ReactComponent as FolderInfo } from '../svg/folder-information.svg';
import { ReactComponent as FolderUpload } from '../svg/folder-upload.svg';
import { ReactComponent as Folder } from '../svg/folder.svg';
import { ReactComponent as Grid } from '../svg/grid.svg';
import { ReactComponent as Home } from '../svg/home-outline.svg';
import { ReactComponent as People } from '../svg/people_outline.svg';
import { ReactComponent as Trash } from '../svg/trash.svg';

export type SvgIcon = React.FunctionComponentElement<
  React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
    className?: string | undefined;
  }
>;
export const FileEmptyIcon = (): SvgIcon => React.createElement(FileEmpty);
export const FolderInfoIcon = (): SvgIcon => React.createElement(FolderInfo);
export const FolderUploadIcon = (): SvgIcon =>
  React.createElement(FolderUpload);
export const FolderIcon = (): SvgIcon => React.createElement(Folder);
export const GridIcon = (): SvgIcon => React.createElement(Grid);
export const HomeIcon = (): SvgIcon => React.createElement(Home);
export const PeopleIcon = (): SvgIcon => React.createElement(People);
export const TrashIcon = (): SvgIcon => React.createElement(Trash);
