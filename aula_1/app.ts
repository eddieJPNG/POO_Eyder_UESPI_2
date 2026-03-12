class Aluno {
    name: string
    registration: number
    note: number
    faults: number

    constructor(name: string, registration: number, note: number, faults: number) {
        this.name = name
        this.registration = registration
        this.note = note
        this.faults = faults
    }


    
}

const aluno1 = new Aluno('João', 12345, 8.5, 2)

console.log(aluno1)