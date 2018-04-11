import { Component } from '@angular/core';
import { DataService } from './data.service'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Model } from './models/model';
import { Brand } from './models/brand';
import { Color,Car } from './models/car';
import { Dictionary } from './models/dictionary';
import { Engine } from './models/engine';
import { Suspension } from './models/suspension';
import { Transmission } from './models/transmission';

@Component({
    selector: 'AutoConfigurator',
    templateUrl: './AutoConfigurator.component.html',
    providers:[DataService]
})
export class AutoConfiguratorComponent implements OnInit {
    selectedColor: string = null;
    colors: string[];
    selectedModel: Model = new Model();
    selectedBrand: Brand = new Brand();
    selectedEngine: Engine = new Engine();
    selectedSuspension: Suspension = new Suspension();
    selectedTransmission: Transmission = new Transmission();
    imgSrc: string = "";
    cost: number = 0;

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.setImgSrc();
        let colors = Object.keys(Color);
        this.colors = colors.slice(colors.length / 2);
    }

    save() {
        let car: Car = new Car(0, this.selectedModel.id, this.selectedEngine.id, this.selectedTransmission.id, this.selectedSuspension.id, Color[this.selectedColor], this.cost);
        console.log(car);
        this.dataService.saveCar(car).subscribe((data: Car) => car=data);
    }


    selectedModelMessage($event: Model) {
        this.selectedModel = $event;
        this.setImgSrc();
        this.CalculateCost();
    }

    selectedBrandMessage($event: Brand) {
        this.selectedBrand = $event;
        this.selectedModel = new Model();
        this.setImgSrc();
    }

    selectedEngineMessage($event: Engine) {
        this.selectedEngine = $event;
        this.CalculateCost();
    }

    selectedSuspensionMessage($event: Suspension) {
        this.selectedSuspension = $event;
        this.CalculateCost();
    }

    selectedTransmissionMessage($event: Transmission) {
        this.selectedTransmission = $event;
        this.CalculateCost();
    }

    colorSelected() {
        this.setImgSrc();
    }

    setImgSrc() {
        if (this.selectedModel.name != undefined && this.selectedColor!=null) {
            this.imgSrc = 'imgs\\cars\\' + this.selectedBrand.name + '\\' + this.selectedModel.name + '\\' + this.selectedColor + '.png';
        }
    }

    CalculateCost() {
        this.cost = this.selectedModel.baseCost + this.selectedEngine.cost + this.selectedSuspension.cost + this.selectedTransmission.cost;
    }

}