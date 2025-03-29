import React from 'react';
import styles from './Subscription.module.css';
import { useRouter } from 'next/navigation';

const SubscriptionPage = ({ isOpen, onClose, setIsYearlyModalOpen }) => {
    const router = useRouter();
    // 현재 구독 정보
    const currentSubscription = {
        plan: '트레이더',
        amount: '₩64,900/월',
        paymentMethod: '카카오페이',
        startDate: '2025년 4월 23일',
        nextPaymentDate: '-'
    };

    // 결제 내역 데이터
    const paymentHistory = [
        {
            date: '2025년 4월 20일',
            plan: '트레이더',
            amount: '₩64,900',
            paymentMethod: '카카오페이',
            status: '결제 완료',
            hasReceipt: true
        },
        {
            date: '2025년 3월 20일',
            plan: '트레이더',
            amount: '₩64,900',
            paymentMethod: '신용/체크카드',
            status: '환불 완료',
            hasReceipt: true
        },
        {
            date: '2025년 2월 20일',
            plan: '베이직',
            amount: '₩14,900',
            paymentMethod: '네이버페이',
            status: '결제 실패',
            hasReceipt: false
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>요금제</h1>
                <button className={styles.closeButton} onClick={onClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            <div className={styles.currentSubscription}>
                <div className={styles.sectionHeader}>
                    <div className={styles.sectionContainer}>
                        <div className={styles.leftGroup}>
                            <h2 className={styles.sectionTitle}>현재 사용 중인 요금제</h2>
                            <button className={styles.changeButton}>
                                요금제 변경 <span className={styles.arrow}>→</span>
                            </button>
                        </div>
                        <div className={styles.rightGroup}>
                            <button className={styles.linkButton} onClick={() => setIsYearlyModalOpen(true)}>연간 결제로 변경</button>
                        </div>
                    </div>
                </div>

                <div className={styles.subscriptionTable}>
                    <div className={styles.tableHeader}>
                        <div className={styles.headerCell} style={{ width: '20%' }}>요금제</div>
                        <div className={styles.headerCell} style={{ width: '20%' }}>결제 금액</div>
                        <div className={styles.headerCell} style={{ width: '20%' }}>결제 수단</div>
                        <div className={styles.headerCell} style={{ width: '20%' }}>구독 시작일</div>
                        <div className={styles.headerCell} style={{ width: '20%' }}>다음 결제일</div>
                    </div>
                    <div className={styles.tableRow}>
                        <div className={styles.tableCell} style={{ width: '20%' }}>{currentSubscription.plan}</div>
                        <div className={styles.tableCell} style={{ width: '20%' }}>{currentSubscription.amount}</div>
                        <div className={styles.tableCell} style={{ width: '20%' }}>{currentSubscription.paymentMethod}</div>
                        <div className={styles.tableCell} style={{ width: '20%' }}>{currentSubscription.startDate}</div>
                        <div className={styles.tableCell} style={{ width: '20%' }}>{currentSubscription.nextPaymentDate}</div>
                    </div>
                </div>
            </div>

            <div className={styles.paymentHistorySection}>
                <div className={styles.sectionHeader}>
                    <div className={styles.sectionContainer}>
                        <div className={styles.leftGroup}>
                            <h2 className={styles.sectionTitle}>결제 내역</h2>
                            <button className={styles.changeButton}>
                                결제 수단 변경 <span className={styles.arrow}>→</span>
                            </button>
                        </div>
                        <div className={styles.rightGroup}>
                            <button className={styles.viewAllButton} onClick={() => router.push('/paymenthistory')}>결제 내역 모두 보기</button>
                            <button className={styles.refundButton}>환불하기</button>
                        </div>
                    </div>
                </div>

                <div className={styles.paymentTable}>
                    <div className={styles.tableHeader}>
                        <div className={styles.headerCell} style={{ width: '20%' }}>날짜</div>
                        <div className={styles.headerCell} style={{ width: '15%' }}>요금제</div>
                        <div className={styles.headerCell} style={{ width: '15%' }}>결제 금액</div>
                        <div className={styles.headerCell} style={{ width: '20%' }}>결제 수단</div>
                        <div className={styles.headerCell} style={{ width: '15%' }}>상태</div>
                        <div className={styles.headerCell} style={{ width: '15%' }}>정구서</div>
                    </div>

                    {paymentHistory.map((payment, index) => (
                        <div key={index} className={styles.tableRow}>
                            <div className={styles.tableCell} style={{ width: '20%' }}>{payment.date}</div>
                            <div className={styles.tableCell} style={{ width: '15%' }}>{payment.plan}</div>
                            <div className={styles.tableCell} style={{ width: '15%' }}>{payment.amount}</div>
                            <div className={styles.tableCell} style={{ width: '20%' }}>{payment.paymentMethod}</div>
                            <div className={styles.tableCell} style={{ width: '15%' }}>{payment.status}</div>
                            <div className={styles.tableCell} style={{ width: '15%' }}>
                                {payment.hasReceipt && (
                                    <button className={styles.receiptButton}>확인하기</button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.subscribeButtonContainer}>
                <button className={styles.subscribeButton}>구독 취소</button>
            </div>
        </div>
    );
};

export default SubscriptionPage;