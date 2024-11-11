import { useState } from 'react';

export const useUploadModals = () => {
    // State for modal visibility
    const [isNationalIdModalVisible, setNationalIdModalVisible] = useState(false);
    const [isPassportModalVisible, setPassportModalVisible] = useState(false);
    const [isProofOfResidenceModalVisible, setProofOfResidenceModalVisible] = useState(false);
    const [isBankStatementModalVisible, setBankStatementModalVisible] = useState(false);
    const [isUtilityBillModalVisible, setUtilityBillModalVisible] = useState(false);
    const [isLocalAuthorityStatementModalVisible, setLocalAuthorityStatementModalVisible] = useState(false);

    const [nationalIdImagePreview, setNationalIdImagePreview] = useState(null);
    const [passportImagePreview, setPassportImagePreview] = useState(null);
    const [proofOfResidenceImagePreview, setProofOfResidenceImagePreview] = useState(null);
    const [bankStatementImagePreview, setBankStatementImagePreview] = useState(null);
    const [utilityBillImagePreview, setUtilityBillImagePreview] = useState(null);
    const [localAuthorityStatementImagePreview, setLocalAuthorityStatementImagePreview] = useState(null);



    // Handlers to open and close each modal
    const handleOpenNationalIdModal = () => setNationalIdModalVisible(true);
    const handleCloseNationalIdModal = () => setNationalIdModalVisible(false);
    const handleOpenPassportModal = () => setPassportModalVisible(true);
    const handleClosePassportModal = () => setPassportModalVisible(false);
    const handleOpenProofOfResidenceModal = () => setProofOfResidenceModalVisible(true);
    const handleCloseProofOfResidenceModal = () => setProofOfResidenceModalVisible(false);
    const handleOpenBankStatementModal = () => setBankStatementModalVisible(true);
    const handleCloseBankStatementModal = () => setBankStatementModalVisible(false);
    const handleOpenUtilityBillModal = () => setUtilityBillModalVisible(true);
    const handleCloseUtilityBillModal = () => setUtilityBillModalVisible(false);
    const handleOpenLocalAuthorityStatementModal = () => setLocalAuthorityStatementModalVisible(true);
    const handleCloseLocalAuthorityStatementModal = () => setLocalAuthorityStatementModalVisible(false);

    // For National ID
    const handleNationalIdFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNationalIdImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // For Passport
    const handlePassportFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPassportImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Repeat similarly for other document types
    const handleProofOfResidenceFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProofOfResidenceImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleBankStatementFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setBankStatementImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUtilityBillFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUtilityBillImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleLocalAuthorityStatementFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setLocalAuthorityStatementImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };




    return {
        // Modal visibility and preview states
        isNationalIdModalVisible, handleOpenNationalIdModal, handleCloseNationalIdModal, nationalIdImagePreview, handleNationalIdFileChange,
        isPassportModalVisible, handleOpenPassportModal, handleClosePassportModal, passportImagePreview, handlePassportFileChange,
        isProofOfResidenceModalVisible, handleOpenProofOfResidenceModal, handleCloseProofOfResidenceModal, proofOfResidenceImagePreview, handleProofOfResidenceFileChange,
        isBankStatementModalVisible, handleOpenBankStatementModal, handleCloseBankStatementModal, bankStatementImagePreview, handleBankStatementFileChange,
        isUtilityBillModalVisible, handleOpenUtilityBillModal, handleCloseUtilityBillModal, utilityBillImagePreview, handleUtilityBillFileChange,
        isLocalAuthorityStatementModalVisible, handleOpenLocalAuthorityStatementModal, handleCloseLocalAuthorityStatementModal, localAuthorityStatementImagePreview, handleLocalAuthorityStatementFileChange,
    };
};
