import React, { ReactElement } from 'react';
import CollaboratorIcon from './CollaboratorIcon';
import { Collaborator } from './types';

type CollabGroupProps = { collaborators: Collaborator[]; maxSize: number };

export default function CollaboratorsGroup({
  collaborators,
  maxSize,
}: CollabGroupProps) {
  const generateCollaborators = (): ReactElement[] => {
    const icons = [];
    const range = Math.min(collaborators.length, maxSize);
    for (let i = 0; i < range; i += 1) {
      const props = collaborators[i];
      icons.push(<CollaboratorIcon {...props} />);
    }
    if (collaborators.length > maxSize) {
      const notShownCount = collaborators.length - maxSize;
      icons.push(
        <div className="collab-icon">
          <div className="collab-text">+{notShownCount}</div>
        </div>
      );
    }
    return icons;
  };

  return <div className="collaborators">{generateCollaborators()}</div>;
}
