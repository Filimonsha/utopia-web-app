import {FC, useEffect, useState} from 'react';
import {DataGrid, GridColDef, GridRowSelectionModel} from "@mui/x-data-grid";
import {usePrepareListOfPersons} from "./hooks/usePrepareListOfPersons";
import {IBuilding, IFamily, IPerson, IPosition} from "../../../../api/family-management/types";


interface IListOfPersonProps {
}

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
        valueGetter: (params) => {
            const family: IFamily = params.row.family;
            return family && (family.id + family.craftType.craftName)
        },
        type: 'number',
        width: 110,
    },
    {
        field: 'position',
        headerName: 'Position',
        valueGetter: (params) => {
            const position: IPosition = params.row.position;
            return position?.craftType && (position.id + position.craftType[0].craftName)
        },
        sortable: false,
        width: 160,
    },
    {
        field: 'prevPosition',
        headerName: 'Previous position',
        description: 'This column has a value getter and is not sortable.',
        valueGetter: (params) => {
            const position: IPosition = params.row.position;
            return position?.craftType && (`${position.id}  ${position.craftType[0].craftName}`)
        },
        sortable: false,
        width: 160,
    }, {
        field: 'buildings',
        description: 'This column has a value getter and is not sortable.',
        valueGetter: (params) => {
            const buildings: Array<IBuilding> = params.row.buildings;
            return buildings && buildings.map(building => `${building.id} ${building.buildingType.typeName}`).join(", ")
        },
        sortable: false,
        width: 160,
    },
];


const ListOfPersons: FC<IListOfPersonProps> = ({
                                                   // persons
                                               }) => {
    const [selectedPeople, setSelectedPeople] = useState<GridRowSelectionModel>([])
    const [paginationModel, setPaginationModel] = useState({
        pageSize: 10,
        page: 0,
    });

    const {isLoading, rows, rowCountState} = usePrepareListOfPersons(paginationModel)

    return (
        <DataGrid columns={columns}
                  rows={rows}
                  checkboxSelection
                  disableRowSelectionOnClick onRowSelectionModelChange={e => setSelectedPeople(e)}
                  paginationModel={paginationModel}
                  rowCount={rowCountState}
                  paginationMode="server"
                  loading={isLoading}
                  onPaginationModelChange={setPaginationModel}
        />
    );
};

export default ListOfPersons;
