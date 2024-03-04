export interface ICountryRelationshipEventHAL {
    "content": Array<ICountryRelationshipEvent>,
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


export interface IPoliticalStatusHAL {
    "name": string,
    "_links": {
        "self": {
            "href": string
        },
        "politicalStatus": {
            "href": string
        }
    }
}

export interface IPoliticalStatusesHAL {
    "politicalStatuses": Array<IPoliticalStatusHAL>
}

export interface ICountryHAL {
    "_links": {
        "self": {
            "href": string
        },
        "country": {
            "href": string
        },
        "eventGroupSet": {
            "href": string
        }
    }
}

export interface ICountry {
    id: number;
    name: string;
}

export interface IPoliticalStatus {
    id: number;
    name: string;
}

export interface IEventGroup {
    id: number;
    name: string;
    groupCountries: Array<ICountry>;
}

export interface ICountryRelationshipEvent {
    id: number;
    politicalStatus: IPoliticalStatus;
    startEventDate: Date;
    endEventDate: Date;
    eventGroups: Array<IEventGroup> | null
}