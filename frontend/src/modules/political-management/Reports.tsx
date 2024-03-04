import {FC, useEffect, useState} from 'react';
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {getReports} from "../../api/common";

interface IReportsProps {

}

const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 90},
    {
        field: 'title',
        headerName: 'Name',
        width: 150,
    },
    {
        field: 'contents',
        width: 150,
    },
]
const Reports: FC<IReportsProps> = ({}) => {
    const [reports, setReports] = useState([])

    useEffect(() => {
        getReports()
            .then((res: any) => setReports(res.data))
    }, []);

    return (
        <div>
            <DataGrid columns={columns}
                      rows={reports}/>
        </div>
    );
};

export default Reports;
