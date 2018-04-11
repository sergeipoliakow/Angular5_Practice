import { Component, Output, EventEmitter} from '@angular/core';
import { DataService } from './data.service'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Transmission } from '../models/transmission';

@Component({
    selector: 'TransmissionSelector',
    templateUrl: './TransmissionSelector.component.html',
    providers: [DataService]
})
export class TransmissionSelectorComponent implements OnInit{


    @Output() transmissionSelectedEvent = new EventEmitter<Transmission>();

    transmissions: Transmission[];
    selectedTransmissionId: number = null;

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.loadData();
    }

    loadData() {
        this.dataService.getData().subscribe((data: Transmission[]) => this.transmissions = data);
    }

    transmissionSelected() {
        this.transmissionSelectedEvent.emit(this.transmissions.find(x => x.id == this.selectedTransmissionId));
    }
}