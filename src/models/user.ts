import { ProfileModel } from "./profile";

export interface UserModel {
    email: string;
    password: string;
    profiles?: ProfileModel[];
}