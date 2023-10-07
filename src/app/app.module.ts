import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './components/users/home/slider/slider.component';
import { HomeComponent } from './components/users/home/home.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BookBarComponent } from './components/users/home/book-bar/book-bar.component';
import { PopularCarsComponent } from './components/users/home/popular-cars/popular-cars.component';

import { HttpClientModule } from '@angular/common/http';

import { AuthService } from './service/auth-service';
import { VehicleService } from './service/vehicle-service';
import { VehicleCardComponent } from './components/users/common/vehicle-card/vehicle-card.component';
import { SectionHeaderComponent } from './components/users/common/section-header/section-header.component';
import { SpacerComponent } from './components/users/common/spacer/spacer.component';
import { UserTemplateComponent } from './templates/user-template/user-template.component';
import { AdminTemplateComponent } from './templates/admin-template/admin-template.component';
import { TopBarComponent } from './components/users/common/header/top-bar/top-bar.component';
import { UserMenuComponent } from './components/users/common/header/user-menu/user-menu.component';
import { SocialBarComponent } from './components/users/common/header/social-bar/social-bar.component';
import { MainNavbarComponent } from './components/users/common/header/main-navbar/main-navbar.component';
import { ContactBarComponent } from './components/users/common/header/contact-bar/contact-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HomeComponent,
    BookBarComponent,
    PopularCarsComponent,
    VehicleCardComponent,
    SectionHeaderComponent,
    SpacerComponent,
    UserTemplateComponent,
    AdminTemplateComponent,
    TopBarComponent,
    UserMenuComponent,
    SocialBarComponent,
    MainNavbarComponent,
    ContactBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CarouselModule.forRoot(),
    HttpClientModule
  ],
  providers: [AuthService, VehicleService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class AppModule { }
