import {FC} from 'react';
import PoliticalManagement from "../modules/political-management/PoliticalManagement";

interface IPoliticalManagement {

}

const PoliticalManagementRoot: FC<IPoliticalManagement> = ({}) => {
    return (
        <PoliticalManagement/>
    );
};

export default PoliticalManagementRoot;
