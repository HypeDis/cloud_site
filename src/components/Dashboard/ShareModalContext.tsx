import React, {
  createContext,
  useState,
  FunctionComponent,
  SetStateAction,
} from 'react';

interface ContextValues {
  isVisible: boolean;
  setIsVisible: React.Dispatch<SetStateAction<boolean>>;
  fileName: string;
  setFileName: React.Dispatch<SetStateAction<string>>;
  iconURL: string;
  setIconURL: React.Dispatch<SetStateAction<string>>;
}

export const ShareModalContext = createContext({} as ContextValues);

export const ShareModalProvider: FunctionComponent = props => {
  const [isVisible, setIsVisible] = useState(false);
  const [fileName, setFileName] = useState('');
  const [iconURL, setIconURL] = useState('');

  const shareModalContextValues = {
    isVisible,
    setIsVisible,
    fileName,
    setFileName,
    iconURL,
    setIconURL,
  };
  return (
    <ShareModalContext.Provider value={shareModalContextValues}>
      {props.children}
    </ShareModalContext.Provider>
  );
};
