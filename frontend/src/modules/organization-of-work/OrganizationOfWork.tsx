import {FC} from 'react';
import {Box, Button, ButtonGroup, Stack} from "@mui/material";
import ListOfPersons from "./components/list-of-persons";
import styled from "styled-components";

interface IOrganizationOfWorkProps {

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

const OrganizationOfWorkContainer = styled(Box)`
    padding: 24px;
`

const OrganizationOfWorkContainerHeader = styled(Stack)`
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`

const OrganizationOfWork: FC<IOrganizationOfWorkProps> = ({}) => {
    return (
        <OrganizationOfWorkContainer>
            <OrganizationOfWorkContainerHeader direction="row">
                <Stack>
                    items
                </Stack>
                <Stack>
                    <ButtonGroup variant="contained">
                        <Button>Attach to the family</Button>
                        <Button>Attach to the institute</Button>
                    </ButtonGroup>
                </Stack>
            </OrganizationOfWorkContainerHeader>
            <ListOfPersons  />
        </OrganizationOfWorkContainer>
    );
};

export default OrganizationOfWork;
