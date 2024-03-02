import instance from "../axios";
import {IPerson} from "./types";

export const getPersons = () =>
    instance.get<{content:Array<IPerson>}>('/persons')

