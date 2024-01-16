export interface IPage {
    pageable: IPageable;
    last: boolean;
    totalPages: number;
    totalElements: number;
    first: boolean;
    size: number;
    number: number;
    sort: ISort;
    numberOfElements: number;
    empty: boolean;
}
export interface IPageable {
    pageNumber: number;
    pageSize: number;
    sort: ISort;
    offset: number;
    paged: boolean;
    unpaged: boolean;
}
export interface ISort {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}
