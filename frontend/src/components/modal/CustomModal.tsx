import {ComponentType, Dispatch, FC} from 'react';
import {Modal, Stack} from "@mui/material";
import styled from "styled-components";

interface ICustomModalProps {
    isOpen: boolean,
    setIsOpen: Dispatch<boolean>,
    mainContent: ComponentType
}

const ModalContainer = styled(Modal)`

`
const CustomModal: FC<ICustomModalProps> = ({
                                                isOpen,
                                                setIsOpen,
                                                mainContent: MainContent
                                            }) => {

    function handleCloseModal() {
        setIsOpen(false)
    }

    return (
        <ModalContainer open={isOpen} onClose={handleCloseModal}>
            <Stack>
                <MainContent/>
            </Stack>
        </ModalContainer>
    );
};

export default CustomModal;
