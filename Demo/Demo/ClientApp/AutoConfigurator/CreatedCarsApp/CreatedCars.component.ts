import { Component } from '@angular/core';
import { DataService } from './data.service'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Model } from '../models/model';
import { Brand } from '../models/brand';
import { Color, Car } from './CreatedCars.model';
import { Dictionary } from '../models/dictionary';
import { Engine,EngineType } from '../models/engine';
import { Suspension } from '../models/suspension';
import { Transmission } from '../models/transmission';

@Component({
    selector: 'CreatedCars',
    templateUrl: './CreatedCars.component.html',
    providers:[DataService]
})
export class CreatedCarsComponent implements OnInit {

    cars: Car[];
    
    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.loadData();
        console.log("CreatedCars");
    }

    loadData() {
        this.dataService.getData().subscribe((data: Car[]) => this.cars = data);
    }

    getImgsrc(car: Car): string {
        return 'imgs\\cars\\' + car.model.brand.name + '\\' + car.model.name + '\\' + Color[car.color] + '.png';
    }

    getEngineType(car: Car): string {
        return EngineType[car.engine.type]
    }

}