//Object Destructuring

// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// };

// const {name, age} = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${name} is ${age}.`)

// const {city, temp: anus} = person.location;
// if (city && anus) {
//     console.log(`It's ${anus} in ${city}.`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Unknown'} = book.publisher;
// console.log(`${publisherName}`);


//Array Destructuring

// const address = ['Sperberstraße 12', 'Helmhof', 'Baden-Württemberg', '74924'];
// const [, city, state = 'New York'] = address;

// console.log(`You are in ${city}, ${state}.`);


const item = ['Coffe (hot)', '2.00$', '2.90$', '2.75$'];
const [coffee,,price] = item;

console.log(`A medium ${coffee} costs ${price}.`)