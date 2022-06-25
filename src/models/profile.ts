import { CardModel } from "./card";

export interface ProfileModel {
    userID: string;
    profileID: string;
    firstName: string;
    lastName: string;
    email: string;
    companyName: string;
    cards?: CardModel[];
}