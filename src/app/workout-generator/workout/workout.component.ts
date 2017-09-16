import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { Workout } from 'app/models/workout';
import { Exercise } from 'app/models/exercise';
import { WorkoutGeneratorService } from 'app/shared/workout-generator.service';
import { StateService } from '../state.service';

@Component({
  selector: 'workout',
  templateUrl: 'workout.component.html'
})

export class WorkoutComponent implements OnInit {
  workout: Workout;
  
  constructor(private stateService: StateService, private workoutGeneratorService: WorkoutGeneratorService, private route: ActivatedRoute) { 
    stateService.workout$.subscribe(wo => { this.workout = wo; console.log(this.workout);});
  }

  selectExercise(ex: Exercise): void {
    this.stateService.addExercise(ex);
  }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'] || null;

    if(id) {
      if (!this.workout || this.workout.id != id )
        this.workoutGeneratorService.getWorkout(id).then(workout => this.stateService.addWorkout(workout));
    }

    console.log('workout:' + id);
  }

}
