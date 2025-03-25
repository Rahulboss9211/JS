// 1. Create a Mobile class Properties: brand, price Method: displayDetails() to show the mobile details.

class Mobile {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }

    displayDetails() {
        console.log(Mobile Brand: ${this.brand});
        console.log(Mobile Price: $${this.price.toFixed(2)});
    }
}

// Example usage:
const mobile1 = new Mobile("Apple", 999.99);
mobile1.displayDetails();

const mobile2 = new Mobile("Samsung", 799.99);
mobile2.displayDetails();
console.log('-------------------------'); // Separator

//2. Create a User class Properties: name, email Method: greet() to welcome the user.  

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    greet() {
        console.log(`Welcome, ${this.name}! Your email is ${this.email}`);
    }
}

// Example usage:
const user1 = new User("Alice", "alice@example.com");
user1.greet();

const user2 = new User("Bob", "bob@example.com");
user2.greet();
console.log('-------------------------'); // Separator


//3.Create a BankAccount class Properties: accountHolder, balance Method: deposit(amount) to add money to the account.

class BankAccount {
    constructor(accountHolder, initialBalance = 0) {
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(Deposited ${amount.toFixed(2)}, New balance  ${this.balance.toFixed(2)});
        } else {
            console.log("Deposit amount must be positive.");
        }
    }
}

// Example usage:
const account1 = new BankAccount("John Doe", 1000);
account1.deposit(500);  // Deposited $500. New balance: $1500.00

const account2 = new BankAccount("Jane Smith");
account2.deposit(200);  // Deposited $200. New balance: $200.00
account2.deposit(-50);  // Deposit amount must be positive.
console.log('-------------------------'); // Separator

//4. Create a Student class Properties: name, grade Method: showGrade() to display the student's grade.

class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }

    showGrade() {
        console.log(Student Name: ${this.name}, Grade: ${this.grade});
    }
}

// Example usage:
const student1 = new Student("Alice", "A");
student1.showGrade();  // Student Name: Alice, Grade: A

const student2 = new Student("Bob", "B+");
student2.showGrade();  // Student Name: Bob, Grade: B+
console.log('-------------------------'); // Separator

//6. Create a Book class Properties: title, author, year Method: showDetails() to display book information.

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    showDetails() {
        console.log(Title: ${this.title});
        console.log(Author: ${this.author});
        console.log(Year: ${this.year});
    }
}

// Example usage:
const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
book1.showDetails();

const book2 = new Book("1984", "George Orwell", 1949);
book2.showDetails();
console.log('-------------------------'); // Separator

//7.Create a Vehicle class Extend it to create Car and Bike classes. Add a method to describe each vehicle's movement.

class Vehicle {
    constructor(type) {
        this.type = type;
    }

    describeMovement() {
        console.log(The ${this.type} moves.);
    }
}

class Car extends Vehicle {
    constructor(brand, model) {
        super("Car"); // Call the constructor of the parent class with type "Car"
        this.brand = brand;
        this.model = model;
    }

    describeMovement() {
        console.log(The ${this.brand} ${this.model} drives on roads.);
    }
}

class Bike extends Vehicle {
    constructor(brand, type) {
        super("Bike"); // Call the constructor of the parent class with type "Bike"
        this.brand = brand;
        this.type = type;
    }

    describeMovement() {
        console.log(The ${this.brand} ${this.type} rides on paths.);
    }
}

// Example usage:
const car = new Car("Toyota", "Camry");
car.describeMovement();

const bike = new Bike("Giant", "Mountain Bike");
bike.describeMovement();
console.log('----------------------+---'); // Separator


//8. Create a Product class Properties: name, price Method: applyDiscount(discount) to reduce the product price.
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    applyDiscount(discount) {
        if (discount > 0 && discount <= 100) {
            const discountAmount = (this.price * discount) / 100;
            this.price -= discountAmount;
            console.log(Discount of ${discount}% applied. New price: $${this.price.toFixed(2)});
        } else {
            console.log("Please enter a valid discount percentage (0-100).");
        }
    }
}

// Example usage:
const product1 = new Product("Laptop", 1200);
product1.applyDiscount(10);  // Discount of 10% applied. New price: $1080.00

const product2 = new Product("Smartphone", 800);
product2.applyDiscount(20);  // Discount of 20% applied. New price: $640.00

const product3 = new Product("Headphones", 150);
product3.applyDiscount(110);  // Please enter a valid discount percentage (0-100).
console.log('-------------------------'); // Separator

//9. Create an Employee class Properties: name, salary Method: increaseSalary(amount) to increase the employee's salary.

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    increaseSalary(amount) {
        if (amount > 0) {
            this.salary += amount;
            console.log(Salary increased by $${amount.toFixed(2)}. New salary: $${this.salary.toFixed(2)});
        } else {
            console.log("Increase amount must be positive.");
        }
    }
}

// Example usage:
const employee1 = new Employee("Alice", 50000);
employee1.increaseSalary(5000);  // Salary increased by $5000. New salary: $55000.00

const employee2 = new Employee("Bob", 60000);
employee2.increaseSalary(-2000);  // Increase amount must be positive.
console.log('-------------------------'); // Separator

//10. Create a Pet class Extend it with Dog and Cat classes.Each should have a sound() method that behaves differently for each pet.

class Pet {
    constructor(name) {
        this.name = name;
    }

    sound() {
        throw new Error("Method 'sound()' must be implemented.");
    }
}

class Dog extends Pet {
    constructor(name) {
        super(name); // Call the constructor of the parent class
    }

    sound() {
        console.log(${this.name} says: Woof!);
    }
}

class Cat extends Pet {
    constructor(name) {
        super(name); // Call the constructor of the parent class
    }

    sound() {
        console.log(${this.name} says: Meow!);
    }
}

// Example usage:
const dog = new Dog("Buddy");
dog.sound();  // Buddy says: Woof!

const cat = new Cat("Whiskers");
cat.sound();  // Whiskers says: Meow!



class vehicle {
    constructor
}