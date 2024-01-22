import {IPerson} from "../family-management/types";

export interface ICountry {
    id: number;
    name: string;
    leader: IPerson;
}

export interface IPoliticalStatus {
    id: number;
    name: string;
}

export interface IEventGroup {
    id: number;
    name: string;
    countries: Array<ICountry>
}

export interface ICountryRelationshipHistory {
    id: number;
    political_status: IPoliticalStatus;
    start_event_date: Date;
    end_event_date: Date;
    groups: Array<IEventGroup>
}
