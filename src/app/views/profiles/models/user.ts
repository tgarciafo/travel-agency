import { Activity } from '../../activities/models/activity';
export class User{
    id: number;
    type: string;
    profile: Profile;
    activities: Activity[];
    favorites: Activity[];
    education: Education[];
    languages: Languages[];
}

export class Profile{
    name: string;
    surname: string;
    email: string;
    password: string;
    repeat_password: string;
    birthDate: string;
    phone: number;
    nationality: string;
    nif: string;
    aboutMe: string;
    companyName: string;
    companyDescription: string;
    cif: string;
}

export class Education{
    type: string;
    level: string;
    name: string;
    university: string;
    finishDate: string;
}

export class Languages{
    level: string;
    language: string;
    finishDate: string;
}