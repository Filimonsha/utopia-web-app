import {FC} from 'react';
import {Box, Button, ButtonGroup, Stack} from "@mui/material";
import ListOfPersons from "./components/list-of-persons";
import styled from "styled-components";

interface IOrganizationOfWorkProps {

}
const mockPersons = [{
    id: 1,
    name:"string",
    motherland:"string",
    family:"string",
    position:"string",
    prevPosition:"string"
}]

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
            <ListOfPersons persons={mockPersons} />
        </OrganizationOfWorkContainer>
    );
};

export default OrganizationOfWork;
