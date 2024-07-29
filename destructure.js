const person = {
    name: 'Bob',
    phone: '123-666-7890',
    age: 32,
    email: '<EMAIL>',
    girlfriendName: 'Juliet',
    contact : {
        phone: '123-456-7890',
        email: '<EMAIL>'
    },
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'NY',
        zip: 12345
    }
}
const {address :{zip}} = person;
const {name, age,phone: person_phone , email, girlfriendName, contact: {phone : gf_phone, email: contactEmail}, address: {street, city, state}} = person;
console.log( person_phone);
console.log( zip);