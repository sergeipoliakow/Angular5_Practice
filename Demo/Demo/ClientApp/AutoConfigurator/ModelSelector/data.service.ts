import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Model } from '../models/model';
import { Brand } from '../models/brand';
import { ModelSelectorViewModel } from '../models/viewModels/ModelSelectorViewModel';

@Injectable()
export class DataService {
    private url = "/api/modelSelector";

    constructor(private http: HttpClient) {
    }

    getData() {
        return this.http.get(this.url);
    }
}