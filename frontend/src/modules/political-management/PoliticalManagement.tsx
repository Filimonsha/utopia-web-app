import {FC} from 'react';
import {Box, Button, ButtonGroup, Stack} from "@mui/material";
import ListOfNotifications from "./components/list-of-notifications";
import ListOfChangesInRelationships from "./components/list-of-changes-in-relationships";
import styled from "styled-components";

interface IPoliticalManagementProps {

}
const mockPersons = [    {
    "name": "Sigizmund III",
    "motherland": "Poland",
    "family": "TODO family",
    "position": "TODO position",
    "buildings": [
        {
            "id": 4129,
            "buildingType": {
                "id": 61,
                "typeName": "Living"
            }
        }
    ]
},
    {
        "name": "Petr I",
        "motherland": "Finland",
        "family": "TODO family",
        "position": "TODO position",
        "buildings": [
            {
                "id": 4129,
                "buildingType": {
                    "id": 61,
                    "typeName": "Living"
                }
            }
        ]
    },
    {
        "name": "Victoria II",
        "motherland": "Great Britain",
        "family": "TODO family",
        "position": "TODO position",
        "buildings": [
            {
                "id": 4511,
                "buildingType": {
                    "id": 61,
                    "typeName": "Living"
                }
            }
        ]
    },]

const PoliticalManagementContainer = styled(Box)`
    padding: 24px;
`

const PoliticalManagementContainerHeader = styled(Stack)`
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`

const PoliticalManagement: FC<IPoliticalManagementProps> = ({}) => {
    return (
        <PoliticalManagementContainer>
            <PoliticalManagementContainerHeader direction="row">
                <Stack>
                    items
                </Stack>
                <Stack>
                    <ButtonGroup variant="contained">
                        <Button>Attach to the family</Button>
                        <Button>Attach to the institute</Button>
                    </ButtonGroup>
                </Stack>
            </PoliticalManagementContainerHeader>
            <ListOfNotifications  />
            <ListOfChangesInRelationships />
        </PoliticalManagementContainer>
    );
};

export default PoliticalManagement;
