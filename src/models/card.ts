import { ProfileModel } from "./profile";

export interface CardModel {
    cardID: string;
    profile: ProfileModel;
    backgroundColor: string;
    color: string;
    material: Material;
    size: Size;
}

enum Material { 
    PAPER,
    WOOL,
    STEEL
}

enum Size {
    CODE1,
    CODE2,
    CODE3
}