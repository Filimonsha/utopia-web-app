import {useEffect, useState} from "react";
import {getFamilies, patchPerson} from "../../../../api/family-management";

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
        patchPerson(memberId, {
            family: chosenFamily
        })
    }
    return {families, chosenFamily, setChosenFamily, changeFamilyMember}
}
