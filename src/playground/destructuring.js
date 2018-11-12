//
//obj destructuring
//

// const person = {
//     name: 'Andrew',
//     age: 27,
//     location: {
//         city: 'Israel',
//         temp: 88
//     }
// };

// const {name: firstName = 'Anonymous', age} =person;
// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature} = person.location;
// if(city && temperature){
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book ={
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         //name: 'Penguin'
//     }
// };

// const {name:publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);


//
//array destructuring
//

// const address= ['1299 s Juniper Street', 'tel-aviv','Israel', '19147' ];
// const [, city, state='New York'] = address;
// console.log(`You are in ${city} ${state}.`);

const item = ['Coffe (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , medPrice] =item;
console.log(`A medium ${itemName} costs ${medPrice}`);
