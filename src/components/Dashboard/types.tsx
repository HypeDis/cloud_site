export enum SuggestedView {
  GRID,
  LIST,
}

type Content = {
  name: string;
  lastAccessed: string;
  iconURL: string;
};

export type SuggestedContent = {
  name: string;
  lastAccessed: string;
  iconURL: string;
  collaborators: Collaborator[];
};

export type RecentContent = {
  name: string;
  lastAccessed: string;
  iconURL: string;
};

export type Collaborator = {
  name: string;
  imageURL: string;
};
