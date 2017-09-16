import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Workout } from 'app/models/workout';
import { Exercise } from 'app/models/exercise';
import { WorkoutGeneratorService } from 'app/shared/workout-generator.service';


@Component({
  selector: 'workout-spot',
  templateUrl: 'workout-spot.component.html'
})

export class WorkoutSpotComponent implements OnInit {
  workout: Workout;

  @Input()
  workoutId: number;
  
  constructor(private workoutGeneratorService: WorkoutGeneratorService) { }

  ngOnInit() {
    this.workoutGeneratorService.getWorkout(this.workoutId).then(wo => {
        if (wo){
          this.workout = wo;
        }
        else{
          console.log('No Workout found!');
        }
        
      })
      .catch(reason => {console.log(reason)});
  }
}
