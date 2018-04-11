import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Engine } from '../models/engine';
import { Model } from '../models/model';

@Injectable()
export class DataService {
    private url = "/api/engineSelector";

    constructor(private http: HttpClient) {
    }

    getData(model: Model) {
        return this.http.get(this.url + '/' + model.id);
    }
}