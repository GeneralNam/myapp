

import { create } from 'zustand';

const useModalStore = create((set) => ({
    // 활성화된 모달 (null이면 열린 모달 없음)
    activeModal: null,

    // 모달 데이터 (필요한 경우)
    modalData: null,

    // 모달 열기
    openModal: (modalType) => set({
        activeModal: modalType,
        modalData: null
    }),

    // 데이터와 함께 모달 열기
    openModalWithData: (modalType, data) => set({
        activeModal: modalType,
        modalData: data
    }),

    // 모달 닫기
    closeModal: () => set({
        activeModal: null,
        modalData: null
    }),
}));

export default useModalStore;