//this includes the vehicle class as a module
const VehicleModule = require("./vehicle").Vehicle

//this shows how to call from this module...

class Car extends VehicleModule{
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maxPass= 5;
        this.passCount= 0;
        this.numWheels= 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    
    loadPassenger(num){
        if(this.passCount < this.maxPass){
            if((num+this.passCount)<= this.maxPass){
                console.log('Welcome all');
               return this.passCount = this.passCount+num;
            }
            else{
                console.log('no room for everyone');
            }
        }
    }

    start(){
        if(this.fuel>0){
            console.log('Car go vroom')
            return this.started = true;
            
        }
        else{
            console.log('Car has no fuel')
            return this.started = false;
            
        }
    }

    serviceReq(){
        if(this.mileage>30000){
            console.log('Bruh time for a service');
            return this.scheduleService = true;
        }
        else{
            console.log('Bruh see you soon');
            return this.scheduleService = false;
        }
    }
}

let mercurySedan = new Car ("Mercury",'Sedan','2002','white',50000);

mercurySedan.loadPassenger(5);
mercurySedan.start();
mercurySedan.serviceReq();