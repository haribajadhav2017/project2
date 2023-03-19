import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DealsComponent } from './deals/deals.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FashionComponent } from './fashion/fashion.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
const routes: Routes = [
{path:"home",component: HomeComponent},
  {path:"deals",component: DealsComponent},
  {path:"fashion",component: FashionComponent},
  {path:"electronics",component: ElectronicsComponent},
  {path:"products/:category",component: ProductsComponent},
  {path:"",redirectTo:"/home",pathMatch: "full"},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
