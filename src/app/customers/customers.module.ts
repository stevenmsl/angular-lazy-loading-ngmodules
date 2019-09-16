import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';


@NgModule({
  declarations: [
    /*
      CustomerComponent is in the declarations array, 
      which means CustomerComponent belongs to the CustomersModule.
    */
    CustomersComponent
  ],
  imports: [
    CommonModule,
    /*
       CustomersRoutingModule is listed in imports array 
       giving CustomersModule access to its own routing module
    */
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
