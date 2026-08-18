//SET A


//1. 
const devices = [
    {
        id: 1, 
        name: "iPhone 14", 
        brand: "Apple", 
        price: 999, 
        inStock: 'yes', 
        features: {
            storage: "128GB", 
            batteryLife: "20"
        }
    },
    {
        id: 2, 
        name: "Galaxy S21", 
        brand: "Samsung", 
        price: 799, 
        inStock: 'No', 
        features: {
            storage: "256GB", 
            batteryLife: "22 "
        }
    },
    {
        id: 3, 
        name: "Pixel 7", 
        brand: "Google", 
        price: 599, 
        inStock: 'yes', 
        features: {
            storage: "128GB", 
            batteryLife: "24 "
        }
    },
    {
        id: 4, 
        name: "Surface Laptop 4", 
        brand: "Microsoft", 
        price: 1499, 
        inStock: 'yes', 
        features: {
            storage: "512GB", 
            batteryLife: "15 "//
        }
    },
    {
        id: 5, 
        name: "MacBook Air", 
        brand: "Apple", 
        price: 999, 
        inStock: 'No', 
        features: {
            storage: "256GB", 
            batteryLife: "18 "
        }
    }
];
//1.Print all device names.
//2.Print all device names whose price is greater than $800.
//3.Print out-of-stock devices.
//4.Find the device names with battery life greater than 20 hours.
//5.Calculate the total revenue generated when all available devices are sold out.


//2.
const employees = [
    { id: 1, name: "John", position: "Manager", salary: 60000, hired: true },
    { id: 2, name: "Sarah", position: "Developer", salary: 50000, hired: true },
    { id: 3, name: "Tom", position: "Designer", salary: 45000, hired: false },
    { id: 4, name: "Anna", position: "Tester", salary: 40000, hired: true },
    { id: 5, name: "Jack", position: "Developer", salary: 55000, hired: false }
];
////Questions:

//2.Find the name of the employee with the highest salary.
//1.Print all employee positions.
//3.List all employees who are not hired.
//4.Write a function to add a new employee to the list.
//5.Write a function to remove an employee by their ID.
//6.Create a function to update an employee’s salary.
//7.List all employees with the position "Developer".
//8.Calculate the total salary of all hired employees.

//3. Find the sum of first N natural numbers using recursion