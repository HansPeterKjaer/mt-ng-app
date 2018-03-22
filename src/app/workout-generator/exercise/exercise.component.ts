import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { Exercise } from 'app/models/exercise';
import { Workout } from 'app/models/workout';
import { StateService } from 'app/workout-generator/state.service';
import { TimerComponent }  from './timer.component';

@Component({
	selector: 'exercise',
	templateUrl: 'exercise.component.html'
})

export class ExerciseComponent implements OnInit {
	@ViewChild(TimerComponent) private timerComponent: TimerComponent;

	exercise: Exercise = null;
	nextExercise: Exercise = null;
	workout: Workout = null;
	currentIndex: number = 0;
	exerciseTimer;
	isPlaying: boolean = false;
	activeTab: number = 0;

	constructor(private stateService: StateService) { 
		stateService.exercise$.subscribe(ex => this.initExercise(ex));
		stateService.workout$.subscribe(wo => this.workout = wo);
	}

	private initExercise(ex){
		this.exercise = ex;
		let index = this.workout.exercises.findIndex(elm => elm.id == ex.id);
		this.nextExercise = (index+1 >= this.workout.exercises.length) ? this.workout.exercises[0] : this.workout.exercises[index+1];
		this.currentIndex = 0;
		if(this.timerComponent) this.timerComponent.reset();
	}

	selectExercise(ex: Exercise): void {
	    this.stateService.addExercise(ex);
	}

	play(event) {
		if (this.exerciseTimer) {
			this.pause(null);
		}
		else {
			this.isPlaying = true;
			this.exerciseTimer = setInterval(() => this.currentIndex = this.nextIndex(), 1000);
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
		this.currentIndex = this.nextIndex();
	}

	private nextIndex(): number{
		return (this.currentIndex + 1 >= this.exercise.images.length) ? 0 : this.currentIndex + 1; 
	}

	prev(event){
		this.pause(null);
		this.currentIndex = (this.currentIndex-- <= 1) ? this.exercise.images.length - 1 : this.currentIndex - 1;
	}

	ngOnInit() {
	}
}
