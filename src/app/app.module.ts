import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
        ProductCardComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
