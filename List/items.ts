class No {
    info: any
    prox: No | null

    constructor(info: any) {
        this.info = info
        this.prox = null
    }
}

class Lista {
    prim: No | null
    tam: number

    constructor() {
        this.prim = null
        this.tam = 0
    }

    showList(): void {
        if (this.prim === null) {
            console.log('A lista está vazia')
        }

        else {
            let temp: any = this.prim
            while (temp !== null) {
                console.log(temp.info)
                temp = temp.prox
            }
        }

        
    }
}


let a = new No(10)

let b = new No(15)

let c = new  No(22)

a.prox = b

b.prox = c

let lista = new Lista()

lista.prim = a

lista.showList()