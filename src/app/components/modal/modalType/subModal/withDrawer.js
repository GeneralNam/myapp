import React from 'react';
import styles from './withDrawer.module.css';

const WithdrawalModal = ({ isOpen, onClose, onConfirm, setIsFeedbackModalOpen }) => {
    if (!isOpen) return null;



    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContainer}>
                <button className={styles.closeButton} onClick={onClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <div className={styles.modalContent}>
                    <p className={styles.modalTitle}>정말 탈퇴하시겠습니까?</p>
                    <p className={styles.modalDescription}>
                        '탈퇴하기'를 입력하신 후 버튼을 눌러주세요
                    </p>

                    <input
                        type="text"
                        className={styles.confirmInput}
                        placeholder="탈퇴하기"
                    />

                    <div className={styles.buttonGroup}>
                        <button className={styles.cancelButton} onClick={onClose}>
                            취소
                        </button>
                        <button className={styles.confirmButton} onClick={() => {
                            onClose();
                            setIsFeedbackModalOpen(true);
                        }}>
                            회원 탈퇴
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WithdrawalModal;