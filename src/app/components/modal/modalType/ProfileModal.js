import React, { useState, useEffect } from 'react';
import styles from './ProfileModal.module.css';
import WithdrawalModal from './subModal/withDrawer';
import FeedbackModal from './subModal/feedback';
import MyPage from './components/MyPage';
import SubscriptionPage from './components/Subscription';

const ProfileModal = ({ isOpen, onClose }) => {
    // 임시 사용자 데이터 객체 생성


    const [isWithdrawalModalOpen, setIsWithdrawalModalOpen] = useState(false);
    const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState('myPage');

    const userData = {
        name: '임범준',
        email: 'dlaqjawns@gmail.com',
        planType: '트레이더',
        paymentNumber: '3945 **** **** 2342'
    };

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContainer}>
                <div className={styles.modalLeft}>
                    <div className={styles.profile}>
                        <div className={styles.profileName}>
                            <p>임범준</p>
                            <div className={styles.subscription}>
                                트레이더
                            </div>
                        </div>
                        <div className={styles.profileEmail}>
                            <p>dlaqjawns@gmail.com</p>
                        </div>
                    </div>
                    <div className={styles.profileMenu}>
                        <button className={styles.profileMenuButton} onClick={() => setCurrentPage('myPage')}>
                            <p>내 계정</p>
                        </button>
                        <button className={styles.profileMenuButton} onClick={() => setCurrentPage('subscription')}>
                            <p>요금제</p>
                        </button>
                    </div>
                    <button className={styles.profileLogoutButton}>
                        <p>로그아웃</p>
                    </button>
                </div>

                {currentPage === 'myPage' && (
                    <MyPage
                        isOpen={isOpen}
                        onClose={onClose}
                        userData={userData}
                        setIsWithdrawalModalOpen={setIsWithdrawalModalOpen}
                    />
                )}
                {currentPage === 'subscription' && (
                    <SubscriptionPage
                        isOpen={isOpen}
                        onClose={onClose}
                    />
                )}

            </div>
            {isWithdrawalModalOpen && (
                <WithdrawalModal
                    setIsFeedbackModalOpen={setIsFeedbackModalOpen}
                    isOpen={isWithdrawalModalOpen}
                    onClose={() => setIsWithdrawalModalOpen(false)}
                />
            )}
            {isFeedbackModalOpen && (
                <FeedbackModal
                    isOpen={isFeedbackModalOpen}
                    onClose={() => setIsFeedbackModalOpen(false)}
                />
            )}
        </div>
    );
};



export default ProfileModal;