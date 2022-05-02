import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { faker} from '@faker-js/faker';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CoffeeComponent } from './coffee.component';
import { HttpClientModule } from '@angular/common/http';
import { coffee } from './coffe.interface';

describe('ListadoMuseoComponent', () => {
 let component: CoffeeComponent;
 let fixture: ComponentFixture<CoffeeComponent>;
 let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CoffeeComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(CoffeeComponent);
    component = fixture.componentInstance;
    component.coffeeArray = [
      new coffee(faker.datatype.number(),faker.name.firstName(),faker.lorem.sentence(), faker.lorem.sentence(),faker.lorem.sentence(),faker.datatype.number(),faker.image.imageUrl())
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;

  });

 it('should create', () => {
   expect(component).toBeTruthy();
 });


});
