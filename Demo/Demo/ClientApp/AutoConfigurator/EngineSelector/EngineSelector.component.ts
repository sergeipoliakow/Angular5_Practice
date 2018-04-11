import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { DataService } from './data.service'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Engine, EngineType } from '../models/engine';
import { Model } from '../models/model';

@Component({
    selector: 'EngineSelector',
    templateUrl: './EngineSelector.component.html',
    providers: [DataService]
})
export class EngineSelectorComponent implements OnInit, OnChanges {

    @Input() selectedModel: Model;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['selectedModel']) {
            this.loadData();
        }
    }

    @Output() engineSelectedEvent = new EventEmitter<Engine>();

    engines: Engine[];
    selectedEngineId: number = null;
    types: string[];

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.loadData();
        let types = Object.keys(EngineType);
        this.types = types.slice(types.length / 2);
    }

    loadData() {
        this.dataService.getData(this.selectedModel).subscribe((data: Engine[])=> this.engines = data);
    }

    engineSelected() {
        this.engineSelectedEvent.emit(this.engines.find(x => x.id == this.selectedEngineId));
    }
}