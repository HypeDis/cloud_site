import React, {
  useContext,
  useState,
  ReactEventHandler,
  Dispatch,
  SetStateAction,
} from 'react';
import { ShareModalContext } from './ShareModalContext';

type ShareModalProps = {
  isVisible: boolean;
  fileName: string;
  iconURL: string;
};

type InputEvt = React.ChangeEvent<HTMLInputElement>;
type TextAreaEvt = React.ChangeEvent<HTMLTextAreaElement>;
export default function ShareModal() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const changeHandlers: { [key: string]: Dispatch<SetStateAction<string>> } = {
    email: setEmail,
    message: setMessage,
  };
  const shareContext = useContext(ShareModalContext);
  const { isVisible, fileName, iconURL, setIsVisible } = shareContext;
  const handleOnClickOuter = (
    evt: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (
      evt.target instanceof Element &&
      evt.target.classList.contains('share-modal')
    ) {
      setIsVisible(false);
    }
  };

  const closeModal = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsVisible(false);
  };
  const handleOnChange = (evt: InputEvt | TextAreaEvt) => {
    const { name, value } = evt.target;
    changeHandlers[name](value);
  };
  return (
    <div
      className={`share-modal ${!isVisible ? 'hidden' : ''}`}
      onClick={handleOnClickOuter}
    >
      <div className="share-modal__form-container">
        <form action="" className="share-modal__form">
          <div className="share-modal__section">
            <svg className="share-modal__icon">
              <use href={iconURL}></use>
            </svg>
            <span>{fileName}</span>
            <button
              className="share-modal__close-btn"
              onClick={closeModal}
              type="button"
            >
              <svg className="">
                <use
                  href={process.env.PUBLIC_URL + '/img/sprites.svg#icon-cross'}
                ></use>
              </svg>
            </button>
          </div>
          <div className="share-modal__section">
            <label htmlFor="email">
              To:
              <input
                type="email"
                name="email"
                placeholder="Enter an email address"
                value={email}
                onChange={handleOnChange}
              />
            </label>
          </div>
          <div className="share-modal__section share-modal__textarea">
            <textarea
              name="message"
              placeholder="Include a message (optional)"
              cols={1}
              rows={1}
              value={message}
              onChange={handleOnChange}
            ></textarea>
          </div>
          <div className="share-modal__section ">
            <button
              type="submit"
              className={`share-btn ${
                email ? 'share-btn--active' : 'share-btn--inactive'
              }`}
              disabled={!email}
            >
              Share
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
