class Student {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}
const alice = new Student('Alice', 123456, '<EMAIL>');
const bob = new Student('Bob', 234567, '<EMAIL>');
const charlie = new Student('Charlie', 345678, '<EMAIL>');

console.log(alice,bob,charlie);