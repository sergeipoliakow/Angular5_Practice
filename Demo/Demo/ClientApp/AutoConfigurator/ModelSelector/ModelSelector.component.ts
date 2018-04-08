import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from './data.service'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Model } from '../models/model';
import { Brand } from '../models/brand';
import { ModelSelectorViewModel } from '../models/viewModels/ModelSelectorViewModel';

@Component({
    selector: 'ModelSelector',
    templateUrl: './ModelSelector.component.html',
    providers: [DataService]
})
export class ModelSelectorComponent implements OnInit {
    models: Model[];
    brands: Brand[];
    selectedBrandId: number = null;
    selectedModelId: number = null;
    modelsOfSelectedBrand: Model[] = new Array<Model>();

    @Output() modelSelectedEvent = new EventEmitter<Model>();
    @Output() brandSelectedEvent = new EventEmitter<Brand>();

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.loadData();    // загрузка данных при старте компонента  
    }

    loadData() {
        this.dataService.getData().subscribe((data: ModelSelectorViewModel) => this.models = data.models);
        this.dataService.getData().subscribe((data: ModelSelectorViewModel) => this.brands = data.brands);
    }

    brandSelected() {
        this.modelsOfSelectedBrand = this.models.filter(x => x.brandId == this.selectedBrandId);
        this.brandSelectedEvent.emit(this.brands.find(x => x.id == this.selectedBrandId));
    }

    modelSelected() {
        this.modelSelectedEvent.emit(this.models.find(x => x.id == this.selectedModelId));
    }


}