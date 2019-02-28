import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SteppersComponent } from './components/steppers/steppers.component'

const routes: Routes = [
  { path : '' , component : HomeComponent },
  { path : 'stepper' , component : SteppersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
