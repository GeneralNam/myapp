// PaymentHistory.js
import React from 'react';
import styles from './paymenthistory.module.css';

const PaymentHistory = () => {
    // 결제 내역 데이터
    const paymentData = [
        { date: '2025년 4월 20일', plan: '트레이더', amount: '₩64,900', method: '카카오페이', status: '결제 완료', receipt: true },
        { date: '2025년 3월 20일', plan: '트레이더', amount: '₩64,900', method: '신용/체크카드', status: '환불 완료', receipt: true },
        { date: '2025년 2월 20일', plan: '베이직', amount: '₩14,900', method: '네이버페이', status: '결제 실패', receipt: false },
        { date: '2025년 4월 20일', plan: '트레이더', amount: '₩64,900', method: '카카오페이', status: '결제 완료', receipt: true },
        { date: '2025년 3월 20일', plan: '트레이더', amount: '₩64,900', method: '신용/체크카드', status: '환불 완료', receipt: true },
        { date: '2025년 2월 20일', plan: '베이직', amount: '₩14,900', method: '네이버페이', status: '결제 실패', receipt: false },
        { date: '2025년 4월 20일', plan: '트레이더', amount: '₩64,900', method: '카카오페이', status: '결제 완료', receipt: true },
        { date: '2025년 3월 20일', plan: '트레이더', amount: '₩64,900', method: '신용/체크카드', status: '환불 완료', receipt: true },
        { date: '2025년 2월 20일', plan: '베이직', amount: '₩14,900', method: '네이버페이', status: '결제 실패', receipt: false },
        { date: '2025년 4월 20일', plan: '트레이더', amount: '₩64,900', method: '카카오페이', status: '결제 완료', receipt: true },
        { date: '2025년 3월 20일', plan: '트레이더', amount: '₩64,900', method: '신용/체크카드', status: '환불 완료', receipt: true },
        { date: '2025년 2월 20일', plan: '베이직', amount: '₩14,900', method: '네이버페이', status: '결제 실패', receipt: false },
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>결제 내역</h1>

            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>날짜</th>
                            <th>요금제</th>
                            <th>결제 금액</th>
                            <th>결제 수단</th>
                            <th>상태</th>
                            <th>영수증</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paymentData.map((payment, index) => (
                            <tr key={index}>
                                <td>{payment.date}</td>
                                <td>{payment.plan}</td>
                                <td>{payment.amount}</td>
                                <td>{payment.method}</td>
                                <td className={
                                    payment.status === '결제 완료' ? styles.statusComplete :
                                        payment.status === '환불 완료' ? styles.statusRefund :
                                            styles.statusFailed
                                }>
                                    {payment.status}
                                </td>
                                <td>
                                    {payment.receipt && (
                                        <button className={styles.receiptButton}>확인하기</button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className={styles.bottomNav}>
                <button className={styles.navButton}>내 계정</button>
                <button className={styles.navButton}>요금제</button>
            </div>
        </div>
    );
};

export default PaymentHistory;