import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from './data.service'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Suspension } from '../models/suspension';

@Component({
    selector: 'SuspensionSelector',
    templateUrl: './SuspensionSelector.component.html',
    providers: [DataService]
})
export class SuspensionSelectorComponent implements OnInit {

    @Output() suspensionSelectedEvent = new EventEmitter<Suspension>();

    suspensions: Suspension[];
    selectedSuspensionId: number = null;

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.loadData();
    }

    loadData() {
        this.dataService.getData().subscribe((data: Suspension[]) => this.suspensions = data);
    }

    suspensionSelected() {
        this.suspensionSelectedEvent.emit(this.suspensions.find(x => x.id == this.selectedSuspensionId));
    }
}