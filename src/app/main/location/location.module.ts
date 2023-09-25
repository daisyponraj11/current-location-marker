import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CurrentLocationComponent } from '../location/current-location/current-location.component';
import { GoogleMapsModule } from '@angular/google-maps';

const routes = [
  {
    path: 'current',
    component: CurrentLocationComponent
}
];

@NgModule({
  declarations: [CurrentLocationComponent
   ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,GoogleMapsModule
  ],
  exports: [
    CurrentLocationComponent, 
  ],
})
export class LocationModule { }
