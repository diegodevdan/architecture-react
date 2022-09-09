export interface MainCardProps {
    children: JSX.Element
}

export interface RoutesProps {
    path:string,
    element: JSX.Element
}

export interface UserProps {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  Address;
    phone:    string;
    website:  string;
    company:  Company;
}

export interface Address {
    street:  string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name:        string;
    catchPhrase: string;
    bs:          string;
}



export interface initStateProps {
    name: string,
    lastname: string,
    birthDate?: string,
    street: string,
    state: string,
}

export interface InformationProviderProps {
    children: JSX.Element
}