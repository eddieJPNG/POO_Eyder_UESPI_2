let a: number = 10;

let nameA : string = 'Hey'



class Gun {
    name: string
    range: number
    power: number

    constructor(name: string, range: number, power: number) {
        this.name = name
        this.range = range
        this.power = power
    }

    shoot() {
        console.log('Disparo de ' + this.power + ' de dano da arma ' + this.name) 
    }
}


const shotgun = new Gun("Shotgun", 40, 120)

shotgun.shoot()