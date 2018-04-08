export enum Color { Black, Red, Blue, Green, Gray }

export class Car {
    constructor(public id?:number, public modelId?:number, public engineId?:number, public transmissionId?:number, public suspensionId?:number, public color?:Color,public cost?:number) {

    }
}