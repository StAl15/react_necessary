export interface IUser {
    id: number;
    name: string;
    email: string;
    address: IAddress;
}

export interface IAddress {
    street: string;
    city: string;
    zipCode: string;

}

export interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}