class Auto {
	constructor(brand, model, year, vin) {
		this.brand = brand;
		this.model = model;
		this.year = year;
		this.vin = vin;
		this.log = () => `${this.brand} ${this.model} ${this.year}`
		this.checkVin = () => this.vin.length === 16
	}
}

const avto = new Auto("Tesla", "Model X", 2020, "AF12124AEGJ32413");
console.log(avto.log());
console.log(avto.checkVin());
console.log('****************************************************************');

class Auto_Fuel extends Auto {
	constructor(brand, model, year, vin, engineVolume, litr) {
		super(brand, model, year, vin);
		this.engineVolume = engineVolume;
		this.litr = litr;
		this.showFuelConsumption = () => `${this.engineVolume} ${this.litr}/100км`
	}
}

const newAvto = new Auto_Fuel("Tesla", "Model X", 2020, "AF12124AEGJ32413", "3000 куб.см", 8);
console.log(newAvto.log());
console.log(newAvto.checkVin());
console.log(newAvto.showFuelConsumption());
console.log('****************************************************************');

class Auto_Electric extends Auto {
	constructor(brand, model, year, vin, batteryConfig) {
		super(brand, model, year, vin);
		this.batteryConfig = batteryConfig;
		this.showBatteryConfig = () => this.batteryConfig;
	}
}
const newAvto2 = new Auto_Electric("Tesla", "Model X", 2020, "AF12124AEGJ32413", '100 кВт/ч');
console.log(newAvto2.log());
console.log(newAvto2.checkVin());
console.log(newAvto2.showBatteryConfig());


















