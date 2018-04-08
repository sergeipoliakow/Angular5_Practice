import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Currency } from './currency';

@Injectable()
export class DataService {

    private url = "/api/currencies";

    constructor(private http: HttpClient) {
    }

    getCurrencies() {
        return this.http.get(this.url);
    }

    updateCurrency(currency: Currency) {

        return this.http.put(this.url + '/' + currency.id, currency);
    }
    deleteCurrency(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}