
<strong>.js</strong>
```
const sum = (a, b) => {
   return a + b;
}
console.log(sum(2,3));
```
<strong>.ts</strong>
```
const sum = (a:number, b:number):number => {
   return a + b;
}
console.log(sum(2,3));
```
<br>

####1. ANY TYPE
```
let firstName: any = 'Marc';
firstName = 123;
firstName = [1, 2, 3];
```

Infiere el tipo por la asignacion del dato. Cualquier tipo de valor. 

####2. UNKNOWN 
```
const multiByTwo = (number: unknown) => {
   return number*2;
}
console.log(multiByTwo(6));
console.log(multiByTwo('John')); 
```

####3. BOOLEAN
```
let booleanValue: boolean = true;
booleanValue = false; //literal
booleanValue = 1>0; //expresiones que devuelven booleanos
```
####4. NUMBER
```
let number: number = 100;
number = 28.7; //floats
number = -9;// negativos
number = parseInt('12'); //funciones para convertir en numero
```
####5. BIGINT
No decimales.
```
let bigInt1 = BigInt(847657);`

const a: bigint = 123n; //la n define el bigint en JS
const b: bigint = 456n;

const sum: bigint = a + b;
const product: bigint = a * b;
```

####6. STRING
```
let firstName: string = 'Mark';
let fullName: string = firstName + ' ' + 'Doe'
fullName.split(' ');
```

####7. OBJECT
```
let car: {
   color: string;
   brand: string; //punto y coma, en la declaracion del tipo
   } = {
   color: 'red',
   brand: 'mercedes'
};

let article: {
   author: string;
   content: string;
   title: string;
   image?: string; //? es opcional, no es estrictamente necesario
};

article = {
   author: 'Stella',
   content: 'Hello World',
   title: 'My first article',
}
```
####8. TYPE ALIASES KEYWORD
type Article= {
   author: string;
   content: string;
   title: string;
   image?: string;
};

let post: Article = { //declaramos el tipo que hemos definido anteriormente
   author: 'Sam',
   content: 'Hello baby',
   title: 'A post from my Article',
}

####9. UNION TYPES
type Dog = {
   name: string;
   barks: boolean;
   color: string;
}

type Cat = {
   name: string;
   purrs: boolean;
}

type DogAndCatUnion = Dog | Cat;

let monster: DogAndCatUnion = {
   name: 'Ona',
   barks: true,
   purrs: false,
}

type stringOrNumber = number | string;

function addNumberOrString(a:stringOrNumber, b:stringOrNumber) {
   if( typeof a === 'number' && typeof b === 'numer') {
      return a + b;
   } else {
      return a.toString() + b.toString();
   }
}

####10. INTERSECTIONS TYPES

type Dog = {
   name: string;
   barks: boolean;
   color: string;
}

type Cat = {
   name: string;
   purrs: boolean;
   color: string;
}

type DogAndCatIntersection = Dog & Cat;

let monster: DogAndCatIntersection = {
   name: 'Ona',
   barks: true,
   purrs: false,
   color: 'white'
}
//la interseccion debe cumplir todas las claves, si faltan valores salta error

####11. INDEX 
type Airplane = {
    model: string;
    flightNumber: string;
    dateDeparture: string;
    from: string;
    to: string;
    seats: {
      [key:string|number]: string; //index signatures
    };
}

const airPlane: Airplane = {
   model: 'Condor';
   flightNumber: 'A4536';
   dateDeparture: '01/04/2024';
   from: 'VLC';
   to: 'AZR';
}

####12. ARRAYS
let a: number[] = [1, 2, 3];

let b: Array<string> = ["a", "b", "c"];

let c: (string|number)[] = ["a", "b", 1, 2];

####13. TUPLES
// firstname, lastname, age
let person: [string, string, number?];

judit = ['Judit', 'Grau', 33];
rocio = ['Rocio', 'Sendros']
<br>

####14. READ ONLY ARRAYS

//Solo de lectura, si intentas modificar, salta error

`let number: readonly number[] = [1, 2, 3]`
`number.push(1); `//error

`type readOnlyPerson = readonly [string, string, number];`
`const person: readOnlyPerson = [Juan, Martin, 33];`

//un array de lectura solo de strings
`type onlyStrings = Readonly<string[]>;`
<br>

####15. NULL/UNDEFINED

`let user: string;`
`console.log(user);` //undefined, no ha sido definido, no se le ha asignado valor

`let saveButton = document.getElementById(elementId: "save");`
`console.log(saveButton);` //null, no se puede renderizar porque no existe 

let loggedUsername: string;
const users =  [
    {name: "Marta", age:"23"},
    {name: "Sonia", age:"26"},
];
const loggedUser = user.find((user)=> {user.name===loggedUsername})
console.log(loggedUser.age) //undefined

####16. VOID/NEVER
VOID: no devuelve valor
NEVER: funcion que nunca se completa 

####17. ENUMS






