import instance from "../axios";
import {ICountryRelationshipHistory} from "./types";

export const getRelationshipEvents = () =>
    instance.get<{content:Array<ICountryRelationshipHistory>}>('/')

