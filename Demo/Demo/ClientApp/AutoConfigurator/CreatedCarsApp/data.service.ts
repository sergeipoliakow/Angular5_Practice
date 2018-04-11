import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/car';

@Injectable()
export class DataService {

    private url = "/api/createdCars";

    constructor(private http: HttpClient) {
    }

    getData() {
        return this.http.get(this.url);
    }
}