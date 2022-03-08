import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NdatableComponent } from './components/ndatable/ndatable.component';
import { AdatatableComponent } from './components/adatatable/adatatable.component';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from "angular-datatables";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NdatableComponent,
    AdatatableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
            // HttpClientInMemoryWebApiModule.forRoot(
        //     InMemoryDataService, { dataEncapsulation: false }
        // )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
