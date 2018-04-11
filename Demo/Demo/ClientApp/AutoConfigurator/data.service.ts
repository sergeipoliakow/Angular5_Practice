import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Model } from './models/model';
import { Car } from './models/car';

@Injectable()
export class DataService {

    private url = "/api/configurator";

    constructor(private http: HttpClient) {
    }

    saveCar(car: Car) {
        console.log(car)
        return this.http.post(this.url, car);
    }
}