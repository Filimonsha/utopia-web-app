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
