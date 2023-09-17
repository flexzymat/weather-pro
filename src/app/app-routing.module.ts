import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {path: 'weather',
   component: WeatherComponent,
  //  children: [
  //   {path: '',
  //  redirectTo: '/weather-details',
  //   pathMatch: 'full'},
  //   {path: 'weather-details',
  //   component: WeatherDetailsComponent},
  //  ]
},
{path: 'weather-details/:id',
 component: WeatherDetailsComponent},

  {path: '',
   redirectTo: '/weather',
    pathMatch: 'full'},

  {path: '**',
   component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
