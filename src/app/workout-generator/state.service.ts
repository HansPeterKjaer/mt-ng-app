import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

import { Workout } from 'app/models/workout';
import { Exercise } from 'app/models/exercise';

@Injectable()
export class StateService {
  // Observable string sources
  private workout = new Subject<Workout>();
  private exercise = new Subject<Exercise>();

  // Observable string streams
  workout$ = this.workout.asObservable();
  exercise$ = this.exercise.asObservable();
  
  // Service message commands
  addWorkout(w: Workout) {
    this.workout.next(w);
  }
  addExercise(e: Exercise) {
    this.exercise.next(e);
  }
}
