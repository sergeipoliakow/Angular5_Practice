import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Model } from './models/model';

@Injectable()
export class DataService {

    private url = "/api/configurator";

    constructor(private http: HttpClient) {
    }

    getSome() {
        return this.http.get(this.url);
    }
}