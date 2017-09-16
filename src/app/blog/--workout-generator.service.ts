import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Workout } from 'app/models/workout';
import { Exercise } from 'app/models/exercise';
import { ExerciseImage } from 'app/models/exercise-image';
import { Protocol } from 'app/models/protocol';
//import { WORKOUT } from './mock-workout';

@Injectable()
export class WorkoutGeneratorService {
	private apiUrl = '/api'; 
	
	constructor(private http: Http) { }

	getWorkout(id: number): Promise<Workout> {
		let url = `${this.apiUrl}/api/workout?id=${id}`;
		return this.http.get(url)
			.toPromise()
			.then(response => { 
				let d = response.json();

				if (d.success){
					return this.mapJsonToWorkout(d.data);	
				}                                   
				else {
					throw 'error -no workout found';
				}
			})
			.catch(this.handleError);
	}

	getExercise(id: number): Promise<Exercise> {
		let url = `${this.apiUrl}/api/exercise?id=${id}`;
		return this.http.get(url)
			.toPromise()
			.then(response => { 
				let d = response.json();

				if (d.success){
					return this.mapJsonToExercise(d.data);	
				}                                   
				else {
					throw 'error -no exercise found';
				}
			})
			.catch(this.handleError);
	}

	searchWorkout(c: number, f: number, t: number, cid: number): Promise<Workout> {
		const url = `${this.apiUrl}/api/searchWorkout?diff=${c}&focus=${f}&time=${t}&c_wid=${cid}`;
		return this.http.get(url)
			.toPromise()
			.then((response) => {
			 	let d = response.json(); 
			 	console.log(d); 
				if (d.success){
			 		return this.mapJsonToWorkout(d.data);
			 	}
			 	else {
			 		return null;
			 	}
			})
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		//console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

	private mapJsonToWorkout(json): Workout{
		var e : Array<Exercise> = [];
		var p = new Protocol;
		
		p.id = json.protocol.id;
		p.descr = json.protocol.descr;
		p.name = json.protocol.name;

		for(let item of json.exercises){
			e.push(this.mapJsonToExercise(item));
		}

		let w = new Workout;
		w.id = +json.id, w.name = json.name, w.diff = +json.diff, w.focus = +json.focus, w.protocol = p, w.exercises = e;

		return w;
	}

	private mapJsonToExercise(json): Exercise{
		let ex = new Exercise;
		let images : Array<ExerciseImage> = [];
		ex.id = +json.id; 
		ex.name = json.name;
		ex.diff = json.diff;
		ex.focus = json.focus;
		ex.description = json.descr;

		for (let jsonImg of json.images.items) {
			let img = new ExerciseImage;
			img.name = jsonImg.imageName;
			img.id = jsonImg.id;
			images.push(img);
		}
		ex.images = images;

		return ex;
	}

}