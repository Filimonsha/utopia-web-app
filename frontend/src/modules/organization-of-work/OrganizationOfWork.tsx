import {FC} from 'react';
import {Box} from "@mui/material";
import ListOfPersons from "./components/list-of-persons";

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

const OrganizationOfWork: FC<IOrganizationOfWorkProps> = ({}) => {
    return (
        <Box>
            <ListOfPersons persons={mockPersons} />
        </Box>
    );
};

export default OrganizationOfWork;
