import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { 
    /*
    We do NOT add a reference for this feature module to the root application's module file, app.module.ts.
    Instead we add a declared route. 
    */
    path: 'customers', 
    /* 
    In dynamic imports,
    the import path is the relative path to the module (app-routing-module.ts)  
    */
    /*
      The AppRoutingModule imports the feature module, CustomersModule, 
      and CustomersModule in turn imports the CustomersRoutingModule.
    */
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) 
  },
  { 
    path: 'orders', 
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) 
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    /*
    - Specifies that this is the root routing module
    - It configures all the routes you pass to it, 
      gives you access to the router directives, and registers the RouterService
    - Use forRoot() in the AppRoutingModule — that is, one time in the app at the root level.
    - It takes care of the global injector configuration for the Router.
    */
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
