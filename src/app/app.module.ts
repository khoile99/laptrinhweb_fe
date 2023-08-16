import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { HomePageComponent } from './pages/main-layout/home-page/home-page.component';
import { SearchComponent } from './pages/main-layout/search/search.component';
import { DetailComponent } from './pages/main-layout/detail/detail.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SupportComponent } from './pages/main-layout/support/support.component';
import { FooterComponent } from './components/footer/footer.component';
import { EditUserComponent } from './pages/main-layout/edit-user/edit-user.component';
import { CartsComponent } from './pages/main-layout/carts/carts.component';
import { CartComponent } from './components/cart/cart.component';
import { AdminLayoutComponent } from './pages/admin-layout/admin-layout.component';
import { ListUsersComponent } from './pages/admin-layout/list-users/list-users.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { EditUserComponent as EditUserByAdminComponent } from './pages/admin-layout/edit-user/edit-user.component';
import { EditInformationComponent } from './pages/admin-layout/edit-information/edit-information.component';
import { ListProductsComponent } from './pages/admin-layout/list-products/list-products.component';
import { EditProductComponent } from './pages/admin-layout/edit-product/edit-product.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { SearchProductCardComponent } from './components/search-product-card/search-product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    MainLayoutComponent,
    HomePageComponent,
    SearchComponent,
    DetailComponent,
    ProductCardComponent,
    SupportComponent,
    FooterComponent,
    EditUserComponent,
    CartsComponent,
    CartComponent,
    AdminLayoutComponent,
    ListUsersComponent,
    AdminLoginComponent,
    EditUserByAdminComponent,
    EditInformationComponent,
    ListProductsComponent,
    EditProductComponent,
    AdminHeaderComponent,
    SearchProductCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
