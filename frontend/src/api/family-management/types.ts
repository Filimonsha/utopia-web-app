export interface IHalResponse<T> {
    _embedded: T;
    _links: {
        [key: string]: {
            href: string;
        };
    };
    page: {
        size: number;
        totalElements: number;
        totalPages: number;
        number: number;
    };
}

export interface PersonType {
    "name": string,
    "links": {
        "person": {
            "href": string
        },
        "motherland": {
            "href": string
        },
        "family": {
            "href": string
        }
    }
}


export interface IPerson {
    id: number;
    name: string;
    motherland: string;
    family: IFamily;
    position: IPosition;
    prevPosition: IPosition;
    buildings?: (IBuilding)[] | null;
}
export interface IFamily {
    id: number;
    craftType: ICraftTypeOrCraftTypeEntity;
    responsiblePersonId: number;
}
export interface ICraftTypeOrCraftTypeEntity {
    id: number;
    craftName: string;
}
export interface IPosition {
    id: number;
    name: string;
    personPositionHistory?: (null)[] | null;
    craftType?: (ICraftTypeOrCraftTypeEntity)[] | null;
}
export interface IBuilding {
    id: number;
    buildingType: BuildingType;
}
export interface BuildingType {
    id: number;
    typeName: string;
}
