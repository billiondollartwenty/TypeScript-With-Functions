  // write your solution here
    //SHOULD ACCEPT ONE PARAMETER
    // USER NUMBER, FIRST NAME, LAST NAME, EMAIL
export interface User {
  id: number; 
  firstName: string;
  lastName?: string;  // Optional property
  email?: string;     // Optional property
}

//SHOULD HOLD AND REPRESENT USER DATA
//USER DATA


// Update the function below
export function formatUserData(user: User): string {

let result = `User ${user.id}: ${user.firstName}`;

if (user.lastName) {
result += ` ${user.lastName}`;
}

if (user.email) {
result += ` - ${user.email}`;
}
    return result;
}

const user1: User = {
  firstName: "John",
  lastName: "Doe",
  id: 1,
  email: "john.doe@example.com",
};

const user2: User = {
  firstName: "Jane",
  lastName: "",
  id: 2,
  email: "jane.doe@example.com"
};

const user3: User = {
  firstName: "Bob",
  lastName: "Smith",
  id: 3,
  email: "",

};

const User4: User = {
  firstName: "Alice",
  lastName: "",
  id: 4,
  email: ""

};

console.log(formatUserData(user1)); 
console.log(formatUserData(user2));
console.log(formatUserData(user3)); 
console.log(formatUserData(User4));
