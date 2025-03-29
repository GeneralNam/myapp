import { useEffect, useState } from 'react';
import styles from './acceptModal.module.css';
import { useRouter } from 'next/navigation';

const AcceptModal = ({ isOpen, onClose, message, subMessage, buttonText }) => {
    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
        } else {
            // Add a slight delay before completely removing the modal from DOM
            // to allow for the fade out animation
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isVisible) return null;

    return (
        <div className={`${styles.modalOverlay} ${isOpen ? styles.open : styles.closing}`} onClick={onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                    ×
                </button>
                <div className={styles.messageContainer}>
                    <h2 className={styles.mainMessage}>{message}</h2>
                    <p className={styles.subMessage}>{subMessage}</p>
                </div>
                <button className={styles.actionButton} onClick={() => { onClose(); router.push('/main'); }}>
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default AcceptModal;