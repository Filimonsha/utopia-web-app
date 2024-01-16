import {ComponentType, Dispatch, FC, ReactElement} from 'react';
import {Alert, Box, Button, Modal, Stack} from "@mui/material";
import styled from "styled-components";

interface ICustomModalProps {
    isOpen: boolean,
    setIsOpen: Dispatch<boolean>,
    children: ReactElement
}

const ModalContainer = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60%;
    transform: translate(-50%, -50%);
    background: #FFFF;
`
const ModalAlert = styled(Alert)`
    align-self: stretch;
`
const CustomModal: FC<ICustomModalProps> = ({
                                                isOpen,
                                                setIsOpen,
                                                children
                                            }) => {

    function handleCloseModal() {
        setIsOpen(false)
    }

    return (
        <Modal open={isOpen} onClose={handleCloseModal}>
            <ModalContainer>
                <Stack alignItems="center">
                    <Button>закрыть кнопка</Button>
                    {children}
                    <ModalAlert variant="filled" severity="error">Error: You are trying to change your family
                        incorrectly</ModalAlert>
                </Stack>
            </ModalContainer>
        </Modal>
    );
};

export default CustomModal;
