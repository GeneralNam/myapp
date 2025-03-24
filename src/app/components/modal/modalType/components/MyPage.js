import styles from './MyPage.module.css';

const MyPage = ({ isOpen, onClose, userData, setIsWithdrawalModalOpen }) => {



    return (
        <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
                <h2 className={styles.modalTitle}>내 계정</h2>
                <button className={styles.closeButton} onClick={onClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            <InfoRow label="이름" value={userData.name} />
            <InfoRow label="이메일" value={userData.email} />
            <InfoRow label="요금제" value={userData.planType} />
            <InfoRow
                label="결제 수단"
                value={userData.paymentNumber}
                button={
                    <button className={styles.actionButton}>결제 수단 변경</button>
                }
            />
            <InfoRow
                label="계정 탈퇴"
                value="계정을 탈퇴하면 모든 정보가 삭제됩니다."
                button={
                    <button className={styles.actionButton} onClick={() => setIsWithdrawalModalOpen(true)}>탈퇴하기</button>
                }
            />
        </div>
    );
};

const InfoRow = ({ label, value, button }) => {
    return (
        <div className={styles.infoRow}>
            <div className={styles.infoLabel}>{label}</div>
            <div className={styles.infoValue}>{value}</div>
            {button}
        </div>
    );
};

export default MyPage;