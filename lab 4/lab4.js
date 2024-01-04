/////////////////////////////////////// LAB 4 /////////////////////////////////////////

// PERSON CLASS:
class Person {
    constructor(fullName, money, sleepMood, healthRate) {
        this.fullName = fullName;
        this.money = money;
        this.sleepMood = sleepMood;
        this.healthRate = healthRate;
    }

    sleep(hours) {
        if (hours === 7) {
            this.sleepMood = 'happy';
        } else if (hours < 7) {
            this.sleepMood = 'tired';
        } else {
            this.sleepMood = 'lazy';
        }
    }

    eat(meals) {
        if (meals === 3) {
            this.healthRate = 100;
        } else if (meals === 2) {
            this.healthRate = 75;
        } else if (meals === 1) {
            this.healthRate = 50;
        }
    }

    buy(items) {
        this.money -= items * 10;
    }
}

// Example usage for class
const person1 = new Person("John Doe", 100, 'happy', 80);
person1.sleep(8);
person1.eat(2);
person1.buy(2);
console.log(person1);

// OLOO example
const PersonMethods = {
    sleep(hours) {
        if (hours === 7) {
            this.sleepMood = 'happy';
        } else if (hours < 7) {
            this.sleepMood = 'tired';
        } else {
            this.sleepMood = 'lazy';
        }
    },
    
    eat(meals) {
        if (meals === 3) {
            this.healthRate = 100;
        } else if (meals === 2) {
            this.healthRate = 75;
        } else if (meals === 1) {
            this.healthRate = 50;
        }
    },
    
    buy(items) {
        this.money -= items * 10;
    }
};

function createPerson(fullName, money, sleepMood, healthRate) {
    const person2 = Object.create(PersonMethods);
    person2.fullName = fullName;
    person2.money = money;
    person2.sleepMood = sleepMood;
    person2.healthRate = healthRate;
    return person2;
}

// Example usage for OLOO pattern
const person3 = createPerson("Jim Doe", 120, 'lazy', 85);
person3.sleep(7);
person3.eat(1);
person3.buy(3);
console.log(person3);

// Factory function example
function perFactory(fullName, money, sleepMood, healthRate) {
    return {
        fullName,
        money,
        sleepMood,
        healthRate,

        sleep(hours) {
            if (hours === 7) {
                this.sleepMood = 'happy';
            } else if (hours < 7) {
                this.sleepMood = 'tired';
            } else {
                this.sleepMood = 'lazy';
            }
        },

        eat(meals) {
            if (meals === 3) {
                this.healthRate = 100;
            } else if (meals === 2) {
                this.healthRate = 75;
            } else if (meals === 1) {
                this.healthRate = 50;
            }
        },

        buy(items) {
            this.money -= items * 10;
        }
    };
}

// Example usage for factory function pattern
const person4 = perFactory("Jack Doe", 90, 'happy', 95);
person4.sleep(6);
person4.eat(2);
person4.buy(2);
console.log(person4);
