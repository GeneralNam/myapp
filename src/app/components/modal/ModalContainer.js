'use client'

// components/ModalContainer.js
import React from 'react';
import useModalStore from '../../store/useModalStore';
import LoginModal from './modalType/LoginModal';
import ProfileModal from './modalType/ProfileModal';
const ModalContainer = () => {
  const { activeModal, closeModal } = useModalStore();

  return (
    <>
      {/* 로그인 모달 */}
      {activeModal === 'login' && (
        <LoginModal isOpen={true} onClose={closeModal} />
      )}

      {/* 프로필 모달 */}
      {activeModal === 'profile' && (
        <ProfileModal isOpen={true} onClose={closeModal} />
      )}
      {/* 여기에 추가 모달 컴포넌트 배치 */}
      {/* 
      {activeModal === 'pricing' && (
        <PricingModal isOpen={true} onClose={closeModal} />
      )}
      
      {activeModal === 'search' && (
        <SearchModal isOpen={true} onClose={closeModal} />
      )}
      */}
    </>
  );
};

export default ModalContainer;