import React, { FC, useState, useContext } from 'react';
import Modal, { IProps } from '../modal';
import { Context } from '../../../../context/context';
import { ContactBookContext } from '../../../../context/ContactBook/contextContactBook';
import Close from '../../../../../res/images/contactBook/close.png';
import checkMark from '../../../../../res/images/contactBook/checkMark.svg';
import sumra from '../../../../../res/images/contactBook/sumrachat.svg';
import sumrameet from '../../../../../res/images/contactBook/sumrameet.svg';
import messenger from '../../../../../res/images/contactBook/messenger.svg';
import social from '../../../../../res/images/contactBook/social.svg';
import email from '../../../../../res/images/contactBook/e-mail.svg';
import phone from '../../../../../res/images/contactBook/phon.svg';
import classNames from 'classnames';

const SendReferralModal: FC<IProps> = ({ onClick }) => {
    const { setPage, setTable } = useContext(Context);
    const { actions } = useContext(ContactBookContext);

    const [activeSumrachat, setActiveSumrachat] = useState(false);
    const [activeSumrameet, setActiveSumrameet] = useState(false);
    const [activeMessenger, setActiveMessenger] = useState(false);
    const [activeSocial, setActiveSocial] = useState(false);
    const [activeEmail, setActiveEmail] = useState(false);
    const [activePhone, setActivePhone] = useState(false);

    return (
        <Modal onClick={onClick}>
            <section className="contact-book__send-referral-modal send-referral-modal">
                <div className="send-referral-modal__inner">
                    <div className="send-referral-modal__block-header">
                        <h2 className="send-referral-modal__title">Send referrals</h2>
                        <img
                            className="send-referral-modal__img-close"
                            src={Close}
                            alt="Close modal"
                            onClick={() => {
                                setPage("contactBook");
                                setTable("allContacts");
                            }}
                        />
                    </div>
                    <h3 className="send-referral-modal__subtitle">
                        {`Click to select a `}
                        <strong className="send-referral-modal__bolt-subtitle">
              Comunication platform
                        </strong>
                        {` below`}
                    </h3>
                    <div className="send-referral-modal__block-btn">
                        <button
                            name="sumrachat"
                            className={classNames(
                                'send-referral-modal__btn send-referral-modal__sumrachat',
                                {
                  'send-referral-modal__btn-active send-referral-modal__sumrachat':
                    activeSumrachat,
                                },
                            )}
                            onClick={({ currentTarget: { name } }) => {
                                setActiveSumrachat(!activeSumrachat);
                                setActiveSumrameet(false);
                                setActiveMessenger(false);
                                setActiveSocial(false);
                                setActiveEmail(false);
                                setActivePhone(false);
                               actions.getLetter(name);
                            }}
                        >
                            <span className="send-referral-modal__text-sumrameet send-referral-modal__text-grey">
                Send by
                            </span>
                            <strong className="send-referral-modal__text-sumrameet">
                                {' '}
                Sumrachat
                            </strong>
                            <img
                                className="send-referral-modal__img-sumrachat"
                                src={sumra}
                                alt="sumrachat icon"
                            />
                            <img
                                className={classNames('send-referral-modal__img-check', {
                  'send-referral-modal__img-check-active': activeSumrachat,
                                })}
                                src={checkMark}
                                alt="check"
                            />
                        </button>

                        <button
                            name="sumrameet"
                            className={classNames(
                                'send-referral-modal__btn send-referral-modal__sumrameet',
                                {
                  'send-referral-modal__btn-active send-referral-modal__sumrameet':
                    activeSumrameet,
                                },
                            )}
                            onClick={({ currentTarget: { name } }) => {
                                setActiveSumrameet(!activeSumrameet);
                                setActiveSumrachat(false);
                                setActiveMessenger(false);
                                setActiveSocial(false);
                                setActiveEmail(false);
                                setActivePhone(false);
                                actions.getLetter(name);
                            }}
                        >
                            <span className="send-referral-modal__text-sumrameet send-referral-modal__text-grey">
                Send by
                            </span>
                            <strong className="send-referral-modal__text-sumrameet">
                Sumrameet
                            </strong>
                            <img
                                className="send-referral-modal__img-sumrameet"
                                src={sumrameet}
                                alt="sumrameet icon"
                            />
                            <img
                                className={classNames('send-referral-modal__img-check', {
                  'send-referral-modal__img-check-active': activeSumrameet,
                                })}
                                src={checkMark}
                                alt="check"
                            />
                        </button>

                        <button
                            name="messenger"
                            className={classNames('send-referral-modal__btn', {
                'send-referral-modal__btn-active': activeMessenger,
                            })}
                            onClick={({ currentTarget: { name } }) => {
                                setActiveMessenger(!activeMessenger);
                                setActiveSumrameet(false);
                                setActiveSumrachat(false);
                                setActiveSocial(false);
                                setActiveEmail(false);
                                setActivePhone(false);
                                actions.getLetter(name);
                            }}
                        >
                            <span className="send-referral-modal__text-grey">Send by</span>
                            <strong>Messenger</strong>
                            <img
                                className="send-referral-modal__img"
                                src={messenger}
                                alt="messenger icons"
                            />
                            <img
                                className={classNames('send-referral-modal__img-check', {
                  'send-referral-modal__img-check-active': activeMessenger,
                                })}
                                src={checkMark}
                                alt="check"
                            />
                        </button>

                        <button
                            name="social"
                            className={classNames('send-referral-modal__btn', {
                'send-referral-modal__btn-active': activeSocial,
                            })}
                            onClick={({ currentTarget: { name } }) => {
                                setActiveSocial(!activeSocial);
                                setActiveMessenger(false);
                                setActiveSumrameet(false);
                                setActiveSumrachat(false);
                                setActiveEmail(false);
                                setActivePhone(false);
                              actions.getLetter(name);
                            }}
                        >
                            <span className="send-referral-modal__text-grey">Send by</span>
                            <strong>Social media</strong>
                            <img
                                className="send-referral-modal__img"
                                src={social}
                                alt="social icons"
                            />
                            <img
                                className={classNames('send-referral-modal__img-check', {
                  'send-referral-modal__img-check-active': activeSocial,
                                })}
                                src={checkMark}
                                alt="check"
                            />
                        </button>

                        <button
                            name="email"
                            className={classNames('send-referral-modal__btn', {
                'send-referral-modal__btn-active': activeEmail,
                            })}
                            onClick={({ currentTarget: { name } }) => {
                                setActiveEmail(!activeEmail);
                                setActiveSocial(false);
                                setActiveMessenger(false);
                                setActiveSumrameet(false);
                                setActiveSumrachat(false);
                                setActivePhone(false);
                                actions.getLetter(name);
                            }}
                        >
                            <span className="send-referral-modal__text-grey">Send by</span>
                            <strong>E-mail</strong>
                            <img src={email} alt="email icons" />
                            <img
                                className={classNames('send-referral-modal__img-check', {
                  'send-referral-modal__img-check-active': activeEmail,
                                })}
                                src={checkMark}
                                alt="check"
                            />
                        </button>

                        <button
                            name="phone"
                            className={classNames(
                                'send-referral-modal__btn send-referral-modal__phone',
                                {
                  'send-referral-modal__btn-active send-referral-modal__phone':
                    activePhone,
                                },
                            )}
                            onClick={({ currentTarget: { name } }) => {
                                setActivePhone(!activePhone);
                                setActiveEmail(false);
                                setActiveSocial(false);
                                setActiveMessenger(false);
                                setActiveSumrameet(false);
                                setActiveSumrachat(false);
                                actions.getLetter(name);
                            }}
                        >
                            <div>
                                <span className="send-referral-modal__text-grey">Send by </span>
                                <strong>Mobile phone</strong>
                            </div>
                            <img src={phone} alt="phone icons" />
                            <img
                                className={classNames('send-referral-modal__img-check', {
                  'send-referral-modal__img-check-active': activePhone,
                                })}
                                src={checkMark}
                                alt="check"
                            />
                        </button>
                    </div>

                    <div className="send-referral-modal__block-button">
                        <button className="send-referral-modal__button" type="button"
                        onClick={()=> setPage("sendModal")}
                        >
                Continue
                        </button>
                        <button

                            onClick={() => {
                                setPage("contactBook");
                                setTable("allContacts");
                            }}
                            className="send-referral-modal__button-cancel"
                            type="button"
                        >
              Cancel
                        </button>
                    </div>
                </div>
            </section>
        </Modal>
    );
};

export default SendReferralModal;
