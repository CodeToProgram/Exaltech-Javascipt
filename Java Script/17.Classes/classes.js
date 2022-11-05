class personDetails {
    constructor(fname,lname) {
        this.firstName = fname;
        this.lastName = lname;
    }
    getFullName () {
        return `First Name: ${this.firstName} Last Name : {this.lastName}`;
    }
}
const first = new PersonDetails ("John", "Wick");
console.log(first.getFullName());

class PersonContact extends PersonDetails {
    constructor (phone, email, abc, xyz) {
        super (abc, xyz);
        this.phone = phone;
        this.email = email;
    }
    getContact () {
        return `Phone Number: ${this.phone} Email address: ${this.email}`;
    }
}
// const second = PersonContact(8884857338, "ABCD", "Jon", "Snow")
// console.log(second.getFullName())

class PersonAddress extends PersonContact {
    constructor(city, country, one, two, three, ) {
        super (one, two, three,);
        this.city = city;
        this.country = country;
    }
    getAddress () {
        return `City: ${this.city} Country: ${this.country}`;
    }
}
const third = new PersonAddress (
    "Nanded",
    "India",
    8884857338,
    "ABCD",
    "Jon",
    "Snow",
    );

    console.log(third.getFullName(), third.getContact(), third.getAddress())