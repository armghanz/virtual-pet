# Virtual Pet

Virtual Pet is a JavaScript project for the CommandSHIFT Full Stack Development Bootcamp. 

Virtual pets are great because they're made of JavaScript, they can do literally anything, and they don't have any of the drawbacks of regular pets.

The pets we're going to make will have the following features:

- A name 📛
- They can get older 👵
- As they get older, they get hungrier and less fit 🏋️
- We can walk our pet to increase it's fitness. 🏃‍♂️
- We can feed our pet to decrease it's hunger. 🍕
- We can talk to our pet to see if it needs feeding or walking 🚶
- If our pet gets too hungry or unfit, it will DIE 💀
- If our pet gets to 30 days old it will DIE 😢

## Installation

Fork this repository and clone the fork to your local machine.

Run npm install to complete the installation of the required libraries for Node.js to run. 

## Create your own Virtual Pet!

Open Node REPL in your terminal using the node command. 

Copy the below code to create your pet!

```javascript
const Pet = require('../src/pet');
const Pet = new Pet('insert pet name')
```

## Interact with your Virtual Pet! 

Enter the following commands to interact with your pet.

```javascript
pet.checkUp() // This allows you to regularly check your pet's health.
pet.growUp() // This forces your pet to grow in age.
pet.walk() // This allows your pet to move around.
pet.feed() // This allows you to feed your pet.
pet.haveChild() // This allows your pet to develop offspring.
```

Have Fun!