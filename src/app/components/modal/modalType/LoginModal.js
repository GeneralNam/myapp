'use client'

// components/LoginModal.js
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './LoginModal.module.css';

const LoginModal = ({ isOpen, onClose }) => {
    // ESC 키로 모달 닫기
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    // 모달 외부 클릭 시 닫기
    const handleOutsideClick = (e) => {
        if (e.target.classList.contains(styles.modalOverlay)) {
            onClose();
        }
    };

    // createPortal을 사용하여 DOM 트리 최상단에 모달 렌더링
    return ReactDOM.createPortal(
        <div className={styles.modalOverlay} onClick={handleOutsideClick}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <div className={styles.modalBody}>
                    <h1 className={styles.title}>Ainance</h1>

                    <p className={styles.subtitle}>
                        한 번의 로그인으로<br />
                        시장을 읽다
                    </p>

                    <div className={styles.loginButtons}>
                        <button className={`${styles.loginButton} ${styles.googleButton}`}>
                            <span className={styles.buttonIcon}>
                                <svg width="20" height="20" viewBox="0 0 20 20">
                                    <path d="M19.76 10.23c0-.67-.06-1.34-.17-1.98H10.1v3.74h5.42a4.63 4.63 0 01-2.01 3.03v2.52h3.26c1.9-1.75 3-4.31 3-7.31z" fill="#4285F4" />
                                    <path d="M10.1 20c2.73 0 5.01-.9 6.68-2.46l-3.26-2.52c-.9.6-2.06.96-3.42.96-2.63 0-4.86-1.77-5.66-4.15H1.07v2.6A10 10 0 0010.1 20z" fill="#34A853" />
                                    <path d="M4.44 11.83c-.2-.6-.32-1.25-.32-1.92s.11-1.31.32-1.92V5.4H1.07A10 10 0 000 9.92c0 1.61.39 3.13 1.07 4.49l3.37-2.58z" fill="#FBBC05" />
                                    <path d="M10.1 3.84c1.48 0 2.81.51 3.85 1.51l2.89-2.89C15.07.93 12.8 0 10.1 0 6.17 0 2.78 2.25 1.07 5.4l3.37 2.6c.8-2.38 3.03-4.16 5.66-4.16z" fill="#EA4335" />
                                </svg>
                            </span>
                            구글 계정으로 시작하기
                        </button>

                        <button className={`${styles.loginButton} ${styles.naverButton}`}>
                            <span className={styles.buttonIcon}>
                                <svg width="20" height="20" viewBox="0 0 20 20">
                                    <path d="M18 0H2C0.9 0 0 0.9 0 2V18C0 19.1 0.9 20 2 20H18C19.1 20 20 19.1 20 18V2C20 0.9 19.1 0 18 0Z" fill="#03C75A" />
                                    <path d="M11.35 10.25L8.50005 6.19995H6.15002V13.8H8.64995V9.73995L11.5 13.8H13.85V6.19995H11.35V10.25Z" fill="white" />
                                </svg>
                            </span>
                            네이버 계정으로 시작하기
                        </button>

                        <button className={`${styles.loginButton} ${styles.kakaoButton}`}>
                            <span className={styles.buttonIcon}>
                                <span className={styles.kakaoLogo}>kakao</span>
                            </span>
                            카카오 계정으로 시작하기
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default LoginModal;