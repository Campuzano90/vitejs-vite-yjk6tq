export class Person {
  //public name: String;
  //public address: String;

  constructor(
    public firsName: string,
    public lastName: string,
    private address: string = 'No address'
  ) {}
}

/*export class Hero extends Person {
  constructor(
    public alterEgo: String,
    public age: number,
    public realName: string
  ) {
    super(realName, 'New York');
  }
}*/

export class Hero {
  //public person: Person;

  constructor(
    public alterEgo: String,
    public age: number,
    public realName: string,
    public person: Person
  ) {
    //this.person = new Person(realName);
  }
}
const tony = new Person('Tony', 'Star', 'New York');
const herue = new Hero('Iron Man', 45, 'Tony', tony);
console.log(herue);
