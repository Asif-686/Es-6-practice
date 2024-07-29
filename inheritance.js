class Parent {
    constructor(name, age) {
        this.parentName = name;
        
    }
}
class Child extends Parent {
    constructor(parent,childName, age) {
        super(parent.parentName);
        this.childName = childName;
        this.age = age;
        this.parentName = parent;
    }}
const parent = new Parent( 'John', 36);
const child = new Child( parent.parentName ,'Jane', 32);
const child2 = new Child( 'Jake', 28);
console.log(child,parent);