import React, { FC, useState, useContext } from 'react';
import Modal, { IProps } from '../modal';
import Close from '../../../../../res/images/contactBook/close.png';
import classNames from 'classnames';
import { Context } from '../../../../context/context';
import { ContactBookContext } from '../../../../context/ContactBook/contextContactBook';

import facebook from '../../../../../res/images/contactBook/facebook.svg';
import instagram from '../../../../../res/images/contactBook/instagram.svg';
import linkedin from '../../../../../res/images/contactBook/in.svg';
import twitter from '../../../../../res/images/contactBook/twitter.svg';
import pinterest from '../../../../../res/images/contactBook/pinterest.svg';
import discord from '../../../../../res/images/contactBook/discord.svg';
import youtube from '../../../../../res/images/contactBook/youtube.svg';
import zoom from '../../../../../res/images/contactBook/zoom.svg';
import tiktok from '../../../../../res/images/contactBook/tiktok.svg';
import twinch from '../../../../../res/images/contactBook/twinch.svg';

import telegram from '../../../../../res/images/contactBook/telegram.svg';
import whatsapp from '../../../../../res/images/contactBook/whatsapp.svg';
import messanger from '../../../../../res/images/contactBook/messanger.svg';
import viber from '../../../../../res/images/contactBook/viber.svg';
import signal from '../../../../../res/images/contactBook/signal.svg';
import snapchat from '../../../../../res/images/contactBook/snapchat.svg';
import meet from '../../../../../res/images/contactBook/meet.svg';
import skype from '../../../../../res/images/contactBook/skype.svg';
import line from '../../../../../res/images/contactBook/line.svg';
import groupMe from '../../../../../res/images/contactBook/group-me.svg';

import sumrachat from '../../../../../res/images/contactBook/sumrachat.svg';

import sumrameet from '../../../../../res/images/contactBook/sumrameet.svg';

import phone from '../../../../../res/images/contactBook/phone.svg';

import frame1 from '../../../../../res/images/contactBook/frame1.svg';
import frame2 from '../../../../../res/images/contactBook/frame2.svg';
import frame3 from '../../../../../res/images/contactBook/frame3.svg';
import frame4 from '../../../../../res/images/contactBook/frame4.svg';
import frame5 from '../../../../../res/images/contactBook/frame5.svg';
import frame6 from '../../../../../res/images/contactBook/frame6.svg';
import frame7 from '../../../../../res/images/contactBook/frame7.svg';
import mark from '../../../../../res/images/contactBook/mark.svg';

const icons = [
  { email: [frame1, frame2, frame3, frame4, frame5, frame6, frame7] },
  { phone: [phone] },
  { sumrameet: [sumrameet] },
  { sumrachat: [sumrachat] },
  {
    messenger: [
      telegram,
      whatsapp,
      messanger,
      viber,
      signal,
      snapchat,
      meet,
      skype,
      line,
      groupMe,
    ],
  },
  {
    social: [
      facebook,
      instagram,
      linkedin,
      twitter,
      pinterest,
      discord,
      youtube,
      zoom,
      tiktok,
      twinch,
    ],
  },
];

const SendModal: FC<IProps> = ({ onClick }) => {debugger
    const { state, actions } = useContext(ContactBookContext);
    const { setPage, setTable } = useContext(Context);
    const sendLetter = state.sendLetter;
    // eslint-disable-next-line no-unused-vars
    const download = state.download;
    // eslint-disable-next-line no-unused-vars
    const [visible, setVisible] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [stopInterval, setStopInterval] = useState(0);
    let intervalId;
    let count = 0;

    const filterIcon = icons.find((icon) => {
        if (sendLetter in icon) {
            return icon[sendLetter].map((ico) => {
                return ico;
            });
        }
    });

    const startDownload = () => {
    //@ts-ignore
        intervalId = setInterval(addNumber, 100);
    };

    const addNumber = () => {
        count++;
        if (count === 100) {
            clearInterval(intervalId);
        }
        actions.dovnloadSend(count);
        setStopInterval(count);
    };

    return (
        <Modal onClick={onClick}>
            <section className="contact-book__send-modal send-modal">
                <div className="send-modal__inner">
                    <div className="send-modal__block-header">
                        <h2 className="send-modal__title">Send referrals</h2>
                        <img
                            className="send-modal__img-close"
                            src={Close}
                            alt="Close modal"
                            onClick={() => {
                                setPage("contactBook");
                                setTable("allContacts");
                            }}
                        />
                    </div>
                    <h3 className="send-modal__subtitle">
                        {`Click to select a `}
                        <strong className="send-modal__bolt-subtitle">
                            {sendLetter &&
                `${sendLetter[0].toUpperCase() + sendLetter.slice(1)} platform`}
                        </strong>
                        {` below`}
                    </h3>

                    <div className="send-modal__block-icon">
                        {filterIcon &&
              filterIcon[sendLetter].map((icon) => (
                  <>
                      <input
                          key={icon}
                          className="send-modal__input-checkbox"
                          id={icon}
                          type="checkbox"
                      />
                      <label className="send-modal__td-checkbox" htmlFor={icon}>
                          <img className="send-modal__img-icon" src={icon} alt="" />
                          <img
                              className={classNames('send-modal__img-mark', {
                        'send-modal__img-mark-visible': visible,
                              })}
                              src={mark}
                              alt=""
                          />
                      </label>
                  </>
              ))}
                    </div>

                    <div className="send-referral-modal__block-button">

                        <button
                            className="send-referral-modal__button"
                            type="button"
                            onClick={()=>{
                                startDownload();
                                setPage("sendingMessage");
                            }}
                        >
                Send
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
export default SendModal;
