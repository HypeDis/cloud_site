import React from 'react';

type CollaboratorProps = {
  imageURL: string;
  name: string;
};

export default function CollaboratorIcon({
  imageURL,
  name,
}: CollaboratorProps) {
  return (
    <div className="collab-icon">
      <img src={imageURL} alt={name} className="collab-img" />
    </div>
  );
}
