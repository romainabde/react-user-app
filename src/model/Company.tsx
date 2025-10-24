import { Address } from "./Adress";

export class Company {
    department: string;
    name: string;
    title: string;
    address: Address;


    constructor(department: string, name: string, title: string, address: Address) {
        this.department = department;
        this.name = name;
        this.title = title;
        this.address = address;
    }
}