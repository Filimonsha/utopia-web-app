import instance from "../axios";
import {IFamiliesHAL, IHalResponse, IPerson} from "./types";

type StringifyFields<T> = {
    [K in keyof T]: string;
};

const PERSONS_ROUTE = "/persons"
const FAMILIES_ROUTE = "/families"

const getPersonRoute = (personId: number) => `${PERSONS_ROUTE}/${personId}`
export const getFamilyRoute = (familyId: number) => `${FAMILIES_ROUTE}/${familyId}`
export const getPersons = () =>
    instance.get<{ content: Array<IPerson> }>(PERSONS_ROUTE)

export const patchPerson = (personId: number, data: Partial<StringifyFields<IPerson>>) =>
    instance.patch(getPersonRoute(personId), data)

export const getFamilies = () =>
    instance.get<IHalResponse<IFamiliesHAL>>(FAMILIES_ROUTE)
        .then(res => res.data._embedded)
