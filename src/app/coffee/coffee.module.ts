import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeComponent } from './coffee.component';
import { CoffeeRoutingModule } from './coffee-routing.module';
import { CoffeeService } from './coffee.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    CoffeeRoutingModule,
    HttpClientModule
  ],
  declarations: [CoffeeComponent],
  providers:[CoffeeService]
})
export class CoffeeModule { }
