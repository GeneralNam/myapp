// components/MainContent.js
import React from 'react';
import styles from './main.module.css';

const MainContent = () => {


    return (
        <div className={styles.mainContent}>
            <div className={styles.contentContainer}>
                <h1 className={styles.title}>
                    데이터로 움직이는 시장, 투자 기회를 빠르게 포착하세요
                </h1>

                <div className={styles.searchContainer}>
                    <input
                        type="text"
                        className={styles.searchInput}
                        placeholder="종목을 검색하세요"
                    />
                    <button className={styles.searchButton}>분석하기</button>
                </div>
            </div>
        </div>
    );
};

export default MainContent;