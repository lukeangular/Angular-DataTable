import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {config} from 'src/app/config'
import {DataTablesResponse} from 'src/app/app-model/app-model.module';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http:HttpClient) { }

  fetchDataObservable() : Observable<DataTablesResponse>{
    return this.http.post<DataTablesResponse>(config.API_USER_URL, {})
  }

  fetchData(){
    return this.http.get(config.API_USER_URL)
  }

}
