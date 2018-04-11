import { Model } from '../models/model';
import { Brand } from '../models/brand';
import { Dictionary } from '../models/dictionary';
import { Engine } from '../models/engine';
import { Suspension } from '../models/suspension';
import { Transmission } from '../models/transmission';

export enum Color { Black, Red, Blue, Green, Gray }

export class Car {
    constructor(public id?: number,
        public modelId?: number, public model?: Model,
        public engineId?: number, public engine?: Engine,
        public transmissionId?: number, public transmission?: Transmission,
        public suspensionId?: number, public suspension?: Suspension,
        public color?: Color, public cost?: number) {

    }
}