import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { HomePageComponent } from './pages/main-layout/home-page/home-page.component';
import { SearchComponent } from './pages/main-layout/search/search.component';
import { DetailComponent } from './pages/main-layout/detail/detail.component';
import { SupportComponent } from './pages/main-layout/support/support.component';
import { EditUserComponent } from './pages/main-layout/edit-user/edit-user.component';
import { CartsComponent } from './pages/main-layout/carts/carts.component';
import { AdminLayoutComponent } from './pages/admin-layout/admin-layout.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { ListUsersComponent } from './pages/admin-layout/list-users/list-users.component';
import { EditUserComponent as EditUserByAdminComponent } from './pages/admin-layout/edit-user/edit-user.component';
import { EditInformationComponent } from './pages/admin-layout/edit-information/edit-information.component';
import { ListProductsComponent } from './pages/admin-layout/list-products/list-products.component';
import { EditProductComponent } from './pages/admin-layout/edit-product/edit-product.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix', //default
    redirectTo: 'home',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin/login',
    component: AdminLoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'home',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'search/:query', component: SearchComponent },
      { path: 'detail/:id', component: DetailComponent },
      { path: 'support', component: SupportComponent },
      { path: 'edit-user', component: EditUserComponent },
      { path: 'carts', component: CartsComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'list-users', component: ListUsersComponent },
      { path: 'edit-user/:id', component: EditUserByAdminComponent },
      { path: 'edit-information', component: EditInformationComponent },
      { path: 'list-products', component: ListProductsComponent },
      { path: 'edit-product/:id', component: EditProductComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
