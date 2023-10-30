import { createContext } from "react";
import { Pet } from "./types";

export const FindPetContext = createContext({
    pets: new Map<string, Pet>(),
    setPets: (pets: Map<string, Pet>) => {},
    isAlertVisible: false,
    setIsAlertVisible: (isAlertVisible: boolean) => {},
});