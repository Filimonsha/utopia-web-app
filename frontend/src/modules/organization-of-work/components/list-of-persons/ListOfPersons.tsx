import {FC, useEffect, useState} from 'react';
import {DataGrid, GridColDef, GridRowSelectionModel} from "@mui/x-data-grid";

interface IPerson {
    id: number,
    name: string,
    motherland: string,
    family: string,
    position: string,
    prevPosition: string
}

interface IListOfPersonProps {
    persons: Array<IPerson>
}

const ListOfPersons: FC<IListOfPersonProps> = ({
                                                   persons
                                               }) => {
    const [selectedPeople,setSelectedPeople] = useState<GridRowSelectionModel>([])
    useEffect(() => {
        console.log(selectedPeople)
    }, [selectedPeople]);
    const columns: GridColDef[] = [
        {field: 'id', headerName: 'ID', width: 90},
        {
            field: 'name',
            headerName: 'Name',
            width: 150,
        },
        {
            field: 'motherland',
            headerName: 'Motherland',
            width: 150,
        },
        {
            field: 'family',
            headerName: 'Age',
            type: 'number',
            width: 110,
        },
        {
            field: 'position',
            headerName: 'Position',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
        },
        {
            field: 'prevPosition',
            headerName: 'Previous position',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
        },
    ];

    return (
        <DataGrid columns={columns} rows={persons} checkboxSelection
                  disableRowSelectionOnClick onRowSelectionModelChange={e => setSelectedPeople(e)}/>
    );
};

export default ListOfPersons;