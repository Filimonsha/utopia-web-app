import instance from "../axios";
import {ICountryRelationshipEvent, IPoliticalStatusesHAL, IPoliticalStatusHAL} from "./types";
import {IHalResponse} from "../family-management/types";

type StringifyFields<T> = {
    [K in keyof T]: string;
};

const COUNTRIES_ROUTE = "/countries"
const POLITICAL_STATUSES_ROUTE = "/politicalStatuses"
const COUNTRY_EVENTS_ROUTE = "/countryRelationshipEventHistories"

export const getCountryRelationshipEvents = () =>
    instance.get<{content:Array<ICountryRelationshipEvent>}>(COUNTRY_EVENTS_ROUTE)

export const getStatuses = () =>
    instance.get<IHalResponse<IPoliticalStatusesHAL>>(POLITICAL_STATUSES_ROUTE)
        .then(res => res.data._embedded)

export const getStatusRoute = (statusId: number) => `${POLITICAL_STATUSES_ROUTE}/${statusId}`
export const getEventRoute = (eventId: number) => `${COUNTRY_EVENTS_ROUTE}/${eventId}`
export const changeEventStatus = (eventId: number, statusId: string) =>
    instance.post(`changeEventStatus?eventId=${eventId}&statusId=${statusId}`)