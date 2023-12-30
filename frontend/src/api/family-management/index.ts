import instance from "../axios";
import {IHalResponse, PersonType} from "../types";

export const getPersons = () =>
    instance.get<IHalResponse<PersonType>>('/persons')

