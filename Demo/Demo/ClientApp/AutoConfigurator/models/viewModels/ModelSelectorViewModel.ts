import { Model } from '../model';
import { Brand } from '../brand';

export class ModelSelectorViewModel {
    constructor(public brands?:Array<Brand>,public models?:Array<Model>){
    }
}