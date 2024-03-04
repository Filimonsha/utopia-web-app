import {Dispatch, FC, useEffect, useState} from 'react';
import {DataGrid, GridColDef, GridRowSelectionModel} from "@mui/x-data-grid";
import {ICountryRelationshipEvent, IEventGroup, IPoliticalStatus} from "../../../../api/political-management/types";
import {usePrepareListOfCountryRelationshipEvents} from "./hooks/usePrepareListOfCountryRelationshipEvents";

interface IListOfCountryRelationshipEventProps {
    setSelectedNotification: Dispatch<ICountryRelationshipEvent | undefined>
}

//todo
const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 50},
    {
        field: 'politicalStatus',
        headerName: 'Political Status',
        valueGetter: (params) => {
            const status: IPoliticalStatus = params.row.position;
            return status ? status : "No status" //todo только если статус War или Conflict
        },
        width: 150,
    },
    {
        field: 'startEventDate',
        headerName: 'Start Date',
        width: 100,
    },
    {
        field: 'endEventDate',
        headerName: 'End Date',
        width: 100,
    },
    {
        field: 'eventGroups',
        headerName: 'Event Groups',
        valueGetter: (params) => {
            const eventGroups: Array<IEventGroup> = params.row.eventGroups;
            return eventGroups && eventGroups?.map(eventGroup => `${eventGroup.name}
             [${eventGroup?.groupCountries.map(country => country.name)}]`).join(", ")
        },
        width: 550
    },
]
const ListOfCountryRelationshipEvents: FC<IListOfCountryRelationshipEventProps> = ({
    setSelectedNotification
}) => {
    const [paginationModel, setPaginationModel] = useState({
        pageSize: 10,
        page: 0,
    });

    const {isLoading, rows, rowCountState} = usePrepareListOfCountryRelationshipEvents(paginationModel)

    function handleSelectNotification(e: GridRowSelectionModel) {
        setSelectedNotification(rows.find(row => row.id === e[0]))
    }

    return (
        <DataGrid columns={columns} rows={rows}

                  onRowSelectionModelChange={handleSelectNotification}
                  paginationModel={paginationModel}
                  rowCount={rowCountState}
                  paginationMode="server"
                  loading={isLoading}
                  onPaginationModelChange={setPaginationModel}
                  />
    );
};

export default ListOfCountryRelationshipEvents;
