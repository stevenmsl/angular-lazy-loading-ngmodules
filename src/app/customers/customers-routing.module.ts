import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers.component';

const routes: Routes = [
  { 
    /*
    The path in AppRoutingModule is set to customers, 
    so this route in the CustomersRoutingModule, 
    is already within the customers context.
    */
    path: '', component: CustomersComponent 
  }

];

@NgModule({
  imports: [
    /*
    - the route list is only responsible for providing additional routes 
      and is intended for feature modules
    - The forChild() method has no injector configuration. 
    */
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
