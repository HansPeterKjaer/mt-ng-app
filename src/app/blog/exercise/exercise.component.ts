import { Component, OnInit, Input } from '@angular/core';

import { Exercise } from 'app/models/exercise';
import { StateService } from '../state.service';

@Component({
	selector: 'exercise',
	templateUrl: 'exercise.component.html'
})

export class ExerciseComponent implements OnInit {
	exercise: Exercise = null;
	currentIndex: number = 0;
	exerciseTimer;

	constructor(private stateService: StateService) { 
		stateService.exercise$.subscribe(ex => this.initExercise(ex));
	}

	initExercise(ex){
		this.exercise = ex;
		this.currentIndex = 0;
	}

	play(event) {
		if (this.exerciseTimer) {
			clearInterval(this.exerciseTimer);
			this.exerciseTimer = null;
		}
		else {
			this.exerciseTimer = setInterval(()=>this.next(null), 1000);
		}
	}

	pause(event){
		clearInterval(this.exerciseTimer);
	}

	stop(event){
		clearInterval(this.exerciseTimer);
		this.currentIndex = 0;
	}

	next(event){
		console.log(this.exercise.images.length);
		this.currentIndex = (this.currentIndex + 1 >= this.exercise.images.length) ? 0 : this.currentIndex + 1; 
	}

	prev(event){
		this.currentIndex = (this.currentIndex-- <= 1) ? this.exercise.images.length - 1 : this.currentIndex - 1;
	}

	ngOnInit() {
		console.log(this.exercise);
	}
}
