import { Component } from '@angular/core';
import { DataService } from './data.service'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Model } from './models/model';
import { Brand } from './models/brand';
import { Color } from './models/car';
import { Dictionary } from './models/dictionary';

@Component({
    selector: 'AutoConfigurator',
    templateUrl: './AutoConfigurator.component.html',
    providers:[DataService]
})
export class AutoConfiguratorComponent implements OnInit {
    selectedColor: string = "Black";
    colors: string[];
    models: Model[];
    selectedModel: Model = new Model();
    selectedBrand: Brand = new Brand();
    imgSrc: string = "";

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.load();    // загрузка данных при старте компонента  
        let colors = Object.keys(Color);
        this.colors = colors.slice(colors.length / 2);
    }

    load() {
        this.dataService.getSome().subscribe((data: Model[]) => this.models = data);
    }

    selectedModelMessage($event: Model) {
        this.selectedModel = $event;
        this.setImgSrc();
    }

    selectedBrandMessage($event: Brand) {
        this.selectedBrand = $event;
    }

    setImgSrc() {
        this.imgSrc = 'imgs\\' + this.selectedBrand.name + '\\' + this.selectedModel.name + '\\' + this.selectedColor+'.png';
    }

}