import {FC, useEffect, useState} from 'react';
import {Box, Button, ButtonGroup, MenuItem, Select, SelectChangeEvent, Stack, Typography} from "@mui/material";
import ListOfPersons from "./components/list-of-persons";
import styled from "styled-components";
import CustomModal from "../../components/modal/CustomModal";
import AttentionIcon from "../../icons/AttentionIcon";
import {useControlFamilies} from "./components/hooks/useControlFamilies";
import {IPerson} from "../../api/family-management/types";
import {BASE_URL} from "../../api/axios";
import {getFamilyRoute} from "../../api/family-management";

interface IOrganizationOfWorkProps {

}


const OrganizationOfWorkContainer = styled(Box)`
    padding: 24px;
`

const OrganizationOfWorkContainerHeader = styled(Stack)`
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`

const OrganizationOfWork: FC<IOrganizationOfWorkProps> = ({}) => {
    const [isOpenAttachToFamilyModal, setIsOpenAttachToFamilyModal] = useState(false)
    const [selectedPerson, setSelectedPerson] = useState<IPerson | undefined>(undefined)
    const {families, chosenFamily, setChosenFamily, changeFamilyMember} = useControlFamilies()

    function handleClickOnFamilyAttachBtn() {
        setIsOpenAttachToFamilyModal(true)
    }

    useEffect(() => {
        if (selectedPerson) {
            setChosenFamily(
                selectedPerson.family ?
                    `${BASE_URL}/${getFamilyRoute(selectedPerson.family.id)}`
                    : undefined
            )
        }
    }, [selectedPerson]);

    function handleChoseFamily(e: SelectChangeEvent<string>) {
        setChosenFamily(e.target.value)
    }

    function handleConfirmFamilyAttachment() {
        if (chosenFamily && selectedPerson) {
            changeFamilyMember(selectedPerson.id)
        }
    }

    return (
        <OrganizationOfWorkContainer>
            <OrganizationOfWorkContainerHeader direction="row">
                <Stack>
                    items
                </Stack>
                <Stack>
                    <ButtonGroup variant="contained">
                        <Button disabled={!selectedPerson} onClick={handleClickOnFamilyAttachBtn}>Attach to
                            the family</Button>
                        <Button disabled={!selectedPerson}>Attach to the institute</Button>
                    </ButtonGroup>
                </Stack>
            </OrganizationOfWorkContainerHeader>
            <ListOfPersons setSelectedPerson={setSelectedPerson}/>
            <CustomModal isOpen={isOpenAttachToFamilyModal} setIsOpen={setIsOpenAttachToFamilyModal}>
                <>
                    <Stack spacing={2} direction="row" alignItems="center">
                        <AttentionIcon/>
                        <Typography>
                            You want to change these families:
                        </Typography>
                    </Stack>
                    <Select displayEmpty value={chosenFamily}
                            onChange={handleChoseFamily}>
                        <MenuItem selected value="">Person has no family</MenuItem>

                        {families.map(family => <MenuItem key={family} value={family}>{family}</MenuItem>)}
                    </Select>
                    <Button variant="contained" color="success" onClick={handleConfirmFamilyAttachment}>Confirm</Button>
                </>
            </CustomModal>
        </OrganizationOfWorkContainer>
    );
};

export default OrganizationOfWork;
