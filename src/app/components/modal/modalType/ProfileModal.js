import React, { useState, useEffect } from 'react';
import styles from './ProfileModal.module.css';
import WithdrawalModal from './subModal/withDrawer';
import FeedbackModal from './subModal/feedback';
import MyPage from './components/MyPage';
import SubscriptionPage from './components/Subscription';
import YearlyModal from './subModal/YearlyModal';
import AcceptModal from './subModal/acceptModal';

const ProfileModal = ({ isOpen, onClose }) => {
    // 임시 사용자 데이터 객체 생성


    const [isWithdrawalModalOpen, setIsWithdrawalModalOpen] = useState(false);
    const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState('myPage');
    const [isYearlyModalOpen, setIsYearlyModalOpen] = useState(false);
    const [isAcceptModalOpen, setIsAcceptModalOpen] = useState(false);

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
                        setIsYearlyModalOpen={setIsYearlyModalOpen}
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
            {isYearlyModalOpen && (
                <YearlyModal
                    isOpen={isYearlyModalOpen}
                    onClose={() => setIsYearlyModalOpen(false)}
                    title="연간 결제로 더 합리적인 선택을 해보세요."
                    subtitle="다음 결제일부터 적용됩니다"
                    message={{
                        first: "유료 사용량을 사용하지 않았을 경우",
                        second: "바로 연간 결제로 변경되며 기존 요금제는 자동 환불 처리됩니다"
                    }}
                    info={{
                        icon: "ⓘ",
                        text: "환불 금액은 3~5영업일 안에 입금됩니다."
                    }}
                    buttons={{
                        cancel: "취소",
                        confirm: "변경하러 가기"
                    }}
                    setIsAcceptModalOpen={setIsAcceptModalOpen}
                    mainModalClose={onClose}
                />
            )}
            {isAcceptModalOpen && (
                <AcceptModal
                    isOpen={isAcceptModalOpen}
                    onClose={() => setIsAcceptModalOpen(false)}
                    message="연간 결제로 변경되었습니다!"
                    subMessage="더 합리적인 가격으로 1년 동안 Ainance를 이용할 수 있습니다. 지금부터 더욱 스마트한 투자를 시작해 보세요!"
                    buttonText="분석하러 가기"
                />
            )}
        </div>
    );
};



export default ProfileModal;