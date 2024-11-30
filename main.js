
import { Student, Teacher, Group, Payment, Salary, Organization } from "./app.js"

// 1-Misol 
let student = new Student("Samandar", "Alimardonov", "+998900162654", "Toshkent");
console.log(student.getFullName());
console.log(student.info());

// Get va Set chaqirilgan 
student.fname = "Shahzod";
console.log(student.getFullName());
console.log(student.info());

// 2-Misol 
let teacher = new Teacher("Rasulov", "Boburmirzo", "Toshkent", 1500, "Senior");
console.log(teacher.getFullName());
console.log(teacher.description());

// Get va Set chaqirilgan 
teacher.fname = "Abduqahhor";
console.log(teacher.getFullName());
console.log(teacher.description());

// 3-Misol 
let group = new Group("N83", "Slack", "Frontend", "Beginer", 16, "Boburmirzo Rasulov");
console.log(group.fullInformation());

// Get va Set chaqirilgan 
group.name = "N84";
console.log(group.fullInformation());


// 4-Misol 
let payment = new Payment("John", "Nurbek", 1000, false);
console.log(payment.info());

// Get va Set chaqirilgan 
payment.amount = 1500;
console.log(payment.info());

// 5-Misol 
let salary = new Salary("Mike", 1200, "USD", true);
console.log(salary.getInfo());

// Get va Set chaqirilgan 
salary.amount = 1500;
console.log(salary.getInfo());


// 6-Misol 
let organization = new Organization("Najot Ta'lim", "Temurbek Adhamov", "Toshkent Chilonzor", 400);
console.log(organization.getInfo());

// Get va Set chaqirilgan 
organization.name = "IT Park";
console.log(organization.getInfo());



let map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

console.log(map.get('a')); // Natija: 1
console.log(map.has('b')); // Natija: true
console.log(map.size); // Natija: 3

map.delete('c');
console.log(map.size); // Natija: 2

map.clear();
console.log(map.size); // Natija: 0
