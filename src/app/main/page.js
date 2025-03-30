'use client';

import React from 'react';
import styles from './main.module.css';
import SearchBar from '../components/searchBar';

const MainContent = () => {
    const handleCoinSelect = (coin) => {
        console.log('선택된 코인:', coin);
    };

    const handleAnalyze = (coinName) => {
        console.log('분석할 코인:', coinName);
        // 분석 페이지로 이동하거나 분석 함수 호출
    };

    return (
        <div className={styles.mainContent}>
            <div className={styles.contentContainer}>
                <h1 className={styles.title}>
                    데이터로 움직이는 시장, 투자 기회를 빠르게 포착하세요
                </h1>

                <div className={styles.searchContainer}>
                    <SearchBar
                        onSelect={handleCoinSelect}
                        onAnalyze={handleAnalyze}
                    />
                </div>
            </div>
        </div>
    );
};

export default MainContent;