import {useEffect, useState} from "react";
import {getStatuses} from "../../../../api/political-management";


export const useControlStatuses = () => {
    const [statuses, setStatuses] = useState<Array<string>>([])
    useEffect(() => {
        getStatuses().then(statuses => setStatuses(statuses.politicalStatuses.map(status => status._links.self.href)))
    }, []);

    return {statuses, setStatuses}
}

