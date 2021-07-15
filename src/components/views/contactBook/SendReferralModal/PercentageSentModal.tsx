import React, { FC, useContext } from 'react';
import { Context } from '../../../../context/context';
import { ContactBookContext } from '../../../../context/ContactBook/contextContactBook';

import Modal, { IProps } from '../modal';
import Confetti from 'react-confetti';
import Close from '../../../../../res/images/contactBook/close.png';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import coints from '../../../../../res/images/contactBook/coints.svg';

const PercentageSentModal: FC<IProps> = ({ onClick }) => {
    const { state } = useContext(ContactBookContext);
    const { setPage, setTable } = useContext(Context);

    const {download} = state;

    return (
        <Modal onClick={onClick}>
            {download === 100 ? (
                <section className="contact-book__sending-message-modal sending-message-modal">
                    <Confetti />
                    <div className="sending-message-modal__inner-congrats">
                        <div className="sending-message-modal__block-header">
                            <h2 className="sending-message-modal__title">Congrats</h2>
                            <img
                                className="sending-message-modal__img-close"
                                src={Close}
                                alt="Close modal"
                                onClick={() => {
                                    setPage("contactBook");
                                    setTable("allContacts");
                                }}
                            />
                        </div>
                        <h3 className="sending-message-modal__subtitle">
                            <span>You’ve sent referrals to</span>{' '}
                            <span className="sending-message-modal__subtitle-count">
                10 contacts <br />
                            </span>
                            <span> by </span>
                            <span className="sending-message-modal__subtitle-count">
                Facebook
                            </span>{' '}
                            <span>successfully!</span>
                        </h3>
                        <div className="sending-message-modal__images">
                            <img src={coints} alt="coints" />
                        </div>

                        <div className="sending-message-modal__block-button">
                            <button className="sending-message-modal__button" type="button"
                                onClick={() => {
                                    setPage("contactBook");
                                    setTable("allContacts");
                                }}

                            >
                  Continue
                            </button>
                            <button
                                onClick={() => {
                                    setPage("contactBook");
                                    setTable("allContacts");
                                }}
                                className="sending-message-modal__button-cancel"
                                type="button"
                            >
                View contacts
                            </button>
                        </div>
                    </div>
                </section>
            ) : (
                <section className="contact-book__sending-message-modal sending-message-modal">
                    <div className="sending-message-modal__inner">
                        <div className="sending-message-modal__block-header">
                            <h2 className="sending-message-modal__title">Send referrals</h2>
                            <img
                                className="sending-message-modal__img-close"
                                src={Close}
                                alt="Close modal"
                                onClick={() => {
                                    setPage("contactBook");
                                    setTable("allContacts");
                                }}

                            />
                        </div>
                        <h3 className="sending-message-modal__subtitle">Please wait...</h3>
                        <div className="sending-message-modal__loader">
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
export default PercentageSentModal;
