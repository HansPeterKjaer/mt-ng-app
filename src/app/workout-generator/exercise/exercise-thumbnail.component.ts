import { Component, OnInit, Input } from '@angular/core';

import { Exercise } from 'app/models/exercise';
import { StateService } from '../state.service';

@Component({
  selector: 'exercise-thumbnail',
  templateUrl: 'exercise-thumbnail.component.html'
})

export class ExerciseThumbnailComponent implements OnInit {
  
  @Input()
  exercise: Exercise = null;

  LoadExerciseById(id: number) {
  	console.log(`load exercise {id}`);
  }

  ngOnInit() {
  	
  }
}
