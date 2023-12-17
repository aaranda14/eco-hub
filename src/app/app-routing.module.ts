// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { DeleteComponent } from './components/delete/delete.component'; // Import the new DeleteComponent

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'create', component: ProductCreateComponent },
  { path: 'update/:id', component: ProductUpdateComponent },
  { path: 'delete/:id', component: DeleteComponent }, // Add the route for the DeleteComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
