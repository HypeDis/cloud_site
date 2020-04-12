export enum SuggestedView {
  GRID,
  LIST,
}
export type SuggestedContent = {
  name: string;
  lastAccessed: string;
  iconURL: string;
  collaborators: Collaborator[];
};
export type Collaborator = {
  name: string;
  imageURL: string;
};
