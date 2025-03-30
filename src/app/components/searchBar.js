'use client';

import { useState, useEffect } from 'react';
import styles from './searchBar.module.css';

const SearchBar = ({ onSelect, onAnalyze }) => {
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

    const handleAnalyze = () => {
        if (onAnalyze) onAnalyze(input);
    };

    return (
        <div className={styles.searchBarContainer}>
            <div className={styles.inputButtonWrapper}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="종목을 검색하세요"
                    className={styles.searchInput}
                />
                <button
                    className={styles.searchButton}
                    onClick={handleAnalyze}
                >
                    분석하기
                </button>
            </div>

            {(isLoading || suggestions.length > 0) && (
                <div className={styles.suggestionsContainer}>
                    {isLoading ? (
                        <div className={styles.loader}>검색 중...</div>
                    ) : (
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
            )}
        </div>
    );
};

export default SearchBar;