import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr'
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { ReplaceComma } from './shared/pipes/replace-comma.pipe';
import { StarRatingComponent } from './shared/pipes/star-rating/star-rating.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { ReactiveFormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

registerLocaleData(localeFr, 'fr')

@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    ReplaceComma,
    StarRatingComponent,
    HomeComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //pour le ngModel dans app.component
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'home', component: HomeComponent},
      {path:'', redirectTo: 'home', pathMatch:'full'},
      {path:'domaines', component: HotelListComponent},
      {path:'inscription', component: InscriptionComponent},
      {path:'all', redirectTo: 'home', pathMatch:'full'},
      {path:'**', redirectTo: 'home', pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule)