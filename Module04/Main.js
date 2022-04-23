"use strict";
exports.__esModule = true;
var Street_1 = require("./Street");
var Vehicle_ts_1 = require("./Vehicle.ts");
var wallStreet = new Street_1.Street('wall street', 25, 3, false);
var tesla = [new Vehicle_ts_1.Car(true, 5, 'Electric', 20)];
var toyota = [new Vehicle_ts_1.Car(true, 5, 'Hybrid', 25), new Vehicle_ts_1.Car(true, 5, 'Gasoline', 22)];
var honda = [new Vehicle_ts_1.Motorcycle(true, 1, "Gasoline", 23)];
wallStreet.increaseTraffic(tesla.length + toyota.length + honda.length);
wallStreet.printTraffic();
toyota[1].setSpeed(70);
toyota[1].drift();