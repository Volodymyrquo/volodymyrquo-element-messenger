import React, { FC, useContext } from 'react';
import Confetti from "react-confetti";
import Modal, { IProps } from './modal';
import Close from '../../../../../res/images/contactBook/close.png';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import box from '../../../../../res/images/contactBook/box.svg';
import { ContactBookContext } from "../../../../context/ContactBook/contextContactBook";
import { Context } from "../../../../context/context";

const ImportLoaderModal: FC<IProps> = ({ onClick }) => {
    const { state } = useContext(ContactBookContext);
    const { setPage } = useContext(Context);

    const download = state.download;

    return (
        <Modal onClick={onClick}>
            {download === 100 ? (
                <section className="contact-book__import-download-modal import-download-modal">
                    <Confetti />
                    <div className="import-download-modal__inner-congrats">
                        <div className="import-download-modal__block-header">
                            <h2 className="import-download-modal__title">Imports contacts!</h2>
                            <img
                                className="import-download-modal__img-close"
                                src={Close}
                                alt="Close modal"
                                onClick={() => {
                                    setPage("allContacts");
                                }}
                            />
                        </div>
                        <h3 className="import-download-modal__subtitle">
                            <span>You have imported</span>
                            <span className="import-download-modal__subtitle-count"> 91 contacts </span>
                            <span> successfully!</span>
                        </h3>
                        <div className="import-download-modal__images">
                            <img
                                src={box}
                                alt="coints"
                            />
                        </div>

                        <div className="import-download-modal__block-button">
                            <button
                                className="import-download-modal__button"
                                type="button"
                            >
                Continue
                            </button>
                            <button
                                onClick={() => {
                                    setPage("allContacts");
                                }}
                                className="import-download-modal__button-cancel"
                                type="button"
                            >
              View contacts
                            </button>
                        </div>
                    </div>
                </section>
            ) : (
                <section className="contact-book__import-download-modal import-download-modal">
                    <div className="import-download-modal__inner">
                        <div className="import-download-modal__block-header">
                            <h2 className="import-download-modal__title">Import contacts</h2>
                            <img
                                className="import-download-modal__img-close"
                                src={Close}
                                alt="Close modal"
                                onClick={() => {
                                    setPage("allContacts");
                                }}
                            />
                        </div>
                        <h3 className="import-download-modal__subtitle">Please wait...</h3>
                        <div
                            className="import-download-modal__loader"
                        >
                            <CircularProgressbar
                                minValue={1}
                                value={download}
                                text={`${download}%`}
                                strokeWidth={5}
                                styles={buildStyles({
                  pathColor: `rgba(112, 100, 226, 1)`,
                  textColor: '#7064e2',
                  trailColor: '#fafafc',
                  backgroundColor: '#7064e2',
                  textSize: '26px',
                                })}
                            />
                        </div>
                    </div>
                </section>
            )}
        </Modal>
    );
};
export default ImportLoaderModal;
