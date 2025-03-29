// PaymentPage.js
'use client'

import { useState } from 'react';
import styles from './payment.module.css';

export default function PaymentPage() {
    const [selectedTab, setSelectedTab] = useState('monthly');
    const [selectedPayment, setSelectedPayment] = useState('credit');
    const [cardSelected, setCardSelected] = useState(true);

    return (
        <div className={styles.container}>
            <h1 className={styles.pageTitle}>베이직</h1>

            {/* 구독 탭 */}
            <div className={styles.tabContainer}>
                <button
                    className={`${styles.tabButton} ${selectedTab === 'monthly' ? styles.activeTab : ''}`}
                    onClick={() => setSelectedTab('monthly')}
                >
                    월간
                </button>
                <button
                    className={`${styles.tabButton} ${selectedTab === 'yearly' ? styles.activeTab : ''}`}
                    onClick={() => setSelectedTab('yearly')}
                >
                    연간 (20% 할인)
                </button>
            </div>

            {/* 가격 정보 */}
            <div className={styles.priceContainer}>
                <span className={styles.price}>₩14,900</span>
                <span className={styles.period}>/월</span>
            </div>

            {/* 결제 수단 섹션 */}
            <div className={styles.paymentSection}>
                <h2 className={styles.sectionTitle}>결제 수단</h2>

                {/* 결제 수단 탭 */}
                <div className={styles.paymentTabContainer}>
                    <button
                        className={`${styles.paymentTabButton} ${selectedPayment === 'credit' ? styles.activePaymentTab : ''}`}
                        onClick={() => setSelectedPayment('credit')}
                    >
                        신용/체크카드
                    </button>
                    <button
                        className={`${styles.paymentTabButton} ${selectedPayment === 'kakao' ? styles.activePaymentTab : ''}`}
                        onClick={() => setSelectedPayment('kakao')}
                    >
                        카카오페이
                    </button>
                    <button
                        className={`${styles.paymentTabButton} ${selectedPayment === 'naver' ? styles.activePaymentTab : ''}`}
                        onClick={() => setSelectedPayment('naver')}
                    >
                        네이버페이
                    </button>
                </div>

                {/* 카드 정보 */}
                {selectedPayment === 'credit' && (
                    <div className={styles.cardInfo}>
                        <div className={styles.cardSelected}>
                            <span>3945 **** **** 2342</span>
                            <div className={styles.cardActions}>
                                <span className={styles.checkIcon}>✓</span>
                                <span className={styles.deleteIcon}>⊠</span>
                            </div>
                        </div>
                        <button className={styles.addCardButton}>+ 새로운 결제 카드 등록</button>
                    </div>
                )}
            </div>

            {/* 결제 내역 섹션 */}
            <div className={styles.paymentDetailsSection}>
                <h2 className={styles.sectionTitle}>결제 내역</h2>

                <div className={styles.paymentDetail}>
                    <span>결제 금액</span>
                    <span>월 ₩14,900</span>
                </div>

                <div className={styles.paymentDetail}>
                    <span>결제 시작일</span>
                    <span>2025년 3월 23일</span>
                </div>
            </div>

            {/* 약관 및 안내 */}
            <div className={styles.termsSection}>
                <p className={styles.terms}>
                    유료 기능을 사용한 경우 해당 기간에 대한 환불이 불가합니다.
                </p>
                <p className={styles.terms}>
                    매달 14,900원이 청구됩니다. 내용을 확인하셨다면,<br />
                    아래 버튼을 눌러 결제를 진행해주세요.
                </p>
            </div>

            {/* 결제 버튼 */}
            <button className={styles.payButton}>결제하기</button>
        </div>
    );
}