'use client';

import { useState, useEffect } from 'react';
import styles from './searchBar.module.css';

export default function CoinSearch({ onSelect }) {
    const [input, setInput] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchSuggestions = async () => {
            if (input.length < 1) {
                setSuggestions([]);
                return;
            }

            setIsLoading(true);

            try {
                const response = await fetch(`/api/search?q=${encodeURIComponent(input)}`);

                if (!response.ok) {
                    throw new Error('Search request failed');
                }

                const { data } = await response.json();
                setSuggestions(data || []);
            } catch (error) {
                console.error('검색 오류:', error);
            } finally {
                setIsLoading(false);
            }
        };

        // 디바운싱 적용
        const timer = setTimeout(() => {
            fetchSuggestions();
        }, 300);

        return () => clearTimeout(timer);
    }, [input]);

    const handleSelectCoin = (coin) => {
        setInput(coin.name);
        setSuggestions([]);
        if (onSelect) onSelect(coin);
    };

    return (
        <div className={styles.searchContainer}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="코인명 검색"
                className={styles.searchInput}
            />

            {isLoading && <div className={styles.loader}>검색 중...</div>}

            {!isLoading && suggestions.length > 0 && (
                <ul className={styles.suggestionsList}>
                    {suggestions.map((coin) => (
                        <li
                            key={coin.id}
                            className={styles.suggestionItem}
                            onClick={() => handleSelectCoin(coin)}
                        >
                            {coin.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}