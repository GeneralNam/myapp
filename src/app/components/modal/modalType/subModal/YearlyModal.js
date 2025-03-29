// SubscriptionModal.jsx
import { useState, useEffect } from 'react';
import styles from './YearlyModal.module.css';
import { useRouter } from 'next/navigation';
const YearlyModal = ({
    onClose,
    title,
    subtitle,
    message,
    info,
    buttons,
    mainModalClose
}) => {
    const router = useRouter();
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContainer}>
                <div className={styles.modalContent}>
                    <h2 className={styles.title}>{title}</h2>

                    <p className={styles.subtitle}>{subtitle}</p>

                    <div className={styles.message}>
                        <p>{message.first}</p>
                        <p>{message.second}</p>
                    </div>

                    <div className={styles.infoBox}>
                        <span className={styles.infoIcon}>{info.icon}</span>
                        <p className={styles.infoText}>{info.text}</p>
                    </div>

                    <div className={styles.buttonContainer}>
                        <button className={styles.cancelButton} onClick={onClose}>{buttons.cancel}</button>
                        <button className={styles.changeButton} onClick={() => { onClose(); mainModalClose(); router.push('/payment') }}>{buttons.confirm}</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default YearlyModal;