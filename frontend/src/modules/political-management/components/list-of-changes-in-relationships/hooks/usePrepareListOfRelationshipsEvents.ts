import {useEffect, useState} from "react";
import {getRelationshipEvents} from "../../../../../api/political-management";
import {ICountryRelationshipHistory} from "../../../../../api/political-management/types";
import {IPage} from "../../../../../api/types";
import instance from "../../../../../api/axios";
import {GridPaginationModel} from "@mui/x-data-grid";

export const usePrepareListOfRelationshipsEvents = (paginationModel: GridPaginationModel) => {
    const [isLoading, setIsLoading] = useState(false)
    const [rows, setRows] = useState<Array<ICountryRelationshipHistory>>([])
    const [pageInfo, setPageInfo] = useState<IPage>()
    const [rowCountState, setRowCountState] = useState(
        pageInfo?.totalElements || 0,
    );

    useEffect(() => {
        setIsLoading(true)
        fetchListOfPerson()
            .then(() => setIsLoading(false))
    }, [paginationModel])
    const fetchListOfPerson = async () => {

        try {
            const response = await instance.get('relationshipEvents', {
                params: {
                    page: paginationModel.page,
                    size: paginationModel.pageSize
                }
            });

            const {content, totalElements} = response.data;
            setRows(content);
            setRowCountState(totalElements);
        } catch (error) {
            console.error('Ошибка при получении элементов:', error);
        }
    };


    return {isLoading, rows, rowCountState}

}
