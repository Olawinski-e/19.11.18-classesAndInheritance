import "./styles.css";

// // Example of a VERY simple Monopoly game simulation

// let squares = [
//   100,
//   -10,
//   0,
//   0,
//   -40,
//   -10,
//   -10,
//   5,
//   0,
//   -10,
//   -50,
//   -10,
//   0,
//   0,
//   -50,
//   -10
// ];

// // Creation of the class
// class Player {
//   // The constructor is the method triggered with the `new` keyword
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//     this.position = 0;
//     this.cash = 1000;
//   }

//   // Method move
//   move() {
//     let dice = 1 + Math.floor(6 * Math.random());
//     this.position = (this.position + dice) % squares.length;
//     this.cash += squares[this.position];
//     if (this.cash < 0) {
//       console.log(`Game over for ${this.name}.`);
//     }
//   }
//   // Method displayInfo
//   displayInfo() {
//     console.log(
//       `${this.name} is at position ${this.position} and has ${this.cash}€`
//     );
//   }
// }

// // --- Initialisation of players ---
// let player1 = new Player("Estelle", "red");
// let player2 = new Player("Serge", "blue");
// let player3 = new Player("Loick", "black");

// console.log(player1);
// console.log(player2);
// console.log(player3);

// player1.move();
// player2.move();
// player3.move();

// player1.move();
// player2.move();
// player3.move();

// player1.displayInfo();
// player2.displayInfo();
// player3.displayInfo();

// //-------------------------------------------------

// class Animal {
//   constructor(name, mainColor, sound) {
//     this.name = name;
//     this.mainColor = mainColor;
//     this.sound = sound;
//   }
//   scream(intensity) {
//     console.log(`${this.sound} ${"!".repeat(intensity)}`);
//   }
// }

// // The class Cat has, by default, all the same attributes and methods as Animal but it will have some that just belong to the cat
// class Cat extends Animal {
//   constructor(name, mainColor, sound, nbOfLegs) {
//     // `super` refers to the constructor of the parent (Animal)
//     // with super Cat gets all the attributes and methods of the Animal class
//     super(name, mainColor, sound);
//     this.nbOfLegs = nbOfLegs; // <== a new attribute, just for cats
//   }
// }

// const garfield = new Cat('Garfield','orange', 'Meow', 4);
// console.log(garfield);
// // {
// //   name: 'Garfield',
// //   mainColor: 'orange',
// //   sound: 'Meow',
// //   nbOfLegs: 4
// // }

// garfield.scream(2)
// garfield.scream(5)

// class Dog extends Animal {
//   constructor(name, mainColor, sound, magicPower) {
//     super(name, mainColor, sound)
//     this.magicPower = magicPower
//   }
//   changeColor(newColor) {
//     this.mainColor = newColor
//   }
// }

// const modjo = new Dog("Modjo","white & light brown", "Woofggreee", "He knows how to fly")
// console.log(modjo)

// modjo.changeColor("pink")
// console.log(modjo)

// modjo.scream(3)

// -----------------------------------------------------

// Exercise

// Create a class Rectangle with:
// A property width
// A property height
// A method constructor(width,height)
// A method calculatePerimeter()
// A method calculateArea()

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   calculatePerimeter() {
//     let perimeter = this.width * 2 + this.height * 2;
//     return perimeter;
//   }

//   calculateArea() {
//     let area = this.width * this.height;
//     return area;
//   }
// }

// // Create a class Square that extends Rectangle add with:
// // A property side (equals to the width and height)
// // A method constructor(side)
// class Square extends Rectangle {
//   constructor(sideLength) {
//     super(sideLength, sideLength);
//   }
//   set sideLength(newLength) {
//     this.height = newLength;
//     this.width = newLength;
//   }
// }

// let r1 = new Rectangle(6, 7);
// console.log("Perimeter of r1 =", r1.calculatePerimeter()); // 26
// console.log("Area of r1 =", r1.calculateArea()); // 42

// var s1 = new Square(5);
// console.log("Perimeter of s1 =", s1.calculatePerimeter()); // 20
// console.log("Area of s1 =", s1.calculateArea()); // 25

// var s2 = new Square(10);
// console.log("Perimeter of s2 =", s2.calculatePerimeter()); // 40
// console.log("Area of s2 =", s2.calculateArea()); // 100

// -------------------------------------------------------

// Blackjack Game
// Let’s create a simple version of the Blackjack game to practice what we have learnt about abstraction and encapsulation.

// Simplified rules
// Player starts with 0 points
// Player can ask to play or to stand
// If a player decides to play, a new card would be given to him
// If he hits 21, player wins!
// If the total is above 21, player looses!
// If the total is below 21, he will be asked again
// If he stands, the total will reset

// function BlackjackGame () {
//   this.total = 0;
//   this.card  = 0;
//   this.nextCard = function () {
//     this.card = parseInt((Math.random()*13) + 1); // number between 1-13
//     console.log("Next Card... " + this.card);
//   };
//   this.play = function(){
//     this.nextCard();
//     this.total += this.card;
//     this.checkResult();
//   };
//   this.stand = function() {
//     this.total = 0;
//     console.log("Scared huh? Let's start again");
//   };
//   this.checkResult = function() {
//     console.log("Total = " + this.total);
//     if (this.total > 21) {
//       console.log("You lost! Play Again?")
//       this.total = 0;
//     } else if (this.total === 21) {
//       console.log("You won!  Play Again?")
//       this.total = 0;
//     }
//   };
// }

// var game = new BlackjackGame();

// game.play();
// game.play();
// game.play();
// game.stand();
// game.play();
// game.play();

// -------------------------------------------------------

// Create an Item constructor with name and price as properties. Then create two objects and initialize them with some values

function Item(name, price) {
  this.name = name;
  this.price = price;
}

Item.prototype.calculatePrice = function() {
  if (this.name === "fruit") {
    return this.price - this.price * (5 / 100);
  } else {
    return this.price;
  }
};

var ball = new Item("soccer ball", 15);
ball.calculatePrice();
console.log(ball.calculatePrice());

var fruit = new Item("fruit", 10);
fruit.calculatePrice();
console.log(fruit.calculatePrice());

function Fruit(name, price) {
  Item.call(this, name, price);
  this.expirationdate = "30.01.19";
  this.brand = "love";
}

Item.prototype.isHealthy = function() {
  return false;
};

Fruit.prototype = Object.create(Item.prototype);
Fruit.prototype.constructor = Fruit;

Fruit.isHealthy = function() {
  return true;
};

var kiwi = new Fruit("Kiwi", 2);
console.log(kiwi);
kiwi.calculatePrice();
console.log(kiwi.calculatePrice());
console.log(kiwi.isHealthy());
console.log(ball.isHealthy());

kiwi.isHealthy = true;
kiwi.__proto__.isHealthy();
//console.log(kiwi.isHealthy())

// Create a method isHealthy for Product, allowing every Item and Fruit objects to execute it.

// By default, this method will return false. Overwrite the method in the Fruit’s prototype to return true.

//-------------------------------------------------------------

// function Animal (name, owner, sound) {
//   this.name = name;
//   this.owner = owner;
//   this.sound = sound;
// }

// function Dog (name, owner){
//   Animal.call(this, name, owner);
//   this.sound = "Guau Guau";
//   this.humanRelation = "love";
// }

// Dog.prototype = Object.create(Animal.prototype);

// var myAnimal = new Animal("Arya", "Josephine", "--");
// var myDog = new Dog("Max",  "Owen");

// console.log(myAnimal)
// console.log(myDog)

//----------------------------------------------------------

// function Animal(name, owner, sound) {
//   this.name = name;
//   this.owner = owner;
//   this.sound = sound;
// }

// Animal.prototype.makeSound = function() {
//   console.log(this.sound);
// };

// function Dog(name, owner) {
//   Animal.call(this, name, owner, "Whoof");
//   this.humanRelation = "love";

//   Dog.prototype.showMyMood = function() {
//     console.log(`I ${this.humanRelation} my owner ${this.owner}`);
//   };
// }

// Animal.prototype.askForFood = function() {
//   console.log("Gimme food");
// };

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;
// console.log(Dog.prototype.constructor);

// var myDog = new Dog("Max", "Owen");
// console.log(myDog);
// myDog.makeSound();
// myDog.askForFood();
// myDog.showMyMood();

//--------------------------------------------------------

function Animal(name, owner, sound) {
  this.name = name;
  this.owner = owner;
  this.sound = sound;
}

Animal.prototype.showOwnerName = function() {
  return "I'm a domestic dog";
};

// We create an animal with no owner
var myAnimal = new Animal("Arya", "", "--");

myAnimal.showOwnerName = function() {
  return "I'm a lone wolf";
};

// We pick an owner for him
myAnimal.owner = "Ironhack";

myAnimal.__proto__.showOwnerName();
console.log(myAnimal.__proto__.showOwnerName());

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
