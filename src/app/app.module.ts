import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { DeleteComponent } from './components/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    LoginComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
