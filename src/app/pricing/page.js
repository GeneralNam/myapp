// pages/pricing.js
'use client'

import React, { useState } from 'react';
import Head from 'next/head';
import styles from './pricing.module.css';
import MonthPlan from './components/monthPlan';
import YearPlan from './components/yearPlan';
export default function PricingPage() {
    const [billingPeriod, setBillingPeriod] = useState('monthly'); // 'monthly' or 'yearly'

    const handleBillingToggle = (period) => {
        setBillingPeriod(period);
    };

    return (
        <>
            <Head>
                <title>Ainance - 투자 데이터 서비스</title>
                <meta name="description" content="감이 아닌 데이터로 투자하세요" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <h1 className={styles.title}>Ainance</h1>
                <p className={styles.subtitle}>불안한가요? 감이 아닌 데이터로 투자하세요</p>

                <div className={styles.toggleContainer}>
                    <button
                        className={`${styles.toggleButton} ${billingPeriod === 'monthly' ? styles.active : ''}`}
                        onClick={() => handleBillingToggle('monthly')}
                    >
                        월간
                    </button>
                    <button
                        className={`${styles.toggleButton} ${billingPeriod === 'yearly' ? styles.active : ''}`}
                        onClick={() => handleBillingToggle('yearly')}
                    >
                        연간 (20% 할인)
                    </button>
                </div>

                {billingPeriod === 'monthly' ? <MonthPlan /> : <YearPlan />}
            </div>
        </>
    );
}