export class Model {
    constructor(public id?: number, public name?: string, public baseCost?: number, public brandId?: number) {
        this.baseCost = 0;
    }
}