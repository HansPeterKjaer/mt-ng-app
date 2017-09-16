import { Component, OnInit, Input } from '@angular/core';

import { Exercise } from 'app/models/exercise';
import { WorkoutGeneratorService } from 'app/shared/workout-generator.service';
//import { StateService } from '../state.service';

@Component({
  selector: 'exercise-thumbnail',
  templateUrl: 'exercise-thumbnail.component.html'
})
export class ExerciseThumbnailComponent implements OnInit {
  
  @Input()
  exerciseId: number = null;
  @Input()
  exercise: Exercise = null;

  constructor(private workoutGeneratorService: WorkoutGeneratorService){}

  LoadExerciseById(id: number) {
  	console.log(`load exercise {id}`);
  }

  ngOnInit() {
  	console.log(this.exerciseId);
    this.workoutGeneratorService.getExercise(this.exerciseId) // better way to pass id to ngoninit??
      .then(ex => {
        if (ex){
          this.exercise = ex;
        }
        else{
          console.log('No Exercise found!');
        }
      })
      .catch(reason => {console.log(reason)});
  }
}
