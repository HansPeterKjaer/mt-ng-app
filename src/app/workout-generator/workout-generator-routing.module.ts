import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkoutGeneratorComponent } from './workout-generator.component';

const workoutGeneratorRoutes: Routes = [
  {
    path: 'generator/:id',
    component: WorkoutGeneratorComponent,
  },
  {
    path: 'generator',
    component: WorkoutGeneratorComponent,
  },
  {
    path: '',
    component: WorkoutGeneratorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(workoutGeneratorRoutes)],
  exports: [RouterModule],
  providers: []
})

export class WorkoutGeneratorRoutingModule { }