import { Address } from "./Adress"
import { Bank } from "./Bank"
import { Company } from "./Company"
import { CryptoModel } from "./CryptoModel";
import { Hair } from "./Hair"

export class User {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: Hair;
    ip: string;
    address: Address;
    macAddress: string;
    university: string;
    bank: Bank;
    company: Company;
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: CryptoModel;
    role: string;
    

    constructor(
        id: number,
        firstName: string,
        lastName: string,
        maidenName: string,
        age: number,
        gender: string,
        email: string,
        phone: string,
        username: string,
        password: string,
        birthDate: string,
        image: string,
        bloodGroup: string,
        height: number,
        weight: number,
        eyeColor: string,
        hair: Hair,
        ip: string,
        address: Address,
        macAddress: string,
        university: string,
        bank: Bank,
        company: Company,
        ein: string,
        ssn: string,
        userAgent: string,
        crypto: CryptoModel,
        role: string
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.maidenName = maidenName;
        this.age = age;
        this.gender = gender;
        this.email = email;
        this.phone = phone;
        this.username = username;
        this.password = password;
        this.birthDate = birthDate;
        this.image = image;
        this.bloodGroup = bloodGroup;
        this.height = height;
        this.weight = weight;
        this.eyeColor = eyeColor;
        this.hair = hair;
        this.ip = ip;
        this.address = address;
        this.macAddress = macAddress;
        this.university = university;
        this.bank = bank;
        this.company = company;
        this.ein = ein;
        this.ssn = ssn;
        this.userAgent = userAgent;
        this.crypto = crypto;
        this.role = role;
    }
}