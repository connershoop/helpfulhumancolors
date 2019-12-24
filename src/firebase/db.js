import { db } from "./firebase";


export const getAllColors = () => {
    const allColors = db
        .ref()
        .once("value");
    return allColors;
};

export const getOneColor = () => {
    const allColors = db
        .ref().child("0")
        .once("value");
    return allColors;
};