enum Country { Russia, Japan, USA, Germany, UK, China}

export class Brand {
    constructor(public id?: number, public name?: string, public country?: Country) {

    }
}