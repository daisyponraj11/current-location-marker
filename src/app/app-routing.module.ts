import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/location/current', pathMatch: 'full' },
  {
    path: 'location',
    loadChildren: () =>
        import('./main/location/location.module').then((m) => m.LocationModule),
},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
