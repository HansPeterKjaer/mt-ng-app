import { Component, OnInit, Input } from '@angular/core';

import { Exercise } from 'app/models/exercise';
import { Workout } from 'app/models/workout';
import { StateService } from 'app/workout-generator/state.service';

@Component({
	selector: 'exercise',
	templateUrl: 'exercise.component.html'
})

export class ExerciseComponent implements OnInit {
	exercise: Exercise = null;
	nextExercise: Exercise = null;
	workout: Workout = null;
	currentIndex: number = 0;
	exerciseTimer;
	isPlaying: boolean = false;

	constructor(private stateService: StateService) { 
		stateService.exercise$.subscribe(ex => this.initExercise(ex));
		stateService.workout$.subscribe(wo => this.workout = wo);
	}

	initExercise(ex){
		this.exercise = ex;
		let index = this.workout.exercises.findIndex(elm => elm.id = ex.id);
		this.nextExercise = (index+1 < this.workout.exercises.length) ? this.workout.exercises[index] : this.workout.exercises[0];
		this.currentIndex = 0;
	}

	play(event) {
		if (this.exerciseTimer) {
			this.pause(null);
		}
		else {
			this.isPlaying = true;
			this.exerciseTimer = setInterval(()=>this.next(null), 1000);
		}
	}

	pause(event){
		this.isPlaying = false;
		clearInterval(this.exerciseTimer);
	}

	stop(event){
		this.pause(null);
		this.currentIndex = 0;
	}

	next(event){
		this.pause(null);
		this.currentIndex = (this.currentIndex + 1 >= this.exercise.images.length) ? 0 : this.currentIndex + 1; 
	}

	prev(event){
		this.pause(null);
		this.currentIndex = (this.currentIndex-- <= 1) ? this.exercise.images.length - 1 : this.currentIndex - 1;
	}

	ngOnInit() {
		console.log(this.exercise);
	}
}
