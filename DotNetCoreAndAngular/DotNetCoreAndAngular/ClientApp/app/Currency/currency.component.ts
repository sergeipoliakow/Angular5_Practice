import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Currency } from './currency';

@Component({
    selector: 'currency',
    templateUrl: './currency.component.html',
    providers: [DataService]
})

export class CurrencyComponent implements OnInit {
    currency: Currency = new Currency();
    currencies: Currency[] = new Array < Currency>();
    selectedCurrency: Currency = new Currency();
    Lol: any;

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.loadCurrencies();    // загрузка данных при старте компонента
    }

    loadCurrencies() {
        this.dataService.getCurrencies().subscribe((data: Currency[]) => this.currencies = data);
        this.dataService.getCurrencies().subscribe((data: Currency[]) => this.selectedCurrency = data[0]);
    }

    save() {
        this.dataService.updateCurrency(this.currency).subscribe(data => this.loadCurrencies());
        this.cancel();
    }

    editCurrency(c: Currency) {
        this.currency = c;
    }

    selectCurrency(c: Currency) {
        this.selectedCurrency = c;
        this.cancel();
    }

    cancel() {
        this.currency = new Currency();
    }
}