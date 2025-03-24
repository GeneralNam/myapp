'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import HomeIcon from './icons/home';
import GraphIcon from './icons/graph';
import useModalStore from '../store/useModalStore';
import { useRouter } from 'next/navigation';

const Navbar = () => {

    const openModal = useModalStore(state => state.openModal);
    const router = useRouter();
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarHeader}>
                <h1 onClick={() => router.push('/main')}>Ainance</h1>
            </div>
            <div className={styles.navbarMenu}>
                <ul>
                    <li>
                        <Link href="/">
                            <span className={styles.navItem} onClick={() => router.push('/main')}>
                                <HomeIcon />
                                홈
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/market">
                            <span className={styles.navItem}>
                                <GraphIcon />
                                최근 분석
                            </span>
                        </Link>
                    </li>


                </ul>
            </div>
            <div className={styles.navbarFooter}>
                <div className={styles.footerContainer}>
                    <span className={styles.button} onClick={() => openModal('login')}>로그인</span>
                    <span className={styles.button} onClick={() => openModal('profile')}>내계정</span>
                    <span className={styles.button} onClick={() => router.push('/pricing')}>요금제</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;