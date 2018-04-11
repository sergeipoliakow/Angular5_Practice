import { Brand } from '../models/brand';
export class Model {
    constructor(public id?: number, public name?: string, public baseCost?: number, public brandId?: number, public brand?:Brand) {
        this.baseCost = 0;
    }
}