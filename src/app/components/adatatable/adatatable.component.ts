import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataTablesResponse } from 'src/app/app-model/app-model.module';
import { config } from 'src/app/config';


@Component({
  selector: 'app-adatatable',
  templateUrl: './adatatable.component.html',
  styleUrls: ['./adatatable.component.css']
})
export class AdatatableComponent implements OnInit {


  url = 'assets/sharesansar.json'
  dtOptions: DataTables.Settings = {};
  userdata: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {


    this.fetchData()
  }

  fetchData() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        this.http.post<DataTablesResponse>(
          config.ASYN_API_URL,
          dataTablesParameters, {}
        ).subscribe(resp => {
          this.userdata = resp.data;
          console.log("RES DATA = ", resp.data)
          callback({
            recordsTotal: resp.recordsTotal,
            recordsFiltered: resp.recordsFiltered,
            data: []
          });
        });
      },
    };
  }

}
