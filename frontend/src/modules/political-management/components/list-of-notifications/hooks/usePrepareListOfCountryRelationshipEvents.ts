import {useEffect, useState} from "react";
import {ICountryRelationshipEvent} from "../../../../../api/political_management/types";
import {IPage} from "../../../../../api/types";
import instance from "../../../../../api/axios";
import {GridPaginationModel} from "@mui/x-data-grid";

export const usePrepareListOfCountryRelationshipEvents = (paginationModel: GridPaginationModel) => {
    const [isLoading, setIsLoading] = useState(false)
    const [rows, setRows] = useState<Array<ICountryRelationshipEvent>>([])
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
            const response = await instance.get('countryRelationshipEventHistories', {
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