import PoliticalManagement from "../modules/political-management/PoliticalManagement";
import {FC} from "react";

interface IPoliticalManagementProps {

}

const PoliticalManagementRoot: FC<IPoliticalManagementProps> = ({}) => {
    return (
        <PoliticalManagement/>
    );
}

export default PoliticalManagementRoot