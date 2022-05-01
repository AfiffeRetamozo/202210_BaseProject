import { Component, OnInit } from '@angular/core';
import { coffee } from './coffe.interface';
import { CoffeeService } from './coffee.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css'],
})
export class CoffeeComponent implements OnInit {
  constructor(private coffeeService: CoffeeService) {}

  coffeeArray: coffee[] = [];

  counterOriginCoffee = 0;
  counterBrendCoffee = 0;

  ngOnInit() {
    this.coffeeService.getCoffees().subscribe((res) => {
      this.coffeeArray = res;
      this.coffeeArray.forEach((coffee) => {
        if (coffee.tipo === 'Blend') {
          this.counterBrendCoffee++;
        } else {
          this.counterOriginCoffee++;
        }
      });
    });
  }
}
