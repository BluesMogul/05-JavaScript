import express from "express";
import { faker } from "@faker-js/faker";

//Create an instance of Express
const app = express();

//Set the http://localhost:8000 location
const port = 8000;

//USER
const createUser = () => {
    const newUser = {
        userID: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password({length: 10, memorable: true})
    }
    return newUser;
}

const newFakeUser = createUser();
console.log(newFakeUser);

app.get("/api/users", (req, res) => {
    res.json( newFakeUser );
});

//COMPANY
const createCompany = () => {
    const newCompany = {
        companyID: faker.string.uuid(),
        companyName: faker.company.name(),
        companyAddress: faker.location.streetAddress(),
        companyCity: faker.location.city(),
        companyState: faker.location.state(),
        companyZipCode: faker.location.zipCode(),
        companyCountry: faker.location.country()
    };
    return newCompany;
};

const newFakeCompany = createCompany();
console.log(newFakeCompany)

app.get("/api/companies", (req, res) => {
    res.json(newFakeCompany);
})

//USER AND COMPANY
app.get("/api/userCompany", (req, res) => {
    const userCompany = {
        user: newFakeUser,
        company: newFakeCompany
    };
    res.json(userCompany);
})

// Appears below the other code blocks
app.listen( port, () => console.log("Listening on port: " + port))