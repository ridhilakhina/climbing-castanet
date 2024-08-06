class animal {
  constructor(petName="No Name", petType, petsSpeach = "Hello") {
    this.petName = petName;
    this.petType = petType;
    this.petsSpeach = petsSpeach;
  }
  
  talk() {
    console.log(this.petsSpeach+', I am a ' + this.petType +' my name is', this.petName);
  }
}

class Cat extends animal {
  constructor(petName = "SuperCat") {
    super(petName, 'cat', 'Meaw-mew');
  }
  
  meawww() {
    console.log(this.petsSpeach);
  }
}

class Dog extends animal {
  constructor(petName = "") {
    super(petName, 'dog', "Bark-bark!");
  }
  
  barking() {
    console.log(this.petsSpeach);
  }
   doTricks() {
    
  }
}
  