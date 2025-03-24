import React, { useState } from 'react';
import styles from './feedback.module.css';

const FeedbackModal = ({ isOpen, onClose, onSubmit }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [otherFeedback, setOtherFeedback] = useState('');

    if (!isOpen) return null;

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const handleSubmit = () => {
        onSubmit({
            feedbackType: selectedOption,
            otherFeedback: otherFeedback
        });
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContainer}>
                <button className={styles.closeButton} onClick={onClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <div className={styles.modalContent}>
                    <p className={styles.modalTitle}>어떤 점이 불편하셨나요?</p>
                    <p className={styles.modalDescription}>
                        소중한 의견을 남겨주시면 개선하겠습니다
                    </p>

                    <div className={styles.optionsContainer}>
                        <button
                            className={`${styles.optionButton} ${selectedOption === 'price' ? styles.selectedOption : ''}`}
                            onClick={() => handleOptionClick('price')}
                        >
                            가격이 부담스러워요
                        </button>

                        <button
                            className={`${styles.optionButton} ${selectedOption === 'function' ? styles.selectedOption : ''}`}
                            onClick={() => handleOptionClick('function')}
                        >
                            원하는 기능이 부족해요
                        </button>

                        <button
                            className={`${styles.optionButton} ${selectedOption === 'usability' ? styles.selectedOption : ''}`}
                            onClick={() => handleOptionClick('usability')}
                        >
                            사용이 어려워요
                        </button>

                        <button
                            className={`${styles.optionButton} ${selectedOption === 'other' ? styles.selectedOption : ''}`}
                            onClick={() => handleOptionClick('other')}
                        >
                            기타
                        </button>
                    </div>

                    {selectedOption === 'other' && (
                        <textarea
                            className={styles.feedbackTextarea}
                            placeholder="의견을 자유롭게 작성해주세요"
                            value={otherFeedback}
                            onChange={(e) => setOtherFeedback(e.target.value)}
                        />
                    )}

                    <button
                        className={styles.submitButton}
                        onClick={handleSubmit}
                    >
                        제출하기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeedbackModal;