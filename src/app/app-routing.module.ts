import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, PreloadAllModules } from '@angular/router';

// définir des routes
const routes: Routes = [
  {path: '', redirectTo:'/sign-in', pathMatch:"full"},
  {
    path:"orders",
    loadChildren:() =>
    import ('./orders/orders.module').then((m)=> m.OrdersModule)
  },
  {
    path: 'clients',
    loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule)
  },
  {
    path:"**",
    loadChildren:() =>
    import ('./page-not-found/page-not-found.module').then((m)=> m.PageNotFoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy : PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private data : Router){
    console.log(data.config);
  }

}
