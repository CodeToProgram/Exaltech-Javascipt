class FirstPerson{
    constructor(fname,lname) {
        this.FirstName = fname;
        this.LastName = lname;
    }
    getFullName () {
        retrun `First Name: ${this.firstName} Last Name: ${this.lastName}`;
    }
}

class ChildOfFirstPerson extends FirstPerson {
    constructor (phone) {                    constructor
        super("Mohammed", "Shoaib");
        this.phone = phone;
    }
    getPhone () {
        return `Contact Number: ${this.phone}`;
    }
};

// const firstPerson = new FirstPerson("Jhon", "Wick";)
// console.log(firstPerson.getFullName());

// const childClass = new childofFirstPerson ("John", ("Wick"));
// console.log(childClass);

