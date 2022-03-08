import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-ndatable',
  templateUrl: './ndatable.component.html',
  styleUrls: ['./ndatable.component.css']
})
export class NdatableComponent implements OnInit {

  data: any = [];
  dtOptions: DataTables.Settings = {};
  isLoading = false;

  constructor(private _appSerrvice: AppServiceService) { }

  ngOnInit(): void {
    this.fetchData()
  }

  fetchData() {
    this.isLoading = true;
    this._appSerrvice.fetchData().subscribe((res) => {
      this.data = res
      console.log(res)
      this.isLoading = false;
    }, err => {
      console.warn(err)
    })
  }

}
