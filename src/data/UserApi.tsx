import { Address } from "../model/Adress";
import { Bank } from "../model/Bank";
import { Company } from "../model/Company";
import { Coordinates } from "../model/Coordinates";
import { Hair } from "../model/Hair";
import { User } from "../model/User";
import { CryptoModel } from "../model/CryptoModel";

export async function getUsers(){
    let users = Array<User>();
    let jsonData = Array<any>();

    try{
        await fetch("https://dummyjson.com/users")
        .then(res => res.json())
        .then((data => { jsonData = data.users; }));

        jsonData.forEach(element => {
            let user = new User(
                element.id,
                element.firstName,
                element.lastName,
                element.maidenName,
                element.age,
                element.gender,
                element.email,
                element.phone,
                element.username,
                element.password,
                element.birthDate,
                element.image,
                element.bloodGroup,
                element.height,
                element.weight,
                element.eyeColor,
                new Hair(element.hair.color, element.hair.type),
                element.ip,
                new Address(
                    element.address.address,
                    element.address.city,
                    element.address.state,
                    element.address.stateCode,
                    element.address.postalCode,
                    new Coordinates(element.address.coordinates.lat, element.address.coordinates.lng),
                    element.address.country
                ),
                element.macAddress,
                element.university,
                new Bank(element.bank.cardExpire, element.bank.cardNumber, element.bank.cardType, element.bank.currency, element.bank.iban),
                new Company(
                    element.company.department,
                    element.company.name,
                    element.company.title,
                    new Address(
                        element.company.address.address,
                        element.company.address.city,
                        element.company.address.state,
                        element.company.address.stateCode,
                        element.company.address.postalCode,
                        new Coordinates(
                            element.company.address.coordinates.lat,
                            element.company.address.coordinates.lng),
                        element.company.address.country
                    )
                ),
                element.ein,
                element.ssn,
                element.userAgent,
                new CryptoModel(
                    element.crypto.coin,
                    element.crypto.wallet,
                    element.crypto.network),
                element.role
            );
            users.push(user);
        });
    } catch (error) {
        throw error;
    }
    return users;
}

export async function getUserById(id: number){
    let user : User;
    try{
        const response = await fetch(`https://dummyjson.com/user/${id}`);
        if(response.status === 404){
            throw new Error("404 Not Found");
        }
        const data = await response.json();

        user = new User(
            data.id,
            data.firstName,
            data.lastName,
            data.maidenName,
            data.age,
            data.gender,
            data.email,
            data.phone,
            data.username,
            data.password,
            data.birthDate,
            data.image,
            data.bloodGroup,
            data.height,
            data.weight,
            data.eyeColor,
            new Hair(data.hair.color, data.hair.type),
            data.ip,
            new Address(
                data.address.address,
                data.address.city,
                data.address.state,
                data.address.stateCode,
                data.address.postalCode,
                new Coordinates(data.address.coordinates.lat, data.address.coordinates.lng),
                data.address.country
            ),
            data.macAddress,
            data.university,
            new Bank(data.bank.cardExpire, data.bank.cardNumber, data.bank.cardType, data.bank.currency, data.bank.iban),
            new Company(
                data.company.department,
                data.company.name,
                data.company.title,
                new Address(
                    data.company.address.address,
                    data.company.address.city,
                    data.company.address.state,
                    data.company.address.stateCode,
                    data.company.address.postalCode,
                    new Coordinates(
                        data.company.address.coordinates.lat,
                        data.company.address.coordinates.lng),
                    data.company.address.country
                )
            ),
            data.ein,
            data.ssn,
            data.userAgent,
            new CryptoModel(
                data.crypto.coin,
                data.crypto.wallet,
                data.crypto.network),
            data.role
        );
    } catch (error) {
        throw error;
    }
    return user;
}