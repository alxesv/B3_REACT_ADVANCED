export interface DataDemo {
    id: number;
    name: string;
    age: number;
    email: string;
}

export interface Column<T> {
    key: keyof T;
    label: string;
}

export interface DataProp {
    prop: string;
    value: string;
    description: string;
    default: string;
}