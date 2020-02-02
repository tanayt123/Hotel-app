import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { BarsComponent } from './food-beverage/bars/bars.component';
import { RestaurantComponent } from './food-beverage/restaurant/restaurant.component';
import { ExcursionsComponent } from './lifestyle/excursions/excursions.component';
import { ExperiencesComponent } from './lifestyle/experiences/experiences.component';
import { ResortsActivitiesComponent } from './lifestyle/resorts-activities/resorts-activities.component';
import { WellnessAndSpaComponent } from './lifestyle/wellness-and-spa/wellness-and-spa.component';
import { RoomsComponent } from './accomodation/rooms/rooms.component';
import { AuthComponent } from './auth/auth.component';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { OffersComponent } from './offers/offers.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { ThaiWeddingsComponent } from './weddings/thai-weddings/thai-weddings.component';
import { WesternWeddingsComponent } from './weddings/western-weddings/western-weddings.component';


const routes: Routes = [
  {path : 'accomodation', component: AccomodationComponent},
  {path : 'sign-in', component: SignInComponent},
  {path : 'sign-up', component: SignUpComponent},
  {path : 'celebrations', component: CelebrationsComponent},
  {path : 'bars', component: BarsComponent},
  {path : 'restaurant', component: RestaurantComponent},
  {path : 'excursions', component: ExcursionsComponent},
  {path : 'experiences', component: ExperiencesComponent},
  {path : 'accomodation', component: AccomodationComponent},
  {path : 'resorts', component: ResortsActivitiesComponent},
  {path : 'wellness', component: WellnessAndSpaComponent},
  {path : 'rooms', component: RoomsComponent},
  {path : 'auth', component: AuthComponent},
  {path : 'food-beverage', component: FoodBeverageComponent},
  {path : 'lifestyle', component: LifestyleComponent},
  {path : 'offers', component: OffersComponent},
  {path : 'weddings', component: WeddingsComponent},
  {path : 'thai-weddings', component: ThaiWeddingsComponent},
  {path : 'western-weddings', component: WesternWeddingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
