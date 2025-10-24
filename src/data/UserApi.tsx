import { Address } from "../model/Adress";
import { Bank } from "../model/Bank";
import { Company } from "../model/Company";
import { Coordinates } from "../model/Coordinates";
import { Hair } from "../model/Hair";
import { User } from "../model/User";
import { CryptoModel } from "../model/CryptoModel";

async function getUsers(){
    let users = Array<User>();
    let jsonData = Array<any>();

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
    return users;
}

export default getUsers;