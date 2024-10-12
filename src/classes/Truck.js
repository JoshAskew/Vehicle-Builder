"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
const Vehicle_js_1 = __importDefault(require("./Vehicle.js"));
const Wheel_js_1 = __importDefault(require("./Wheel.js"));
// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle_js_1.default {
    // TODO: Create a constructor that accepts the properties of the Truck class
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Truck class
    // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
    constructor(vin, color, make, model, year, weight, topSpeed, wheels, towingCapacity) {
        super();
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        if (wheels.length !== 4) {
            this.wheels = [new Wheel_js_1.default(), new Wheel_js_1.default(), new Wheel_js_1.default(), new Wheel_js_1.default()];
        }
        else {
            this.wheels = wheels;
        }
        this.towingCapacity = towingCapacity;
    }
    // TODO: Implement the tow method from the AbleToTow interface
    tow(vehicle) {
        // TODO: Get the make an model of the vehicle if it exists
        const vehicleMake = vehicle.make;
        const vehicleModel = vehicle.model;
        const vehicleWeight = vehicle.weight;
        // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity
        // TODO: If it is, log that the vehicle is being towed
        // TODO: If it is not, log that the vehicle is too heavy to be towed
        if (vehicleWeight <= this.towingCapacity) {
            console.log(`The truck is towing the ${vehicleMake} ${vehicleModel}.`);
        }
        else {
            console.log(`The ${vehicleMake} ${vehicleModel} is too heavy to be towed.`);
        }
    }
    // TODO: Override the printDetails method from the Vehicle class
    printDetails() {
        // TODO: The method should call the printDetails method of the parent class
        super.printDetails();
        // TODO: The method should log the details of the Truck
        // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
        console.log(`
                VIN: ${this.vin}
                Make: ${this.make}
                Model: ${this.model}
                Year: ${this.year}
                Weight: ${this.weight}
                Top Speed: ${this.topSpeed}
                Color: ${this.color}
                Towing Capacity: ${this.towingCapacity}
                Wheels: ${this.wheels}`);
    }
}
// Export the Truck class as the default export
exports.default = Truck;
