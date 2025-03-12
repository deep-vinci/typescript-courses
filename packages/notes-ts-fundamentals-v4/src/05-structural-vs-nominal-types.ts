//* Nominal vs Structural

class Car {
    make: string;
    model: string;
    year: number;
    isElectric: boolean;
}

class Truck {
    make: string;
    model: string;
    year: number;
    towingCapacity: number;
}

const vehicle = {
    make: "Honda",
    model: "Accord",
    year: 2017,
};

function printCar(car: {
    make: string;
    model: string;
    year: number;
}) {
    console.log(`${car.make} ${car.model} (${car.year})`);
}
/*
//printCar(new Car()) //✔️ Fine
//printCar(new Truck()) //✔️ Fine
//printCar(vehicle) //✔️ Fine
/**/

export default {};

function bar(): undefined | string[] {
    if (Math.random() > 0.5) return;
    // TYPE CHECKING
    // -------------
    // Is `myStrings` type-equivalent to
    //     what `bar` states it will return?
    return ["a"];
}

console.log(bar());
