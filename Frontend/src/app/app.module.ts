import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { RouterModule, Routes } from '@angular/router';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';



const appRoutes: Routes = [

  // Default Url path loads the template view associated with this component
  {path: '', component: PropertyListComponent},
  {path: 'rent-property', component: PropertyListComponent},
  {path: 'add-property', component: AddPropertyComponent},
  {path: 'property-detail/:id', component: PropertyDetailComponent},

  // Wrong url loads the template iew associated with this component
  {path: '**', component: PropertyListComponent}
]


@NgModule({
  declarations: [

    AppComponent,
    NavBarComponent,
    PropertyListComponent,
    PropertyCardComponent,
    AddPropertyComponent,
    PropertyDetailComponent


   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [

    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
