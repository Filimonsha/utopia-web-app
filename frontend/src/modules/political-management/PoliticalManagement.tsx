import {FC, useEffect, useState} from 'react';
import {Box, Button, ButtonGroup, MenuItem, Select, SelectChangeEvent, Stack, Typography} from "@mui/material";
import styled from "styled-components";
import CustomModal from "../../components/modal/CustomModal";
import AttentionIcon from "../../icons/AttentionIcon";
import {ICountryRelationshipEvent, IPoliticalStatus} from "../../api/political-management/types";
import ListOfCountryRelationshipEvents from "./components/list-of-notifications/ListOfCountryRelationshipEvents";
import {changeEventStatus, getStatusRoute} from "../../api/political-management";
import {useControlStatuses} from "./components/hooks/useControlStatuses";
import {BASE_URL} from "../../api/axios";

interface IPoliticalManagementProps {

}

const PoliticalManagementContainer = styled(Box)`
  padding:24px;
`

const PoliticalManagementContainerHeader = styled(Stack)`
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`

const PoliticalManagement: FC<IPoliticalManagementProps> = ({}) => {
    const [isOpenChangeEventStatusModal, setIsOpenChangeEventStatusModal] = useState(false)
    const [selectedEvent, setSelectedEvent] = useState<ICountryRelationshipEvent | undefined>(undefined)
    const [chosenStatus, setChosenStatus] = useState<string | undefined>(undefined)
    const {statuses, setStatuses} = useControlStatuses()

    function handleClickOnEventChangeStatusBtn() {
        setIsOpenChangeEventStatusModal(true)
    }

    useEffect(() => {
        if (selectedEvent) {
            setChosenStatus(
                selectedEvent.politicalStatus ?
                    `${BASE_URL}/${getStatusRoute(selectedEvent.politicalStatus.id)}`
                    : undefined
            )
        }
    }, [selectedEvent]);

    const changeStatus = (eventId: number) => {
        if (chosenStatus) {
            const str = chosenStatus.split("/")
            changeEventStatus(eventId, str[chosenStatus.length -1])
        }
    }

    function handleChoseStatus(e: SelectChangeEvent<string>) {
        setChosenStatus(e.target.value) // тип как надо
    }

    function handleConfirmStatusChange() {
        if (chosenStatus && selectedEvent) {
            changeStatus(selectedEvent.id)
        }
    }

    return (
        <PoliticalManagementContainer>
            <PoliticalManagementContainerHeader direction="row">
                <Stack>
                    items
                </Stack>
                <Stack>
                    <ButtonGroup variant="contained">
                        {/*<Button disabled={!selectedPerson} onClick={handleClickOnFamilyAttachBtn}>Attach to*/}
                        {/*    the family</Button>*/}
                        <Button disabled={!selectedEvent}>Change status</Button>
                    </ButtonGroup>
                </Stack>
            </PoliticalManagementContainerHeader>
            <ListOfCountryRelationshipEvents setSelectedNotification={setSelectedEvent}/>
            <CustomModal isOpen={isOpenChangeEventStatusModal} setIsOpen={setIsOpenChangeEventStatusModal}>
                <>
                    <Stack spacing={2} direction="row" alignItems="center">
                        <AttentionIcon/>
                        <Typography>
                            You want to change these families:
                        </Typography>
                    </Stack>
                    <Select displayEmpty value={chosenStatus}
                            onChange={handleChoseStatus}>
                        <MenuItem selected value="">Event has no status</MenuItem>

                        {statuses.map(status => <MenuItem key={status} value={status}>{status}</MenuItem>)}
                    </Select>
                    <Button disabled={!chosenStatus} variant="contained" color="success" onClick={handleConfirmStatusChange}>Confirm</Button>
                </>
            </CustomModal>
        </PoliticalManagementContainer>
    );
};

export default PoliticalManagement;
