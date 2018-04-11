export enum EngineType { Бензиновый, Дизельный, Электрический, Гибридный }

export class Engine {
    constructor(public id?: number, public name?: string, public power?: number, public type?: EngineType, public cost?: number, public brandId?: number) {
        this.cost = 0;
    }
}