import {useEffect, useState} from "react";
import {changePersonFamily, getFamilies, patchPerson} from "../../../../api/family-management";
import {checkServerIdentity} from "node:tls";

export const useControlFamilies = () => {
    const [families, setFamilies] = useState<Array<string>>([])
    const [chosenFamily, setChosenFamily] = useState<string | undefined>("")
    useEffect(() => {
        loadFamilies()
    }, []);

    const loadFamilies = () =>
        getFamilies()
            .then(families => setFamilies(families.families.map(family => family._links.self.href)))
    const changeFamilyMember = (memberId: number,) => {
        if (chosenFamily) {
            const str = chosenFamily.split("/")
            console.log(str)
            changePersonFamily(memberId, str[str.length - 1])
        }
    }
    return {families, chosenFamily, setChosenFamily, changeFamilyMember}
}
