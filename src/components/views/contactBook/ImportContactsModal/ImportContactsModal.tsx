import React, { FC, useContext } from 'react';
import Modal, { IProps } from './modal';
import Close from '../../../../../res/images/contactBook/close.png';
import file from '../../../../../res/images/contactBook/file-text.svg';
import { ContactBookContext } from "../../../../context/ContactBook/contextContactBook";
import { Context } from "../../../../context/context";

const ImportContactsModal: FC<IProps> = ({ onClick }) => {
    const { actions } = useContext(ContactBookContext);
    const {setPage} = useContext(Context)
    let intervalId;
    let count = 0;

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
    };

    return (
        <Modal onClick={onClick}>
            <section className="contact-book__import-contacts-modal import-contacts-modal">
                <div className="import-contacts-modal__inner">
                    <div className="import-contacts-modal__block-header">
                        <h2 className="import-contacts-modal__title">Import contacts</h2>
                        <img
                            className="import-contacts-modal__img-close"
                            src={Close}
                            alt="Close modal"
                            onClick={() => {
                                setPage("allContacts")
                            }}
                        />
                    </div>
                    <h3 className="import-contacts-modal__subtitle">
                        <span>To import contacts, select a</span> <span className="import-contacts-modal__subtitle-count">CSV </span>
                        <span> or </span>
                        <span className="import-contacts-modal__subtitle-count">vCard</span> <span>file.</span>
                    </h3>
                    <form className="import-contacts-modal__inner-form" action="">
                        <div className="import-contacts-modal__inner-file">
                            <div className="import-contacts-modal__form-group-input">
                                <label className="import-contacts-modal__label" htmlFor="file">
                                    <img src={file} alt="" />
                                    <span className="import-contacts-modal__title-file">Select File</span>
                                    <input
                                        className="import-contacts-modal__input-file"
                                        type="file"
                                        id="file"
                                        multiple
                                    />
                                </label>
                            </div>
                        </div>
                        <select
                            className="import-contacts-modal__select"
                            name=""
                            id=""
                        >
                            <option value="">Add to group:  All contacts</option>
                        </select>

                    </form>
                    <div className="import-contacts-modal__block-button">
                        <a
                            href="/#/contact_book"
                            onClick={() => {
                                setPage("importLoader");
                            }} >

                            <button
                                className="import-contacts-modal__button"
                                type="button"
                                onClick={startDownload}
                            >
                Import
                            </button>

                        </a>
                        <button
                            onClick={() => {
                                history.push(location.pathname);
                            }}
                            className="import-contacts-modal__button-cancel"
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
export default ImportContactsModal;
